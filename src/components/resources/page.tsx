"use client"
import { getShortNameForSet } from "@/lib/AllLists"
import { Set } from "@/lib/AllSets"
import { PackageOpen } from "lucide-react"
import { useState } from "react"

export default function ResourcesPage(
    {
        set
    }: {
        set: Set
    }
) {

    const [shortName, setShortName] = useState<string>(getShortNameForSet(set.title) || set.title)

    return (
        <div className="p-4 px-6">
            <div className="flex flex-row gap-2 items-center mb-4">
                <PackageOpen className="size-10" strokeWidth={1.25} />
                <h1 className="text-2xl font-bold">Resources <span className="font-normal text-xl">for</span> {shortName}</h1>
            </div>  
            <div className="w-full flex flex-row gap-2">
                <div className="w-1/2 p-4 rounded-md bg-muted rounded-tl-lg">
                    <h2 className="text-lg font-semibold mb-2">🔗 External Links</h2>
                    <p className="text-sm text-muted-foreground">We're working hard to gather and create resources for this set. Check back later for study guides, flashcard decks, and more!</p>
                </div>
                <div className="w-1/2 p-4 rounded-md bg-muted rounded-tl-lg">
                    <h2 className="text-lg font-semibold mb-2">✨ AI Prompts for Practice Tests, Studying, and more</h2>
                    <p className="text-sm text-muted-foreground">We're working hard to gather and create resources for this set. Check back later for study guides, flashcard decks, and more!</p>
                </div>
            </div>
        </div>
    )
}