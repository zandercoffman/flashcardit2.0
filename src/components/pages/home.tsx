'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AllSets } from "@/lib/AllSets"
import { ArrowBigRight, Footprints, LandPlot, LayoutGrid, Pencil, Plus, Sparkles } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "../ui/button"
import HowToCreate from "./HowToCreate"
import VersionInfo from "./VersionInfo"
import WhatCanIDo from "./WhatCanIDo"
import WhatMethodsDoYouUse from "./WhatMethodsDoYouUse"
import { BetaBadge } from "@/components/BetaBadge";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import React, { useRef, useState } from "react"
import { ChevronsUpDown } from "lucide-react"

import { Set } from "@/lib/AllSets"

interface AllSetsInterface { id: string, set: Set }

const SUGGESTED_SETS: Set[] = [
    AllSets[AllSets.length - 1].set,
    AllSets[AllSets.length - 2].set
]

type Rating = "again" | "hard" | "good" | "easy";
type LocalStorageInference = { id: string, ratings: Rating[], start: string, end: string }
type LocalStorageData = LocalStorageInference[]
const localStorageKey = "setsAndRatings"

import { mode } from "@/lib/AllSets"
import { Input } from "../ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { AllLists, getListSetIds, isSetInList, List } from "@/lib/AllLists"
import { AnimatePresence, motion } from "framer-motion"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "../ui/badge"


const INFORMATION = {
    version: "2.3.0",
    tabs: [
        {
            name: "How Do I Create A Set?",
            text: <HowToCreate />
        },
        {
            name: "What Can I Do?",
            text: <WhatCanIDo />
        },
        {
            name: "What Methods Do You Use?",
            text: <WhatMethodsDoYouUse />
        },

    ]
}

const WELCOME_MESSAGES = [
    "Ready to learn?",
    "Start now, regret never.",
    "Welcome back.",
    "Good to see you.",
    "Pick a set.",
    "Let’s study.",
    "Keep going.",
    "You’ve got this.",
    "One more round.",
    "Stay consistent.",
    "Make progress.",
    "Ready when you are.",
]

const allSetIds = [
    // TNOFD.ts
    "tnofd-preface",
    "tnofd-chapters-1-and-2",
    "tnofd-chatpers-3-and-4",
    "tnofd-chapters-5-and-6",
    "tnofd-chatpers-7-through-9",
    "tnofd-chapter-10-part-1",
    "tnofd-chapter-10-part-2",
    "tnofd-chapter-11-part-1",
    "tnofd-chapter-11-part-2",

    // TCITR.ts
    "tcitr-chapters-1-through-4",
    "tcitr-chapters-5-through-9",
    "tcitr-chapters-10-through-17",
    "tcitr-chapters-18-through-26",

    // ITW.ts
    "into-the-wild-chapters-1-and-2",
    "into-the-wild-chapters-3-4-and-5",
    "into-the-wild-chapters-6-and-7",
    "into-the-wild-chapters-8-and-9",
    "into-the-wild-chapters-10-and-11",
    "into-the-wild-chapters-12-and-13",
    "into-the-wild-chapters-14-and-15",
    "into-the-wild-chapters-16-and-17",
    "into-the-wild-chapter-18-and-epilogue",
    "into-the-wild-vocabulary-list",
    "into-the-wild-vocabulary-list-2"
];

export default function HomePage({ pastSets, hasShownLoading, allSets, addSet, setMode, setSet, defaultId }: { pastSets: Set[], hasShownLoading: boolean, defaultId: string, allSets: Set[] | undefined, addSet: (set: Set, isAutomatic: boolean) => Promise<number>, setMode: (mode: mode) => void, setSet: (idx: number) => void }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [allStorage, setAllStorage] = React.useState<LocalStorageData>([])
    const [studyPathSets, setStudyPathSets] = React.useState<AllSetsInterface[] | null>(null)
    const [welcomeMessage] = React.useState(() => {
        return WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)]
    })
    const foundSet: string = defaultId
        ? (AllSets.find(set => set.id === defaultId)?.set.title ?? "")
        : "";

    const rightRef = useRef<HTMLButtonElement | null>(null);

    const [chosenList, setChosenList] = useState<List | undefined>(undefined);
    const [recommendedList] = useState<List>(() => {
        return AllLists[Math.floor(Math.random() * AllLists.length)];
    });


    //START PRELOADING - AND ALSO SAVING DATA TO LS
    // const id = currentSet.title;
    React.useEffect(() => {
        const loadSetsFromStorage = async (): Promise<void> => {
            const data: LocalStorageData = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
            setAllStorage(data);

            const allTitles = [...data.map(s => s.id)]
            // Filter all of the sets that have that title
            const studyPathSets: AllSetsInterface[] = AllSets.filter((set) => {
                return allTitles.includes(set.set.title)
            })

            setStudyPathSets(studyPathSets)
            // Find all the sets that have the IDs
        };

        loadSetsFromStorage();
    }, [])

    return <Carousel className="w-[90%] mx-auto h-[83vh]" >
        <CarouselContent >
            <CarouselItem className="w-full h-[83vh]">
                <ScrollArea className="w-full h-[83vh] ">
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div className="flex flex-col items-center gap-2 mt-[20vh]">
                            {hasShownLoading && foundSet != "" && <h2 className="text-center flex items-center justify-center">
                                <svg className="mr-3 size-5 animate-spin text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" d="M4 12a8 8 0 0 1 8-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                Loading {foundSet}
                            </h2>}
                            <h1 className="text-6xl mb-2 h-[11vh] font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                                {welcomeMessage}
                            </h1>
                            <div className="flex flex-row gap-2">
                                <Button className="rounded-3xl border-2 cursor-pointer" variant={"secondary"}>
                                    <Plus /> Create a Set
                                </Button>
                                <Button className="rounded-3xl border-2 cursor-pointer" variant={"secondary"}>
                                    <LayoutGrid /> Explore Sets and Lists
                                </Button>
                                <Button className="rounded-3xl relative border-2 cursor-pointer" variant={"secondary"}>
                                    <LandPlot /> Your Study Path
                                    <Badge className="absolute right-[-20px] top-[-15px] bg-blue-500 text-white">Beta</Badge>
                                </Button>
                            </div>
                            {!hasShownLoading && foundSet != "" && <h2 className=" relative flex text-center text-sm text-gray-200 opacity-50">
                                <span className="animate-ping mr-4 inline-flex size-2 my-auto rounded-full bg-sky-400 opacity-75"></span>
                                Just loaded {foundSet}
                            </h2>}
                            {hasShownLoading && foundSet == "" && <h2 className=" relative flex text-center text-sm text-gray-200 opacity-50 mt-2">
                                Swipe to the left and right to switch tabs.
                            </h2>}
                        </div>
                        <div className="mt-[100vh] absolute gap-4 w-full h-60 flex flex-row">
                            <div className="w-1/2 h-full">
                                <ScrollArea className="relative w-full h-[28vh] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-2 shadow-sm rounded-4xl px-2">
                                    <Drawer>
                                        <DrawerTrigger>
                                            <div className="cursor-pointer absolute top-[-8px] right-[-7px] size-6 border border-1 flex items-center justify-center rounded-full bg-card text-card-foreground">
                                                <Pencil size={12} />
                                            </div>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader>
                                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                                <Button>Submit</Button>
                                                <DrawerClose>
                                                    <Button variant="outline">Cancel</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>

                                    <h1 className="text-lg ml-3 text-foreground mb-2">Reccomended List</h1>
                                    <motion.div
                                        key={recommendedList.id}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setChosenList(recommendedList)}
                                        className="ml-2 w-[95%] flex items-start gap-3 rounded-3xl cursor-pointer px-4 py-4 text-left transition"
                                    >
                                        <span className="mt-0.5 rounded-xl bg-foreground/10 p-2">
                                            <recommendedList.icon className="size-5 text-foreground/80" />
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-foreground/90 line-clamp-2">{recommendedList.title}</span>
                                            <span className="text-xs text-foreground/50 mt-1">{recommendedList.sets.length} sets</span>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="rounded-2xl cursor-pointer border-1 whitespace-nowrap transition group-hover:scale-[1.02]"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setChosenList(recommendedList);
                                                rightRef.current?.click();
                                            }}
                                        >
                                            <ArrowBigRight className="size-4" /> Go to
                                        </Button>
                                    </motion.div>

                                </ScrollArea>
                            </div>
                            <div className="w-1/2 h-full">
                                <ScrollArea className="relative w-full h-[28vh] bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-2 shadow-sm rounded-4xl px-2">
                                    <Drawer>
                                        <DrawerTrigger>
                                            <div className="cursor-pointer absolute top-[-8px] left-[-7px] size-6 border border-1 flex items-center justify-center rounded-full bg-card text-card-foreground">
                                                <Pencil size={12} />
                                            </div>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader>
                                                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                                                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                                            </DrawerHeader>
                                            <DrawerFooter>
                                                <Button>Submit</Button>
                                                <DrawerClose>
                                                    <Button variant="outline">Cancel</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>

                                    <h1 className="text-lg ml-2 text-foreground">Current Sets</h1>
                                    {
                                        pastSets.map((set, idx) => {
                                            return <h1 key={idx} className="ml-2 my-2 text-sm font-semibold text-foreground/80 hover:text-foreground">{set.title}</h1>
                                        })
                                    }
                                </ScrollArea>
                            </div>
                        </div>

                    </div>
                </ScrollArea>
            </CarouselItem>
            <CarouselItem className="w-full h-[83vh]">
                <ScrollArea className="w-full h-full mt-auto">
                    <div className="flex flex-col gap-6 w-full px-6 py-6">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-semibold text-foreground">Explore Lists & Sets</h2>
                            <p className="text-sm text-foreground/60">Pick a list to filter the sets below.</p>
                        </div>

                        <AnimatePresence mode="popLayout">
                            <motion.h3 className="text-2xl font-semibold text-foreground">All Lists</motion.h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                                {AllLists.map((list) => {
                                    const isActive = chosenList?.id === list.id
                                    return (
                                        <motion.button
                                            key={list.id}
                                            layout
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setChosenList(list)}
                                            className={`flex items-start gap-3 rounded-3xl cursor-pointer border px-4 py-4 text-left transition ${isActive ? "bg-foreground/10 border-foreground/20" : "bg-foreground/5 border-foreground/10 hover:bg-foreground/10"}`}
                                        >
                                            <span className="mt-0.5 rounded-xl bg-foreground/10 p-2">
                                                <list.icon className="size-5 text-foreground/80" />
                                            </span>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-foreground/90 line-clamp-2">{list.title}</span>
                                                <span className="text-xs text-foreground/50 mt-1">{list.sets.length} sets</span>
                                            </div>
                                        </motion.button>
                                    )
                                })}
                            </div>

                            <div className="flex items-center justify-between">
                                <motion.h3 className="text-2xl font-semibold text-foreground">{chosenList ? "Sets in this list" : "All Sets"}</motion.h3>
                                {chosenList && (
                                    <Button
                                        variant="ghost"
                                        className="rounded-3xl text-foreground/70 hover:text-foreground"
                                        onClick={() => setChosenList(undefined)}
                                    >
                                        Clear filter
                                    </Button>
                                )}
                            </div>

                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {(chosenList
                                    ? AllSets.filter((setObj: AllSetsInterface) => isSetInList(chosenList.id, setObj.id))
                                    : AllSets.filter((setObj: AllSetsInterface) => !allSetIds.includes(setObj.id))
                                ).map((setObj: AllSetsInterface) => (
                                    <motion.div
                                        key={setObj.id}
                                        layoutId={setObj.id}
                                        className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 via-foreground/5 to-foreground/0 px-5 py-5 shadow-sm transition hover:border-foreground/20 hover:shadow-md"
                                    >
                                        <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                            <div className="absolute -right-10 -top-10 size-32 rounded-full bg-foreground/10 blur-2xl" />
                                        </div>
                                        <div className="relative flex items-start justify-between gap-4">
                                            <div className="min-w-0">
                                                <div className="text-base font-semibold text-foreground/95 line-clamp-2">
                                                    {setObj.set.title}
                                                </div>
                                                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-3 py-1 text-xs text-foreground/70">
                                                    {setObj.set.vocab.length} cards
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                                className="rounded-2xl cursor-pointer border-1 whitespace-nowrap transition group-hover:scale-[1.02]"
                                                onClick={() => addSet(setObj.set, true)}
                                            >
                                                <Plus className="size-4" /> Add
                                            </Button>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </CarouselItem>
        </CarouselContent>
        <CarouselNext ref={rightRef} />
        <CarouselPrevious />
    </Carousel>
}

function Showcase({ set, id, addSet }: { set: Set, id?: string, addSet?: (set: Set, isAutomatic: boolean) => Promise<number> }) {
    return (
        <Card className="w-60 h-46 rounded-3xl flex-shrink-0">
            <CardHeader>
                <CardTitle>{set.title}</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            {
                id && <CardFooter className="mt-auto">
                    <button onClick={() => {
                        if (addSet) {
                            addSet(set, true)
                        }
                    }} className="flex flex-row gap-2 font-bold cursor-pointer rounded-3xl dark:bg-white px-4 py-2 mt-auto dark:text-black text-white bg-black">
                        <Plus /> <span>Add Now</span>
                    </button>
                </CardFooter>
            }
        </Card>
    )
}

function ShowcaseSkeleton() {
    return (
        <Card className="w-60 h-46 rounded-3xl flex-shrink-0">
            <CardHeader>
                <Skeleton className="h-7 w-3/4" />
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    );
}


function ShowcaseSkeletonSP() {
    return (
        <Card className="w-[450px] h-48 rounded-4xl flex-shrink-0">
            <CardHeader>
                <Skeleton className="h-7 w-3/4" />
            </CardHeader>
            <CardContent>
            </CardContent>
        </Card>
    );
}

function ShowcaseStudyPath({
    set,
    id,
    addSet,
    storage,
    setMode,
    setSet,
    idx
}: {
    set: Set;
    id?: string;
    addSet?: (set: Set, isAutomatic: boolean) => Promise<number>;
    storage: LocalStorageInference | undefined;
    setMode: (mode: mode) => void,
    setSet: (idx: number) => void,
    idx: number
}) {
    // --- Calculate total days ---
    const totalDays = storage?.end
        ? Math.floor(
            (new Date(storage.end).getTime() -
                new Date(storage.start).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1
        : 5;

    // --- Words per day ---
    const wordsPerDay = Math.ceil(set.vocab.length / totalDays);

    // --- Total words rated so far ---
    const progressWords = storage?.ratings.length ?? 0;

    // --- Convert words → day index ---
    const currentDay = Math.min(
        totalDays - 1,
        Math.floor(progressWords / wordsPerDay)
    );

    return (
        <Card className="w-[450px] h-52 rounded-4xl flex-shrink-0 flex flex-col">
            <CardHeader>
                <CardTitle>
                    {set.title.substring(0, 50) +
                        (set.title.length > 50 ? "..." : "")}
                </CardTitle>
                <CardDescription>{set.vocab.length} words</CardDescription>

                <CardAction>
                    <Button
                        className="flex flex-row gap-2 cursor-pointer rounded-full"
                        variant={"ghost"}
                        onClick={() => { setMode("studyplan"); setSet(idx) }}
                    >
                        <Footprints />
                        <span>Continue The Path</span>
                    </Button>
                </CardAction>
            </CardHeader>

            {/* --- TIMELINE --- */}
            <CardContent>
                <div className="flex items-center justify-center w-full pt-2">
                    <div className="flex items-center w-full max-w-xs">
                        {Array.from({ length: totalDays }).map((_, index) => {
                            const isPast = index < currentDay;
                            const isToday = index === currentDay;
                            const isFuture = index > currentDay;

                            let dot = "bg-gray-400";

                            if (isPast) dot = "bg-white";
                            if (isToday) dot = "bg-white";
                            if (isFuture) dot = "bg-gray-400";

                            return (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-3 h-3 rounded-full transition-all border border-gray-600 ${dot}`}
                                        />
                                        <p
                                            className={`text-xs mt-1 transition-all ${isPast
                                                ? "text-white"
                                                : isToday
                                                    ? "text-white font-semibold"
                                                    : "text-gray-500"
                                                }`}
                                        >
                                            Day {index + 1}
                                        </p>
                                    </div>

                                    {index < totalDays - 1 && (
                                        <div
                                            className={`flex-1 h-px ${isPast
                                                ? "bg-white"
                                                : "bg-gray-500"
                                                }`}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                <p className="text-xs text-center text-gray-500 mt-2">
                    ~{wordsPerDay} words/day
                </p>
            </CardContent>

            {/* Add button only if id exists */}
            {id && (
                <CardFooter className="mt-auto">
                    <button
                        onClick={() => {
                            if (addSet) addSet(set, true);
                        }}
                        className="flex flex-row gap-2 font-bold cursor-pointer rounded-3xl dark:bg-white px-4 py-2 mt-auto dark:text-black text-white bg-black"
                    >
                        <Plus /> <span>Add Now</span>
                    </button>
                </CardFooter>
            )}
        </Card>
    );
}

function ShowcaseSuggestionCard({
    set,
    id,
    addSet,
    setMode
}: {
    set: Set;
    id?: string;
    addSet?: (set: Set, isAutomatic: boolean) => Promise<number>;
    setMode: (mode: mode) => void
}) {
    // --- Static values for suggestion ---
    const totalDays = 5;
    const wordsPerDay = Math.ceil(set.vocab.length / totalDays);

    return (
        <Card className="w-[450px] h-52 rounded-4xl flex-shrink-0 flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-950">
            <CardHeader>
                <CardTitle>
                    {set.title.substring(0, 50) +
                        (set.title.length > 50 ? "..." : "")}
                </CardTitle>
                <CardDescription>{set.vocab.length} words to learn</CardDescription>

                <CardAction>
                    <Button
                        className="flex flex-row gap-2 cursor-pointer rounded-full"
                        variant={"outline"}
                        onClick={() => {
                            if (addSet) addSet(set, true);
                            setTimeout(() => {
                                if (addSet) setMode("studyplan")
                            }, 100)
                        }}
                    >
                        <Plus />
                        <span>Start The Path</span>
                    </Button>
                </CardAction>
            </CardHeader>

            {/* --- TIMELINE --- */}
            <CardContent>
                <div className="flex items-center justify-center w-full pt-2">
                    <div className="flex items-center w-full max-w-xs">
                        {Array.from({ length: totalDays }).map((_, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-3 h-3 rounded-full transition-all border border-gray-400 bg-gray-400`}
                                        />
                                        <p
                                            className={`text-xs mt-1 transition-all text-gray-500`}
                                        >
                                            Day {index + 1}
                                        </p>
                                    </div>

                                    {index < totalDays - 1 && (
                                        <div
                                            className={`flex-1 h-px bg-gray-400`}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>

                <p className="text-xs text-center text-gray-500 mt-2">
                    ~{wordsPerDay} words/day
                </p>
            </CardContent>

            {/* Add button only if id exists */}
            {id && (
                <CardFooter className="mt-auto">
                    <button
                        onClick={() => {
                            if (addSet) addSet(set, true);
                        }}
                        className="flex flex-row gap-2 font-bold cursor-pointer rounded-3xl dark:bg-white px-4 py-2 mt-auto dark:text-black text-white bg-black"
                    >
                        <Plus /> <span>Add Now</span>
                    </button>
                </CardFooter>
            )}
        </Card>
    );
}
