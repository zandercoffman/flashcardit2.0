/* eslint-disable */
"use client"

import { useEffect, useRef, useState } from "react";
import { QuizSettings, QuizSetup } from "./quizStuff/setup";
import { AnimatedCircularProgressBar } from "../aceternity/circleProgress";
import { Badge } from "../ui/badge";
import {
    ArrowLeft,
    CheckCircle,
    Flame,
    List,
    RotateCcw,
    SkipForward,
    Sparkles,
    Trophy,
    Undo2,
    X
} from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "../aceternity/IntHoverButton";
import { ScrollArea } from "../ui/scroll-area";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Option = { option: string; correct: boolean | null };

interface Set {
    title: string;
    vocab: [string, string][]; // Array of tuples with two strings
}

export default function QuizMode({
    currentSet,
}: {
    currentSet: Set,
}) {
    const [potentialCopy, setPotentialCopy] = useState<Set | null>(null);

    const [curCardIndex, setCurCardIndex] = useState<number>(0); // starts at 0
    const [curCard, setCurCard] = useState<[string, string]>(currentSet.vocab[0] || []);

    const [rightNums, setRightNums] = useState<number>(0);
    const [wrongNums, setWrongNums] = useState<number>(0);
    const [wrongVocab, setWrongVocab] = useState<[string, string][]>([]);

    const [inProgress, setInProgress] = useState<boolean>(true);

    const [quizSettings, setQuizSettings] = useState<QuizSettings>({
        streakMode: false,
        timerMode: false,
        randomMode: false
    })

    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(5);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [chooseableOptions, setChooseableOptions] = useState<Option[] | null>(null);

    const [hasStarted, setHasStarted] = useState<boolean>(false); // IMPORTANT: THIS CHANGES THE MODES
    const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
    const [cardStatuses, setCardStatuses] = useState<("pending" | "correct" | "wrong" | "skipped")[]>(() =>
        Array(currentSet.vocab.length).fill("pending")
    );
    const [showHint, setShowHint] = useState(false);
    const [showReviewDrawer, setShowReviewDrawer] = useState(false);
    const [lastResult, setLastResult] = useState<{ type: "correct" | "wrong" | "skip" | "timeout" | "none"; ts: number }>({
        type: "none",
        ts: 0
    });
    const [milestoneBurst, setMilestoneBurst] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
    const [quizEndTime, setQuizEndTime] = useState<number | null>(null);
    const [timeSpent, setTimeSpent] = useState<string>("0s");

    const totalCards = (potentialCopy ?? currentSet).vocab.length;

    const handleOptionSelect = (option: Option, index: number) => {
        if (cardStatuses[curCardIndex] !== "pending") return;

        setSelectionIndex(index);
        setShowHint(false);

        if (option.correct) {
            setRightNums(prev => prev + 1);
            setCurrentStreak(prev => prev + 1);
            setCardStatuses(prev => {
                const copy = [...prev];
                copy[curCardIndex] = "correct";
                return copy;
            });
            setLastResult({ type: "correct", ts: Date.now() });
        } else {
            setWrongNums(prev => prev + 1);
            setWrongVocab(prev => [...prev, curCard]);
            setCurrentStreak(0);
            setCardStatuses(prev => {
                const copy = [...prev];
                copy[curCardIndex] = "wrong";
                return copy;
            });
            setLastResult({ type: "wrong", ts: Date.now() });
        }
    };

    function handleSkip() {
        if (cardStatuses[curCardIndex] !== "pending") return;
        setCardStatuses(prev => {
            const copy = [...prev];
            copy[curCardIndex] = "skipped";
            return copy;
        });
        setCurrentStreak(0);
        setSelectionIndex(null);
        setLastResult({ type: "skip", ts: Date.now() });
    }

    function handleNext() {
        if (curCardIndex < totalCards - 1) {
            setCurCardIndex(prev => prev + 1);
        } else {
            setInProgress(false);
        }
    }

    function handleUndo() {
        if (curCardIndex === 0) return;
        setCurCardIndex(prev => Math.max(0, prev - 1));
    }

    useEffect(() => {
        if (rightNums > 0 && rightNums % 5 === 0) {
            setMilestoneBurst(true);
            const t = setTimeout(() => setMilestoneBurst(false), 1200);
            return () => clearTimeout(t);
        }
    }, [rightNums]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
            if (tag === "input" || tag === "textarea" || (e.target as HTMLElement | null)?.isContentEditable) return;

            if (e.key === "ArrowRight") {
                setCurCardIndex(prev => Math.min((potentialCopy ?? currentSet).vocab.length - 1, prev + 1));
            } else if (e.key === "ArrowLeft") {
                setCurCardIndex(prev => Math.max(0, prev - 1));
            } else if (e.key.toLowerCase() === "h") {
                setShowHint(true);
            } else if (e.key.toLowerCase() === "s") {
                handleSkip();
            } else {
                const code = e.key.toUpperCase().charCodeAt(0) - 65;
                if (code >= 0 && code < 4 && chooseableOptions && chooseableOptions[code]) {
                    handleOptionSelect(chooseableOptions[code], code);
                }
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [currentSet, potentialCopy, handleSkip, chooseableOptions]);

    // ⬇️ Called when starting quiz
    const handleStartQuiz = (settings: QuizSettings) => {
        setQuizSettings(settings);

        setCardStatuses(Array(currentSet.vocab.length).fill("pending"));
        setCurCardIndex(0);
        setRightNums(0);
        setWrongNums(0);
        setWrongVocab([]);
        setCurrentStreak(0);
        setSelectionIndex(null);
        setShowHint(false);
        setInProgress(true);

        if (settings.randomMode) {
            let vocabCopy = [...currentSet.vocab];
            for (let i = vocabCopy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [vocabCopy[i], vocabCopy[j]] = [vocabCopy[j], vocabCopy[i]];
            }
            setPotentialCopy({
                title: currentSet.title,
                vocab: vocabCopy,
            });
        }

        setHasStarted(true);
        setQuizStartTime(Date.now()); // <-- mark quiz start
    };

    // ⬇️ Hook that detects quiz completion
    useEffect(() => {
        if (!inProgress && quizStartTime && !quizEndTime) {
            const end = Date.now();
            setQuizEndTime(end);

            const diff = Math.floor((end - quizStartTime) / 1000); // seconds
            const mins = Math.floor(diff / 60);
            const secs = diff % 60;

            setTimeSpent(`${mins}m ${secs}s`);
        }
    }, [inProgress]);


    useEffect(() => {
        if (!quizSettings.timerMode) return;

        let intervalId: NodeJS.Timeout | undefined;
        setCurrentTime(5);

        const shouldTick = cardStatuses[curCardIndex] === "pending";
        if (shouldTick && audioRef.current) {
            audioRef.current.volume = 0.2;
            audioRef.current.loop = true;
            audioRef.current.play();
        }

        if (shouldTick) {
            intervalId = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (cardStatuses[curCardIndex] !== "pending") {
                        if (intervalId) clearInterval(intervalId);
                        if (audioRef.current) {
                            audioRef.current.loop = false;
                            audioRef.current.pause();
                        }
                        return prevTime;
                    }
                    if (prevTime <= 1) {
                        setCardStatuses(prev => {
                            const copy = [...prev];
                            copy[curCardIndex] = "wrong";
                            return copy;
                        });
                        setWrongNums(prev => prev + 1);
                        setWrongVocab(prev => [...prev, curCard]);
                        setCurrentStreak(0);
                        setLastResult({ type: "timeout", ts: Date.now() });
                        if (intervalId) clearInterval(intervalId);
                        if (audioRef.current) {
                            audioRef.current.loop = false;
                            audioRef.current.pause();
                        }
                        return 0;
                    }

                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [curCardIndex, quizSettings.timerMode, cardStatuses]);


    useEffect(() => {
        const list = potentialCopy ? potentialCopy.vocab : currentSet.vocab;
        if (curCardIndex >= list.length) {
            setInProgress(false);
            return;
        }

        const current = list[curCardIndex];
        if (!current) return;

        const promptWord = current[0];
        const correctAnswer = current[1];

        const pool = list
            .filter((_, idx) => idx !== curCardIndex)
            .map(entry => entry[1]);

        const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
        const incorrectNeeded = Math.min(3, shuffledPool.length);
        const incorrect = shuffledPool.slice(0, incorrectNeeded);

        const combined = [...incorrect, correctAnswer];
        while (combined.length < 4 && pool.length > 0) {
            combined.push(pool[Math.floor(Math.random() * pool.length)]);
        }
        while (combined.length < 4) {
            combined.push(correctAnswer);
        }

        const finalOptions = combined
            .slice(0, 4)
            .map(opt => ({ option: opt, correct: opt === correctAnswer }))
            .sort(() => Math.random() - 0.5);

        setSelectionIndex(null);
        setShowHint(false);
        setCurCard([promptWord, correctAnswer]);
        setChooseableOptions(finalOptions);

    }, [curCardIndex, currentSet.vocab, potentialCopy]);

    const currentStatus = cardStatuses[curCardIndex] ?? "pending";
    const progressValue = ((curCardIndex + 1) / totalCards) * 100;
    const streakHeat = Math.min(currentStreak / 5, 1);

    if (!inProgress || curCardIndex >= totalCards) {
        return (
            <div className="relative w-full min-h-[90vh] text-white overflow-hidden">

                <Card className="relative z-10 max-w-6xl w-[92vw] mx-auto mt-10 mb-8 border border-[#2ED4C4]/30 bg-[#111827]/70 backdrop-blur-xl rounded-3xl p-8">
                    <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-[#2ED4C4]/15">
                                <Trophy className="h-8 w-8 text-[#2ED4C4]" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Quiz finished</p>
                                <h2 className="text-3xl font-semibold">Nice work!</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="border-[#2ED4C4]/40 text-[#2ED4C4] bg-[#2ED4C4]/10">Streak {currentStreak}</Badge>
                            <Badge variant="outline" className="border-[#806BFF]/40 text-[#806BFF] bg-[#806BFF]/10">Time {timeSpent}</Badge>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Accuracy</span>
                                <span>{Math.round((rightNums / totalCards) * 100)}%</span>
                            </div>
                            <div className="h-3 rounded-full bg-white/5 overflow-hidden border border-white/10">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${(rightNums / totalCards) * 100}%`,
                                        background: "linear-gradient(90deg,#2ED4C4,#806BFF)"
                                    }}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground">{rightNums}/{totalCards} correct answers</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Card className="bg-white/5 border-white/10 p-4 rounded-2xl">
                                <p className="text-xs text-muted-foreground">Best streak</p>
                                <p className="text-2xl font-semibold">{currentStreak}</p>
                            </Card>
                            <Card className="bg-white/5 border-white/10 p-4 rounded-2xl">
                                <p className="text-xs text-muted-foreground">Time spent</p>
                                <p className="text-2xl font-semibold">{timeSpent}</p>
                            </Card>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="flex items-center gap-2 mb-2">
                            <X className="h-4 w-4 text-[#FF5C8D]" />
                            <h3 className="font-semibold">Review list</h3>
                        </div>
                        <ScrollArea className="h-48 border border-white/5 rounded-2xl p-3 bg-black/20">
                            {wrongVocab.length === 0 ? (
                                <p className="text-sm text-muted-foreground text-center py-4">No misses — great job!</p>
                            ) : wrongVocab.map((vocab, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 mb-2">
                                    <div>
                                        <p className="font-medium">{vocab[0]}</p>
                                        <p className="text-xs text-muted-foreground">{vocab[1]}</p>
                                    </div>
                                    <Badge variant="outline" className="border-[#FF5C8D]/40 text-[#FF5C8D]">Missed</Badge>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-end mt-6">
                        <Button variant="ghost" className="gap-2 text-white" onClick={() => setHasStarted(false)}>
                            <ArrowLeft className="h-4 w-4" /> Back to setup
                        </Button>
                        <InteractiveHoverButton onClick={() => handleStartQuiz(quizSettings)}>
                            <RotateCcw className="h-4 w-4 mr-1" /> Restart quiz
                        </InteractiveHoverButton>
                    </div>
                </Card>
            </div>
        );
    }

    const vocabList = potentialCopy ? potentialCopy.vocab : currentSet.vocab;
    const gradientBorder = "linear-gradient(135deg,#2ED4C4,#806BFF)";
    const canAdvance = cardStatuses[curCardIndex] !== "pending";
    const score = rightNums * 10;
    const level = Math.max(1, Math.floor(rightNums / 10) + 1);
    const promptWord = curCard[0];
    const hintText = curCard[1];

    return (
        <div className="relative w-full min-h-[90vh] text-white overflow-hidden">
            <audio ref={audioRef} src="/correct.mp3" className="hidden" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 ">
                {!hasStarted ? (
                    <QuizSetup onStartQuiz={handleStartQuiz} />
                ) : (
                    <div className="flex flex-col justify-between min-h-[80vh]">
                        

                        <div className="flex flex-row gap-2 items-center">
                            {/* Progress bar */}
                            <div className="w-[50%] rounded-3xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner">
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                                    <span>Progress</span>
                                    <span>{Math.round(progressValue)}%</span>
                                </div>
                                <div className="flex gap-[2px] h-3 rounded-full overflow-hidden bg-black/40 border border-white/10">
                                    {cardStatuses.map((status, idx) => (
                                        <div
                                            key={idx}
                                            className={cn("h-full rounded-full flex-1 transition-all duration-200", idx === curCardIndex ? "opacity-100" : "opacity-70")}
                                            style={{
                                                background:
                                                    status === "correct"
                                                        ? "linear-gradient(90deg,#3DD598,#2ED4C4)"
                                                        : status === "wrong"
                                                            ? "linear-gradient(90deg,#FF5C8D,#F59E0B)"
                                                            : status === "skipped"
                                                                ? "linear-gradient(90deg,#F59E0B,#806BFF)"
                                                                : "linear-gradient(90deg,#1f2937,#111827)"
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Timer + Streak compact */}
                            <div className="ml-auto flex flex-wrap justify-end gap-3 pl-4">
                                {quizSettings.timerMode && (
                                    <div className="flex rounded-4xl items-center gap-3 border border-[#806BFF]/30 bg-[#0F1424] px-5 py-4">
                                        <AnimatedCircularProgressBar
                                            max={5}
                                            value={currentTime}
                                            min={0}
                                            showValue
                                            gaugePrimaryColor="#806BFF"
                                            gaugeSecondaryColor="rgba(255,255,255,0.08)"
                                            className={cn("size-14", currentTime <= 5 && "animate-pulse")}
                                        />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Timer</p>
                                            <p className="text-lg font-semibold">{currentTime}s</p>
                                        </div>
                                    </div>
                                )}

                                {quizSettings.streakMode && (
                                    <div className="flex flex-col gap-2 rounded-4xl border border-[#2ED4C4]/30 bg-[#0F1424] px-5 py-4">
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Flame className="h-4 w-4 text-[#F59E0B]" />
                                                <span>Streak</span>
                                            </div>
                                            <span className="text-white font-semibold">{currentStreak}</span>
                                        </div>
                                        <div className="h-2 rounded-full overflow-hidden bg-black/50 border border-white/10">
                                            <div
                                                className="h-full transition-all"
                                                style={{
                                                    width: `${Math.min(100, (streakHeat * 100))}%`,
                                                    background: "linear-gradient(90deg,#F59E0B,#FF5C8D)"
                                                }}
                                            />
                                        </div>
                                        <p className="text-[11px] text-muted-foreground">Keep it going for bonus glow.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Central word + grid */}
                        <div className="space-y-5">
                            <motion.div
                                key={`${curCardIndex}-${lastResult.ts}`}
                                initial={{ opacity: 0.9, scale: 0.98 }}
                                animate={{
                                    opacity: 1,
                                    scale: lastResult.type === "correct" ? 1.02 : 1,
                                    rotate: lastResult.type === "wrong" && !prefersReducedMotion ? [0, -1.5, 1.5, -0.5, 0] : 0
                                }}
                                transition={{ duration: 0.28, ease: "easeOut" }}
                                className="relative"
                            >
                                {milestoneBurst && (
                                    <motion.div
                                        className="absolute inset-0 z-20 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.8 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            background: "radial-gradient(circle, rgba(46,212,196,0.2) 0%, rgba(128,107,255,0.05) 50%, transparent 70%)"
                                        }}
                                    />
                                )}
                                <div className="relative rounded-3xl p-[1px]" style={{ backgroundImage: gradientBorder }}>
                                    <div className="relative rounded-[22px] bg-[#0E1424]/80 backdrop-blur-xl border border-white/10 p-8 shadow-2xl text-center">
                                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Your word</p>
                                        <h2
                                            className="text-4xl md:text-5xl font-semibold leading-tight"
                                            aria-live="polite"
                                        >
                                            {promptWord}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mt-3">Select the correct match below.</p>
                                        <AnimatePresence>
                                            {showHint && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 8 }}
                                                    className="mt-4 text-sm text-[#2ED4C4]"
                                                >
                                                    Hint: starts with “{hintText?.[0]}”
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                                {chooseableOptions?.map((option, index) => {
                                    const isSelected = selectionIndex === index;
                                    const status = cardStatuses[curCardIndex];
                                    const isCorrect = option.correct;
                                    const base =
                                        status === "pending"
                                            ? "bg-white/5 border-white/10 hover:border-[#2ED4C4]/50"
                                            : isCorrect
                                                ? "bg-[#3DD598]/15 border-[#3DD598]/40"
                                                : isSelected
                                                    ? "bg-[#FF5C8D]/15 border-[#FF5C8D]/40"
                                                    : "bg-white/5 border-white/10";

                                    return (
                                        <motion.button
                                            key={index}
                                            whileTap={{ scale: 0.97 }}
                                            className={cn(
                                                "group relative rounded-2xl border px-3 py-4 text-left transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2ED4C4] focus-visible:ring-offset-[#0B1220]",
                                                base
                                            )}
                                            onClick={() => handleOptionSelect(option, index)}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="h-9 w-9 rounded-xl bg-white/5 text-xs flex items-center justify-center border border-white/10">
                                                    {String.fromCharCode(65 + index)}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-semibold leading-snug">{option.option}</p>
                                                    {status !== "pending" && (
                                                        <p className="text-[11px] text-muted-foreground mt-1">
                                                            {isCorrect ? "Correct answer" : isSelected ? "Your pick" : "Alternative"}
                                                        </p>
                                                    )}
                                                </div>
                                                {status !== "pending" && isCorrect && <CheckCircle className="h-4 w-4 text-[#3DD598]" />}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="rounded-2xl  p-4 flex flex-wrap gap-3 items-center justify-between">
                            <div className="flex gap-2 flex-wrap">
                                <Button variant="secondary" className="bg-[#2ED4C4]/15 text-[#2ED4C4] border-[#2ED4C4]/30 min-w-[96px]" onClick={handleSkip}>
                                    <SkipForward className="h-4 w-4 mr-2" /> Skip
                                </Button>
                                <Button variant="ghost" className="text-white border border-white/10 min-w-[96px]" onClick={() => setShowHint(true)}>
                                    Hint
                                </Button>
                                <Button variant="ghost" className="text-white border border-white/10 min-w-[96px]" onClick={handleUndo}>
                                    <Undo2 className="h-4 w-4 mr-2" /> Undo
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                    onClick={() => setShowReviewDrawer(prev => !prev)}
                                >
                                    <List className="h-4 w-4" /> Review
                                </Button>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Button
                                    disabled={!canAdvance}
                                    className="bg-gradient-to-r from-[#2ED4C4] to-[#806BFF] text-black font-semibold px-6 py-2 rounded-xl shadow-lg disabled:opacity-50"
                                    onClick={handleNext}
                                >
                                    {curCardIndex === totalCards - 1 ? "Finish" : "Next"}
                                </Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showReviewDrawer && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="rounded-2xl border border-white/10 bg-[#0E1424] p-4 shadow-2xl"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <List className="h-4 w-4 text-[#2ED4C4]" />
                                            <h4 className="font-semibold">Quick review</h4>
                                        </div>
                                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setShowReviewDrawer(false)}>
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <ScrollArea className="h-40">
                                        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                                            {vocabList.map((vocab, idx) => {
                                                const status = cardStatuses[idx];
                                                return (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurCardIndex(idx)}
                                                        className={cn(
                                                            "rounded-xl border px-3 py-2 text-left transition-colors",
                                                            idx === curCardIndex ? "border-[#2ED4C4]/60 bg-[#2ED4C4]/10" : "border-white/10 bg-white/5"
                                                        )}
                                                    >
                                                        <p className="text-sm font-semibold truncate">{vocab[0]}</p>
                                                        <p className="text-[11px] text-muted-foreground truncate">{vocab[1]}</p>
                                                        <div className="mt-1 text-[11px]">
                                                            {status === "correct" && <span className="text-[#3DD598]">Correct</span>}
                                                            {status === "wrong" && <span className="text-[#FF5C8D]">Wrong</span>}
                                                            {status === "skipped" && <span className="text-[#F59E0B]">Skipped</span>}
                                                            {status === "pending" && <span className="text-muted-foreground">Pending</span>}
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </ScrollArea>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </div>
    );
}
