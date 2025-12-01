"use client"
import { LandPlot, MapPin } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"

interface StudyCarouselProps {
  vocab: [string, string][]
  title: string
  totalDays: number
  currentDay?: number
  pressSelectStudying: (idx: number) => void
}

export function StudyCarousel({ vocab, title, totalDays, currentDay = 1, pressSelectStudying }: StudyCarouselProps) {
  // Distribute vocabulary across days
  const cardsPerDay = Math.ceil(vocab.length / totalDays)

  const getDayVocab = (dayIndex: number): [string, string][] => {
    const start = dayIndex * cardsPerDay
    const end = start + cardsPerDay
    return vocab.slice(start, end)
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="px-6 max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Study Progress</h3>
          <span className="text-xs text-muted-foreground">
            Day {Math.min(currentDay, totalDays)} of {totalDays}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${(Math.min(currentDay, totalDays) / totalDays) * 100}%` }}
          />
        </div>
      </div>

      <Carousel className="w-[65vw]   mx-auto">
        <CarouselContent className="">
          {Array.from({ length: totalDays }).map((_, dayIndex) => {
            const dayVocab = getDayVocab(dayIndex)
            const isCurrentDay = dayIndex === currentDay - 1

            return (
              <CarouselItem key={dayIndex} className="basis-1/3 pl-1 ">
                <div className="h-full  flex items-center justify-center">
                  <Card
                    className={`w-full h-full  transition-all duration-300 flex flex-col items-center justify-start ${isCurrentDay
                        ? "border-blue-500 border-2 shadow-lg shadow-blue-500/20 scale-[92%] "
                        : "border-border opacity-60 scale-[85%]"
                      }`}
                  >
                    <CardContent className="w-full h-full p-6 flex flex-col items-center justify-center space-y-4">
                      {
                        isCurrentDay ? <MapPin
                          className={`size-12 transition-colors text-blue-500"}`}
                        /> : <LandPlot
                          className={`size-12 transition-colors text-muted-foreground}`}
                        />
                      }


                      {/* Day label */}
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Day {dayIndex + 1}
                        </span>
                        {isCurrentDay && <Badge className="bg-blue-500 text-white">Current</Badge>}
                      </div>

                      <h3 className="text-lg font-bold text-center text-foreground">{`${title}`}</h3>

                      <ScrollArea className="w-full space-y-2 max-h-36 h-36 overflow-y-auto flex-1 flex flex-col items-center">
                        {dayVocab.length > 0 ? (
                          <div className="w-full space-y-2 flex flex-col items-center">
                            {dayVocab.map(([word, definition], idx) => (
                              <div
                                key={idx}
                                className="w-full max-w-xs p-3 rounded-lg border border-border/50 hover:border-emerald-400/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-200"
                              >
                                <p className="font-semibold text-foreground text-sm text-center">{word}</p>
                                <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-2">
                                  {definition}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground text-center py-4">No vocabulary for this day</p>
                        )}
                      </ScrollArea>

                      {/* Word count footer */}
                      <div className="pt-3 border-t border-border/50 text-center w-full">
                        <span className="text-xs text-muted-foreground font-medium">
                          {dayVocab.length} word{dayVocab.length !== 1 ? "s" : ""} to learn { dayIndex > 0 && "+ Review"}
                        </span>
                      </div>
                      <div className="w-full flex flex-col gap-1">
                        {
                          isCurrentDay ? <Button onClick={() => {
                            pressSelectStudying(dayIndex)
                          }}>Start Studying</Button> : <Button disabled>Wait Until Tomorrow</Button>
                        }
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
      </Carousel>

      {/* Journey summary */}
      <div className="px-6 py-4 rounded-lg bg-muted/50 border border-border max-w-2xl mx-auto w-full text-center">
        <p className="text-sm text-foreground">
          <span className="font-semibold">Your Learning Journey:</span>
          <span className="text-muted-foreground ml-2">
            {vocab.length} vocabulary words • {totalDays} study days • ~{Math.ceil(vocab.length / totalDays)} words per
            day
          </span>
        </p>
      </div>
    </div>
  )
}
