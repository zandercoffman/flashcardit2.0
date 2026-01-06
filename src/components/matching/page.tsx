"use client"
import { Set } from "@/lib/AllSets"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Dices, LayoutGrid, LayoutPanelTop, Scroll, Shuffle, SquareStack } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"
import { AnimatedBeam } from "../ui/animated-beam"
import { BlurFade } from "../ui/blur-fade"
import { cn } from "@/lib/utils"
import { print } from "@/lib/local"

export default function Matching({
    currentSet
}: {
    currentSet: Set
}) {


    const [chosenWord, setChosenWord] = useState<number>(0)
    const randomizedWordsRef = useRef<string[][] | null>(null)

    if (!randomizedWordsRef.current) {
        randomizedWordsRef.current = [...currentSet.vocab]
            .map(pair => [...pair]) // deep copy
            .sort(() => Math.random() - 0.5)
    }

    const randomizedWords = randomizedWordsRef.current

    const [leftSideRefs, setLeftSideRefs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => {
        return currentSet.vocab.map(() => React.createRef<HTMLDivElement>())
    })

    const [rightSideRefs, setRightSideRefs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => {
        return currentSet.vocab.map(() => React.createRef<HTMLDivElement>())
    })

    const [currentChosenRef, setCurrentChosenRef] = useState<React.RefObject<HTMLDivElement | null> | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [setChosenNumber, setSetChosenNumber] = useState<number>(0)

    const [selectedRightSideTiles, setSelectedRightSideTiles] = useState<boolean[]>(new Array(currentSet.vocab.length).fill(false));

    // START CHOSEN WORDS

    type Tile = {
        word: string
        pairId: number
        selected: boolean
        matched: boolean
    }

    const [shuffleKey, setShuffleKey] = useState(0)
    const shuffledPairsRef = useRef<string[][] | null>(null)


    if (!shuffledPairsRef.current) {
        shuffledPairsRef.current = [...currentSet.vocab].sort(
            () => Math.random() - 0.5
        )
    }

    const makeTiles = (start: number): Tile[] => {
        if (!shuffledPairsRef.current) return []

        return shuffledPairsRef.current
            .slice(start, start + 8) // random pairs now
            .flatMap(([a, b], pairId) => [
                { word: a, pairId, selected: false, matched: false },
                { word: b, pairId, selected: false, matched: false },
            ])
            .sort(() => Math.random() - 0.5)
    }


    const randomizeTiles = () => {
        shuffledPairsRef.current = [...currentSet.vocab].sort(
            () => Math.random() - 0.5
        )
        setPage(0)
        setTiles(makeTiles(0))
    }




    const [page, setPage] = useState(0)



    const [tiles, setTiles] = useState<Tile[]>(() => makeTiles(0))

    const handleTileClick = (index: number) => {
        setTiles(prev => {
            const selected = prev.filter(t => t.selected && !t.matched)

            if (prev[index].matched || selected.length === 2) return prev

            let next = prev.map((t, i) =>
                i === index ? { ...t, selected: true } : t
            )

            const nowSelected = next.filter(t => t.selected && !t.matched)

            if (nowSelected.length === 2) {
                const [a, b] = nowSelected

                if (a.pairId === b.pairId) {
                    next = next.map(t =>
                        t.selected
                            ? { ...t, matched: true }
                            : t
                    )
                } else {
                    setTimeout(() => {
                        setTiles(curr =>
                            curr.map(t =>
                                t.matched ? t : { ...t, selected: false }
                            )
                        )
                    }, 700)
                }
            }

            return next
        })
    }


    useEffect(() => {
        if (!tiles.length) return

        const allMatched = tiles.every(t => t.matched)
        if (!allMatched) return

        const timeout = setTimeout(() => {
            const nextPage = page + 1
            const nextStart = nextPage * 8

            if (nextStart < currentSet.vocab.length) {
                setPage(nextPage)
                setTiles(makeTiles(nextStart))
            }
        }, 800) // ← SHOW GREEN FIRST

        return () => clearTimeout(timeout)
    }, [tiles, page, currentSet.vocab])



    // END CHOSEN WORDS

    // START CYCLE THROUGH WORD SELECTED FOR FULL

    useEffect(() => {
        // Get the vocab pair for the current chosen left word
        let curPair = currentSet.vocab[chosenWord];
        if (currentMode === "full" && curPair[1] === randomizedWords[setChosenNumber][1]) {
            // If they match, mark the right tile as selected
            setSelectedRightSideTiles(prev => {
                const next = [...prev]
                next[setChosenNumber] = true
                return next
            })
            setChosenWord((prev) => {
                let next = prev + 1
                if (next >= randomizedWords.length) {
                    next = 0 // Loop back to start if at the end
                }
                return next
            });
        }

        print(`Hi! I am the useEffect. The chosen left word is ${currentSet.vocab[chosenWord][0]} and the right word is ${randomizedWords[setChosenNumber][1]}`);

    }, [setChosenNumber, chosenWord, currentSet.vocab, randomizedWords]);



    // END CYCLE THROUGH WORD SELECTED FOR FULL

    const FourByFour = (
        <>
            {tiles.map((tile, i) => (
                <BlurFade delay={0.05 * i} key={i}>
                    <motion.div
                        onClick={() => handleTileClick(i)}
                        className={cn(
                            "flex items-center h-full bg-muted/50 justify-center rounded-2xl border p-4 text-center font-medium cursor-pointer",
                            tile.matched && "bg-green-500/30 border-green-500",
                            tile.selected && !tile.matched && "bg-blue-500/30 border-blue-500"
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {tile.word}
                    </motion.div>
                </BlurFade>
            ))}
        </>
    )


    const Full = <section className="flex flex-row gap-2 w-full h-full p-4">
        <section className="w-[20%] my-auto flex flex-col gap-2 items-center justify-center" >
            {
                currentSet.vocab.map(([a, _], i) => (
                    i === chosenWord - 1 || i === chosenWord + 1 ? <motion.div
                        className="z-30 flex h-18 scale-[80%] bg-muted/10 backdrop-blur border border-[2px] text-gray-500 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium"
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
                        key={i}
                    >
                        {a}
                    </motion.div> : i === chosenWord ? <motion.div
                        className="z-30 flex h-20 min-w-[140px] items-center justify-center rounded-xl bg-muted/50 backdrop-blur border border-[2px] p-4 text-center font-medium cursor-pointer"
                        onClick={() => setChosenWord(i)}
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
                        key={i}
                    >
                        {a}
                    </motion.div> : <motion.div
                        className="z-30 flex h-18 hidden scale-[80%] bg-muted/10 backdrop-blur border border-[2px] text-gray-500 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium"
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
                        key={i}
                        initial={{ y: 200, scale: 0.9 }}
                        animate={{ y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                        {a}
                    </motion.div>
                ))
            }
        </section>
        {/**
         * {
            currentChosenRef && currentChosenRef.current && <AnimatedBeam className="translate-y-[80px]" containerRef={containerRef} fromRef={leftSideRefs[chosenWord]} toRef={rightSideRefs[chosenWord]} />
        }
         */}
        <ScrollArea className="h-full w-[80%] rounded-md">
            <div className="grid grid-cols-2 gap-4 p-4 w-[70%] ml-auto mr-auto">
                {randomizedWords.map(([, b], i) => (
                    <BlurFade delay={0.1 + 0.1 * i} key={i}>
                        <motion.div
                            className={`${selectedRightSideTiles[i]
                                    ? "bg-green-500/30 border-green-500"
                                    : "bg-muted/50"
                                } z-30 w-[230px] h-[90px] mx-auto flex items-center justify-center rounded-3xl backdrop-blur border-2 p-4 text-center font-medium cursor-pointer`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            ref={rightSideRefs[i]}
                            onClick={() => {
                                print(
                                    `My right chosen index is ${i}. The left chosen index is ${chosenWord}. The right word is ${b} and the left word is ${currentSet.vocab[chosenWord][0]}.`
                                );
                                setCurrentChosenRef(rightSideRefs[i]);
                                setSetChosenNumber(i);
                            }}
                        >
                            {b.substring(0, 71)}
                        </motion.div>
                    </BlurFade>
                ))}
            </div>
        </ScrollArea>



    </section>

    /**
     * <section className="flex flex-row gap-18 w-full">
        <motion.div
            className="z-30 flex items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onWheel={(event) => event.preventDefault()}
            onTouchMove={(event) => event.preventDefault()}
            onScroll={(event) => event.preventDefault()}
            onScrollCapture={(event) => event.preventDefault()}
        >
            {currentSet.vocab[chosenWord][0]}
        </motion.div>
        <ScrollArea
            className="h-full rounded-md"
            onWheel={(event) => event.preventDefault()}
            onTouchMove={(event) => event.preventDefault()}
            onScroll={(event) => event.preventDefault()}
            onScrollCapture={(event) => event.preventDefault()}
        >
            <section className="w-11/12 mx-auto inset-0 mt-4 mb-8">
                <div className="grid grid-cols-[minmax(160px,220px)_1fr] gap-18 items-start">


                    <div className="flex flex-col gap-4">
                        {currentSet.vocab.map(([, b], i) => (
                            <motion.div
                                key={i}
                                className="z-30 flex h-20 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onWheel={(event) => event.preventDefault()}
                                onTouchMove={(event) => event.preventDefault()}
                                onScroll={(event) => event.preventDefault()}
                                onScrollCapture={(event) => event.preventDefault()}
                            >
                                {b}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </ScrollArea>
    </section>
     */

    const [currentMode, setCurrentMode] = useState<"4x4" | "full">("4x4")


    return <AnimatePresence mode="popLayout">
        <section className="w-full h-[78vh] flex flex-col gap-4 justify-between p-2">
            <section className="w-full flex-1 overflow-hidden" ref={containerRef}>
                {currentMode === "4x4" ? (
                    <div className="grid p-4 w-full h-full grid-cols-4 grid-rows-4 gap-4">
                        {FourByFour}
                    </div>
                ) : (
                    Full
                )}
            </section>
            <section className="flex flex-row w-[98%] justify-between h-min flex-row gap-2">
                <Select value={currentMode} onValueChange={(value) => setCurrentMode(value as "4x4" | "full")}>
                    <SelectTrigger className="cursor-pointer text-md !bg-transparent !border-none">
                        <SelectValue placeholder={<div className="flex text-md flex-row  gap-2 items-center justify-start">
                            <LayoutGrid className="size-8" />
                            <span>4 x 4</span>
                        </div>} className="text-md" />
                    </SelectTrigger>
                    <SelectContent className="justify-start items-left rounded-xl !bg-secondary/50 backdrop-blur border border-secondary/30">
                        <SelectItem value="4x4" className="flex text-md flex-col gap-2 items-left justify-start">
                            <LayoutGrid className="size-8" />
                            <span>4 x 4</span>
                        </SelectItem>
                        <SelectItem value="full" className="flex text-md flex-col gap-2 items-left justify-start">
                            <SquareStack className="size-8" />
                            <span>Quiz Mode</span>
                        </SelectItem>
                    </SelectContent>
                </Select>
                {
                    currentMode === "4x4" && <Button onClick={randomizeTiles} variant={"ghost"}><Dices /> Randomize</Button>
                }
            </section>
        </section>


    </AnimatePresence>
} 1