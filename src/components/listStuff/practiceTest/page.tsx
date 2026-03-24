"use client";

import { findAllSetFromSet, Set, PracticeTest, PracticeTestGroup } from "@/lib/AllSets";
import { allFBLAPracticeTests } from "@/lib/practiceTests/FBLAPracticeTests";
import { useEffect, useRef, useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, X, ArrowLeft, RotateCcw, SkipForward, Flame, List, Undo2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { InteractiveHoverButton } from "../../aceternity/IntHoverButton";
import { ScrollArea } from "../../ui/scroll-area";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Option = { option: string; correct: boolean };
type PracticeQuestion = PracticeTest["questions"][number];
type Assistant = "chatgpt" | "copilot" | "perplexity" | "gemini" | "claude" | "grok";
const QUIZ_TIME_LIMIT_SECONDS = 60 * 60;

interface QuizSettings {
    streakMode: boolean;
    timerMode: boolean;
}

export default function PracticeTestPage({
    set
}: {
    set: Set
}) {
    // All state declarations - MUST be before any conditional rendering
    const [practiceTestGroup, setPracticeTestGroup] = useState<PracticeTestGroup | null>(null);
    const [hasResolvedPracticeTests, setHasResolvedPracticeTests] = useState<boolean>(false);
    const [curQuestionIndex, setCurQuestionIndex] = useState<number>(0);
    const [rightNums, setRightNums] = useState<number>(0);
    const [wrongNums, setWrongNums] = useState<number>(0);
    const [wrongQuestions, setWrongQuestions] = useState<PracticeQuestion[]>([]);
    const [inProgress, setInProgress] = useState<boolean>(true);
    const [quizSettings] = useState<QuizSettings>({
        streakMode: true,
        timerMode: false
    });
    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [chooseableOptions, setChooseableOptions] = useState<Option[] | null>(null);
    const [hasStarted, setHasStarted] = useState<boolean>(false);
    const [selectionIndex, setSelectionIndex] = useState<number | null>(null);
    const [cardStatuses, setCardStatuses] = useState<("pending" | "correct" | "wrong" | "skipped")[]>([]);
    const [showHint, setShowHint] = useState(false);
    const [showReviewDrawer, setShowReviewDrawer] = useState(false);
    const [lastResult, setLastResult] = useState<{ type: "correct" | "wrong" | "skip" | "timeout" | "none"; ts: number }>({
        type: "none",
        ts: 0
    });
    const [milestoneBurst, setMilestoneBurst] = useState(false);
    const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
    const [quizEndTime, setQuizEndTime] = useState<number | null>(null);
    const [timeSpent, setTimeSpent] = useState<string>("0s");
    const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(QUIZ_TIME_LIMIT_SECONDS);
    const [selectedAssistant, setSelectedAssistant] = useState<Assistant | "n/a">("n/a");
    const prefersReducedMotion = useReducedMotion();

    const aiOptions: { value: Assistant; label: string; subtitle: string }[] = [
        { value: "chatgpt", label: "ChatGPT", subtitle: "Balanced and detailed generation" },
        { value: "copilot", label: "Copilot", subtitle: "Fast prompt and workflow iteration" },
        { value: "perplexity", label: "Perplexity", subtitle: "Strong web-grounded output" },
        { value: "gemini", label: "Gemini", subtitle: "Large-context drafting" },
        { value: "claude", label: "Claude", subtitle: "Great long-form structure" },
        { value: "grok", label: "Grok", subtitle: "Alternative creative angle" }
    ];

    // Load practice test group
    useEffect(() => {
        const foundId: string = findAllSetFromSet(set).id;
        const found = allFBLAPracticeTests.find(t => t.id === foundId);
        setPracticeTestGroup(found ?? null);
        setHasResolvedPracticeTests(true);
    }, [set]);

    // Calculate derived values safely
    const currentTest = useMemo(() => practiceTestGroup?.tests?.[0] ?? null, [practiceTestGroup]);
    const currentQuestion = useMemo(() => currentTest?.questions?.[curQuestionIndex] ?? null, [currentTest, curQuestionIndex]);
    const totalQuestions = currentTest?.questions?.length ?? 0;
    const correctCount = rightNums;
    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timerLabel = useMemo(() => {
        const mins = Math.floor(timeLeftSeconds / 60);
        const secs = timeLeftSeconds % 60;
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }, [timeLeftSeconds]);

    const customPrompt = useMemo(() => {
        return `You are my personal FBLA Quiz Master for "${set.title}".

Run this as an interactive study guide session in chat.

Rules:
- Give me 100 total multiple-choice questions.
- Ask only 1 question at a time.
- Each question must have 4 answer choices labeled A, B, C, and D.
- Wait for my answer before revealing the correct answer.
- After I answer, explain why the correct answer is right in 1-2 sentences.
- Track my score, question count, and weak topics as we go.
- Adapt difficulty based on my performance.
- If I miss a concept repeatedly, briefly reteach it, then give a similar follow-up question.
- Keep the tone motivating, direct, and coach-like.
- Do not ask me to import, upload, fetch, or provide files.
- Do not return JSON, code blocks, or setup instructions.

Start now with Question 1 of 100.`;
    }, [set.title]);

    const launchAi = async (assistant: Assistant) => {
        const encoded = encodeURIComponent(customPrompt);

        const directUrlMap: Partial<Record<typeof assistant, string>> = {
            chatgpt: `https://chat.openai.com/?q=${encoded}`,
            copilot: `https://copilot.microsoft.com/?q=${encoded}`,
            perplexity: `https://www.perplexity.ai/search?q=${encoded}`,
        };

        const fallbackHomeMap: Record<typeof assistant, string> = {
            chatgpt: "https://chat.openai.com/",
            copilot: "https://copilot.microsoft.com/",
            perplexity: "https://www.perplexity.ai/",
            gemini: "https://gemini.google.com/",
            claude: "https://claude.ai/",
            grok: "https://grok.com/",
        };

        const directUrl = directUrlMap[assistant];
        if (directUrl) {
            window.open(directUrl, "_blank");
            return;
        }

        try {
            await navigator.clipboard.writeText(customPrompt);
            window.alert("Prompt copied. Paste it into the AI chat after the page opens.");
        } catch {
            window.alert("Could not auto-copy the prompt. You can copy it manually from this page's source.");
        }

        window.open(fallbackHomeMap[assistant], "_blank");
    };

    // Update chooseable options when question changes
    useEffect(() => {
        if (!currentQuestion) {
            setChooseableOptions(null);
            return;
        }

        const options: Option[] = currentQuestion.options.map((opt, idx) => ({
            option: opt,
            correct: idx === currentQuestion.correctAnswerIndex
        }));
        setChooseableOptions(options);
        setSelectionIndex(null);
        setShowHint(false);
    }, [curQuestionIndex, currentQuestion]);

    // Handle milestone burst animation
    useEffect(() => {
        if (rightNums > 0 && rightNums % 5 === 0) {
            setMilestoneBurst(true);
            const timer = setTimeout(() => setMilestoneBurst(false), 1200);
            return () => clearTimeout(timer);
        }
    }, [rightNums]);

    // Calculate time spent when quiz completes
    useEffect(() => {
        if (!inProgress && quizStartTime && !quizEndTime) {
            const end = Date.now();
            setQuizEndTime(end);
            const diff = Math.floor((end - quizStartTime) / 1000);
            const mins = Math.floor(diff / 60);
            const secs = diff % 60;
            setTimeSpent(`${mins}m ${secs}s`);
        }
    }, [inProgress, quizStartTime, quizEndTime]);

    // Fixed 1-hour timer for the full quiz session
    useEffect(() => {
        if (!hasStarted || !inProgress || !quizStartTime) return;

        const tick = () => {
            const elapsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
            const remaining = Math.max(0, QUIZ_TIME_LIMIT_SECONDS - elapsedSeconds);
            setTimeLeftSeconds(remaining);

            if (remaining === 0) {
                setLastResult({ type: "timeout", ts: Date.now() });
                setInProgress(false);
            }
        };

        tick();
        const intervalId = window.setInterval(tick, 1000);
        return () => window.clearInterval(intervalId);
    }, [hasStarted, inProgress, quizStartTime]);

    const handleOptionSelect = (option: Option, index: number) => {
        if (!currentQuestion) return;
        if (cardStatuses[curQuestionIndex] !== "pending") return;

        setSelectionIndex(index);
        setShowHint(false);

        if (option.correct) {
            setRightNums(prev => prev + 1);
            setCurrentStreak(prev => prev + 1);
            setCardStatuses(prev => {
                const copy = [...prev];
                copy[curQuestionIndex] = "correct";
                return copy;
            });
            setLastResult({ type: "correct", ts: Date.now() });
        } else {
            setWrongNums(prev => prev + 1);
            setWrongQuestions(prev => [...prev, currentQuestion]);
            setCurrentStreak(0);
            setCardStatuses(prev => {
                const copy = [...prev];
                copy[curQuestionIndex] = "wrong";
                return copy;
            });
            setLastResult({ type: "wrong", ts: Date.now() });
        }
    };

    const handleSkip = () => {
        if (cardStatuses[curQuestionIndex] !== "pending") return;
        setCardStatuses(prev => {
            const copy = [...prev];
            copy[curQuestionIndex] = "skipped";
            return copy;
        });
        setCurrentStreak(0);
        setSelectionIndex(null);
        setLastResult({ type: "skip", ts: Date.now() });
    };

    const handleNext = () => {
        if (curQuestionIndex < totalQuestions - 1) {
            setCurQuestionIndex(prev => prev + 1);
        } else {
            setInProgress(false);
        }
    };

    const handleUndo = () => {
        if (curQuestionIndex === 0) return;
        setCurQuestionIndex(prev => Math.max(0, prev - 1));
    };

    const handleStartQuiz = () => {
        setCardStatuses(Array(totalQuestions).fill("pending"));
        setCurQuestionIndex(0);
        setRightNums(0);
        setWrongNums(0);
        setWrongQuestions([]);
        setCurrentStreak(0);
        setSelectionIndex(null);
        setShowHint(false);
        setInProgress(true);
        setHasStarted(true);
        setQuizEndTime(null);
        setTimeLeftSeconds(QUIZ_TIME_LIMIT_SECONDS);
        setQuizStartTime(Date.now());
    };

    // Loading state - check after all hooks are defined
    if (!hasResolvedPracticeTests) {
        return (
            <section className="w-full h-[85vh] flex items-center justify-center bg-[#111827] light:bg-white text-white light:text-slate-900">
                <div className="text-center">
                    <div className="inline-block p-4 rounded-full bg-[#2ED4C4]/10 light:bg-[#2ED4C4]/5 mb-4">
                        <div className="animate-spin h-8 w-8 border-2 border-[#2ED4C4] border-t-transparent rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground">Loading practice tests...</p>
                </div>
            </section>
        );
    }

    if (!practiceTestGroup) {
        const activeAi = aiOptions.find(option => option.value === selectedAssistant);
        return (
            <section className="w-full h-[85vh] flex items-center justify-center bg-[#111827] light:bg-white text-white light:text-slate-900">
                <div className="text-center px-6">
                    <p className="text-lg font-semibold">There are no practice tests here right now, check back later. In the mean time, why not make your own practice test?</p>
                    <p className="text-sm text-muted-foreground mt-2">Check back later for new practice tests for this set.</p>
                </div>

                <div className="relative w-full min-h-[68vh] text-white light:text-slate-900 overflow-hidden">
                <Card className="relative max-w-2xl w-[92vw] flex flex-row gap-2  z-10 h-[20vh] mx-auto overflow-hidden border border-[#C084FC]/35 bg-gradient-to-br from-[#4C1D95]/95 via-[#7C3AED]/88 to-[#F97316]/86 backdrop-blur-xl rounded-[30px] p-0 shadow-[0_18px_60px_rgba(76,29,149,0.5)]">
                    <div className="absolute -top-14 -right-12 h-36 w-36 rounded-full bg-[#A855F7]/25 blur-3xl" />
                    <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#FB923C]/25 blur-3xl" />
                    <div className="relative flex flex-row gap-2 p-3.5 md:p-4 space-y-3">
                        <div className="space-y-1 my-1 mx-1">
                            <p className="text-[11px] tracking-[0.2em] uppercase text-[#A7F7EF]">Custom generator</p>
                            <p className="text-base md:text-xl font-semibold text-white leading-snug">
                                Create your own practice test with AI
                            </p>
                            <p className="text-[12px] md:text-sm text-white/85">
                                Pick an assistant and launch with your prebuilt prompt for the {set.title}.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/20 bg-black/20 p-2 md:p-2.5 space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">Choose assistant (auto-opens)</p>
                            <Select
                                value={selectedAssistant}
                                onValueChange={(value) => {
                                    const assistant = value as Assistant;
                                    setSelectedAssistant(assistant);
                                    void launchAi(assistant);
                                }}
                            >
                                <SelectTrigger className="h-10 w-full !text-white color-white rounded-xl border-white/25 bg-white/10 text-white focus:ring-[#C084FC]">
                                    <SelectValue placeholder="Select and launch AI" className="text-white color-white" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-white/15 bg-[#34155F] text-white">
                                    {aiOptions.map((assistant) => (
                                        <SelectItem key={assistant.value} value={assistant.value} className="focus:bg-white/10 focus:text-white">
                                            {assistant.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>


                    </div>
                </Card>

                <Card className="relative z-10 max-w-2xl w-[92vw] mx-auto mt-4 border border-[#2ED4C4]/30 light:border-slate-300 bg-[#111827]/70 light:bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-7">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-1">{set.title} Practice Test</h2>
                            <p className="text-muted-foreground">{totalQuestions} questions • {Math.ceil(totalQuestions / 2)} minutes</p>
                            <p className="text-xs text-muted-foreground mt-1">Fixed quiz time limit: 60 minutes</p>
                        </div>
                        <div className="space-y-3 p-4 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300">
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#2ED4C4]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#2ED4C4]" />
                                </div>
                                <div>
                                    <p className="font-medium">Multiple Choice Format</p>
                                    <p className="text-sm text-muted-foreground">Select one answer per question</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#806BFF]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#806BFF]" />
                                </div>
                                <div>
                                    <p className="font-medium">Cannot Change Answers</p>
                                    <p className="text-sm text-muted-foreground">Review your selection before confirming</p>
                                </div>
                            </div>
                        </div>
                        <Button onClick={handleStartQuiz} className="w-full bg-gradient-to-r from-[#2ED4C4] to-[#806BFF] text-white hover:opacity-90 h-12 text-lg">
                            Start Test
                        </Button>
                    </div>
                </Card>
            </div>
            </section>
        );
    }

    // Guard: ensure test data is loaded
    if (!currentTest || !currentQuestion || totalQuestions === 0) {
        const activeAi = aiOptions.find(option => option.value === selectedAssistant);
        return (
            <section className="w-full h-[85vh] flex items-center justify-center bg-[#111827] light:bg-white text-white light:text-slate-900">
                <div className="text-center px-6">
                    <p className="text-lg font-semibold">There are no practice tests here right now, check back later. In the mean time, why not make your own practice test?</p>
                    <p className="text-sm text-muted-foreground mt-2">Check back later for new practice tests for this set.</p>
                </div>

                <div className="relative w-full min-h-[68vh] text-white light:text-slate-900 overflow-hidden">
                <Card className="relative max-w-2xl w-[92vw] flex flex-row gap-2  z-10 h-[20vh] mx-auto overflow-hidden border border-[#C084FC]/35 bg-gradient-to-br from-[#4C1D95]/95 via-[#7C3AED]/88 to-[#F97316]/86 backdrop-blur-xl rounded-[30px] p-0 shadow-[0_18px_60px_rgba(76,29,149,0.5)]">
                    <div className="absolute -top-14 -right-12 h-36 w-36 rounded-full bg-[#A855F7]/25 blur-3xl" />
                    <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#FB923C]/25 blur-3xl" />
                    <div className="relative flex flex-row gap-2 p-3.5 md:p-4 space-y-3">
                        <div className="space-y-1 my-1 mx-1">
                            <p className="text-[11px] tracking-[0.2em] uppercase text-[#A7F7EF]">Custom generator</p>
                            <p className="text-base md:text-xl font-semibold text-white leading-snug">
                                Create your own practice test with AI
                            </p>
                            <p className="text-[12px] md:text-sm text-white/85">
                                Pick an assistant and launch with your prebuilt prompt for the {set.title}.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/20 bg-black/20 p-2 md:p-2.5 space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">Choose assistant (auto-opens)</p>
                            <Select
                                value={selectedAssistant}
                                onValueChange={(value) => {
                                    const assistant = value as Assistant;
                                    setSelectedAssistant(assistant);
                                    void launchAi(assistant);
                                }}
                            >
                                <SelectTrigger className="h-10 w-full !text-white color-white rounded-xl border-white/25 bg-white/10 text-white focus:ring-[#C084FC]">
                                    <SelectValue placeholder="Select and launch AI" className="text-white color-white" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-white/15 bg-[#34155F] text-white">
                                    {aiOptions.map((assistant) => (
                                        <SelectItem key={assistant.value} value={assistant.value} className="focus:bg-white/10 focus:text-white">
                                            {assistant.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>


                    </div>
                </Card>

                <Card className="relative z-10 max-w-2xl w-[92vw] mx-auto mt-4 border border-[#2ED4C4]/30 light:border-slate-300 bg-[#111827]/70 light:bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-7">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-1">{set.title} Practice Test</h2>
                            <p className="text-muted-foreground">{totalQuestions} questions • {Math.ceil(totalQuestions / 2)} minutes</p>
                            <p className="text-xs text-muted-foreground mt-1">Fixed quiz time limit: 60 minutes</p>
                        </div>
                        <div className="space-y-3 p-4 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300">
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#2ED4C4]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#2ED4C4]" />
                                </div>
                                <div>
                                    <p className="font-medium">Multiple Choice Format</p>
                                    <p className="text-sm text-muted-foreground">Select one answer per question</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#806BFF]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#806BFF]" />
                                </div>
                                <div>
                                    <p className="font-medium">Cannot Change Answers</p>
                                    <p className="text-sm text-muted-foreground">Review your selection before confirming</p>
                                </div>
                            </div>
                        </div>
                        <Button onClick={handleStartQuiz} className="w-full bg-gradient-to-r from-[#2ED4C4] to-[#806BFF] text-white hover:opacity-90 h-12 text-lg">
                            Start Test
                        </Button>
                    </div>
                </Card>
            </div>
            </section>
        );
    }


    const currentStatus = cardStatuses[curQuestionIndex] ?? "pending";
    const progressValue = totalQuestions > 0 ? ((curQuestionIndex + 1) / totalQuestions) * 100 : 0;
    const streakHeat = Math.min(currentStreak / 5, 1);
    const gradientBorder = "linear-gradient(135deg,#2ED4C4,#806BFF)";
    const canAdvance = cardStatuses[curQuestionIndex] !== "pending";

    // Completion view
    if (!inProgress) {
        return (
            <div className="relative w-full min-h-[90vh] text-white light:text-slate-900 overflow-hidden">
                <Card className="relative z-10 max-w-6xl w-[92vw] mx-auto mt-10 mb-8 border border-[#2ED4C4]/30 light:border-slate-300 bg-[#111827]/70 light:bg-white/90 backdrop-blur-xl rounded-3xl p-8">
                    <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-[#2ED4C4]/15">
                                <Trophy className="h-8 w-8 text-[#2ED4C4]" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Practice test finished</p>
                                <h2 className="text-3xl font-semibold">Great job!</h2>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Badge variant="outline" className="border-[#2ED4C4]/40 text-[#2ED4C4] bg-[#2ED4C4]/10">Streak {currentStreak}</Badge>
                            <Badge variant="outline" className="border-[#806BFF]/40 text-[#806BFF] bg-[#806BFF]/10">Time {timeSpent}</Badge>
                            {lastResult.type === "timeout" && (
                                <Badge variant="outline" className="border-[#F59E0B]/40 text-[#F59E0B] bg-[#F59E0B]/10">Time limit reached</Badge>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Accuracy</span>
                                <span>{score}%</span>
                            </div>
                            <div className="h-3 rounded-full bg-white/5 overflow-hidden border border-white/10">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${score}%`,
                                        background: "linear-gradient(90deg,#2ED4C4,#806BFF)"
                                    }}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground">{correctCount}/{totalQuestions} correct answers</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Card className="bg-white/5 light:bg-slate-100 border-white/10 light:border-slate-300 p-4 rounded-2xl">
                                <p className="text-xs text-muted-foreground">Best streak</p>
                                <p className="text-2xl font-semibold">{currentStreak}</p>
                            </Card>
                            <Card className="bg-white/5 light:bg-slate-100 border-white/10 light:border-slate-300 p-4 rounded-2xl">
                                <p className="text-xs text-muted-foreground">Time spent</p>
                                <p className="text-2xl font-semibold">{timeSpent}</p>
                            </Card>
                        </div>
                    </div>

                    {wrongQuestions.length > 0 && (
                        <div className="mt-6">
                            <div className="flex items-center gap-2 mb-2">
                                <X className="h-4 w-4 text-[#FF5C8D]" />
                                <h3 className="font-semibold">Review list</h3>
                            </div>
                            <ScrollArea className="h-48 border border-white/5 light:border-slate-200 rounded-2xl p-3 bg-black/20 light:bg-slate-50">
                                {wrongQuestions.map((q) => (
                                    <div key={q.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 light:bg-white mb-2">
                                        <div>
                                            <p className="font-medium text-sm">{q.question}</p>
                                            <p className="text-xs text-muted-foreground mt-1">Correct: {q.options[q.correctAnswerIndex]}</p>
                                            <p className="text-xs text-muted-foreground mt-1">Why: {q.explanation}</p>
                                        </div>
                                        <Badge variant="outline" className="border-[#FF5C8D]/40 text-[#FF5C8D]">Missed</Badge>
                                    </div>
                                ))}
                            </ScrollArea>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3 justify-end mt-6">
                        <Button variant="ghost" className="gap-2 text-white light:text-slate-900" onClick={() => setHasStarted(false)}>
                            <ArrowLeft className="h-4 w-4" /> Back to setup
                        </Button>
                        <InteractiveHoverButton onClick={handleStartQuiz}>
                            <RotateCcw className="h-4 w-4 mr-1" /> Restart test
                        </InteractiveHoverButton>
                    </div>
                </Card>
            </div>
        );
    }

    // Setup view
    if (!hasStarted) {
        const activeAi = aiOptions.find(option => option.value === selectedAssistant);

        return (
            <div className="relative w-full min-h-[68vh] text-white light:text-slate-900 overflow-hidden">
                <Card className="relative max-w-2xl w-[92vw] flex flex-row gap-2  z-10 h-[20vh] mx-auto overflow-hidden border border-[#C084FC]/35 bg-gradient-to-br from-[#4C1D95]/95 via-[#7C3AED]/88 to-[#F97316]/86 backdrop-blur-xl rounded-[30px] p-0 shadow-[0_18px_60px_rgba(76,29,149,0.5)]">
                    <div className="absolute -top-14 -right-12 h-36 w-36 rounded-full bg-[#A855F7]/25 blur-3xl" />
                    <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#FB923C]/25 blur-3xl" />
                    <div className="relative flex flex-row gap-2 p-3.5 md:p-4 space-y-3">
                        <div className="space-y-1 my-1 mx-1">
                            <p className="text-[11px] tracking-[0.2em] uppercase text-[#A7F7EF]">Custom generator</p>
                            <p className="text-base md:text-xl font-semibold text-white leading-snug">
                                Create your own practice test with AI
                            </p>
                            <p className="text-[12px] md:text-sm text-white/85">
                                Pick an assistant and launch with your prebuilt prompt for the {set.title}.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/20 bg-black/20 p-2 md:p-2.5 space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">Choose assistant (auto-opens)</p>
                            <Select
                                value={selectedAssistant}
                                onValueChange={(value) => {
                                    const assistant = value as Assistant;
                                    setSelectedAssistant(assistant);
                                    void launchAi(assistant);
                                }}
                            >
                                <SelectTrigger className="h-10 w-full !text-white color-white rounded-xl border-white/25 bg-white/10 text-white focus:ring-[#C084FC]">
                                    <SelectValue placeholder="Select and launch AI" className="text-white color-white" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-white/15 bg-[#34155F] text-white">
                                    {aiOptions.map((assistant) => (
                                        <SelectItem key={assistant.value} value={assistant.value} className="focus:bg-white/10 focus:text-white">
                                            {assistant.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>


                    </div>
                </Card>

                <Card className="relative z-10 max-w-2xl w-[92vw] mx-auto mt-4 border border-[#2ED4C4]/30 light:border-slate-300 bg-[#111827]/70 light:bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-7">
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-1">{currentTest.title}</h2>
                            <p className="text-muted-foreground">{totalQuestions} questions • {Math.ceil(totalQuestions / 2)} minutes</p>
                            <p className="text-xs text-muted-foreground mt-1">Fixed quiz time limit: 60 minutes</p>
                        </div>
                        <div className="space-y-3 p-4 rounded-lg bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-300">
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#2ED4C4]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#2ED4C4]" />
                                </div>
                                <div>
                                    <p className="font-medium">Multiple Choice Format</p>
                                    <p className="text-sm text-muted-foreground">Select one answer per question</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="p-2 rounded-full bg-[#806BFF]/20">
                                    <div className="w-2 h-2 rounded-full bg-[#806BFF]" />
                                </div>
                                <div>
                                    <p className="font-medium">Cannot Change Answers</p>
                                    <p className="text-sm text-muted-foreground">Review your selection before confirming</p>
                                </div>
                            </div>
                        </div>
                        <Button onClick={handleStartQuiz} className="w-full bg-gradient-to-r from-[#2ED4C4] to-[#806BFF] text-white hover:opacity-90 h-12 text-lg">
                            Start Test
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    // Test in progress view
    return (
        <div className="relative w-full min-h-[90vh] text-white light:text-slate-900 overflow-hidden">
            <audio ref={audioRef} src="/correct.mp3" className="hidden" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="flex flex-col justify-between min-h-[80vh]">
                    {/* Header with progress */}
                    <div className="flex flex-row gap-2 items-center pt-4">
                        <div className="w-[50%] rounded-3xl border border-white/10 light:border-slate-300 bg-white/5 light:bg-slate-100 px-4 py-3 shadow-inner">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                                <span>Progress</span>
                                <span>{Math.round(progressValue)}%</span>
                            </div>
                            <div className="flex gap-[2px] h-3 rounded-full overflow-hidden bg-black/40 light:bg-slate-200 border border-white/10 light:border-slate-300">
                                {cardStatuses.map((status, idx) => (
                                    <div
                                        key={idx}
                                        className={cn("h-full rounded-full flex-1 transition-all duration-200", idx === curQuestionIndex ? "opacity-100" : "opacity-70")}
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

                        <div className="w-[150px] rounded-3xl border border-[#F59E0B]/35 bg-[#0F1424] light:bg-slate-50 px-4 py-3">
                            <div className="text-[11px] text-muted-foreground uppercase tracking-[0.18em] mb-1">Timer</div>
                            <div className="text-xl font-semibold text-[#F59E0B] tabular-nums">{timerLabel}</div>
                        </div>

                        {quizSettings.streakMode && (
                            <div className="ml-auto w-[200px] flex flex-col gap-2 rounded-4xl border border-[#2ED4C4]/30 light:border-[#2ED4C4]/40 bg-[#0F1424] light:bg-slate-50 px-6 py-4">
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <div className="flex items-center mr-1">
                                        <Flame className="h-4 w-4 text-[#F59E0B]" />
                                        <span>Streak:</span>
                                    </div>
                                    <span className="text-white light:text-slate-900 font-semibold">{currentStreak}</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden bg-black/50 light:bg-slate-200 border border-white/10 light:border-slate-300">
                                    <div
                                        className="h-full transition-all"
                                        style={{
                                            width: `${Math.min(100, streakHeat * 100)}%`,
                                            background: "linear-gradient(90deg,#F59E0B,#FF5C8D)"
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Central question + grid */}
                    <div className="space-y-5">
                        <motion.div
                            key={`${curQuestionIndex}-${lastResult.ts}`}
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
                                <div className="relative rounded-[22px] bg-[#0E1424]/80 light:bg-white backdrop-blur-xl border border-white/10 light:border-slate-300 p-8 shadow-2xl">
                                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Question {curQuestionIndex + 1} of {totalQuestions}</p>
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        <Badge variant="outline" className="border-[#806BFF]/40 text-[#806BFF] bg-[#806BFF]/10">
                                            {currentQuestion.difficulty}
                                        </Badge>
                                        {currentQuestion.category && (
                                            <Badge variant="outline" className="border-[#2ED4C4]/40 text-[#2ED4C4] bg-[#2ED4C4]/10">
                                                {currentQuestion.category}
                                            </Badge>
                                        )}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-white light:text-slate-900">
                                        {currentQuestion.question}
                                    </h2>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-3">
                            {chooseableOptions?.map((option, index) => {
                                const isSelected = selectionIndex === index;
                                const status = cardStatuses[curQuestionIndex];
                                const isCorrect = option.correct;
                                const base =
                                    status === "pending"
                                        ? "bg-white/5 light:bg-slate-100 border-white/10 light:border-slate-300 hover:border-[#2ED4C4]/50"
                                        : isCorrect
                                            ? "bg-[#3DD598]/15 border-[#3DD598]/40"
                                            : isSelected
                                                ? "bg-[#FF5C8D]/15 border-[#FF5C8D]/40"
                                                : "bg-white/5 light:bg-slate-100 border-white/10 light:border-slate-300";

                                return (
                                    <motion.button
                                        key={`opt-${index}`}
                                        type="button"
                                        whileTap={{ scale: 0.97 }}
                                        className={cn(
                                            "group relative rounded-2xl border px-3 py-4 text-left transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2ED4C4] focus-visible:ring-offset-[#0B1220] light:focus-visible:ring-offset-white",
                                            base
                                        )}
                                        onClick={() => handleOptionSelect(option, index)}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="h-9 w-9 rounded-xl bg-white/5 light:bg-white text-xs flex items-center justify-center border border-white/10 light:border-slate-300">
                                                {String.fromCharCode(65 + index)}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold leading-snug text-white light:text-slate-900">{option.option}</p>
                                                {status !== "pending" && (
                                                    <p className="text-[11px] text-muted-foreground light:text-slate-600 mt-1">
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
                    <div className="rounded-2xl p-4 flex flex-wrap gap-3 items-center justify-between">
                        <div className="flex gap-2 flex-wrap">
                            <Button variant="secondary" className="bg-[#2ED4C4]/15 text-[#2ED4C4] border-[#2ED4C4]/30 min-w-[96px]" onClick={handleSkip}>
                                <SkipForward className="h-4 w-4 mr-2" /> Skip
                            </Button>
                            <Button variant="ghost" className="text-white light:text-slate-900 border border-white/10 light:border-slate-300 min-w-[96px]" onClick={() => setShowHint(true)}>
                                Hint
                            </Button>
                            <Button variant="ghost" className="text-white light:text-slate-900 border border-white/10 light:border-slate-300 min-w-[96px]" onClick={handleUndo}>
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
                                {curQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showHint && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="rounded-2xl border border-[#2ED4C4]/30 bg-[#0E1424] light:bg-white p-4"
                            >
                                <p className="text-xs uppercase tracking-[0.2em] text-[#2ED4C4] mb-2">Hint</p>
                                <p className="text-sm text-white light:text-slate-900">{currentQuestion.explanation}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showReviewDrawer && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="rounded-2xl border border-white/10 light:border-slate-300 bg-[#0E1424] light:bg-white p-4 shadow-2xl"
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
                                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 pr-4">
                                        {currentTest.questions.map((q, idx) => {
                                            const status = cardStatuses[idx];
                                            return (
                                                <div
                                                    key={q.id}
                                                    onClick={() => setCurQuestionIndex(idx)}
                                                    role="button"
                                                    tabIndex={0}
                                                    className={cn(
                                                        "rounded-xl border px-3 py-2 text-left transition-colors cursor-pointer",
                                                        idx === curQuestionIndex ? "border-[#2ED4C4]/60 bg-[#2ED4C4]/10" : "border-white/10 light:border-slate-300 bg-white/5 light:bg-slate-100"
                                                    )}
                                                >
                                                    <p className="text-sm font-semibold truncate">Q{idx + 1}</p>
                                                    <p className="text-[11px] text-muted-foreground truncate">{q.question.substring(0, 30)}...</p>
                                                    <div className="mt-1 text-[11px]">
                                                        {status === "correct" && <span className="text-[#3DD598]">✓ Correct</span>}
                                                        {status === "wrong" && <span className="text-[#FF5C8D]">✗ Wrong</span>}
                                                        {status === "skipped" && <span className="text-[#F59E0B]">⊘ Skipped</span>}
                                                        {status === "pending" && <span className="text-muted-foreground">? Pending</span>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollArea>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}