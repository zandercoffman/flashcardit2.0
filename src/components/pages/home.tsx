"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { AllSets } from "@/lib/AllSets"
import { Plus } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface Set {
    title: string
    vocab: [string, string][]
}

interface AllSetsInterface { id: string; set: Set }

export default function HomePage({ allSets, addSet }: { allSets: Set[] | undefined, addSet: (set: Set, isAutomatic: boolean) => Promise<number> }) {
    return (
        <div className="flex flex-col gap-4">
            <section className="mb-12">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Welcome to your Study Hub!
                </h1>
            </section>
            {/* Current Sets */}
            <section className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Current Sets</h1>
                <ScrollArea className="w-[68vw] h-60">
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
                <ScrollArea className="w-[68vw] h-60">
                    <div className="flex flex-row gap-4 w-max">
                        {AllSets.map((setObj: AllSetsInterface, index) => (
                            <Showcase key={setObj.id} set={setObj.set} id={setObj.id} addSet={addSet} />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
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