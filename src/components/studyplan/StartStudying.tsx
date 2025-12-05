"use client"

import { useState } from "react"
import StepsHeader from "../StepsHeader"
import { Button } from "../ui/button"
import FlashcardHolder from "../set/FlashcardHolder"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export function StartStudying({
    cards
}: {
    cards: [string, string][]
}) {
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    const steps = [{ label: "Flashcards" }, { label: "Quiz" }, { label: "Matching" }, {label: "Rewrite"}, { label: "Conclusion" }]
    const [currentStep] = useState(2)

    return <div className="w-full h-full flex mb-6 flex-col justify-center items-center">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Welcome to Your Study Path!</DialogTitle>
                    <DialogDescription>
                    You&apos;ll journey through several study modes: Flashcards, Quiz, and Matching. Feel free to take as much time as you need in each mode. When you feel comfortable and ready, simply click &apos;Next Step&apos; to advance.
                    <br/><br/>
                    At the end, you&apos;ll reach the Conclusion. Here, we&apos;ll review each word one last time, and you can rate your confidence as &apos;Good&apos;, &apos;Hard&apos;, or &apos;Tough&apos;. This helps solidify your learning.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button>Let&apos;s Go!</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        <section className="absolute top-[8vh] w-[95%] mb-4 h-min flex flex-row gap-2 justify-between items-center">
            <StepsHeader steps={steps} currentStep={currentStep} />
            <Button>Next Step</Button>
        </section>
        <section className="w-full flex justify-center items-center h-full">
            <FlashcardHolder set={{ title: "Study Path", vocab: cards }} />
        </section>
    </div>
}