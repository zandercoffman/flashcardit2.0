"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/button"
import { Music, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollArea } from "./ui/scroll-area"
import { AllSets, Set } from "@/lib/AllSets"
import { Badge } from "./ui/badge"
import { toast } from "sonner"

const flashcardPrompts: string[] = [
  // Keep the quiz prompt first
  "Make me a multiple-choice quiz to test my knowledge of these flashcards, with 4 options and explanations for each answer.",

  // High-importance study prompts
  "Create strong mnemonics for these flashcards. Make it vivid, playful, and easy to recall.",
  "Describe a clear, concrete mental image that captures the core idea across these flashcards.",
  "Give a short, realistic example or sentence that uses concepts from these flashcards correctly.",
  "Explain the main ideas in these flashcards in 3–4 short steps suitable for a beginner.",
  "Write true/false questions that test a common misconception from these flashcards, then give the answer.",
  "Make a short, catchy rhyme or song lyric that helps remember the key concepts in these flashcards.",
  "Create a simple analogy that connects these flashcards to an everyday experience, in one or two sentences.",
  "State a contrasting or opposite concept related to these flashcards and explain the difference in one sentence.",

  // Additional study prompts
  "List the 5 most important terms from these flashcards and explain why they matter.",
  "Organize these flashcards into categories or themes to see the bigger picture.",
  "Turn these flashcards into a fill-in-the-blank exercise for active recall.",
  "Make a chain story linking the concepts from these flashcards in a memorable narrative.",
  "Create a visual mind map layout using the flashcards’ key concepts.",
  "Suggest 3 spaced-repetition schedules to optimize memory retention with these flashcards.",
  "Write a short dialogue between two people discussing concepts from these flashcards.",
  "Summarize these flashcards in one paragraph using simple language.",
  "Generate 10 ‘what if’ scenarios that test understanding of these flashcards’ concepts.",
  "Convert the flashcards into a game format for engaging practice.",
  "Highlight common pitfalls or mistakes students make with these concepts.",
  "Create a set of challenge questions that require applying multiple flashcards together.",
  "Give a mnemonic story linking the first letters of the most important terms.",
  "Make a short video script explaining these flashcards to a beginner audience.",
  "Suggest 5 quick daily exercises to review these flashcards efficiently.",
];




export default function ChatGPTButton({
    currentSet
}: {
    currentSet: Set | undefined
}) {
    const cardRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [hasOpened, setHasOpened] = useState<boolean>(false);
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(false)

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

    const thisID = AllSets.find(set => set.set.title === currentSet?.title)?.id
    const hasValidId = Boolean(thisID)

    const buildPrompt = (prompt: string, includeJson: boolean) => {
        const title = currentSet?.title || "Unknown Set"
        const jsonPayload = JSON.stringify(currentSet ?? { title, vocab: [] }, null, 2)
        const useJson = includeJson || !hasValidId
        const sourceLine = useJson
            ? `The flashcards JSON is:\n${jsonPayload}`
            : `The flashcards are at ${window.location.origin + "/api/json/" + thisID}. Please fetch the JSON from this URL and make a GET request.`

        return `Please help me study the following flashcard set: ${title}.
${sourceLine}

${prompt}

IMPORTANT:
Do not generate study content yet.

In your next message ONLY, ask me to choose:
- Difficulty (easy / medium / hard)
- Level of detail (brief / standard / in-depth)
- Exam focus or study goal

AFTER I respond with my choices, generate the study content using these rules:
- Keep explanations concise and easy to understand
- Use examples or analogies when helpful
- Strictly tailor the content to my chosen settings

Additional context:\n`
    }

    const MAX_CHATGPT_URL_LENGTH = 2000

    const openChatGpt = async (prompt: string) => {
        const encoded = encodeURIComponent(prompt)
        const url = `https://chat.openai.com/?q=${encoded}`

        if (url.length > MAX_CHATGPT_URL_LENGTH) {
            try {
                await navigator.clipboard.writeText(prompt)
                toast.success("Prompt copied. Paste it into ChatGPT.")
            } catch {
                toast.error("Prompt is too long. Please copy and paste it into ChatGPT.")
            }
            window.alert("Your prompt was copied. Paste it into ChatGPT after the page opens.")
            window.open("https://chat.openai.com/", "_blank")
            setHasOpened(true)
            return
        }

        window.open(url, "_blank")
        setHasOpened(true)
    }




    return (
        <div className="relative inline-block">
            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="inline-block">
                <Button
                    ref={buttonRef}
                    variant="ghost"
                    className="relative cursor-pointer p-2 w-8 lg:w-8 h-6 lg:h-8 rounded-lg mr-[1.8rem]"
                    onClick={() => openChatGpt(buildPrompt("", false))}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Badge className="absolute right-[-32px] top-[-8px] text-[10px] bg-blue-600 light:text-black dark:text-white font-semibold">New</Badge>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-6 mb-[0.5] text-foreground transition-colors" viewBox="0 0 24 24"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" fill="currentColor"></path></svg>
                </Button>
            </motion.div>

            {/* Hover overlay */}
            {hovered && !open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 1 }}
                    animate={{ opacity: 1, scale: 1, y: 8 }}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="translate-y-[-6px] px-6 pt-4 flex flex-col justify-between absolute flex flex-col gap-2 top-full left-0 w-[460px] h-auto p-4 bg-card text-card-foreground rounded-3xl border py-3 shadow-sm z-[50] origin-top-left"
                >
                    <div className="flex flex-col gap-2">
                        <div className="text-sm font-medium">Open {currentSet?.title || "Unknown Set"} In ChatGPT</div>
                        <div className="text-xs text-muted-foreground">
                            Click the button again to use this set with ChatGPT. Click{" "}
                            <button
                                type="button"
                                onClick={() => openChatGpt(buildPrompt("", true))}
                                className="text-blue-600 underline"
                            >
                                this
                            </button>
                            {" "}to open the full set instead of just a reference. Press the prompts below to open this set with ChatGPT with a custom prompt.
                        </div>

                    </div>
                    <ScrollArea className="h-[40vh] flex flex-col gap-6">
                        {
                            flashcardPrompts.map((prompt, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="mt-1 w-[97%] cursor-pointer mb-1 my-2 flex flex-row gap-4 text-xs text-left rounded-2xl whitespace-normal py-4 h-auto bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 hover:from-indigo-500/20 hover:via-sky-500/20 hover:to-emerald-500/20 border border-primary/20"
                                    size="sm"
                                    onClick={() => openChatGpt(buildPrompt(prompt, false))}
                                >
                                    <Sparkles size={36} className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                                    {prompt}
                                </Button>
                            ))
                        }
                    </ScrollArea>

                </motion.div>
            )}

        </div>
    )
}
