import FlashcardHolder from "./FlashcardHolder";
import { mode } from "@/lib/AllSets";

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

export default function StudyMode({
    currentSet,
    setMode,
}: {
    currentSet: Set,
    setMode: (mode: mode) => void,
}) {
    return <>
    
    
        <FlashcardHolder set={currentSet} setMode={setMode} />
    </>
}