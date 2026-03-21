"use client"
import { getShortNameFromSetFromId } from "@/lib/AllLists"
import { findAllSetFromSet, Set } from "@/lib/AllSets"
import { getFBLAResourceById } from "@/lib/resources/FBLAResources"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PackageOpen } from "lucide-react"
import { useMemo } from "react"

export default function ResourcesPage(
    {
        set
    }: {
        set: Set
    }
) {
    const setId = useMemo(() => findAllSetFromSet(set).id, [set])
    const shortName = useMemo(() => getShortNameFromSetFromId(setId) || set.title, [setId, set.title])
    const resourceEntry = useMemo(() => getFBLAResourceById(setId), [setId])
    const resourceTitle = resourceEntry?.resources.title ?? `Resources for ${set.title}`

    const openPromptInAi = (provider: "chatgpt" | "claude", prompt: string) => {
        const encodedPrompt = encodeURIComponent(prompt)
        const url = provider === "chatgpt"
            ? `https://chat.openai.com/?q=${encodedPrompt}`
            : `https://claude.ai/new?q=${encodedPrompt}`

        window.open(url, "_blank")
    }

    return (
        <div className="p-4 px-6">
            <div className="flex flex-row gap-2 items-center mb-4">
                <PackageOpen className="size-10" strokeWidth={1.25} />
                <h1 className="text-2xl font-bold">Resources <span className="font-normal">for</span> {set.title} <span className="font-normal">in</span> {shortName}</h1>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{resourceTitle}</p>

            <div className="w-full flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/2 p-4 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-blue-600/20 backdrop-blur-sm shadow-[0_12px_35px_rgba(14,116,144,0.22)]">
                    <h2 className="text-lg font-semibold mb-2 text-cyan-900 dark:text-cyan-200">🔗 External Links</h2>
                    {resourceEntry?.resources.links.length ? (
                        <ScrollArea className="h-[60vh] pr-3">
                            <ul className="space-y-2">
                                {resourceEntry.resources.links.map((link) => (
                                    <li key={link.url}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-medium text-cyan-800 dark:text-cyan-100 underline underline-offset-4 decoration-cyan-500/60 hover:text-cyan-600 dark:hover:text-cyan-300"
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    ) : (
                        <p className="text-sm text-muted-foreground">We&apos;re working hard to gather and create resources for this set. Check back later for study guides, flashcard decks, and more!</p>
                    )}
                </div>

                <div className="w-full md:w-1/2 p-4 rounded-2xl border border-fuchsia-300/30 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-orange-500/20 backdrop-blur-sm shadow-[0_12px_35px_rgba(147,51,234,0.2)]">
                    <h2 className="text-lg font-semibold mb-2 text-fuchsia-900 dark:text-fuchsia-200">✨ AI Prompts for Practice Tests, Studying, and more</h2>
                    {resourceEntry?.resources.aiPrompts.length ? (
                        <ScrollArea className="h-[320px] pr-3">
                            <ul className="space-y-3">
                                {resourceEntry.resources.aiPrompts.map((prompt) => (
                                    <li key={prompt.title} className="rounded-xl border border-fuchsia-300/25 dark:border-fuchsia-300/20 bg-white/70 dark:bg-zinc-900/50 p-3">
                                        <p className="text-sm font-semibold mb-1 text-fuchsia-900 dark:text-fuchsia-100">{prompt.title}</p>
                                        <p className="text-xs text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap mb-3">{prompt.prompt}</p>
                                        <div className="flex flex-wrap gap-2">
                                            <Button
                                                type="button"
                                                size="sm"
                                                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:opacity-90"
                                                onClick={() => openPromptInAi("chatgpt", prompt.prompt)}
                                            >
                                                Open in ChatGPT
                                            </Button>
                                            <Button
                                                type="button"
                                                size="sm"
                                                className="border-violet-300/50 dark:border-violet-300/40 bg-violet-500/10 hover:bg-violet-500/20 text-violet-900 dark:text-violet-100"
                                                onClick={() => openPromptInAi("claude", prompt.prompt)}
                                            >
                                                Open in Claude
                                            </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    ) : (
                        <p className="text-sm text-muted-foreground">We&apos;re working hard to gather and create resources for this set. Check back later for study guides, flashcard decks, and more!</p>
                    )}
                </div>
            </div>
        </div>
    )
}