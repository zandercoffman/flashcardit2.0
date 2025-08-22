/* eslint-disable */
"use client"

import { useEffect, useRef, useState } from "react";
import { Progress } from "../ui/progress";
import { QuizSettings, QuizSetup } from "./quizStuff/setup";
import { AnimatedCircularProgressBar } from "../aceternity/circleProgress";
import { Badge } from "../ui/badge";
import { ArrowDownUp, ArrowLeft, CheckCircle, CheckCircleIcon, Clock, Flame, RotateCcw, Timer, Trophy, X, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { BlurFade } from "../aceternity/blurFade";
import { InteractiveHoverButton } from "../aceternity/IntHoverButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { toast } from "sonner";
import { ScrollArea } from "../ui/scroll-area";

type ChooseableOptions = [
    { option: string, correct: boolean | null },
    { option: string, correct: boolean | null },
    { option: string, correct: boolean | null },
    { option: string, correct: boolean | null }
]

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
    const [wrongVocab, setWrongVocab] = useState<[string, string][]>(
        [
            ["hello", "he"],
            ["hello", "he"],
            ["hello", "he"],
            ["hello", "he"],
            ["hello", "he"],
            ["hello", "he"]
        ]
    );

    const [inProgress, setInProgress] = useState<boolean>(true);

    const [currentMode, setCurrentMode] = useState<"study" | "quiz-setup" | "quiz">("quiz-setup")
    const [quizSettings, setQuizSettings] = useState<QuizSettings>({
        streakMode: false,
        timerMode: false,
        randomMode: false
    })

    const [currentStreak, setCurrentStreak] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(5);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [changeSide, setChangeSide] = useState<boolean>(false);

    const [hasChosenRightAns, setHasChosenRightAns] = useState<boolean>(false);

    const [chooseableOptions, setChooseableOptions] = useState<ChooseableOptions | null>(null);

    const [hasStarted, setHasStarted] = useState<boolean>(false); // IMPORTANT: THIS CHANGES THE MODES
    const [selectedButtons, setSelectedButtons] = useState<[boolean | null, boolean | null, boolean | null, boolean | null]>(
        [null, null, null, null]
    );

    const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
    const [quizEndTime, setQuizEndTime] = useState<number | null>(null);
    const [timeSpent, setTimeSpent] = useState<string>("0s");

    // ⬇️ Called when starting quiz
    const handleStartQuiz = (settings: QuizSettings) => {
        setQuizSettings(settings);

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
        //Going to get the new card from the new card index
        let gottenCard = potentialCopy ? potentialCopy.vocab[curCardIndex] : currentSet.vocab[curCardIndex];
        if (gottenCard) {
            setCurCard(gottenCard);
        } else {
            setInProgress(false);
        }

    }, [curCardIndex])

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;

        if (quizSettings.timerMode) {
            setCurrentTime(5);
            if (audioRef.current) {
                audioRef.current.volume = 0.2
                audioRef.current.loop = true;
                audioRef.current.play()
            }

            intervalId = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (hasChosenRightAns) {
                        if (intervalId) clearInterval(intervalId);
                        if (audioRef.current) {
                            audioRef.current.loop = false;
                            audioRef.current.pause()
                        }

                        return prevTime;

                    }
                    if (prevTime <= 1) {
                        // CHANGE HERE
                        setSelectedButtons([true, true, true, true])
                        setHasChosenRightAns(true)
                        setCurrentStreak(0)
                        if (intervalId) clearInterval(intervalId);

                        if (audioRef.current) {
                            audioRef.current.loop = false;
                            audioRef.current.pause()
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
    }, [curCardIndex, quizSettings.timerMode, hasChosenRightAns]);


    useEffect(() => {
        if (curCardIndex === currentSet.vocab.length) {
            setInProgress(false);
        }

        let gottenCard = potentialCopy ? potentialCopy.vocab[curCardIndex] : currentSet.vocab[curCardIndex];
        let rightOption = gottenCard[changeSide ? 0 : 1];

        let incorrectAnswers = currentSet.vocab
            .filter((entry, index) => index !== curCardIndex)
            .map(entry => entry[changeSide ? 0 : 1]);


        let shuffledIncorrect = incorrectAnswers.sort(() => 0.5 - Math.random());
        const numIncorrectAnswers = 3;

        let selectedIncorrectAns = shuffledIncorrect.slice(0, numIncorrectAnswers);
        let allAnswers = [rightOption, ...selectedIncorrectAns];

        /**
         * [
                { option: string, correct: boolean },
                { option: string, correct: boolean },
                { option: string, correct: boolean },
                { option: string, correct: boolean }
            ]
         */

        let fullMapping: ChooseableOptions = allAnswers
            .map(answer => ({
                option: answer,
                correct: answer === rightOption
            }))
            .sort(() => Math.random() - 0.5) as ChooseableOptions;

        setSelectedButtons([null, null, null, null])
        setHasChosenRightAns(false)
        setChooseableOptions(fullMapping);

    }, [curCard, changeSide])

    if (true || !inProgress || curCardIndex >= currentSet.vocab.length) {
        return <div className="w-full h-full flex flex-col items-center justify-center">
            <Card className="w-full h-full flex flex-row relative px-10 py-6 mb-8">
                <div className="flex flex-col gap-3 w-1/2 h-full flex-col ">
                    <div className="flex gap-3 mb-6">
                        <div className="p-2 rounded-xl w-20 h-20 flex justify-center items-center bg-blue-500/10">
                            <Trophy className="w-12  h-12 text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-foreground">Your Progress</h2>
                            <p className="text-md text-muted-foreground">Quiz performance summary</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-foreground">{rightNums / currentSet.vocab.length * 100}%</span>
                        </div>
                        <Progress value={rightNums} max={currentSet.vocab.length} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                            {rightNums}/{currentSet.vocab.length} correct answers
                        </p>
                    </div>
                    <div className="flex w-full gap-2">
                        <div className="flex flex-1 items-center gap-3 p-3 rounded-lg bg-background/50">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <div>
                                <p className="text-sm text-muted-foreground">Time</p>
                                <p className="font-semibold text-foreground">{timeSpent}</p>
                            </div>
                        </div>

                        {quizSettings.streakMode && (
                            <div className="flex flex-1 items-center gap-3 p-3 rounded-lg bg-background/50">
                                <Zap className="w-5 h-5 text-orange-500" />
                                <div>
                                    <p className="text-sm text-muted-foreground">Streak</p>
                                    <p className="font-semibold text-foreground">
                                        {quizSettings.streakMode ? currentStreak : ""} in a row
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex flex-col gap-3 w-1/2 h-full flex-col ">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-red-500/10">
                            <X className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-foreground">Missed Words</h2>
                            <p className="text-sm text-muted-foreground">Review these for next time</p>
                        </div>
                    </div>
                    <ScrollArea className="w-full h-[44vh] overflow-y-hidden flex flex-col gap-4">
                        {
                            wrongVocab.map((vocab, idx) => {
                                return <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 mt-4 w-[90%] mb-4 rounded-lg bg-background/50 border border-red-500/20"
                                >
                                    <span className="font-medium text-foreground">{vocab[0]}</span>
                                    <Badge variant="outline" className="text-red-500 border-red-500/30">
                                        Missed
                                    </Badge>
                                </div>
                            })
                        }
                    </ScrollArea>
                </div>

                <div className="absolute bottom-4 right-4 flex flex-row gap-2">
                    <Button variant="outline" size="lg" className="gap-2 bg-transparent rounded-full">
                        <RotateCcw className="w-4 h-4" />
                        Try Again
                    </Button>
                    <InteractiveHoverButton>Continue</InteractiveHoverButton>
                </div>
            </Card>
        </div>
    }


    return <div className="w-full h-full flex flex-col items-center justify-center">
        <audio ref={audioRef} src="/correct.mp3" className="hidden" />
        <div className="h-[95%]">
            {!hasStarted ? <QuizSetup onStartQuiz={handleStartQuiz} /> :
                <div className="relative flex flex-1 flex-col w-full h-full">
                    {/**All of the other quiz FIXED THINGS */}
                    <div className="fixed top-[10vh] flex flex-col right-[1vw] z-10 items-end gap-2 p-4">
                        <div className="flex flex-row gap-2 items-center justify-center mr-2">
                            <Progress
                                value={((curCardIndex + 1) / currentSet.vocab.length) * 100}
                                max={100}
                                className="w-[10vw]"
                            />
                            <span className="font-bold">
                                {(((curCardIndex + 1) / currentSet.vocab.length) * 100).toFixed(0)}
                            </span>%
                        </div>
                        <div className="flex flex-row gap-8">
                            {
                                quizSettings.streakMode && <div className="flex flex-row font-bold gap-2 items-center justify-center">
                                    <Flame className="size-8 text-orange-500" />
                                    {currentStreak}
                                </div>
                            }
                            {
                                quizSettings.timerMode && <div className="flex flex-row gap-2 items-center justify-center">
                                    <Timer className="size-8" />
                                    <AnimatedCircularProgressBar
                                        max={5}
                                        value={currentTime}
                                        min={0}
                                        showValue
                                        gaugePrimaryColor="rgb(79 70 229)"
                                        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
                                        className="size-12 text-lg" />
                                </div>
                            }
                        </div>
                    </div>
                    {/**Other thing */}
                    <div className="w-[90vw] md:w-[35vw] md:h-[70vh] flex flex-col gap-10 items-center justify-between mx-auto ">
                        {/** This is for the current card and what it is at the current moment */}

                        <Card className="w-full h-80 flex flex-row relative items-center justify-center mb-8">
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button className="cursor-pointer !bg-transparent hover:!bg-transparent dark:text-white text-black !shadow-none"
                                        onClick={() => {
                                            setChangeSide(!changeSide);
                                        }}>
                                        <ArrowDownUp className="size-10" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Switch Sides</p>
                                </TooltipContent>
                            </Tooltip>

                            <div className="text-center">
                                <BlurFade delay={0.25}>
                                    <h2 className=" font-bold text-4xl mb-4">{curCard[changeSide ? 1 : 0]}</h2>
                                    <p className="text-muted-foreground text-sm">Choose the correct translation/matching piece.</p>

                                </BlurFade>
                            </div>
                        </Card>

                        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[90vw] md:w-[50vw] h-64 ">
                            {
                                chooseableOptions?.map((option, index) => (
                                    <Button className="w-full h-[11vh] cursor-pointer transition-all duration-200 hover:shadow-xl"
                                        onClick={() => {
                                            let arr = [...selectedButtons] as [boolean | null, boolean | null, boolean | null, boolean | null];// <-- create a shallow copy
                                            arr[index] = true;
                                            setSelectedButtons(arr);

                                            if (option.correct) {
                                                setRightNums(prev => prev + 1);

                                                if (!hasChosenRightAns) {
                                                    setCurrentStreak(prev => prev + 1)
                                                }
                                                setHasChosenRightAns(true);

                                            } else {
                                                setWrongVocab([...wrongVocab, curCard]);
                                                setCurrentStreak(0);
                                            }
                                        }}

                                        style={{
                                            backgroundColor: selectedButtons[index] != null
                                                ? (option.correct ? "#22c55e" : "#ef4444")
                                                : "#000000"

                                        }}>
                                        <div className="flex items-center justify-center gap-2 dark:text-white">
                                            <BlurFade delay={0.25 * (index + 1)} className="flex flex-row gap-2">
                                                <span className={`text-${option.option.length > 30 ? "xs" : "lg"} font-medium break-words whitespace-normal`}>
                                                    {option.option}
                                                </span>

                                            </BlurFade>
                                            {/* <XCircle className="w-4 h-4" /> Uncomment if you want to show the incorrect icon instead */}
                                        </div>
                                    </Button>
                                ))
                            }





                        </div>

                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div style={{
                                backgroundColor: hasChosenRightAns ? "#22c55e" : "#ef4444"
                            }} className="w-6 h-6 rounded-full bg-green-500 shadow-xl transition-all duration-200"></div>

                            <InteractiveHoverButton disabled={!hasChosenRightAns}
                                style={{
                                    boxShadow: hasChosenRightAns ? "0 4px 8px rgba(0, 0, 0, 0.3)" : ""
                                }}
                                onClick={() => {
                                    if (hasChosenRightAns) {
                                        setCurCardIndex(prev => prev + 1);
                                    }
                                }}
                                className="mx-auto justify-center items-center transition-all duration-200"
                            >Next Question</InteractiveHoverButton>
                        </div>

                        {(selectedButtons.some((val) => typeof val == "boolean") && !hasChosenRightAns) && <p className="fixed flex flex-row gap-2 items-center justify-center bottom-10">
                            You must answer the question right before proceeding.
                        </p>}

                    </div>

                </div>}
        </div>
    </div>
}