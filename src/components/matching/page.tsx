"use client"
import { Set } from "@/lib/AllSets"

import React, { useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LayoutGrid, LayoutPanelTop, Scroll, SquareStack } from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"
import { AnimatedBeam } from "../ui/animated-beam"
import { BlurFade } from "../ui/blur-fade"

export default function Matching({
    currentSet
}: {
    currentSet: Set
}) {

    const [chosenWord, setChosenWord] = useState<number>(1)

    const [leftSideRefs, setLeftSideRefs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => {
        return currentSet.vocab.map(() => React.createRef<HTMLDivElement>())
    })

    const [rightSideRefs, setRightSideRefs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => {
        return currentSet.vocab.map(() => React.createRef<HTMLDivElement>())
    })

    const [currentChosenRef, setCurrentChosenRef] = useState<React.RefObject<HTMLDivElement | null> | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const shuffledWords = useMemo(() => {
        const flatWords = currentSet.vocab.flatMap(([a, b]) => [a, b])

        return flatWords
            .sort(() => Math.random() - 0.5)
            .slice(0, 16)
    }, [currentSet])

    const FourByFour = <>
        {shuffledWords.map((word, i) => (
            <BlurFade delay={0.1 + (0.1 * i)} key={i}>
                <motion.div
                    key={i}
                    className="flex h-full items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {word}
                </motion.div>
            </BlurFade>
        ))}
    </>

    const Full = <section className="flex flex-row gap-2 w-full h-full p-4">
        <section className="w-[20%] my-auto flex flex-col gap-2 items-center justify-center" >
            {
                currentSet.vocab.map(([a, _], i) => (
                    i === chosenWord - 1 || i === chosenWord + 1 ? <motion.div
                        className="z-30 flex h-18 scale-[80%] bg-muted/50 text-gray-500 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium"
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
                    >
                        {a}
                    </motion.div> : i === chosenWord ? <motion.div
                        className="z-30 flex h-20 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
                        onClick={() => setChosenWord(i)}
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
                    >
                        {a}
                    </motion.div> : <motion.div
                        className="z-30 flex h-18 hidden scale-[80%] bg-muted/50 text-gray-500 min-w-[140px] items-center justify-center rounded-xl bg-muted p-4 text-center font-medium"
                        layoutId={`leftword-${a}`}
                        ref={leftSideRefs[i]}
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
        <ScrollArea className="h-full w-[80%] flex flex-col gap-4 rounded-md" >
            {currentSet.vocab.map(([, b], i) => (
                <BlurFade delay={0.1 + (0.1 * i)} key={i}>
                    <motion.div
                        key={i}
                        className="z-30 my-2 mr-4 flex h-16 w-fit ml-auto items-center justify-center rounded-xl bg-muted p-4 text-center font-medium cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        ref={rightSideRefs[i]}
                        onClick={() => {
                            setCurrentChosenRef(rightSideRefs[i]);
                        }}
                    >
                        {b}
                    </motion.div>
                </BlurFade>

            ))}
        </ScrollArea>
        <Button onClick={() => setChosenWord(chosenWord + 1)}>Click</Button>

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
            <section className="flex flex-row justify-between h-min flex-row gap-2">
                <Select value={currentMode} onValueChange={(value) => setCurrentMode(value as "4x4" | "full")}>
                    <SelectTrigger className="cursor-pointer text-md !bg-transparent !border-none">
                        <SelectValue placeholder={<div className="flex text-md flex-row  gap-2 items-center justify-start">
                            <LayoutGrid className="size-8" />
                            <span>4 x 4</span>
                        </div>} className="text-md" />
                    </SelectTrigger>
                    <SelectContent className="justify-start items-left">
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
            </section>
        </section>


    </AnimatePresence>
} 1