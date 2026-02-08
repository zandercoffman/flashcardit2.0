"use client"

/* eslint-disable */
import React, { useEffect, useState } from "react"
import FlashCard from "./Flashcard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import NavigationMenuFlashcardSet from "./CardCountAndOInfo"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Copy, List, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AnimatePresence, motion } from "framer-motion"
import SpanishConjugator from "spanishconjugator"
import { toast } from "sonner"
import { useSidebar } from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Set {
  title: string
  vocab: [string, string][] // Array of tuples with two strings
}

export default function FlashcardHolder({ set }: { set: Set }) {
  const { toggleSidebar } = useSidebar()
  const [api, setApi] = useState<CarouselApi>()

  const PAGE_SIZE = 30
  const [visibleCount, setVisibleCount] = useState(() => Math.min(PAGE_SIZE, set.vocab.length))

  const [current, setCurrent] = useState(1)
  const [isFlipped, setIsFlippedS] = useState<boolean>(false)
  const [count, setCount] = useState(1)
  const [showWordList, setShowWordList] = useState(false)

  const [pressedShowAllWords, setPressedShowAllWords] = useState(false)
  const [pressShowConjugation, setPressShowConjugation] = useState(false)

  const [refs, setRefs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => new Array(set.vocab.length).fill(0).map(() => React.createRef<HTMLDivElement>()))

  const amtOfCardsToShow = 10;

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(set.vocab.length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      const nextIndex = api.selectedScrollSnap()
      setCurrent(nextIndex + 1)

      if (nextIndex >= visibleCount - 5) {
        setVisibleCount((prev) => Math.min(set.vocab.length, prev + PAGE_SIZE))
      }
    })
  }, [api, set.vocab.length, visibleCount])

  useEffect(() => {
    setVisibleCount(Math.min(PAGE_SIZE, set.vocab.length))
    setCount(set.vocab.length)
  }, [set.vocab.length])

  const jumpToCard = (index: number) => {
    if (api) {
      setVisibleCount((prev) => Math.min(set.vocab.length, Math.max(prev, index + 1)))
      setTimeout(() => api.scrollTo(index), 0)
      setShowWordList(false)
    }
  }

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const synth = window.speechSynthesis
      const loadVoices = () => {
        const allVoices = synth.getVoices()
        if (allVoices.length > 0) {
          const a = allVoices.filter((val) => val.name.toLowerCase().includes("google"))
          setVoices(a)
        }
      }

      // Sometimes voices aren't loaded yet, so wait for event
      if (synth.getVoices().length === 0) {
        synth.onvoiceschanged = loadVoices
      } else {
        loadVoices()
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lStorage = sessionStorage.getItem("ttsEnabled") || "false"

      if (JSON.parse(lStorage) === true && voices.length > 0) {
        const voice1 = sessionStorage.getItem("Voice1") || "0"
        const voice2 = sessionStorage.getItem("Voice2") || "1"

        const voiceToChoose = isFlipped ? voice2 : voice1

        const curVocab = set.vocab[current - 1]
        const chosenVocab = curVocab[isFlipped ? 1 : 0]

        console.log("[v0] ttsEnabled (raw):", lStorage)
        console.log("[v0] voice1:", voice1)
        console.log("[v0] voice2:", voice2)
        console.log("[v0] voiceToChoose (parsed):", voiceToChoose)
        console.log("[v0] current:", current)
        console.log("[v0] curVocab:", curVocab)
        console.log("[v0] chosenVocab:", chosenVocab)
        console.log("[v0] voices:", voices)
        console.log(
          "[v0] selectedVoice:",
          voices.find((voice) => voice.lang.toLowerCase() == voiceToChoose.toLowerCase()),
        )

        const utterance = new SpeechSynthesisUtterance(chosenVocab)
        utterance.voice = voices.find((voice) => voice.lang.toLowerCase() == voiceToChoose.toLowerCase()) || voices[0]
        window.speechSynthesis.speak(utterance)
      }

      setIsFlippedS(false)
    }
  }, [current, isFlipped, voices])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) {
        return;
      }
      const target = e.target as HTMLElement | null
      const tagName = target?.tagName?.toLowerCase()
      const isTypingField =
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target?.isContentEditable

      if (!isTypingField && e.key.toLowerCase() === "t") {
        toggleSidebar()
        return
      }
      if (e.key === "ArrowLeft") {
        api?.scrollPrev()
        setCurrent((prev) => prev - 1)
      } else if (e.key === "ArrowRight") {
        api?.scrollNext()
        setCurrent((prev) => prev + 1)
      } else if (e.key === "Escape" && showWordList) {
        setShowWordList(false)
      } else if (e.key === " " || e.key === "Enter") {
        refs[current - 1]?.current?.click()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [api, showWordList, toggleSidebar])

  useEffect(() => {
    if (pressedShowAllWords) {
      setPressShowConjugation(false)
    }
  }, [pressedShowAllWords])

  useEffect(() => {
    if (pressShowConjugation) {
      setPressedShowAllWords(false)
    }
  }, [pressShowConjugation])

  const WORD_LIST_PAGE_SIZE = 100
  const [wordListPage, setWordListPage] = useState(0)

  const getVerbType = (verb: string) => {
    if (!verb || typeof verb !== "string") return null
    const lower = verb.toLowerCase().trim()
    if (lower.endsWith("ar")) return "ar"
    if (lower.endsWith("er")) return "er"
    if (lower.endsWith("ir")) return "ir"
    if (lower.endsWith("arse")) return "ar"
    if (lower.endsWith("erse")) return "er"
    if (lower.endsWith("irse")) return "ir"
    return null
  }

  const tenses = [
    "INDICATIVE_PRESENT",
    "INDICATIVE_IMPERFECT",
    "INDICATIVE_PRETERITE",
    "INDICATIVE_FUTURE",
    "INDICATIVE_PERFECT",
    "INDICATIVE_PLUPERFECT",
    "INDICATIVE_FUTURE_PERFECT",
    "INDICATIVE_PRETERITE_PERFECT",
    "SUBJUNCTIVE_PRESENT",
    "SUBJUNCTIVE_IMPERFECT_RA",
    "SUBJUNCTIVE_IMPERFECT_SE",
    "SUBJUNCTIVE_FUTURE",
    "SUBJUNCTIVE_PERFECT",
    "SUBJUNCTIVE_PLUPERFECT",
    "SUBJUNCTIVE_FUTURE_PERFECT",
    "CONDITIONAL_PRESENT",
    "CONDITIONAL_PERFECT",
  ] as const

  const pronouns = ["Yo", "Tú", "Él/Ella/Usted", "Nosotros", "Vosotros", "Ellos/Ellas/Ustedes"]

  const currentVerb = set.vocab[current - 1]?.[0] ?? ""
  const currentVerbMeaning = set.vocab[current - 1]?.[1] ?? ""
  const isVerb = getVerbType(currentVerb) !== null
  const formatTense = (t: string) =>
    t.toLowerCase().replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())

  const getSpanishConjugatorArgs = (tense: string, personIndex: number) => {
    const [moodRaw, ...rest] = tense.split("_")
    const moodKey = moodRaw.toLowerCase()
    const normalizedTense = rest.join("_").toLowerCase()

    const moodMap: Record<string, string> = {
      indicative: "indicitive",
      subjunctive: "subjunctive",
      conditional: "conditional",
      imperative: "imperitive",
    }

    const tenseMap: Record<string, string> = {
      present: "present",
      imperfect: "imperfect",
      preterite: "preterite",
      future: "future",
      perfect: "present_perfect",
      pluperfect: "past_anterior",
      future_perfect: "future_perfect",
      preterite_perfect: "past_anterior",
      imperfect_ra: "imperfect",
      imperfect_se: "imperfect_se",
    }

    const pronounMap = ["yo", "tu", "usted", "nosotros", "vosotros", "ustedes"]

    return {
      mood: moodMap[moodKey],
      tense: tenseMap[normalizedTense],
      pronoun: pronounMap[personIndex],
    }
  }

  const conjugate = (verb: string, tense: string, personIndex: number) => {
    try {
      const args = getSpanishConjugatorArgs(tense, personIndex)
      if (!args.mood || !args.tense || !args.pronoun) {
        return ""
      }

      return SpanishConjugator.SpanishConjugator(verb, args.tense, args.mood, args.pronoun)
    } catch {
      return ""
    }
  }

  const [tenseIndex, setTenseIndex] = useState(0)

  return (
    <AnimatePresence mode="popLayout">
      <motion.section className="mx-auto my-auto  flex flex-col lg:flex-row gap-4 relative p-4">
        <div className="mx-auto my-auto mt-[2rem] flex flex-col lg:flex-row gap-4 relative p-4">
          {/* Main Flashcard Area */}
          <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
            <NavigationMenuFlashcardSet
              current={current}
              total={count}
              set={set}
              onWordClick={jumpToCard}
              pressedShowAllWords={pressedShowAllWords}
              pressShowConjugation={pressShowConjugation}
              setPressedShowAllWords={setPressedShowAllWords}
              setPressShowConjugation={setPressShowConjugation}
            />
            <div className="">
              <Carousel
                className="relative w-[80%] mx-auto h-[100%] z-[3]"
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="flex ">
                  {(() => {
                    const currentIndex = current - 1
                    const windowStart = Math.max(0, currentIndex - amtOfCardsToShow)
                    const windowEnd = Math.min(set.vocab.length - 1, currentIndex + amtOfCardsToShow)
                    return set.vocab.map((vocab, index) => (
                      <CarouselItem key={index} className="flex-shrink-0  w-80 p-2 mb-10 md:mb-0">
                        {index >= windowStart && index <= windowEnd ? (
                          <FlashCard front={vocab[0]} back={vocab[1]} setIsFlippedS={setIsFlippedS} ref={refs[index] as React.RefObject<HTMLDivElement>} />
                        ) : (
                          <div className="h-[220px] w-full" />
                        )}
                      </CarouselItem>
                    ))
                  })()}
                </CarouselContent>
                <CarouselPrevious className="absolute left-15 md:left-[-15px] md:top-32 top-full lg:top-1/2 transform md:-translate-y-1/2" />
                <CarouselNext className="absolute right-15 md:right-0 md:top-32 top-full lg:top-1/2 transform md:-translate-y-1/2" />
              </Carousel>

            </div>


          </div>


        </div>
        <AnimatePresence>
          {pressedShowAllWords && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="translate-x-[-6vw] xl:translate-x-[0vw] right-0 top-0 h-full z-40 w-100 pr-4"
            >
              <ScrollArea className="h-[70vh]" onClick={() => setPressedShowAllWords(false)}>
                {
                  Math.max(1, Math.ceil(set.vocab.length / WORD_LIST_PAGE_SIZE)) > 1 && <div className="flex items-center justify-between mb-2 mr-4">
                    <button
                      className="px-4 py-1 text-sm border rounded-xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setWordListPage((p) => Math.max(0, p - 1))
                      }}
                    >
                      Prev
                    </button>
                    <span className="text-xs opacity-70">
                      Page {wordListPage + 1} / {Math.max(1, Math.ceil(set.vocab.length / WORD_LIST_PAGE_SIZE))}
                    </span>
                    <button
                      className="px-4 py-1 text-sm border rounded-xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setWordListPage((p) =>
                          Math.min(Math.ceil(set.vocab.length / WORD_LIST_PAGE_SIZE) - 1, p + 1),
                        )
                      }}
                    >
                      Next
                    </button>
                  </div>
                }


                {set.vocab
                  .slice(wordListPage * WORD_LIST_PAGE_SIZE, (wordListPage + 1) * WORD_LIST_PAGE_SIZE)
                  .map((word, index) => {
                    const absoluteIndex = wordListPage * WORD_LIST_PAGE_SIZE + index
                    return (
                      <button
                        key={absoluteIndex}
                        onClick={() => {
                          jumpToCard(absoluteIndex)
                        }}
                        className={`w-[95%] flex flex-row gap-4  items-start mt-2 mb-2 mr-4 cursor-pointer text-left p-3 rounded-lg border transition-colors ${absoluteIndex === current - 1 ? "bg-primary/10 border-primary" : "hover:bg-muted border-transparent"
                          }`}
                      >
                        <h1>{absoluteIndex + 1}. </h1>
                        <section className="flex flex-col">
                          <span>{word[0]}</span>
                          <span className="text-xs text-gray-500">{word[1]}</span>
                        </section>
                      </button>
                    )
                  })}
              </ScrollArea>
              <h1 className="text-center mt-6 text-xs">Tap a word to jump to the matching card.</h1>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {pressShowConjugation && isVerb && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="translate-x-[-6vw] xl:translate-x-[0vw] right-0 top-0 h-full z-40 w-100 pr-4"
            >
              <ScrollArea className="h-[70vh]" onClick={() => setPressShowConjugation(false)}>
                <div className="min-h-[70vh] flex flex-col items-center justify-center">
                  <div className="mb-4 mr-4 p-3 flex flex-col justify-center gap-4 rounded-lg">
                    <div className="flex flex-col gap-2 items-center justify-between mb-3">
                    <div className="text-sm font-semibold text-muted-foreground">Spanish Conjugation Tenses for <span className="text-white">{currentVerb}</span> - <span className="text-white">{currentVerbMeaning}</span></div>
                    
                    <Select
                      value={tenses[tenseIndex]}
                      onValueChange={(value) => {
                        const idx = tenses.indexOf(value as (typeof tenses)[number])
                        if (idx !== -1) {
                          setTenseIndex(idx)
                        }
                      }}
                    >
                      <SelectTrigger className="h-8 rounded-4xl w-[220px] text-xs">
                        <SelectValue placeholder="Select tense" />
                      </SelectTrigger>
                      <SelectContent>
                        {tenses.map((tense) => (
                          <SelectItem key={tense} value={tense}>
                            {formatTense(tense)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                    <div className="flex flex-col justify-center items-center gap-3 text-base">
                      {pronouns.map((p, idx) => {
                        const value = conjugate(currentVerb, tenses[tenseIndex], idx)
                        return (
                          <div key={`${tenses[tenseIndex]}-${idx}`} className="flex flex-row items-center gap-2">
                            <span className="text-muted-foreground font-medium">{p}</span>
                            <span className="text-right font-semibold">{value || "-"}</span>
                            <button
                              type="button"
                              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                              aria-label={`Copy ${p} conjugation`}
                              onClick={(e) => {
                                e.stopPropagation()
                                if (!value) return
                                if (typeof navigator !== "undefined" && navigator.clipboard) {
                                  navigator.clipboard.writeText(`${p} ${value}`)
                                  toast("Conjugation copied", {
                                    description: `Copied ${p} (${formatTense(tenses[tenseIndex])}): ${value}`,
                                  })
                                }
                              }}
                            >
                              <Copy className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

    </AnimatePresence>
  )
}
