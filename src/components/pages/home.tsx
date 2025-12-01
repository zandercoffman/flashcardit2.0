'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AllSets } from "@/lib/AllSets"
import { Footprints, Plus } from "lucide-react"
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
import React from "react"
import { ChevronsUpDown } from "lucide-react"

interface Set {
    title: string;
    vocab: [string, string][];
}

interface AllSetsInterface { id: string, set: Set }

const SUGGESTED_SETS: Set[] = [
    { title: "APUSH Period 1", vocab: [["The first Americans", "The first Americans were the Paleo-Indians, who were hunter-gatherers that migrated from Asia to North America across the Bering Strait land bridge."], ["The Mayans", "The Mayans were a Mesoamerican civilization that developed a complex calendar, a system of writing, and impressive architecture."], ["The Aztecs", "The Aztecs were a Mesoamerican civilization that was known for its military prowess and its practice of human sacrifice."], ["The Incas", "The Incas were a South American civilization that was known for its extensive road system and its centralized government."]], },
    { title: "APUSH Period 2", vocab: [["The Columbian Exchange", "The Columbian Exchange was the widespread transfer of plants, animals, culture, human populations, technology, and ideas between the Americas, West Africa, and the Old World in the 15th and 16th centuries."], ["The Encomienda System", "The Encomienda System was a labor system that was used by the Spanish in their American colonies. In this system, the Spanish crown granted a person a specified number of natives for whom they were to take responsibility."], ["The Pueblo Revolt", "The Pueblo Revolt was an uprising of most of the indigenous Pueblo people against the Spanish colonizers in the province of Santa Fe de Nuevo México, present day New Mexico."]], },
    { title: "APUSH Period 3", vocab: [["The French and Indian War", "The French and Indian War was a theater of the Seven Years' War, which pitted the North American colonies of the British Empire against those of the French, each side being supported by various Native American tribes."], ["The Stamp Act", "The Stamp Act was a tax that was imposed by the British Parliament on the colonies of British America. The act required that many printed materials in the colonies be produced on stamped paper produced in London, carrying an embossed revenue stamp."], ["The Boston Tea Party", "The Boston Tea Party was a political protest that occurred on December 16, 1773, at Griffin's Wharf in Boston, Massachusetts. American colonists, frustrated and angry at Britain for imposing \"taxation without representation,\" dumped 342 chests of tea, imported by the British East India Company into the harbor."]], },
    { title: "APUSH Period 4", vocab: [["The Louisiana Purchase", "The Louisiana Purchase was the acquisition of the Louisiana territory by the United States from France in 1803."], ["The War of 1812", "The War of 1812 was a conflict fought between the United States and its allies, and the United Kingdom of Great Britain and Ireland and its own allies."], ["The Missouri Compromise", "The Missouri Compromise was a United States federal statute devised by Henry Clay. It regulated slavery in the country's western territories by prohibiting the practice in the former Louisiana Territory north of the parallel 36°30′ north, except within the boundaries of the proposed state of Missouri."]], },
    { title: "APUSH Period 5", vocab: [["The Second Great Awakening", "The Second Great Awakening was a Protestant religious revival during the early 19th century in the United States."], ["The Nullification Crisis", "The Nullification Crisis was a sectional crisis during the presidency of Andrew Jackson created by the Ordinance of Nullification, an attempt by the state of South Carolina to nullify a federal law - the tariff of 1828 - passed by the United States Congress."], ["The Bank War", "The Bank War was the political struggle that developed over the issue of rechartering the Second Bank of the United States."]], },
]

type Rating = "again" | "hard" | "good" | "easy";
type LocalStorageInference = { id: string, ratings: Rating[], start: string, end: string }
type LocalStorageData = LocalStorageInference[]
const localStorageKey = "setsAndRatings"


const INFORMATION = {
    version: "1.2.0",
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

export default function HomePage({ allSets, addSet }: { allSets: Set[] | undefined, addSet: (set: Set, isAutomatic: boolean) => Promise<number> }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [allStorage, setAllStorage] = React.useState<LocalStorageData>([])
    const [studyPathSets, setStudyPathSets] = React.useState<AllSetsInterface[] | null>(null)

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

    return (
        <div className="flex flex-col gap-1">
            <section className="mb-2 flex flex-col gap-2">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Welcome to your Study Hub!
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Built for APUSH, now use Flashcard/It to make quick, versatile AI-powered flashcards for any subject.
                </p>
            </section>

            <section className="flex flex-col gap-2">
                <Collapsible>
                    <CollapsibleTrigger className="flex cursor-pointer flex-row gap-2 justify-center items-center"><h1 className="text-xl font-semibold">Quick Shortcuts </h1>  <ChevronsUpDown /></CollapsibleTrigger>
                    <CollapsibleContent>
                        <ScrollArea className="w-[68vw] h-10">
                            <div className="flex flex-row items-center gap-2 w-max">
                                {/* Version Button */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="shadow-sm rounded-full flex cursor-pointer flex-row gap-4 flex-shrink-0" variant={"secondary"}>
                                            <div className="size-2 animate-ping bg-black dark:bg-white rounded-full flex items-center justify-center" />
                                            <span>Version {INFORMATION.version}</span>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-[90vw] sm:max-w-none h-[90vh]">
                                        <DialogHeader>
                                            <DialogTitle>Version {INFORMATION.version}</DialogTitle>
                                            <DialogDescription>
                                                <VersionInfo version={INFORMATION.version} />
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>


                                {/* Tab Buttons */}
                                {INFORMATION.tabs.map((tab, idx) => (
                                    <Dialog key={idx}>
                                        <DialogTrigger asChild>
                                            <Button className=" shadow-sm flex-shrink-0 rounded-full cursor-pointer" variant={"secondary"}>{tab.name}</Button>
                                        </DialogTrigger>
                                        <DialogContent className="w-[90vw] sm:max-w-none h-[90vh]">
                                            <DialogHeader>
                                                <DialogTitle>{tab.name}</DialogTitle>
                                                <DialogDescription>
                                                    <ScrollArea className="h-[80vh]">
                                                        {tab.text}
                                                    </ScrollArea>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                ))}
                            </div>

                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </CollapsibleContent>
                </Collapsible>
            </section>


            <section className="flex flex-col gap-2">

                {/* Study Path */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <h1 className="text-3xl font-semibold">Study Path</h1>
                        <BetaBadge />
                    </div>
                    <ScrollArea className="w-[68vw] h-52">
                        <div className="flex flex-row gap-4 w-max">
                            {
                                allSets === undefined ? (
                                    <>
                                        <ShowcaseSkeletonSP />
                                        <ShowcaseSkeletonSP />
                                        <ShowcaseSkeletonSP />
                                        <ShowcaseSkeletonSP />
                                    </>
                                ) : studyPathSets !== null ? (
                                    studyPathSets.map((set, index) => (
                                        <ShowcaseStudyPath key={index} set={set.set} storage={allStorage.find(s => s.id == set.set.title)} />
                                    ))
                                ) : (
                                    SUGGESTED_SETS.map((set, index) => (
                                        <ShowcaseSuggestion key={index} set={set} addSet={addSet} />
                                    ))
                                )
                            }
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </section>

                {/* Current Sets */}
                <section className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">Current Sets</h1>
                    <ScrollArea className="w-[68vw] h-50">
                        <div className="flex flex-row gap-4 w-max">
                            {
                                allSets === undefined ? (
                                    <>
                                        <ShowcaseSkeleton />
                                        <ShowcaseSkeleton />
                                        <ShowcaseSkeleton />
                                        <ShowcaseSkeleton />
                                    </>
                                ) : allSets.length > 0 ? (
                                    allSets.map((set, index) => (
                                        <Showcase key={index} set={set} />
                                    ))
                                ) : (
                                    <div className="flex items-center justify-center w-[68vw] h-48">
                                        <p className="text-gray-500">You don&apos;t have any sets yet. Add one from below!</p>
                                    </div>
                                )
                            }
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </section>

                {/* All Premade Sets */}
                <section className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold">All Premade Sets</h1>
                    <ScrollArea className="w-[68vw] h-50">
                        <div className="flex flex-row gap-4 w-max">
                            {AllSets.map((setObj: AllSetsInterface, index) => (
                                <Showcase key={setObj.id} set={setObj.set} id={setObj.id} addSet={addSet} />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </section>
            </section>

        </div>
    )
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
}: {
    set: Set;
    id?: string;
    addSet?: (set: Set, isAutomatic: boolean) => Promise<number>;
    storage: LocalStorageInference | undefined;
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
                                            className={`text-xs mt-1 transition-all ${
                                                isPast
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
                                            className={`flex-1 h-px ${
                                                isPast
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






function ShowcaseSuggestion({ set, id, addSet }: { set: Set, id?: string, addSet?: (set: Set, isAutomatic: boolean) => Promise<number> }) {
    return (
        <Card className="w-[450px] h-48 rounded-4xl flex-shrink-0 border-dashed bg-gray-50 dark:bg-gray-900">
            <CardHeader>
                <CardTitle>{set.title.substring(0, 50) + (set.title.length > 50 ? "..." : "")}</CardTitle>
                <CardDescription>{set.vocab.length} words</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500">{set.vocab.map(v => v[0]).join(", ")}</p>
            </CardContent>
            <CardFooter className="mt-auto">
                <button onClick={() => {
                    if (addSet) {
                        addSet(set, true)
                    }
                }} className="flex flex-row gap-2 font-bold cursor-pointer rounded-3xl dark:bg-white px-4 py-2 mt-auto dark:text-black text-white bg-black">
                    <Plus /> <span>Add Now</span>
                </button>
            </CardFooter>
        </Card>
    )
}