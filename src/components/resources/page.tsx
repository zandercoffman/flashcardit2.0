"use client"
import { getShortNameForSet } from "@/lib/AllLists"
import { Set } from "@/lib/AllSets"
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
            <h1 className="text-4xl font-bold mb-4">Resources <span className="font-normal text-3xl">for</span> {shortName}</h1>
            <p>Here you can find resources related to the set you are studying.</p>
        </div>
    )
}