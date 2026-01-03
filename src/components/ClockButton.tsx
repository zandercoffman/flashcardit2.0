"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Clock, Eye, EyeClosed, Music, Play, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollArea } from "./ui/scroll-area"
import { custom } from "zod"
import { Progress } from "./ui/progress"
import { Badge } from "./ui/badge"

/**
 * Alright, straight up: most people **don’t just do “25/5” blindly** anymore. There are a few *very common patterns* people actually use, and if you’re building an app, you should support **modes + auto-adaptation**.

Here’s the real-world breakdown 👇

---

## 1. Classic Pomodoro (the default)

This is still the baseline everyone expects.

**Structure**

* 25 min focus
* 5 min break
* After 4 sessions → 15–30 min long break

**Why people use it**

* Low mental barrier
* Good for studying, reading, light dev work

**App take**

* This should be your **“Standard” mode**
* Auto long break after 4 focus blocks

---

## 2. Deep Work / Developer Mode (very common)

People who code or write *hate* stopping every 25 minutes.

**Structure**

* 50 min focus
* 10 min break
* Long break every 2–3 sessions

**Why**

* Flow state matters more than frequent breaks
* Switching context too often kills productivity

**App take**

* Call this something like **“Deep Focus”**
* Make it one tap, not hidden in settings

---

## 3. Short Sprint / ADHD-friendly mode

Super popular for people who struggle to start.

**Structure**

* 15–20 min focus
* 5 min break
* Long break optional

**Why**

* Reduces resistance
* Feels achievable

**App take**

* This mode is clutch
* Market it as **“Quick Start”** or **“Low Energy”**

---

## 4. Time-boxed Sessions (flexible / modern)

This is becoming more common.

**Structure**

* User sets total time (e.g. 2 hours)
* App auto-splits into:

  * Focus blocks (25–50 min)
  * Smart breaks (5–10 min)

**Example**
2 hours →

* 40 focus
* 8 break
* 40 focus
* 8 break
* 24 focus

**App take**

* This feels *premium*
* Great differentiator

---

## 5. Adaptive / Smart Pomodoro (best idea for your app)

This is where your app can actually stand out.

**How people WANT it to work**

* Start with 25 min
* If user doesn’t pause or skip → increase next session
* If they quit early → shorten next session

**Example logic**

```text
Session completed?
  yes → +5 min focus (max 60)
  no  → -5 min focus (min 15)
```

Breaks scale with focus:

* ≤30 min → 5 min break
* 31–50 → 8–10 min
* 50+ → 10–15 min

**This is huge. People love this.**

---

## 6. Realistic Rule People Follow (important)

Most users:

* Skip breaks
* Extend focus when “in the zone”
* Forget to restart timers

**So your app should:**

* Auto-start next focus (optional)
* Let users **extend focus mid-session**
* Gently nudge breaks, not force them

---

## My strong opinion (dev-to-dev)

If your app only does **25/5**, it’s dead on arrival.

Minimum viable setup:

* ✅ Classic
* ✅ Deep Focus
* ✅ Quick Start
* ✅ Custom
* ⭐ Adaptive (this is the wow factor)

If you want, I can:

* Help design the **auto-splitting algorithm**
* Help name the modes (clean + Gen Z friendly)
* Help you avoid UX mistakes Pomodoro apps always make

Just tell me what stage you’re at.

 */


const swmPositions: Array<"top-left" | "top-right" | "bottom-left" | "bottom-right"> = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
]

export default function ClockButton() {
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [swmPosition, setSwmPosition] = useState<"top-left" | "top-right" | "bottom-left" | "bottom-right">("bottom-right")

    const handleMouseEnter = () => setHovered(true)
    const handleMouseLeave = () => setHovered(false)


    const cardRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [hasOpened, setHasOpened] = useState<boolean>(false);

    const [currentTime, setCurrentTime] = useState<number>(2300); //in seconds
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const [totalSetTime, setTotalSetTime] = useState<number>(3600); // in seconds
    const [hasSelectedTMinimized, setHasSelectedTMinimized] = useState<boolean>(true);

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cardRef.current &&
                !cardRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Helper for Study With Me embed position
    const getSwmStyle = () => {
        switch (swmPosition) {
            case "top-left": return { top: "10px", left: "10px" }
            case "top-right": return { top: "10px", right: "10px" }
            case "bottom-left": return { bottom: "10px", left: "10px" }
            case "bottom-right": return { bottom: "10px", right: "10px" }
        }
    }


    return (
        <div className="relative inline-block" onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="flex flex-row inline-block">
                <Button
                    ref={buttonRef}
                    variant="ghost"
                    className="p-2 flex flex-row gap-2 h-6 lg:h-8 px-0"
                    style={{
                        width: hasSelectedTMinimized ? "80px" : "40px",
                        transition: "width 0.3s ease",
                    }}
                    onClick={() => {
                        setOpen(!open)
                        if (!hasOpened)
                            setHasOpened(true)
                    }}
                >
                    <Clock className="size-4 lg:size-6" />
                    {hasOpened && <span className="absolute inline-flex right-0 top-0 size-1 rounded-full bg-sky-400 opacity-75"></span>}
                    {hasSelectedTMinimized && <h1>{formattedTime}</h1>}
                </Button>

            </motion.div>

            {/* Main card */}
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.5, y: 1 }}
                animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.5, y: open ? 8 : 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                style={{ visibility: open ? "visible" : "hidden", width: "860px", height: "460px" }}
                className="absolute top-full mt-2 left-0 px-6 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-3 shadow-sm z-[50] origin-top-left"
            >
                <div className="relative w-full h-full flex flex-row gap-6">

                    {/* Right: video list */}
                    <ScrollArea className="flex w-full flex-col gap-2 h-[430px] overflow-y-auto">

                    </ScrollArea>
                </div>
            </motion.div>

            {/* Hover overlay */}
            {hovered && !open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 1 }}
                    animate={{ opacity: 1, scale: 1, y: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    className="absolute flex flex-row gap-2 translate-y-[-7px] left-0 w-[400px] p-4 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-3 shadow-sm z-[50] origin-top-left"
                >
                    <section className="flex-col gap-2 w-[30%] h-full mr-4">
                        <h1 className="text-4xl">{formattedTime}</h1>
                        <Badge>Session 1 / 4</Badge>
                    </section>
                    <div className="w-[70%] h-full flex flex-col gap-2 py-2">
                        <Progress value={(currentTime / totalSetTime) * 100} max={totalSetTime} />
                        <div className="flex flex-row gap-2 w-full gap-4 justify-between mt-2">
                            <Button variant="outline" size="icon-sm" onClick={() => setHasSelectedTMinimized(!hasSelectedTMinimized)}>
                                <Play />
                            </Button>
                            <section className="flex flex-row gap-2">
                                <Button variant="outline" size={"sm"} onClick={() => {
                                    setCurrentTime(currentTime + 300);
                                }}>
                                    <Plus />
                                    Add 5 min
                                </Button>
                                <Button variant="outline" size={"icon-sm"} onClick={() => setHasSelectedTMinimized(!hasSelectedTMinimized)}>
                                    {
                                        !hasSelectedTMinimized ? <Eye /> : <EyeClosed />
                                    }
                                </Button>
                            </section>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
