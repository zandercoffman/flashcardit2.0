"use client"

/* eslint-disable */
import React, { useEffect, useMemo, useState } from "react"
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
import jsESverb from "@/lib/conjugator/jsESverb"
import { toast } from "sonner"
import { useSidebar } from "@/components/ui/sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface Set {
  title: string
  vocab: [string, string][] // Array of tuples with two strings
}

export default function FlashcardHolder({ set }: { set: Set }) {
  const { toggleSidebar, isMobile, state } = useSidebar()
  const [api, setApi] = useState<CarouselApi>()
  const conjugator = useMemo(() => {
    const Conjugator = jsESverb as unknown as {
      new (): { conjugate: (word: string) => Record<string, string> | null }
    }
    return new Conjugator()
  }, [])

  const PAGE_SIZE = 30
  const [visibleCount, setVisibleCount] = useState(() => Math.min(PAGE_SIZE, set.vocab.length))

  const [current, setCurrent] = useState(1)
  const [isFlipped, setIsFlippedS] = useState<boolean>(false)
  const [count, setCount] = useState(1)
  const [showWordList, setShowWordList] = useState(false)

  const [pressedShowAllWords, setPressedShowAllWords] = useState(false)
  const [pressShowConjugation, setPressShowConjugation] = useState(false)

  const [refs] = useState<React.RefObject<HTMLDivElement | null>[]>(() => new Array(set.vocab.length).fill(0).map(() => React.createRef<HTMLDivElement>()))

  const amtOfCardsToShow = 10;

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(set.vocab.length)
    setCurrent(api.selectedScrollSnap() + 1)

    const handleSelect = () => {
      const nextIndex = api.selectedScrollSnap()
      setCurrent(nextIndex + 1)

      if (nextIndex >= visibleCount - 5) {
        setVisibleCount((prev) => Math.min(set.vocab.length, prev + PAGE_SIZE))
      }
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
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

  const WORD_LIST_PAGE_SIZE = 150
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

  const getConjugationKey = (tense: string, personIndex: number) => {
    const [moodRaw, ...rest] = tense.split("_")
    const mood = moodRaw.toLowerCase()
    const normalizedTense = rest.join("_").toLowerCase()
    const person = ["1", "2", "3", "4", "5", "6"][personIndex]
    if (!person) return null

    if (mood === "indicative") {
      const map: Record<string, string> = {
        present: "pre",
        imperfect: "cop",
        preterite: "pas",
        future: "fut",
        perfect: "pp",
        pluperfect: "pasp",
        future_perfect: "futp",
        preterite_perfect: "prep",
      }
      const suffix = map[normalizedTense]
      return suffix ? `${person}${suffix}` : null
    }

    if (mood === "subjunctive") {
      const map: Record<string, string> = {
        present: "pres",
        imperfect_ra: "pass",
        imperfect_se: "passb",
        future: "futs",
        perfect: "presps",
        pluperfect: "pastps",
        future_perfect: "fps",
      }
      const suffix = map[normalizedTense]
      return suffix ? `${person}${suffix}` : null
    }

    if (mood === "conditional") {
      const map: Record<string, string> = {
        present: "pos",
        perfect: "conp",
      }
      const suffix = map[normalizedTense]
      return suffix ? `${person}${suffix}` : null
    }

    return null
  }

  const conjugate = (verb: string, tense: string, personIndex: number) => {
    try {
      const conjugations = conjugator.conjugate(verb)
      if (!conjugations) return ""
      const key = getConjugationKey(tense, personIndex)
      if (!key) return ""
      return conjugations[key] || ""
    } catch {
      return ""
    }
  }

  const [tenseIndex, setTenseIndex] = useState(0)
  const isDesktopViewport = !isMobile
  const isDesktopSidebarOpen = state === "expanded"
  const showDesktopSidePanel =
    isDesktopViewport && (pressedShowAllWords || (pressShowConjugation && isVerb))

  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        className={cn(
          "mx-auto my-auto flex w-full flex-col gap-4 relative px-3 py-4 sm:px-4",
          showDesktopSidePanel && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32vw)] lg:items-start lg:gap-6",
        )}
      >
        <div
          className={cn(
            "mx-auto my-auto mt-2 sm:mt-6 flex w-full flex-col gap-4 relative lg:flex-row lg:col-start-1",
            isDesktopViewport && "lg:justify-center",
            isDesktopViewport && isDesktopSidebarOpen && !showDesktopSidePanel && "lg:translate-x-[-10vw]",
            isDesktopViewport && isDesktopSidebarOpen && showDesktopSidePanel && "lg:translate-x-0",
          )}
        >
          {/* Main Flashcard Area */}
          <div
            className={cn(
              "mx-auto flex w-full flex-1 flex-col",
              "max-w-[min(100%,50rem)]",
              pressedShowAllWords || (pressShowConjugation && isVerb) ? "select-none" : "",
            )}
          >
            <div className="relative">
              <Carousel
                className={cn(
                  "relative mx-auto z-[3]",
                  isMobile ? "w-full h-[50svh]" : "w-full h-full",
                )}
                setApi={setApi}
                orientation={isMobile ? "vertical" : "horizontal"}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className={cn("flex", isMobile && "h-full")}>
                  {(() => {
                    const currentIndex = current - 1
                    const windowStart = Math.max(0, currentIndex - amtOfCardsToShow)
                    const windowEnd = Math.min(set.vocab.length - 1, currentIndex + amtOfCardsToShow)
                    return set.vocab.map((vocab, index) => (
                      <CarouselItem
                        key={index}
                        className={cn(
                          "flex-shrink-0 w-auto p-2 flex items-center justify-center",
                          isMobile
                            ? "h-full basis-full grow-0 pt-0 mb-0"
                            : "[@media(max-height:597px)]:mb-6 [@media(max-height:597px)]:scale-[0.9] [@media(max-height:597px)]:origin-top mb-14 md:mb-0",
                        )}
                      >
                        {index >= windowStart && index <= windowEnd ? (
                          <FlashCard front={vocab[0]} back={vocab[1]} setIsFlippedS={setIsFlippedS} ref={refs[index] as React.RefObject<HTMLDivElement>} />
                        ) : (
                          <div className="h-[220px] w-full" />
                        )}
                      </CarouselItem>
                    ))
                  })()}
                </CarouselContent>
                <CarouselPrevious
                  className={cn(
                    isMobile
                      ? "absolute left-1/3 -translate-x-2/3 top-full mt-2 z-20"
                      : "absolute left-6 md:left-[-15px] top-full mt-2 lg:top-1/2 lg:mt-0 transform lg:-translate-y-1/2",
                  )}
                />
                <CarouselNext
                  className={cn(
                    isMobile
                      ? "absolute left-2/3 -translate-x-1/3 top-full mt-2 z-20"
                      : "absolute right-6 md:right-0 top-full mt-2 lg:top-1/2 lg:mt-0 transform lg:-translate-y-1/2",
                  )}
                />
              </Carousel>
            </div>

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


          </div>


        </div>
        <AnimatePresence>
          {pressedShowAllWords && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "z-40",
                !isDesktopViewport
                  ? "fixed inset-x-0 bottom-0 h-[58vh] rounded-t-2xl border bg-background/95 backdrop-blur px-3 py-2"
                  : "w-[90%] lg:col-start-2 lg:row-start-1 lg:mt-4 h-[78vh] rounded-2xl bg-background/95 backdrop-blur p-3 shadow-xl",
              )}
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold">All Cards</h2>
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close all cards panel"
                  onClick={() => setPressedShowAllWords(false)}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <ScrollArea className={cn(isMobile ? "h-[calc(58vh-4rem)]" : "h-[calc(78vh-4rem)] pr-1")}>
                {
                  Math.max(1, Math.ceil(set.vocab.length / WORD_LIST_PAGE_SIZE)) > 1 && <div className="mb-2 flex items-center justify-between">
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
                        className={`mt-2 mb-2 flex w-full cursor-pointer flex-row items-start gap-4 rounded-lg border p-3 text-left transition-colors ${absoluteIndex === current - 1 ? "border-primary bg-primary/10" : "border-transparent hover:bg-muted"
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
              className={cn(
                "z-40",
                !isDesktopViewport
                  ? "fixed inset-x-0 bottom-0 h-[64vh] rounded-t-2xl border bg-background/95 backdrop-blur px-3 py-2"
                  : "w-[90%]  lg:col-start-2 lg:row-start-1 lg:mt-4 h-[78vh] rounded-2xl bg-background/95 backdrop-blur p-3 shadow-xl",
              )}
            >
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold"></h2>
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close conjugation panel"
                  onClick={() => setPressShowConjugation(false)}
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <ScrollArea className={cn(isMobile ? "h-[calc(64vh-4rem)]" : "h-[calc(78vh-4rem)] pr-1")}>
                <div className={cn("flex flex-col items-center justify-center", isMobile ? "min-h-full" : "min-h-[calc(78vh-4rem)]")}>
                  <div className="mb-4 w-full rounded-lg p-3">
                    <div className="flex flex-col gap-2 items-center justify-between mb-3">
                    <div className="text-sm text-center font-semibold text-muted-foreground">Spanish Conjugation Tenses for<br/> <span className="dark:text-white text-black">{currentVerb}</span> - <span className="text-black dark:text-white">{currentVerbMeaning}</span></div>
                    
                    <Select
                      value={tenses[tenseIndex]}
                      onValueChange={(value) => {
                        const idx = tenses.indexOf(value as (typeof tenses)[number])
                        if (idx !== -1) {
                          setTenseIndex(idx)
                        }
                      }}
                    >
                      <SelectTrigger className="h-8 rounded-4xl w-full max-w-[260px] text-xs">
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
