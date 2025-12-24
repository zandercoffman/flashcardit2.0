import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Set } from "@/lib/AllSets"

type ChooseableOptions = [
    { option: string; correct: boolean },
    { option: string; correct: boolean },
    { option: string; correct: boolean },
    { option: string; correct: boolean }
];

export default function PictureMatch({ currentSet }: { currentSet: Set }) {
    const [src, setSrc] = useState<string | null>(
        "https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg"
    );
    const [chooseableOptions, setChooseableOptions] = useState<ChooseableOptions | null>(null);

    const [randomizedSet] = useState<Set>({
        title: currentSet.title,
        vocab: [...currentSet.vocab].sort(() => Math.random() - 0.5)
    });

    const [curCardIndex, setCurCardIndex] = useState<number>(0);
    const [curCard, setCurCard] = useState<[string, string]>(
        randomizedSet.vocab[0] || ["", ""]
    );

    const [selectedButtons, setSelectedButtons] = useState<
        [boolean | null, boolean | null, boolean | null, boolean | null]
    >([null, null, null, null]);

    useEffect(() => {
        const findImage = async (word: string) => {
            try {
                const response = await fetch(`/api/pexels?query=${encodeURIComponent(word)}`);
                if (!response.ok) throw new Error(`API error: ${response.status}`);
                const data = await response.json();
                setSrc(data.photos?.[0]?.src.original || null);
            } catch (error) {
                console.error("Error fetching image:", error);
                setSrc(null);
            }
        };
        
        const gottenCard = randomizedSet.vocab[curCardIndex];
        if (gottenCard) {
            setCurCard(gottenCard);
            setSrc(null); // Show loader
            findImage(gottenCard[1]);
        }
    }, [curCardIndex, randomizedSet.vocab]);

    useEffect(() => {
        if (curCardIndex >= randomizedSet.vocab.length) {
            return;
        }

        const gottenCard = randomizedSet.vocab[curCardIndex];
        if (!gottenCard) return;

        const rightOption = gottenCard[0];
        const incorrectAnswers = currentSet.vocab
            .filter((entry) => entry[0] !== rightOption)
            .map((entry) => entry[0]);

        const shuffledIncorrect = incorrectAnswers.sort(() => 0.5 - Math.random());
        const selectedIncorrectAns = shuffledIncorrect.slice(0, 3);
        const allAnswers = [rightOption, ...selectedIncorrectAns];

        const fullMapping: ChooseableOptions = allAnswers
            .map((answer) => ({
                option: answer,
                correct: answer === rightOption
            }))
            .sort(() => Math.random() - 0.5) as ChooseableOptions;

        setSelectedButtons([null, null, null, null]);
        setChooseableOptions(fullMapping);
    }, [curCard, curCardIndex, currentSet.vocab, randomizedSet.vocab]);

    return (
        <div className="relative w-full h-full flex flex-col items-center ">
            <div
                onClick={() => {
                    if (curCardIndex > 0) {
                        setCurCardIndex(curCardIndex - 1);
                    }
                }}
                className="cursor-pointer w-10 h-10 text-black bg-gray-200 rounded-full absolute top-1/2 left-4 -translate-y-1/2 flex justify-center items-center border-white"
            >
                <ArrowLeft />
            </div>

            <div
                onClick={() => {
                    if (curCardIndex < currentSet.vocab.length - 1) {
                        setCurCardIndex(curCardIndex + 1);
                    }
                }}
                className="cursor-pointer w-10 h-10 text-black bg-gray-200 rounded-full absolute top-1/2 right-4 -translate-y-1/2 flex justify-center items-center border-white"
            >
                <ArrowRight />
            </div>

            <img
                className={
                    (src ? "object-cover" : " ") +
                    " w-[65%] bg-gray-300 h-[45vh] rounded-lg shadow-xl"
                }
                src={src ? src : "/loader.svg"}
            />

            <h1 className="mt-6 scroll-m-20 text-center text-xl font-bold tracking-tight text-balance">
                What word could this image be related to?
            </h1>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-[90vw] md:w-[50vw] h-min mt-6 ">
                {chooseableOptions &&
                    chooseableOptions.map((option, index) => {
                        return (
                            <Button
                                key={index}
                                className="w-full text-white text-md cursor-pointer transition-all duration-200 hover:shadow-xl h-[9vh]"
                                onClick={() => {
                                    setSelectedButtons((prev) => {
                                        const newArr = [...prev] as [
                                            boolean | null,
                                            boolean | null,
                                            boolean | null,
                                            boolean | null
                                        ];
                                        if (newArr[index] === null) {
                                            newArr[index] = option.correct;
                                        }
                                        return newArr;
                                    });
                                }}
                                style={{
                                    backgroundColor:
                                        selectedButtons[index] === null
                                            ? "#000000"
                                            : selectedButtons[index]
                                                ? "#22c55e"
                                                : "#ef4444"
                                }}
                            >
                                {option.option}
                            </Button>
                        );
                    })}
            </div>
        </div>
    );
}
