"use client"

import * as React from "react"
import Link from "next/link"
import { List, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface Set {
  title: string
  vocab: [string, string][] // Array of tuples with two strings
}

export default function NavigationMenuFlashcardSet({
  current,
  total,
  set,
  onWordClick,
}: {
  current: number
  total: number
  set: Set
  onWordClick?: (index: number) => void
}) {
  const [showWordList, setShowWordList] = React.useState(false)

  return (
    <>
      <div className="absolute flex flex-row gap-2 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-[-20px]">
        <h3 className="my-auto">{current}/{total}</h3>
        <Separator orientation="vertical"/>
        <Button variant="outline" size="sm" onClick={() => setShowWordList(!showWordList)} className="gap-2">
          <List className="h-4 w-4" />
          {showWordList ? "Hide" : "Show"} All Words ({total})
        </Button>
      </div>

      {showWordList && (
        <div className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm" onClick={() => setShowWordList(false)} />
      )}

      <div
        className={`w-[32vw] fixed right-0 top-0 bg-background border-l shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          showWordList ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-lg">All Words ({total})</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowWordList(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4">
            <p className="text-md dark:text-gray-300 text-center mb-4">Tap a word to jump to it.</p>
            <ScrollArea className="space-y-2 h-[80vh]">
              {set.vocab.map((word, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onWordClick?.(index)
                    setShowWordList(false)
                  }}
                  className={`w-full cursor-pointer text-left p-3 rounded-lg border transition-colors ${
                    index === current - 1 ? "bg-primary/10 border-primary" : "hover:bg-muted border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-muted-foreground">#{index + 1}</span>
                    {index === current - 1 && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Current</span>
                    )}
                  </div>
                  <div className="mt-1 font-medium">
                    {word[0]} - {word[1]}
                  </div>
                </button>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  )
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
