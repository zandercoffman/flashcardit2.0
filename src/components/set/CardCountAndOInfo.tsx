"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    }
]

export default function NavigationMenuFlashcardSet({
    current,
    total,
    set
}: {
    current: number,
    total: number,
    set: Set
}) {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-20px]">
            <HoverCard>
                <HoverCardTrigger>{current}/{total}</HoverCardTrigger>
                <HoverCardContent side="top" className="w-[380px] h-[70vh]">
                    <ScrollArea className="w-[365px] h-[65vh]">
                        <Table>
                            <TableCaption>{set.title}</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Word 1</TableHead>
                                    <TableHead >Word 2</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    set.vocab.map((word, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>{word[0]}</TableCell>
                                                <TableCell>{word[1]}</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </ScrollArea>

                </HoverCardContent>
            </HoverCard>
        </div>
    );
}


function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
