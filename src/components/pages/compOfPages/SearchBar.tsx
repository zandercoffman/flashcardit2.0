"use client"

import * as React from "react"
import { AllSets } from "@/lib/AllSets"
import {
    Calculator,
    Calendar,
    CreditCard,
    Search,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

interface Set {
    title: string;
    vocab: [string, string][];
}

interface AllSetsInterface { id: string, set: Set }


export function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const [sets, setSets] = React.useState<Set[]>([]);

    React.useEffect(() => {
        const existingSets = JSON.parse(localStorage.getItem("sets") || "[]") as AllSetsInterface[];
        if (existingSets) {
            setSets(existingSets.map(set => set.set));
        }
    }, [])

    return (
        <>
            <button 
            className="flex shadow-xl cursor-pointer gap-2 w-1/2 bg-black h-8 text-white dark:bg-white dark:text-black px-2 rounded-xl py-1 my-auto"
            onClick={() => {
                setOpen(!open)
            }}>
                <Search className="size-4 my-auto ml-1" />
                <span className="!text-left my-auto">Search</span>
            </button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Sets">
                        {
                            sets.map((set, index) => {
                                return (
                                    <CommandItem key={index} onClick={() => {
                                        setOpen(false)
                                    }}> 
                                        <span className="!text-left my-auto">{set.title}</span>
                                    </CommandItem>
                                )
                            })
                        }
                        {
                            AllSets.map((set, index) => {
                                return (
                                    <CommandItem key={index} onClick={() => {
                                        setOpen(false)
                                    }}> 
                                        <span className="!text-left my-auto">{set.set.title}</span>
                                    </CommandItem>
                                )
                            })
                        }
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
