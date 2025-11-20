"use client"

/* eslint-disable */
import { useEffect, useState } from "react"
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
import { List, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Set {
  title: string
  vocab: [string, string][] // Array of tuples with two strings
}

export default function FlashcardHolder({ set }: { set: Set }) {
  const [api, setApi] = useState<CarouselApi>()

  const [current, setCurrent] = useState(1)
  const [isFlipped, setIsFlippedS] = useState<boolean>(false)
  const [count, setCount] = useState(1)
  const [showWordList, setShowWordList] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const jumpToCard = (index: number) => {
    if (api) {
      api.scrollTo(index)
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
      if (e.key === "ArrowLeft") {
        api?.scrollPrev()
      } else if (e.key === "ArrowRight") {
        api?.scrollNext()
      } else if (e.key === "Escape" && showWordList) {
        setShowWordList(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [api, showWordList])

  return (
    <div className="mx-auto my-auto flex flex-col lg:flex-row gap-4 relative p-4">
      {/* Main Flashcard Area */}
      <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
        <NavigationMenuFlashcardSet current={current} total={count} set={set} onWordClick={jumpToCard} />
        <div className="">
          <Carousel
            className="relative h-[100%] z-[3]"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex">
              {set.vocab.map((vocab: [string, string], index) => {
                return (
                  <CarouselItem key={index} className="flex-shrink-0 w-full md:w-96 p-2 mb-10 md:mb-0">
                    <FlashCard front={vocab[0]} back={vocab[1]} setIsFlippedS={setIsFlippedS} />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-15 md:left-0 md:top-32 top-full lg:top-1/2 transform md:-translate-y-1/2" />
            <CarouselNext className="absolute right-15 md:right-0 md:top-32 top-full lg:top-1/2 transform md:-translate-y-1/2" />
          </Carousel>

        </div>

        <div className="text-center text-xs text-muted-foreground mt-4">Use ← → or arrow keys to navigate</div>
      </div>

    </div>
  )
}
