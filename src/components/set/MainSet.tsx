"use client"

import { useEffect, useState } from "react";
import PictureMatch from "../modes/PictureMatch";
import SpeakIt from "../modes/SpeakIt";
import QuizMode from "./QuizMode";
import StudyMode from "./StudyMode";
import MainBomba from "../bomba/MainBomba";
import StudyPlan from "../studyplan/StudyPlan";

type mode = "normal" | "quiz" | "speakit" | "picturematch" | "bomba" | "studyplan" | null;

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

interface Flashcard {
  term: string;
  definition: string;
}


export default function MainSet({
    mode,
    currentSet,
}: {
    mode: mode,
    currentSet: Set,
}) {
    const [bombaWords, setBombaWords] = useState<string[] | null>(null);

    useEffect(() => {
        document.title = currentSet.title || "Set";
    }, [currentSet])

    useEffect(() => {
        if (mode !== "bomba") {
            setBombaWords(null);
        }
    }, [mode]);

    const flashcards: Flashcard[] = currentSet.vocab.map(([term, definition]) => ({ term, definition }));

    switch (mode) {
        case "normal":
            return <StudyMode currentSet={currentSet}/>
        case "quiz":
            return <QuizMode currentSet={currentSet}/>
        case "speakit":
            return <SpeakIt CurrentSet={currentSet}/>
        case "picturematch":
            return <PictureMatch currentSet={currentSet}/>
        case "bomba":
            return <MainBomba currentSet={currentSet}/>
        case "studyplan":
            return <StudyPlan currentSet={currentSet}/>


    }

    return <>
        <p>Something went wrong</p>
    </>
}