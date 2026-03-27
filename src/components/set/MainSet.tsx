'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PictureMatch from "../modes/PictureMatch";
import SpeakIt from "../modes/SpeakIt";
import QuizMode from "./QuizMode";
import StudyMode from "./StudyMode";
import MainBomba from "../bomba/MainBomba";
import StudyPlan from "../studyplan/StudyPlan";

import { AllSets, mode } from "@/lib/AllSets" 
import Matching from "../matching/page";
import AIChatPage from "../AIChat/page";
import ResourcesPage from "../resources/page";
import PracticeTestPage from "../listStuff/practiceTest/page";
import { AllCustomModes } from "@/lib/customModes/interface";

interface Set {
    title: string;
    vocab: [string, string][];
}

interface Flashcard {
  term: string;
  definition: string;
}


export default function MainSet({
    mode,
    currentSet,
    setMode,
    extra
}: {
    mode: mode,
    currentSet: Set,
    setMode: (mode: mode) => void,
    extra: {
        curStudyPathN: number,
        setCurStudyPathN: Dispatch<SetStateAction<number>>
    }
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
            return <StudyMode currentSet={currentSet} setMode={setMode}/>
        case "quiz":
            return <QuizMode currentSet={currentSet}/>
        case "speakit":
            return <SpeakIt CurrentSet={currentSet}/>
        case "picturematch":
            return <PictureMatch currentSet={currentSet}/>
        case "bomba":
            return <MainBomba currentSet={currentSet}/>
        case "studyplan":
            return <StudyPlan currentSet={currentSet} curStudyPathN={extra.curStudyPathN} setCurStudyPathN={extra.setCurStudyPathN} />
        case "matching":
            return <Matching currentSet={currentSet}/>
        case "aichat":
            return <AIChatPage currentSet={currentSet} />
        case "resources":
            return <ResourcesPage set={currentSet}/>
        case "practicetest":
            return <PracticeTestPage set={currentSet}/>
        case "custommode":
            return <CustomMode set={currentSet} />

    }

    return <>
        <p>Something went wrong</p>
    </>
}

function CustomMode({
    set
}: {
    set: Set
}) {

    const id = AllSets.find(s => s.set.title === set.title)?.id || "unknown-set";
    const foundMode = AllCustomModes.find(mode => mode.id === id);

    if (foundMode) {
        const Component = foundMode.component;
        return <Component />
    }

    return (<div>
        This is a custom mode for {set.title}
    </div>
    )
}