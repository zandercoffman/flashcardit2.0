'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState, useRef, useEffect } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Divide, WalletCards, Clock2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { StudyCarousel } from "./StudyCarousel"
import Loader from "../loader"
import { StartStudying } from "./StartStudying"

interface Set {
  title: string
  vocab: [string, string][]
}

type Rating = "again" | "hard" | "good" | "easy";
type LocalStorageInference = { id: string, ratings: Rating[], start: string, end: string }
type LocalStorageData = LocalStorageInference[]
const localStorageKey = "setsAndRatings"


export default function StudyPlan({ currentSet }: { currentSet: Set }) {
  const [selectedDays, setSelectedDays] = useState<Date[]>([])
  const [error, setError] = useState("")
  const timeRef = useRef<HTMLInputElement>(null)

  const [allStorage, setAllStorage] = useState<LocalStorageData>([])

  // Calculate cards per day
  const totalCards = currentSet.vocab.length
  const daysCount = selectedDays.length
  const cardsPerDay = daysCount > 0 ? Math.ceil(totalCards / daysCount) : 1

  
  const getDayVocab = (dayIndex: number): [string, string][] => {
    const start = dayIndex * cardsPerDay
    const end = start + cardsPerDay
    pressSelectStudying(currentSet.vocab.slice(start, end))

    return currentSet.vocab.slice(start, end)
  }

  const [mode, setMode] = useState<"setup" | "dashboard" | "startstudying" | "loading">("loading");
  const [cardsStudied, setCardStudied] = useState<[string, string][]>([]);

  //START HELPER FUNC
  const isBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize
  
    const d = new Date(date);
    d.setHours(0, 0, 0, 0); // normalize
  
    return d.getTime() < today.getTime();
  };

  const getDatesBetween = (start: Date, end: Date): Date[] => {
    const dates: Date[] = [];
    
    // clone to avoid mutating the original
    const current = new Date(start);
  
    // normalize to avoid time drift issues
    current.setHours(0, 0, 0, 0);
    const stop = new Date(end);
    stop.setHours(0, 0, 0, 0);
  
    while (current <= stop) {
      dates.push(new Date(current)); // push a copy
      current.setDate(current.getDate() + 1);
    }
  
    return dates;
  };
  
  
  //END HELPER FUNC

  // START SELECT START STUDYING

  const pressSelectStudying = (cards: [string, string][]): void => {
    setCardStudied(cards);
    setMode("startstudying");
  }

  // END SELECT START STUDYING

  //START PRELOADING - AND ALSO SAVING DATA TO LS
  useEffect(() => {
    const loadSetsFromStorage = async (): Promise<void> => {
      const data: LocalStorageData = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
      setAllStorage(data);
      const foundMatch: LocalStorageInference | undefined  = data.find(s => s.id == currentSet.title);
      if (foundMatch) {

        const firstDate = new Date(foundMatch.start);
        const lastDate = new Date(foundMatch.end);

        const dates = getDatesBetween(firstDate, lastDate);
        setSelectedDays(dates);
        
        setMode("dashboard");
      } else {
        setMode("setup");
      }
      
    
    };  

    loadSetsFromStorage();
  }, [currentSet])

  const saveNewStudyPath = () => {
    // [startDate, endDate]
    const days: [string, string] = [selectedDays[0].toString(), selectedDays[selectedDays.length - 1].toString()];
    const id = currentSet.title;
    const ratings: Rating[] = new Array(currentSet.vocab.length).fill("again");


    const data: LocalStorageInference = { id: id, ratings: ratings, start: days[0], end: days[1] };
    const allStorageCopy: LocalStorageData = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    const objCopyWithNewData = [...allStorageCopy, data];
    localStorage.setItem(localStorageKey, JSON.stringify(objCopyWithNewData));
  }
  //END PRELOADING -  AND ALSO SAVING DATA TO LS

  // START SETUP
  const handleLetsStudy = (withReminders: boolean) => {
    if (selectedDays.length === 0) {
      setError("Please select at least one day to start your Study Path")
      return
    }
    const hasPastDay = selectedDays.some(isBeforeToday);
    if (hasPastDay) {
      setError("Please select days in the future.")
      return
    }
    

    saveNewStudyPath();

    if (withReminders) {

      const reminderTime = timeRef.current?.value || "20:30:00"
      const [hours, minutes, seconds] = reminderTime.split(":").map(Number)

      // Utility: pad numbers to 2 digits
      const pad = (n: number) => String(n).padStart(2, "0")

      // Utility: fold ICS lines at 60 chars
      const foldLine = (line: string): string => {
        const max = 60
        if (line.length <= max) return line
        let out = line.slice(0, max)
        let rest = line.slice(max)
        while (rest.length > 0) {
          out += "\n " + rest.slice(0, max)
          rest = rest.slice(max)
        }
        return out
      }

      // Convert description to ICS-safe folded lines
      const formatDescription = (text: string): string => {
        const escaped = text
          .replace(/\\/g, "\\\\")
          .replace(/;/g, "\\;")
          .replace(/,/g, "\\,")
          .replace(/\n/g, "\\n")

        return foldLine(`DESCRIPTION:${escaped}`)
      }

      // Helper: convert a JS Date → YYYYMMDDTHHMMSSZ
      const toICSDate = (date: Date): string => {
        return (
          date.getUTCFullYear().toString() +
          pad(date.getUTCMonth() + 1) +
          pad(date.getUTCDate()) +
          "T" +
          pad(date.getUTCHours()) +
          pad(date.getUTCMinutes()) +
          pad(date.getUTCSeconds()) +
          "Z"
        )
      }

      const nowStamp = toICSDate(new Date())
      const totalCards = currentSet.vocab.length
      const cardsPerDay = Math.ceil(totalCards / selectedDays.length)

      // split vocab into chunks
      const chunks: [string, string][][] = []
      for (let i = 0; i < selectedDays.length; i++) {
        chunks.push(currentSet.vocab.slice(i * cardsPerDay, (i + 1) * cardsPerDay))
      }

      let ics = "BEGIN:VCALENDAR\n"
      ics += "VERSION:2.0\n"
      ics += "CALSCALE:GREGORIAN\n"
      ics += "PRODID:-//FlashcardIt//StudyPlan//EN\n"

      selectedDays.forEach((day, index) => {
        const studyDate = new Date(day)
        studyDate.setHours(hours, minutes, seconds, 0)

        const endDate = new Date(studyDate.getTime() + 30 * 60 * 1000) // +30 minutes

        const vocabLines = chunks[index]
          .map(([a, b]) => `${a} → ${b}`)
          .join("\n")

        const eventTitle = `Flashcard/It Study Day #${index + 1}`

        ics += "BEGIN:VEVENT\n"
        ics += `UID:${crypto.randomUUID()}\n`
        ics += `DTSTAMP:${nowStamp}\n`
        ics += `DTSTART:${toICSDate(studyDate)}\n`
        ics += `DTEND:${toICSDate(endDate)}\n`
        ics += `SUMMARY:${eventTitle}\n`
        ics += formatDescription(vocabLines) + "\n"
        ics += "END:VEVENT\n"
      })

      ics += "END:VCALENDAR"

      // download file
      const blob = new Blob([ics], { type: "text/calendar" })
      const url = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href = url
      a.download = `${currentSet.title.replace(/\s+/g, "_")}_StudyPlan.ics`
      a.click()

      URL.revokeObjectURL(url)
    }

    setMode("dashboard")
  }
  const handleSelect = (days: Date[] | undefined) => {
    if (!days) return
    setSelectedDays(days)

    if (days.length < Math.floor(totalCards / 20)) {
      setError(`Please select at least ${Math.floor(totalCards / 20)} days for your Study Path`)
    } else {
      setError("")
    }
  }
  // END SETUP

  

  if (mode === "loading") {
    return <div className="w-full h-full flex justify-center items-center">
      <Loader/>
    </div>
  }

  if (mode === "setup") {
    return <Card className="w-full" id="setup">
      <CardHeader>
        <CardTitle>Study Path</CardTitle>
        <CardDescription>
          Your personalized flashcard roadmap — spreads reviews over time for stronger memory.
        </CardDescription>
        <CardAction>
          <div className="flex gap-2 justify-center w-full">
            <Button onClick={() => handleLetsStudy(false)} variant={"secondary"}>
              Let&apos;s Study!
            </Button>
            <Button onClick={() => handleLetsStudy(true)}>Let&apos;s Study with Reminders!</Button>
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="flex w-[90%] flex-row gap-10 justify-center mx-auto">
        {/* Left info panel */}
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>{currentSet.title}</CardTitle>
            <CardDescription>
              Pick the days you wanna study on the calendar to the right, then hit Let&apos;s Study! to lock in your plan.
            </CardDescription>
          </CardHeader>

          <CardContent className=" flex flex-row justify-center">
            <div className="w-1/3 h-min rounded-full flex flex-col gap-2 justify-center items-center">
              <WalletCards className="size-16" />
              <p className="text-sm">
                <strong>Cards:</strong> {totalCards}
              </p>
            </div>

            <div className="w-1/3 h-min rounded-full flex flex-col gap-2 justify-center items-center">
              <CalendarDays className="size-16" />
              <p className="text-sm">
                <strong>Days:</strong> {daysCount}
              </p>
            </div>

            <div className="w-1/3 h-min rounded-full flex flex-col gap-2 justify-center items-center">
              <Divide className="size-16" />
              <p className="text-sm">
                <strong>~Cards/Day:</strong> {cardsPerDay + Math.floor(5 / cardsPerDay)}
              </p>
            </div>
          </CardContent>

          <CardFooter className="text-center mt-auto mx-auto">
            {daysCount < Math.floor(totalCards / 20) && (
              <p className="text-red-500 text-sm">
                Select at least {Math.floor(totalCards / 20)} days for an optimal plan.
              </p>
            )}
          </CardFooter>
        </Card>

        {/* Right calendar */}
        <Card className="flex w-1/2 flex-col gap-2 justify-center">
          <CardContent className="flex flex-col gap-2">
            <Calendar
              mode="multiple"
              selected={selectedDays}
              onSelect={handleSelect}
              className="rounded-lg mx-auto border p-2 shadow-sm daypicker-spacing"
            />
            <div className="text-center text-xs text-muted-foreground">
              {error || `Selected ${selectedDays.length} day(s). Minimum: ${Math.floor(totalCards / 20)}`}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-6 border-t px-4 !pt-4">
            <div className="flex w-full flex-col gap-3">
              <Label htmlFor="time-from">Reminder Time (Optional, for Calendar Integration)</Label>
              <div className="relative flex w-full items-center gap-2">
                <Clock2Icon className="text-muted-foreground pointer-events-none absolute left-2.5 size-4 select-none" />
                <Input
                  id="time-from"
                  type="time"
                  step="1"
                  defaultValue="20:30:00"
                  ref={timeRef}
                  className="appearance-none pl-8 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>
            </div>

          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  } else if (mode === "dashboard") {
    return <section className="size-full justify-center flex flex-col gap-2 justify-between">
      <section className="w-full"></section>
      <section className="w-full flex justify-center px-4">
        <StudyCarousel
          vocab={currentSet.vocab}
          title={currentSet.title}
          totalDays={selectedDays.length || 5}
          currentDay={1}
          pressSelectStudying={getDayVocab}
        />
      </section>
      <section className="w-full"></section>
    </section>
  } else if (mode === "startstudying") {
    return <StartStudying cards={cardsStudied} />
  } else {
    return <>

    </>
  }
}
