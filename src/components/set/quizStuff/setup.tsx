"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Sun, Flame, Clock, Play, Settings, BookOpenCheck, Dices } from "lucide-react"
import { cn } from "@/lib/utils"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { InteractiveHoverButton } from "@/components/aceternity/IntHoverButton"
import { BorderBeam } from "@/components/aceternity/borderBeam"

interface QuizSetupProps {
  onStartQuiz: (settings: QuizSettings) => void
}

export interface QuizSettings {
  streakMode: boolean
  timerMode: boolean
  randomMode: boolean
}

export function QuizSetup({ onStartQuiz }: QuizSetupProps) {
  const [streakMode, setStreakMode] = useState(true)
  const [timerMode, setTimerMode] = useState(true)
  const [randomMode, setRandomMode] = useState(true)

  const handleStartQuiz = () => {
    onStartQuiz({
      streakMode,
      timerMode,
      randomMode
    })
  }

  return (
    <div className="flex-1 flex flex-col w-full">
      <Card className="w-[90vw] mx-auto md:w-[70vw] p-8 mb-8 flex flex-col lg:flex-row rounded-3xl">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="text-center mb-8">
            <BookOpenCheck className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-bold text-2xl mb-2">Select modes...</h2>
            <p className="text-muted-foreground text-sm">
              Choose your challenge modes for an enhanced learning experience
            </p>
          </div>
          {/* Preview of selected modes */}
          <div className=" p-4 mt-auto bg-muted/30 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Selected Features:</h4>
            <div className="flex flex-wrap gap-2">
              {streakMode && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium dark:bg-orange-900/30 dark:text-orange-400">
                  <Flame className="w-3 h-3" />
                  Streak Tracking
                </span>
              )}
              {timerMode && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium dark:bg-blue-900/30 dark:text-blue-400">
                  <Clock className="w-3 h-3" />
                  Time Challenge
                </span>
              )}
              {randomMode && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium dark:bg-red-900/30 dark:text-red-400">
                  <Dices className="w-3 h-3" />
                  Random Challenge
                </span>
              )}
              {!streakMode && !timerMode && !randomMode && <span className="text-muted-foreground text-xs">Standard quiz mode</span>}
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-10 w-full lg:w-1/2 lg:mt-auto justify-center items-center lg:justify-end lg:items-end">
          <div className=" flex flex-col gap-2">
            {/* Streak Mode Option */}
            <Card
              className={cn(
                "p-4 cursor-pointer transition-all duration-200 hover:shadow-md border-2",
                streakMode
                  ? "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800"
                  : "border-border hover:bg-muted/50",
              )}
              onClick={() => setStreakMode(!streakMode)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn("p-2 rounded-lg", streakMode ? "bg-orange-100 dark:bg-orange-900/30" : "bg-muted")}
                  >
                    <Flame className={cn("w-5 h-5", streakMode ? "text-orange-600" : "text-muted-foreground")} />
                  </div>
                  <div>
                    <h3 className="font-medium">Streak Mode</h3>
                    <p className="text-sm text-muted-foreground">
                      Track consecutive correct answers and unlock difficulty levels
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    streakMode ? "bg-orange-500 border-orange-500" : "border-muted-foreground",
                  )}
                >
                  {streakMode && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            </Card>

            {/* Timer Mode Option */}
            <Card
              className={cn(
                "p-4 cursor-pointer transition-all duration-200 hover:shadow-md border-2",
                timerMode
                  ? "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800"
                  : "border-border hover:bg-muted/50",
              )}
              onClick={() => setTimerMode(!timerMode)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", timerMode ? "bg-blue-100 dark:bg-blue-900/30" : "bg-muted")}>
                    <Clock className={cn("w-5 h-5", timerMode ? "text-blue-600" : "text-muted-foreground")} />
                  </div>
                  <div>
                    <h3 className="font-medium">Timer Challenge</h3>
                    <p className="text-sm text-muted-foreground">
                      Answer quickly to earn bonus points and increase the challenge
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    timerMode ? "bg-blue-500 border-blue-500" : "border-muted-foreground",
                  )}
                >
                  {timerMode && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

            </Card>

             {/* Random Mode Option */}
             <Card
              className={cn(
                "p-4 cursor-pointer transition-all duration-200 hover:shadow-md border-2",
                randomMode
                  ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800"
                  : "border-border hover:bg-muted/50",
              )}
              onClick={() => setRandomMode(!randomMode)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", randomMode ? "bg-red-100 dark:bg-red-900/30" : "bg-muted")}>
                    <Dices className={cn("w-5 h-5", randomMode ? "text-red-600" : "text-muted-foreground")} />
                  </div>
                  <div>
                    <h3 className="font-medium">Random Sort of Questions</h3>
                    <p className="text-sm text-muted-foreground">
                      Questions are presented in a random order rather than sequentially.
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    randomMode ? "bg-blue-500 border-blue-500" : "border-muted-foreground",
                  )}
                >
                  {randomMode && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>

            </Card>
          </div>




          <InteractiveHoverButton onClick={handleStartQuiz} className="cursor-pointer">
            <span className="flex flex-row justify-center items-center">
              <Play className="w-4 h-4 mr-2 " />
              <span>Start Quiz</span>
            </span>
          </InteractiveHoverButton>
        </div>

      </Card>

      <div className="text-center pb-8">
        <span className="text-muted-foreground text-sm">Customize your learning experience with challenge modes</span>
      </div>
    </div>
  )
}
