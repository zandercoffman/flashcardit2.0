"use client"

import PictureMatch from "../modes/PictureMatch";
import SpeakIt from "../modes/SpeakIt";
import QuizMode from "./QuizMode";
import StudyMode from "./StudyMode";

type mode = "normal" | "quiz" | "speakit" | "picturematch" | null;

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

export default function MainSet({
    mode,
    currentSet,
}: {
    mode: mode,
    currentSet: Set,
}) {
    switch (mode) {
        case "normal":
            return <StudyMode currentSet={currentSet}/>
        case "quiz":
            return <QuizMode currentSet={currentSet}/>
        case "speakit":
            return <SpeakIt CurrentSet={currentSet}/>
        case "picturematch":
            return <PictureMatch currentSet={currentSet}/>

    }

    return <>
        <p>Something went wrong</p>
    </>
}