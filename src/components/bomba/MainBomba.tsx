"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RotateCcw, Check, Shuffle, Trophy, ArrowDownUp, ArrowUpDown } from "lucide-react"
import { BlurFade } from "../ui/blur-fade"

interface Set {
  title: string
  vocab: [string, string][]
}

interface GridCell {
  id: number
  type: "word" | "bomb"
  word?: [string, string]
  isDisabled: boolean
}

export default function MainBomba({ currentSet }: { currentSet: Set }) {
  const [chosenWords, setChosenWords] = useState<[string, string][]>([])
  const [hasChosenWords, setHasChosenWords] = useState(false)
  const [gridCells, setGridCells] = useState<GridCell[]>([])
  const [selectedCell, setSelectedCell] = useState<number | null>(null)
  const [showSide1, setSide1Show] = useState<boolean>(true);

  const amountEarned = 225;


  // TEAM LOGIC
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [currentTeam, setCurrentTeam] = useState<1 | 2>(1)
  const [refScore, setRefScore] = useState<number>(0);

  // audio ref (mounted at top-level so it's available on click)
  const explosionRef = useRef<HTMLAudioElement | null>(null)

  const handleFinalize = (words: [string, string][]) => {
    setChosenWords(words)
    setHasChosenWords(true)
  }

  useEffect(() => {
    if (!hasChosenWords) return

    const cells: GridCell[] = []

    chosenWords.forEach((word, i) => {
      cells.push({ id: i, type: "word", word, isDisabled: false })
    })

    for (let i = 20; i < 25; i++) {
      cells.push({ id: i, type: "bomb", isDisabled: false })
    }

    setGridCells(cells.sort(() => Math.random() - 0.5))
  }, [hasChosenWords, chosenWords])

  const handleCellClick = (index: number) => {
    const cell = gridCells[index]

    // PLAY IF BOMBA — explosionRef is mounted at top-level so it should exist
    if (cell.type === "bomb" && explosionRef.current) {
      explosionRef.current.currentTime = 0
      explosionRef.current.playbackRate = 0.5  // half speed
      setTimeout(() => {
        explosionRef.current?.play().catch(() => { })
      }, 100)  // 0.1 seconds delay
      if (currentTeam === 1) {
        setRefScore(team1Score)
        setTeam1Score(0)
      }
      else {
        setRefScore(team2Score)
        setTeam2Score(0)
      }
    }


    // mark disabled and open expanded
    setGridCells((prev) =>
      prev.map((cell, i) => (i === index ? { ...cell, isDisabled: true } : cell))
    )
    setSelectedCell(index)
  }

  if (!hasChosenWords) {
    return <WordChooser currentSet={currentSet} onFinalize={handleFinalize} />
  }

  function getOppositeTeam(currentTeam: number) {
    return currentTeam === 1 ? 2 : 1
  }

  return (
    <div className="p-6 flex flex-row gap-8 w-full justify-center">
      {/* AUDIO ELEMENT ALWAYS MOUNTED */}
      <audio
        ref={explosionRef}
        src="/loud-explosion-425457.mp3"
        preload="auto"
      />

      {/* GRID */}
      <div className="grid grid-rows-5 w-[80vh] h-[80vh] grid-cols-5 gap-3">
        {gridCells.map((cell, index) => (
          <BlurFade key={index} delay={0.3 + (0.07 * index)}>
            <motion.div

              layoutId={`cell-${index}`}
              className="w-20 h-20 aspect-square"
            >
              <Button
                className="w-full shadow-xl h-full text-2xl font-bold rounded-3xl cursor-pointer"
                onClick={() => !cell.isDisabled && handleCellClick(index)}
                disabled={cell.isDisabled}
              >
                {index + 1}
              </Button>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      {/* SCOREBOARD */}
      <div className="flex flex-col max-w-[200px] w-full gap-4 justify-center">
        <TeamCard
          number={1}
          points={team1Score}
          isActive={currentTeam === 1}
          onScoreChange={setTeam1Score}
        />
        <TeamCard
          number={2}
          points={team2Score}
          isActive={currentTeam === 2}
          onScoreChange={setTeam2Score}
        />
        <p className="text-center text-sm">Press CTRL and + to zoom in and CTRL and - to zoom out.</p>
      </div>

      {/* EXPANDED CARD */}
      <AnimatePresence>
        {selectedCell !== null && gridCells[selectedCell] && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => {
                setSelectedCell(null)
                setCurrentTeam((prev) => (prev === 1 ? 2 : 1))
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* EXPANDING CARD */}
            <motion.div
              layoutId={`cell-${selectedCell}`}
              className="fixed left-1/2 top-1/2 z-50 h-[95vh] w-[90vw] -translate-x-1/2 -translate-y-1/2"
            >
              <Card className="px-4 py-8 w-full h-full rounded-3xl flex flex-col">
                <CardHeader>
                  <CardTitle className="text-5xl">{selectedCell + 1}</CardTitle>

                  <CardDescription className="text-xl">
                    {gridCells[selectedCell].type === "bomb"
                      ? "💣 Bomb Card"
                      : gridCells[selectedCell].word?.[0]}
                    {gridCells[selectedCell].type !== "bomb" && <Button variant={"link"} className="flex w-min flex-row gap-2 " onClick={() => {
                      setSide1Show(!showSide1)
                    }}>
                      <span>{showSide1 ? "Show" : "Hide"} Answer </span> {showSide1 ? <ArrowDownUp /> : <ArrowUpDown />}
                    </Button>}

                  </CardDescription>

                  <CardAction>
                    <Button
                      className="text-md"
                      onClick={() => {
                        setSelectedCell(null);
                        setCurrentTeam((prev) => (prev === 1 ? 2 : 1));
                        setSide1Show(true);
                      }}
                    >
                      Close
                    </Button>
                  </CardAction>
                </CardHeader>

                <CardContent className="flex flex-col items-center justify-center flex-1 gap-6">
                  {/* WORD OR BOMB DISPLAY */}
                  {gridCells[selectedCell].type === "bomb" ? (
                    <div className="flex flex-col gap-2">
                      <div className="flash-bomba w-full h-full py-4 flex flex-col items-center justify-center text-center rounded-3xl">
                        <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold flex items-center gap-4">
                          💣 <span>BOMBA</span> 💣
                        </p>
                        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4">
                          BOOM!
                        </p>

                        {/* audio element removed from here because it's mounted above */}
                      </div>
                      <div>
                        <Card className="flex w-[25vw] mx-auto flex-row justify-between">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <h3 className="text-[1.5rem] font-bold tracking-wider w-[200px]">TEAM {currentTeam}</h3>
                            </div>
                          </CardHeader>

                          <CardContent>
                            <div className="flex items-center gap-3">
                              <Trophy
                                className="w-6 h-6"
                              />

                              <div className="flex flex-col">
                                <span className="text-md text-muted-foreground uppercase tracking-wide">Points</span>
                                <NumberTicker className="text-[3rem]" delay={0.7} startValue={refScore} value={0} />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center gap-4">
                      {/* BIG SPANISH WORD */}
                      <h2 className="font-extrabold leading-tight "
                      style={{
                        fontSize: (gridCells[selectedCell].word?.[showSide1 ? 0 : 1] || "").length > 20 ? "2rem" : "4rem"
                      }}>
                        {gridCells[selectedCell].word?.[showSide1 ? 0 : 1]}
                      </h2>

                      {/* INSTRUCTIONS */}
                      <div className="space-y-2">
                        {
                          showSide1 ? <>
                            <p className="text-[clamp(1.2rem,2.4vw,2rem)] text-muted-foreground font-medium">
                              Team {currentTeam}, here’s your mission:
                            </p>

                            <p className="text-[clamp(1rem,2vw,1.5rem)] tracking-wide font-semibold">
                              1. Translate this word into English/Conjugate.
                            </p>
                          </> : <>
                            <p className="text-[clamp(1.2rem,2.4vw,2rem)] text-muted-foreground font-medium">
                              The answer is provided above.
                            </p>
                          </>
                        }
                      </div>
                    </div>
                  )}

                  {/* BIG SCORING BUTTONS */}
                  {gridCells[selectedCell].type !== "bomb" && (
                    <div className="mt-6 flex gap-6 justify-center">
                      <Button
                        className="cursor-pointer px-8 py-6 text-[1.2rem] font-bold"
                        onClick={() => {
                          if (currentTeam === 1) setTeam1Score(team1Score + amountEarned)
                          else setTeam2Score(team2Score + amountEarned)

                          // auto-close & switch
                          setSelectedCell(null)
                          setCurrentTeam((prev) => (prev === 1 ? 2 : 1))
                          setSide1Show(true);
                        }}
                      >
                        +{amountEarned} points for Team {currentTeam}
                      </Button>

                      <Button
                        variant="destructive"
                        className="cursor-pointer px-8 py-6 text-[1.2rem] font-bold"
                        onClick={() => {
                          const stealTeam = currentTeam === 1 ? 2 : 1

                          if (stealTeam === 1) setTeam1Score(team1Score + amountEarned)
                          else setTeam2Score(team2Score + amountEarned)

                          // auto-close & switch
                          setSelectedCell(null)
                          setCurrentTeam((prev) => (prev === 1 ? 2 : 1))
                          setSide1Show(true);
                        }}
                      >
                        Team {getOppositeTeam(currentTeam)} steals +{amountEarned} points
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------
      WORD CHOOSER (unchanged)
------------------------------ */
interface WordChooserProps {
  currentSet: Set
  onFinalize?: (words: [string, string][]) => void
}

export function WordChooser({ currentSet, onFinalize }: WordChooserProps) {
  const [chosenWords, setChosenWords] = useState<[string, string][]>([])

  const isWordSelected = (word: [string, string]) =>
    chosenWords.some(([w1, w2]) => w1 === word[0] && w2 === word[1])

  const toggleWord = (word: [string, string]) => {
    if (isWordSelected(word)) {
      setChosenWords(chosenWords.filter(([w1, w2]) => w1 !== word[0] || w2 !== word[1]))
    } else {
      if (chosenWords.length < 20) {
        setChosenWords([...chosenWords, word])
      }
    }
  }

  const fillRandomly = () => {
    const needed = 20 - chosenWords.length
    if (needed <= 0) return

    const available = currentSet.vocab.filter((word) => !isWordSelected(word))
    const shuffled = [...available].sort(() => Math.random() - 0.5)
    const toAdd = shuffled.slice(0, needed)

    setChosenWords([...chosenWords, ...toAdd])
  }

  const reset = () => setChosenWords([])
  const handleFinalize = () => onFinalize?.(chosenWords)
  const remainingCount = 20 - chosenWords.length
  const canFinalize = chosenWords.length === 20

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">{currentSet.title}</h1>
        <p className="text-pretty text-muted-foreground">
          Select 20 words from the vocabulary list below for your practice session
        </p>
      </div>

      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Badge variant={canFinalize ? "default" : "secondary"} className="px-4 py-2 text-lg">
              {chosenWords.length} / 20 Selected
            </Badge>
            {remainingCount > 0 && (
              <span className="text-sm text-muted-foreground">{remainingCount} more needed</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={fillRandomly} disabled={remainingCount <= 0}>
              <Shuffle className="mr-2 size-4" />
              Fill Randomly
            </Button>
            <Button variant="outline" size="sm" onClick={reset} disabled={chosenWords.length === 0}>
              <RotateCcw className="mr-2 size-4" />
              Reset
            </Button>
            <Button size="sm" onClick={handleFinalize} disabled={!canFinalize}>
              <Check className="mr-2 size-4" />
              Finalize Selection
            </Button>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="mb-4 text-lg font-semibold">Available Words</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currentSet.vocab.map((word, i) => {
            const selected = isWordSelected(word)
            return (
              <button
                key={i}
                onClick={() => toggleWord(word)}
                disabled={!selected && chosenWords.length >= 20}
                className={`group relative cursor-pointer rounded-lg border-2 p-4 text-left transition-all hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 ${selected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/50"
                  }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1 space-y-1">
                    <p className="font-semibold text-foreground">{word[0]}</p>
                    <p className="text-sm text-muted-foreground">{word[1]}</p>
                  </div>
                  {selected && (
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="size-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {chosenWords.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-semibold">Your Selection</h2>
          <Card className="p-4">
            <div className="flex flex-wrap gap-2">
              {chosenWords.map((word, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="cursor-pointer px-3 py-1.5 hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => toggleWord(word)}
                >
                  {word[0]}
                  <span className="ml-1.5 text-xs opacity-70">×</span>
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

/* ------------------------------
      TEAM CARD (unchanged)
------------------------------ */
export function TeamCard({
  number,
  points = 0,
  isActive = false,
}: {
  number: number
  points?: number
  isActive?: boolean
  onScoreChange?: (p: number) => void
}) {
  const teamColor = number === 1 ? "team1" : "team2"

  return (
    <Card
      className="w-[200px] transition-all duration-300"
      style={
        isActive
          ? { borderWidth: "3px", borderColor: "#FF0000" }
          : { borderWidth: "2px" }
      }
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold tracking-wider">TEAM {number}</h3>
          {isActive && (
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: `hsl(var(--${teamColor}))` }}
            />
          )}
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-3">
          <Trophy
            className="w-6 h-6"
            style={
              isActive
                ? { color: `#FF0000` }
                : { color: "#0000FF" }
            }
          />

          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Points</span>
            <span
              className="text-3xl font-bold tabular-nums"
              style={isActive ? { color: `hsl(var(--${teamColor}))` } : undefined}
            >
              {points}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
