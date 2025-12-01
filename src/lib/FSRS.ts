import { FSRS, Rating } from "fsrs-algorithm";

/**
 * 
 * CHATGPT CODE FOR WHEN THIS IS ALL DONE:
 * import { useState } from "react";
import { StudyDayPlusReview } from "./FSRS";

const StudySession = ({ setId, vocabArray }: { setId: string; vocabArray: [string, string][] }) => {
  const todaySet = StudyDayPlusReview(setId, vocabArray);
  const todayCards = todaySet.todayCards;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userRatings, setUserRatings] = useState<string[]>([]);

  const currentCard = todayCards[currentIndex];

  const handleRating = (rating: "again" | "hard" | "good" | "easy") => {
    // store rating for current card
    setUserRatings(prev => [...prev, rating]);

    // move to next card or submit all ratings if done
    if (currentIndex + 1 < todayCards.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All cards rated, submit ratings to FSRS
      const updatedSet = StudyDayPlusReview(
        setId,
        vocabArray,
        25,
        5,
        [...userRatings, rating] // include last rating
      );

      console.log("All cards done for today!", updatedSet.todayCards);
      alert("Session complete! Check console for updated FSRS cards.");
    }
  };

  return (
    <div>
      <h2>{currentCard.front}</h2>
      <h3>{currentCard.back}</h3>

      <div>
        {["again", "hard", "good", "easy"].map(r => (
          <button key={r} onClick={() => handleRating(r as "again" | "hard" | "good" | "easy")}>
            {r}
          </button>
        ))}
      </div>

      <p>
        Card {currentIndex + 1} of {todayCards.length}
      </p>
    </div>
  );
};

export default StudySession;

 */
const localStorageKEY = "setsAndRatings"

// START types
type SetCardSet = [string, string];
interface Set {
    title: string;
    vocab: SetCardSet[];
}


type Card = { id: number; front: string; back: string; fsrsCard: ReturnType<FSRS["createEmptyCard"]> };
//END

// START storage types
type RatingString = "again" | "hard" | "good" | "easy";

interface CardRating {
    index: number;              // position in vocab
    rating: RatingString;       // last rating
    fsrsState?: ReturnType<FSRS["createEmptyCard"]>; // optional FSRS state (to reconstruct card)
}

interface StoredSet {
    id: string;                  // set ID
    cardsAndRatings: CardRating[];
}

export type LocalStorageData = StoredSet[];
//END

// helper: convert RatingString -> FSRS Rating
const translateStringToRating = (ratingString: RatingString): Rating => {
    switch (ratingString) {
        case "again": return Rating.Again;
        case "hard": return Rating.Hard;
        case "good": return Rating.Good;
        case "easy": return Rating.Easy;
    }
};

// ======= LOCALSTORAGE HELPERS =======

// Load all sets from localStorage
export const loadSetsFromStorage = (): LocalStorageData => {
    return JSON.parse(localStorage.getItem(localStorageKEY) || "[]");
};

// Save all sets to localStorage
export const saveSetsToStorage = (data: LocalStorageData) => {
    localStorage.setItem(localStorageKEY, JSON.stringify(data));
};

// Load a single set's progress
export const loadSetProgress = (setId: string): CardRating[] => {
    const data = loadSetsFromStorage();
    const set = data.find(s => s.id === setId);
    return set?.cardsAndRatings || [];
};

// Save a single set's progress
export const saveSetProgress = (setId: string, cardsAndRatings: CardRating[]) => {
    const data = loadSetsFromStorage();
    const existingIndex = data.findIndex(s => s.id === setId);
    if (existingIndex >= 0) {
        data[existingIndex].cardsAndRatings = cardsAndRatings;
    } else {
        data.push({ id: setId, cardsAndRatings });
    }
    saveSetsToStorage(data);
};

// ======= STUDY FUNCTION =======

export const StudyDayPlusReview = (
    setId: string,
    currentCardsToday: SetCardSet[],           // all cards in the set
    dailyLoad: number = 25,
    newCardsPerDay: number = 5,
    ratingsInput: RatingString[] = [],         // optional: user ratings for today
) => {
    const fsrs = new FSRS();
    const today = new Date();

    // Load previous progress from localStorage
    const savedRatings = loadSetProgress(setId);

    // Reconstruct studied cards with FSRS state
    const studiedCards: Card[] = savedRatings.map(r => {
        const [front, back] = currentCardsToday[r.index];
        const card = fsrs.createEmptyCard();
        if (r.fsrsState) {
            Object.assign(card, r.fsrsState); // restore FSRS state
        }
        return { id: r.index, front, back, fsrsCard: card };
    });

    // 1️⃣ pick due cards
    const dueCards = studiedCards.filter(c => c.fsrsCard.due <= today);

    // Limit daily review load
    const reviewCards = dueCards.slice(0, dailyLoad);

    // 2️⃣ add new cards if daily load allows
    const newCardsAdded: Card[] = [];
    let nextNewIndex = 0;
    while (
        reviewCards.length + newCardsAdded.length < dailyLoad &&
        nextNewIndex < currentCardsToday.length &&
        newCardsAdded.length < newCardsPerDay
    ) {
        // skip already studied cards
        if (studiedCards.some(c => c.id === nextNewIndex)) {
            nextNewIndex++;
            continue;
        }

        const [front, back] = currentCardsToday[nextNewIndex];
        newCardsAdded.push({
            id: nextNewIndex,
            front,
            back,
            fsrsCard: fsrs.createEmptyCard(),
        });
        nextNewIndex++;
    }

    const todayCards = [...reviewCards, ...newCardsAdded];

    // 3️⃣ Apply ratings to update FSRS scheduling
    todayCards.forEach((card, i) => {
        const ratingStr: RatingString = ratingsInput[i] ?? "good"; // default to good
        const rating = translateStringToRating(ratingStr);

        const schedulingOptions = fsrs.schedule(card.fsrsCard, today);
        switch (rating) {
            case Rating.Again:
                card.fsrsCard = schedulingOptions.again.card;
                break;
            case Rating.Hard:
                card.fsrsCard = schedulingOptions.hard.card;
                break;
            case Rating.Good:
                card.fsrsCard = schedulingOptions.good.card;
                break;
            case Rating.Easy:
                card.fsrsCard = schedulingOptions.easy.card;
                break;
        }

        // update lastRating and FSRS state
        savedRatings[card.id] = { index: card.id, rating: ratingStr, fsrsState: card.fsrsCard };
    });

    // 4️⃣ Save progress back to localStorage
    saveSetProgress(setId, savedRatings);

    return {
        todayCards,        // all cards to review today
        newCardsAdded,     // just the new cards
        updatedAllCards: [...studiedCards, ...newCardsAdded],
    };
};
