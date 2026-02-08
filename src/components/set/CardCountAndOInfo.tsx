"use client"

import * as React from "react"
import Link from "next/link"
import { Globe, List, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "../ui/badge"
import { useEffect } from "react"
import { Set } from "@/lib/AllSets"

export default function NavigationMenuFlashcardSet({
  current,
  total,
  set,
  onWordClick,
  pressedShowAllWords,
  pressShowConjugation,
  setPressedShowAllWords,
  setPressShowConjugation,
}: {
  current: number
  total: number
  set: Set
  onWordClick?: (index: number) => void
  pressedShowAllWords: boolean
  pressShowConjugation: boolean
  setPressedShowAllWords: React.Dispatch<React.SetStateAction<boolean>>
  setPressShowConjugation: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [showWordList, setShowWordList] = React.useState(false)
  const [currentAtSet, setCurASet] = React.useState(set?.vocab?.[current - 1]?.[0] ?? "");
  const esppronouns = ["Yo", "Tú", "Él/Ella/Usted", "Nosotros", "Vosotros", "Ellos/Ellas/Ustedes"];
  const engpronouns = ["I", "You", "He/Her/You (Formal)", "We", "Us all", "They/You All"];

  const [showTotal, setShowTotal] = React.useState(total);

  function getVerbType(verb: string) {
    if (!verb || typeof verb !== "string") return null;

    const lower = verb.toLowerCase().trim();

    if (lower.endsWith("ar")) return "ar";
    if (lower.endsWith("er")) return "er";
    if (lower.endsWith("ir")) return "ir";
    if (lower.endsWith("arse")) return "ar";
    if (lower.endsWith("erse")) return "er";
    if (lower.endsWith("irse")) return "ir";


    return null; // not a regular infinitive form
  }

  React.useEffect(() => {
    setCurASet(set?.vocab?.[current - 1]?.[0] ?? "")
  }, [current, set])

  useEffect(() => {
    setShowTotal(set?.vocab?.length ?? 0);
  }, [set])

  useEffect(() => {
    setShowWordList(pressedShowAllWords)
  }, [pressedShowAllWords])


  return (
    <>

      <div className="absolute flex flex-col items-center gap-2 bottom-[-5vh] left-1/2 transform -translate-x-1/2 -translate-y-[-20px]">
        <div className="flex flex-row gap-2">
          <h3 className="my-auto">{current}/{showTotal}</h3>
          <Separator orientation="vertical" className="my-auto !w-[1px] !h-[20px]" />
          <section className="flex flex-row gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPressedShowAllWords((prev) => !prev)
              }}
              className="gap-2 cursor-pointer rounded-full !px-[12px]"
            >
              <List className="h-4 w-4" />
              {showWordList ? "Hide" : "Show"} All Words ({showTotal})
            </Button>

            {
              getVerbType(currentAtSet) !== null && <>
                <Separator orientation="vertical" className="my-auto !w-[1px] !h-[20px]" />
                <Button variant="outline" size="sm" className="cursor-pointer gap-2 rounded-full !px-[12px]" onClick={() => setPressShowConjugation(prev => !prev)}>
                  <Globe className="h-4 w-4" />
                  See Conjugations
                </Button>
              </>
            }
          </section>
        </div>
        <div className="text-center w-[350px] text-xs text-muted-foreground ">Use ← → or arrow keys to navigate. Press space or enter to flip the card. Press T to toggle the sidebar.</div>

      </div>

      {
        /**
         * {showWordList && (
        <div className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm" onClick={() => setShowWordList(false)} />
      )}

      <div
        className={`w-[32vw] fixed right-0 top-0  border-l shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${showWordList ? "translate-x-0 " : "translate-x-full"
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
            <ScrollArea className="space-y-6 flex flex-col gap-4 h-[80vh]">
              {set.vocab.map((word, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onWordClick?.(index)
                    setShowWordList(false)
                  }}
                  className={`w-full mt-2 mb-2 mr-4 cursor-pointer text-left p-3 rounded-lg border transition-colors ${index === current - 1 ? "bg-primary/10 border-primary" : "hover:bg-muted border-transparent"
                    }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-muted-foreground">#{index + 1}</span>
                    {index === current - 1 && (
                      <Badge className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">Current</Badge>
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
         */
      }
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
