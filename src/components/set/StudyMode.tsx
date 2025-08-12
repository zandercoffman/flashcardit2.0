import FlashcardHolder from "./FlashcardHolder";

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

export default function StudyMode({
    currentSet,
}: {
    currentSet: Set,
}) {
    return <>
        <FlashcardHolder set={currentSet} />
    </>
}