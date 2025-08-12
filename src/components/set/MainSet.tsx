import StudyMode from "./StudyMode";

type mode = "normal" | "quiz" | null;

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
    }

    return <>
        <p>Something went wrong</p>
    </>
}