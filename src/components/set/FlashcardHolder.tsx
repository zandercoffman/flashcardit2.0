import { useEffect, useState } from "react";
import FlashCard from "./Flashcard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { CardStack } from "../aceternity/card-stack";
import NavigationMenuFlashcardSet from "./CardCountAndOInfo";




interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

export default function FlashcardHolder({
    set,
}: {
    set: Set,
}) {

    const [api, setApi] = useState<CarouselApi>()

    const [current, setCurrent] = useState(1)
    const [isFlipped, setIsFlippedS] = useState<boolean>(false);
    const [count, setCount] = useState(1)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const synth = window.speechSynthesis;
            const loadVoices = () => {
                const allVoices = synth.getVoices();
                if (allVoices.length > 0) {
                    let a = allVoices.filter((val) => val.name.toLowerCase().includes("google"));
                    setVoices(a);
                }
            };

            // Sometimes voices aren't loaded yet, so wait for event
            if (synth.getVoices().length === 0) {
                synth.onvoiceschanged = loadVoices;
            } else {
                loadVoices();
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const lStorage = sessionStorage.getItem("ttsEnabled") || "false";

            if (JSON.parse(lStorage) === true && voices.length > 0) {
                const voice1 = sessionStorage.getItem("Voice1") || "0";
                const voice2 = sessionStorage.getItem("Voice2") || "1";

                const voiceToChoose = isFlipped ? voice2 : voice1;

                const curVocab = set.vocab[current - 1];
                const chosenVocab = curVocab[isFlipped ? 1 : 0];

                console.log("ttsEnabled (raw):", lStorage);
                console.log("voice1:", voice1);
                console.log("voice2:", voice2);
                console.log("voiceToChoose (parsed):", voiceToChoose);
                console.log("current:", current);
                console.log("curVocab:", curVocab);
                console.log("chosenVocab:", chosenVocab);
                console.log("voices:", voices);
                console.log("selectedVoice:", voices.find((voice) => voice.lang.toLowerCase() == voiceToChoose.toLowerCase()));


                const utterance = new SpeechSynthesisUtterance(chosenVocab);
                utterance.voice = voices.find((voice) => voice.lang.toLowerCase() == voiceToChoose.toLowerCase()) || voices[0];
                window.speechSynthesis.speak(utterance);
            }

            setIsFlippedS(false);
        }
    }, [current, isFlipped, voices]);





    //<CardStack items={CARDS}/> 

    return <div className="mx-auto my-auto flex flex-col w-[80vw] lg:max-w-2xl relative p-4">
        <NavigationMenuFlashcardSet current={current} total={count} set={set}/>
        <div className="">

            <Carousel
                className="relative h-[100%] overflow-hidden z-[3]"
                setApi={setApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >

                <CarouselContent className="flex">
                    {
                        set.vocab.map((vocab: [string, string]) => {
                            return <>
                                <CarouselItem className="flex-shrink-0 w-full md:w-96 p-2">
                                    <FlashCard front={vocab[0]} back={vocab[1]} setIsFlippedS={setIsFlippedS} />
                                </CarouselItem>
                            </>
                        })
                    }

                </CarouselContent>
                <CarouselPrevious
                    className={"absolute left-0 top-32 lg:top-1/2 transform -translate-y-1/2"}
                />
                <CarouselNext
                    className={"absolute right-0 top-32 lg:top-1/2 transform -translate-y-1/2"}
                />
            </Carousel>

        </div>
    </div>
}