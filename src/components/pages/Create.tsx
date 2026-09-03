"use client"

import { useEffect, useMemo, useState } from "react"
import { AlertCircle, ArrowDown, ArrowUp, Bot, CheckCircle2, Copy, ExternalLink, FileText, Plus, Trash2, WandSparkles } from "lucide-react"
import { toast } from "sonner"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

interface Set {
  title: string
  vocab: [string, string][]
}

type Assistant = "chatgpt" | "claude" | "gemini" | "copilot" | "perplexity" | "grok"
type CreateMethod = "ai" | "manual"

type ManualCard = {
  id: string
  front: string
  back: string
}

const AI_DRAFT_KEY = "flashcardit:create:ai-draft"
const MANUAL_DRAFT_KEY = "flashcardit:create:manual-draft"

const assistantLinks: Record<Assistant, string> = {
  chatgpt: "https://chat.openai.com/",
  claude: "https://claude.ai/new",
  gemini: "https://gemini.google.com/",
  copilot: "https://github.com/copilot",
  perplexity: "https://www.perplexity.ai/",
  grok: "https://grok.com/",
}

function newManualCard(): ManualCard {
  return {
    id: crypto.randomUUID(),
    front: "",
    back: "",
  }
}

function sanitizeTuple(value: unknown): [string, string] | null {
  if (!Array.isArray(value) || value.length !== 2) return null
  const [front, back] = value
  if (typeof front !== "string" || typeof back !== "string") return null
  if (!front.trim() || !back.trim()) return null
  return [front.trim(), back.trim()]
}

function parseSetFromJson(raw: string): { set?: Set; error?: string } {
  if (!raw.trim()) {
    return { error: "Paste your AI response to continue." }
  }

  const firstBrace = raw.indexOf("{")
  const lastBrace = raw.lastIndexOf("}")

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    return { error: "Could not find valid JSON. Make sure it starts with { and ends with }." }
  }

  const jsonSlice = raw.slice(firstBrace, lastBrace + 1)

  try {
    const parsed = JSON.parse(jsonSlice)
    const candidate: Set | undefined = parsed?.set ?? parsed

    if (!candidate || typeof candidate !== "object") {
      return { error: "JSON is missing a valid set object." }
    }

    if (typeof candidate.title !== "string" || !candidate.title.trim()) {
      return { error: "Set title must be a non-empty string." }
    }

    if (!Array.isArray(candidate.vocab) || candidate.vocab.length === 0) {
      return { error: "Set vocab must be a non-empty array of [question, answer] pairs." }
    }

    const cleanedVocab = candidate.vocab
      .map((entry) => sanitizeTuple(entry))
      .filter((entry): entry is [string, string] => Boolean(entry))

    if (!cleanedVocab.length) {
      return { error: "No valid flashcards were found. Each card must be [front, back]." }
    }

    return {
      set: {
        title: candidate.title.trim(),
        vocab: cleanedVocab,
      },
    }
  } catch {
    return { error: "Invalid JSON. Copy the full object from the AI response and try again." }
  }
}

export default function Create({
  addSet,
}: {
  addSet: (set: Set, isAutomatic: boolean) => Promise<number>
}) {
  const [createMethod, setCreateMethod] = useState<CreateMethod>("ai")

  const [assistant, setAssistant] = useState<Assistant>("chatgpt")
  const [topic, setTopic] = useState("")
  const [notes, setNotes] = useState("")
  const [customPrompt, setCustomPrompt] = useState("")

  const [promptCopied, setPromptCopied] = useState(false)
  const [jsonInput, setJsonInput] = useState("")
  const [jsonError, setJsonError] = useState("")
  const [isSubmittingAiSet, setIsSubmittingAiSet] = useState(false)
  const [pasteDetected, setPasteDetected] = useState(false)

  const [manualTitle, setManualTitle] = useState("")
  const [manualCards, setManualCards] = useState<ManualCard[]>([newManualCard()])
  const [manualPreviewIndex, setManualPreviewIndex] = useState(0)
  const [isSavingManual, setIsSavingManual] = useState(false)

  useEffect(() => {
    try {
      const savedAi = localStorage.getItem(AI_DRAFT_KEY)
      if (savedAi) {
        const parsed = JSON.parse(savedAi) as {
          assistant?: Assistant
          topic?: string
          notes?: string
          customPrompt?: string
          jsonInput?: string
        }

        if (parsed.assistant && assistantLinks[parsed.assistant]) setAssistant(parsed.assistant)
        setTopic(parsed.topic ?? "")
        setNotes(parsed.notes ?? "")
        setCustomPrompt(parsed.customPrompt ?? "")
        setJsonInput(parsed.jsonInput ?? "")
      }

      const savedManual = localStorage.getItem(MANUAL_DRAFT_KEY)
      if (savedManual) {
        const parsed = JSON.parse(savedManual) as {
          manualTitle?: string
          cards?: ManualCard[]
        }

        const cleanedCards = Array.isArray(parsed.cards)
          ? parsed.cards
              .map((card) => ({
                id: typeof card.id === "string" && card.id ? card.id : crypto.randomUUID(),
                front: typeof card.front === "string" ? card.front : "",
                back: typeof card.back === "string" ? card.back : "",
              }))
          : []

        setManualTitle(parsed.manualTitle ?? "")
        setManualCards(cleanedCards.length ? cleanedCards : [newManualCard()])
      }
    } catch {
      // ignore broken draft data
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      AI_DRAFT_KEY,
      JSON.stringify({ assistant, topic, notes, customPrompt, jsonInput }),
    )
  }, [assistant, topic, notes, customPrompt, jsonInput])

  useEffect(() => {
    localStorage.setItem(MANUAL_DRAFT_KEY, JSON.stringify({ manualTitle, cards: manualCards }))
  }, [manualTitle, manualCards])

  const promptForExternalAi = useMemo(() => {
    const topicLine = topic.trim() ? `Topic: ${topic.trim()}` : "Topic: Not provided"
    const notesLine = notes.trim() ? notes.trim() : "No notes provided."
    const extraLine = customPrompt.trim() ? customPrompt.trim() : "No extra instructions provided."

    return `Create a high-quality flashcard set for a student based on the material below.

Return ONLY valid JSON in this structure:
{
  "set": {
    "title": "Short Study Set Title",
    "vocab": [["Question", "Answer"], ["Question", "Answer"]]
  }
}

Rules:
- Include 8-25 cards unless the material is too short.
- Keep cards concise and study-friendly.
- Use clear question/answer phrasing.
- Do not include markdown, commentary, or code fences.

Material:
${topicLine}

Notes/Text:
${notesLine}

Extra instructions:
${extraLine}`
  }, [topic, notes, customPrompt])

  const parsedPreview = useMemo(() => parseSetFromJson(jsonInput), [jsonInput])

  const validManualCards = useMemo(
    () =>
      manualCards
        .map((card) => {
          const front = card.front.trim()
          const back = card.back.trim()
          if (!front || !back) return null
          return [front, back] as [string, string]
        })
        .filter((card): card is [string, string] => Boolean(card)),
    [manualCards],
  )

  const addManualCard = () => {
    setManualCards((prev) => {
      const next = [...prev, newManualCard()]
      setManualPreviewIndex(next.length - 1)
      return next
    })
  }

  const updateManualCard = (cardId: string, key: "front" | "back", value: string) => {
    setManualCards((prev) => prev.map((card) => (card.id === cardId ? { ...card, [key]: value } : card)))
  }

  const removeManualCard = (cardId: string) => {
    setManualCards((prev) => {
      const next = prev.filter((card) => card.id !== cardId)
      if (!next.length) return [newManualCard()]
      setManualPreviewIndex((idx) => Math.min(idx, next.length - 1))
      return next
    })
  }

  const moveManualCard = (index: number, direction: "up" | "down") => {
    setManualCards((prev) => {
      const target = direction === "up" ? index - 1 : index + 1
      if (target < 0 || target >= prev.length) return prev

      const next = [...prev]
      ;[next[index], next[target]] = [next[target], next[index]]
      setManualPreviewIndex(target)
      return next
    })
  }

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(promptForExternalAi)
      setPromptCopied(true)
      setTimeout(() => setPromptCopied(false), 1800)
      toast.success("Prompt copied")
    } catch {
      toast.error("Could not copy prompt. Please copy it manually.")
    }
  }

  const openAssistant = () => {
    window.open(assistantLinks[assistant], "_blank", "noopener,noreferrer")
    toast.message("Assistant opened in a new tab", {
      description: "Paste your copied prompt, submit it, then return here and paste the JSON output.",
    })
  }

  const handleSourceFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? [])
    if (!files.length) return

    const textFiles = files.filter((file) => file.type.startsWith("text/") || /\.(txt|md|csv|json)$/i.test(file.name))
    const unsupportedCount = files.length - textFiles.length

    let combinedText = ""

    for (const file of textFiles.slice(0, 4)) {
      if (file.size > 1_000_000) continue
      try {
        const text = await file.text()
        combinedText += `\n\n[${file.name}]\n${text.slice(0, 6000)}`
      } catch {
        // ignore unreadable file
      }
    }

    if (combinedText.trim()) {
      setNotes((prev) => `${prev}${prev ? "\n\n" : ""}${combinedText.trim()}`)
      toast.success("Study material added to notes")
    }

    if (unsupportedCount > 0) {
      toast.message("Some files were skipped", {
        description: "PDF/binary extraction is not built in yet. Paste key excerpts as text for now.",
      })
    }

    event.target.value = ""
  }

  const handleAddAiSet = async () => {
    const parsed = parseSetFromJson(jsonInput)
    if (!parsed.set) {
      setJsonError(parsed.error ?? "Invalid JSON format")
      return
    }

    setJsonError("")
    setIsSubmittingAiSet(true)

    try {
      await addSet(parsed.set, false)
      toast.success("AI flashcard set saved")
      setJsonInput("")
      setPasteDetected(false)
    } catch {
      toast.error("Could not save this set. Please try again.")
    } finally {
      setIsSubmittingAiSet(false)
    }
  }

  const handleSaveManualSet = async () => {
    const title = manualTitle.trim()

    if (!title) {
      toast.error("Please add a set title")
      return
    }

    if (!validManualCards.length) {
      toast.error("Add at least one complete flashcard")
      return
    }

    setIsSavingManual(true)

    try {
      await addSet({ title, vocab: validManualCards }, false)
      toast.success("Manual flashcard set saved")
      setManualTitle("")
      setManualCards([newManualCard()])
      setManualPreviewIndex(0)
    } catch {
      toast.error("Could not save this set. Please try again.")
    } finally {
      setIsSavingManual(false)
    }
  }

  const manualPreviewCard = manualCards[manualPreviewIndex]

  return (
    <ScrollArea className="h-[calc(100svh-8rem)] w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-3 pb-10 pt-4 sm:px-5 lg:px-8">
        <Card className="rounded-3xl border bg-background/80 shadow-sm backdrop-blur">
          <CardHeader className="space-y-3 pb-3">
            <Badge className="w-fit rounded-full px-3 py-1 text-xs" variant="secondary">
              Create Flashcards
            </Badge>
            <div className="space-y-1">
              <CardTitle className="text-2xl sm:text-3xl">How would you like to create them?</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Choose AI-assisted generation or full manual creation. Both flows autosave your draft locally.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setCreateMethod("ai")}
                className={`rounded-2xl border p-4 text-left transition ${
                  createMethod === "ai"
                    ? "border-violet-400 bg-violet-500/10 ring-1 ring-violet-400"
                    : "border-border bg-card hover:bg-muted/60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <WandSparkles className="mt-0.5 size-5 text-violet-500" />
                  <div>
                    <p className="font-semibold">Generate with AI</p>
                    <p className="text-sm text-muted-foreground">Build cards from a topic, notes, or pasted study material.</p>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setCreateMethod("manual")}
                className={`rounded-2xl border p-4 text-left transition ${
                  createMethod === "manual"
                    ? "border-sky-400 bg-sky-500/10 ring-1 ring-sky-400"
                    : "border-border bg-card hover:bg-muted/60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 size-5 text-sky-500" />
                  <div>
                    <p className="font-semibold">Create Manually</p>
                    <p className="text-sm text-muted-foreground">Write, edit, reorder, preview, and save cards yourself.</p>
                  </div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>

        {createMethod === "ai" ? (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Card className="rounded-3xl border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Bot className="size-5" />
                  1) Prepare your AI prompt
                </CardTitle>
                <CardDescription>
                  Add your material, copy the prompt, then open your AI assistant in a new tab.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Topic</label>
                    <Input
                      placeholder="e.g., Cell respiration"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Notes / source text</label>
                    <Textarea
                      className="min-h-36"
                      placeholder="Paste class notes, textbook excerpts, or key ideas..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <div className="flex flex-wrap items-center gap-2">
                      <Input
                        type="file"
                        accept=".txt,.md,.csv,.json,.pdf,text/*"
                        multiple
                        onChange={handleSourceFileUpload}
                        className="max-w-full text-xs sm:max-w-sm"
                      />
                      <span className="text-xs text-muted-foreground">Text files import directly. PDF extraction is not built in yet.</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Extra instructions (optional)</label>
                    <Textarea
                      className="min-h-20"
                      placeholder="e.g., prioritize exam vocabulary, include examples"
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Assistant</label>
                    <div className="flex flex-wrap gap-2">
                      {(Object.keys(assistantLinks) as Assistant[]).map((name) => (
                        <Button
                          key={name}
                          type="button"
                          variant={assistant === name ? "default" : "outline"}
                          size="sm"
                          className="rounded-full"
                          onClick={() => setAssistant(name)}
                        >
                          {name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-muted/30 p-3">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">Prompt preview</p>
                  <Textarea className="min-h-44 text-xs" readOnly value={promptForExternalAi} />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button type="button" onClick={handleCopyPrompt} className="rounded-full">
                      {promptCopied ? <CheckCircle2 className="size-4" /> : <Copy className="size-4" />} {promptCopied ? "Copied" : "Copy Prompt"}
                    </Button>
                    <Button type="button" variant="outline" onClick={openAssistant} className="rounded-full">
                      <ExternalLink className="size-4" /> Open {assistant}
                    </Button>
                  </div>
                </div>

                <Alert>
                  <AlertCircle className="size-4" />
                  <AlertDescription className="text-xs sm:text-sm">
                    Flow: Generate → Copy Prompt → Open AI → Paste Response → Auto-validate → Save set.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">2) Paste AI output and save</CardTitle>
                <CardDescription>Paste the JSON response here. We validate it immediately and show a preview.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Textarea
                  className="min-h-56"
                  placeholder='Paste AI JSON here (starts with { and includes "set" + "vocab")'
                  value={jsonInput}
                  onPaste={() => {
                    setPasteDetected(true)
                    setJsonError("")
                  }}
                  onChange={(e) => {
                    setJsonInput(e.target.value)
                    setJsonError("")
                  }}
                />

                {pasteDetected && !jsonInput.trim() && (
                  <p className="text-xs text-muted-foreground">Paste detected — waiting for content.</p>
                )}

                {jsonError && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{jsonError}</AlertDescription>
                  </Alert>
                )}

                {jsonInput.trim() && parsedPreview.error && !jsonError && (
                  <Alert variant="destructive">
                    <AlertCircle className="size-4" />
                    <AlertDescription>{parsedPreview.error}</AlertDescription>
                  </Alert>
                )}

                {parsedPreview.set && (
                  <Alert>
                    <CheckCircle2 className="size-4 text-emerald-500" />
                    <AlertDescription className="text-sm">
                      Ready to save: <span className="font-semibold">{parsedPreview.set.title}</span> ({parsedPreview.set.vocab.length} cards)
                    </AlertDescription>
                  </Alert>
                )}

                {parsedPreview.set && (
                  <div className="rounded-2xl border bg-muted/20 p-3">
                    <p className="mb-2 text-sm font-medium">Preview</p>
                    <div className="space-y-2">
                      {parsedPreview.set.vocab.slice(0, 3).map(([front, back], index) => (
                        <div key={`${front}-${index}`} className="rounded-xl border bg-background px-3 py-2 text-sm">
                          <p className="font-medium">Q: {front}</p>
                          <p className="text-muted-foreground">A: {back}</p>
                        </div>
                      ))}
                    </div>
                    {parsedPreview.set.vocab.length > 3 && (
                      <p className="mt-2 text-xs text-muted-foreground">+ {parsedPreview.set.vocab.length - 3} more cards</p>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  <Button type="button" onClick={handleAddAiSet} disabled={isSubmittingAiSet || !jsonInput.trim()} className="rounded-full">
                    {isSubmittingAiSet ? "Saving..." : "Save AI Flashcards"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setJsonInput("")
                      setJsonError("")
                      setPasteDetected(false)
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <Card className="rounded-3xl border shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Manual Flashcard Editor</CardTitle>
                <CardDescription>
                  Add cards, edit inline, reorder, and save when ready.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Set title</label>
                  <Input
                    placeholder="e.g., AP Bio Unit 3 Review"
                    value={manualTitle}
                    onChange={(e) => setManualTitle(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm text-muted-foreground">{validManualCards.length} complete cards</p>
                  <Button type="button" onClick={addManualCard} size="sm" className="rounded-full">
                    <Plus className="size-4" /> Add card
                  </Button>
                </div>

                <div className="space-y-3">
                  {manualCards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`rounded-2xl border p-3 transition ${
                        manualPreviewIndex === index ? "border-primary bg-primary/5" : "bg-card"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <button
                          type="button"
                          className="text-sm font-medium hover:underline"
                          onClick={() => setManualPreviewIndex(index)}
                        >
                          Card {index + 1}
                        </button>
                        <div className="flex items-center gap-1">
                          <Button type="button" variant="ghost" size="icon" onClick={() => moveManualCard(index, "up")} disabled={index === 0}>
                            <ArrowUp className="size-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="icon" onClick={() => moveManualCard(index, "down")} disabled={index === manualCards.length - 1}>
                            <ArrowDown className="size-4" />
                          </Button>
                          <Button type="button" variant="ghost" size="icon" onClick={() => removeManualCard(card.id)}>
                            <Trash2 className="size-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        <Textarea
                          className="min-h-24"
                          placeholder="Question / front"
                          value={card.front}
                          onChange={(e) => updateManualCard(card.id, "front", e.target.value)}
                        />
                        <Textarea
                          className="min-h-24"
                          placeholder="Answer / back"
                          value={card.back}
                          onChange={(e) => updateManualCard(card.id, "back", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button type="button" onClick={handleSaveManualSet} disabled={isSavingManual} className="rounded-full">
                    {isSavingManual ? "Saving..." : "Save Manual Set"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      setManualTitle("")
                      setManualCards([newManualCard()])
                      setManualPreviewIndex(0)
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border shadow-sm xl:sticky xl:top-4 xl:h-fit">
              <CardHeader>
                <CardTitle className="text-base">Flashcard Preview</CardTitle>
                <CardDescription>Review the currently selected card.</CardDescription>
              </CardHeader>
              <CardContent>
                {manualPreviewCard ? (
                  <div className="space-y-3">
                    <div className="rounded-2xl border bg-muted/20 p-3">
                      <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Front</p>
                      <p className="text-sm sm:text-base">{manualPreviewCard.front.trim() || "(empty)"}</p>
                    </div>
                    <div className="rounded-2xl border bg-muted/20 p-3">
                      <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">Back</p>
                      <p className="text-sm sm:text-base">{manualPreviewCard.back.trim() || "(empty)"}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No card selected.</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </ScrollArea>
  )
}
