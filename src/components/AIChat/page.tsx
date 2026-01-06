"use client";
import { useState, useRef, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowDown01, ArrowRight, BadgePlus, BookCheck, BookOpenText, Brain, Clock, NotebookPen, Plus, Redo2, Scan, Send, VectorSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Set } from "@/lib/AllSets";
import { AllSetsInterface } from "@/app/page";
import { ScrollArea } from "../ui/scroll-area";
import { AllSets } from "@/lib/AllSets";
import { MagicCard } from "../magicui/magic-card";
import { RainbowButton } from "../magicui/rainbow-button";

const exampleSet = AllSets[0]; // Placeholder set for testing

export interface TextAIModel {
    name: string;
    svg: ReactNode; // placeholder for your custom SVG
    description: string;
}

type TextMessage = {
    role: "user" | "assistant"
    type: "text"
    content: string
}

type SetMessage = {
    role: "assistant"
    type: "set"
    set: AllSetsInterface
}

export type Message = TextMessage | SetMessage


export const textAIs: TextAIModel[] = [
    {
        name: "MetaLlama 3.1 8B Instant",
        svg: <img src="/meta.png" className="flex justify-center items-center" />, // replace with your SVG
        description:
            "Fast and efficient general-purpose language model for instant text generation.",
    },
    {
        name: "MetaLlama 3.3 70B",
        svg: <img src="/meta.png" className="flex justify-center items-center" />,
        description:
            "Powerful large-scale language model for high-quality text generation tasks.",
    },
    {
        name: "MetaLlama Guard 4 12B",
        svg: <img src="/meta.png" className="flex justify-center items-center" />,
        description:
            "Safe and instruction-following model with guardrails for reliable text generation.",
    },
    {
        name: "OpenAIGPT OSS 120B",
        svg: <svg
            className="flex justify-center items-center w-[35px] h-[35px] text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 721 721"
            fill="none"
        >
            <g clipPath="url(#clip0)">
                <g mask="url(#mask0)">
                    <g mask="url(#mask1)">
                        <path
                            d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.68 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.37 558.513 514.41 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.37 154.505C386.775 133.392 357.026 119.958 324.4 119.958C266.342 119.958 217.883 161.22 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.95 397.771 158.861 421.283C156.462 431.36 155.022 441.437 155.022 451.51C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="721" height="721" fill="none" />
                </clipPath>
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="721">
                    <path d="M720.607 0.0999756H0.606934V720.1H720.607V0.0999756Z" fill="white" />
                </mask>
                <mask id="mask1" maskUnits="userSpaceOnUse" x="118" y="119" width="485" height="481">
                    <path d="M602.696 119.958H118.557V599.776H602.696V119.958Z" fill="white" />
                </mask>
            </defs>
        </svg>,

        description:
            "Open-weight large language model with strong reasoning, text generation, and code capabilities.",
    },
    {
        name: "OpenAIGPT OSS 20B",
        svg: <svg
            className="flex justify-center items-center w-[35px] h-[35px] text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 721 721"
            fill="none"
        >
            <g clipPath="url(#clip0)">
                <g mask="url(#mask0)">
                    <g mask="url(#mask1)">
                        <path
                            d="M304.246 294.611V249.028C304.246 245.189 305.687 242.309 309.044 240.392L400.692 187.612C413.167 180.415 428.042 177.058 443.394 177.058C500.971 177.058 537.44 221.682 537.44 269.182C537.44 272.54 537.44 276.379 536.959 280.218L441.954 224.558C436.197 221.201 430.437 221.201 424.68 224.558L304.246 294.611ZM518.245 472.145V363.224C518.245 356.505 515.364 351.707 509.608 348.349L389.174 278.296L428.519 255.743C431.877 253.826 434.757 253.826 438.115 255.743L529.762 308.523C556.154 323.879 573.905 356.505 573.905 388.171C573.905 424.636 552.315 458.225 518.245 472.141V472.145ZM275.937 376.182L236.592 353.152C233.235 351.235 231.794 348.354 231.794 344.515V238.956C231.794 187.617 271.139 148.749 324.4 148.749C344.555 148.749 363.264 155.468 379.102 167.463L284.578 222.164C278.822 225.521 275.942 230.319 275.942 237.039V376.186L275.937 376.182ZM360.626 425.122L304.246 393.455V326.283L360.626 294.616L417.002 326.283V393.455L360.626 425.122ZM396.852 570.989C376.698 570.989 357.989 564.27 342.151 552.276L436.674 497.574C442.431 494.217 445.311 489.419 445.311 482.699V343.552L485.138 366.582C488.495 368.499 489.936 371.379 489.936 375.219V480.778C489.936 532.117 450.109 570.985 396.852 570.985V570.989ZM283.134 463.99L191.486 411.211C165.094 395.854 147.343 363.229 147.343 331.562C147.343 294.616 169.415 261.509 203.48 247.593V356.991C203.48 363.71 206.361 368.508 212.117 371.866L332.074 441.437L292.729 463.99C289.372 465.907 286.491 465.907 283.134 463.99ZM277.859 542.68C223.639 542.68 183.813 501.895 183.813 451.514C183.813 447.675 184.294 443.836 184.771 439.997L279.295 494.698C285.051 498.056 290.812 498.056 296.568 494.698L417.002 425.127V470.71C417.002 474.549 415.562 477.429 412.204 479.346L320.557 532.126C308.081 539.323 293.206 542.68 277.854 542.68H277.859ZM396.852 599.776C454.911 599.776 503.37 558.513 514.41 503.812C568.149 489.896 602.696 439.515 602.696 388.176C602.696 354.587 588.303 321.962 562.392 298.45C564.791 288.373 566.231 278.296 566.231 268.224C566.231 199.611 510.571 148.267 446.274 148.267C433.322 148.267 420.846 150.184 408.37 154.505C386.775 133.392 357.026 119.958 324.4 119.958C266.342 119.958 217.883 161.22 206.843 215.921C153.104 229.837 118.557 280.218 118.557 331.557C118.557 365.146 132.95 397.771 158.861 421.283C156.462 431.36 155.022 441.437 155.022 451.51C155.022 520.123 210.682 571.466 274.978 571.466C287.931 571.466 300.407 569.549 312.883 565.228C334.473 586.341 364.222 599.776 396.852 599.776Z"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="721" height="721" fill="none" />
                </clipPath>
                <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="721">
                    <path d="M720.607 0.0999756H0.606934V720.1H720.607V0.0999756Z" fill="white" />
                </mask>
                <mask id="mask1" maskUnits="userSpaceOnUse" x="118" y="119" width="485" height="481">
                    <path d="M602.696 119.958H118.557V599.776H602.696V119.958Z" fill="white" />
                </mask>
            </defs>
        </svg>,
        description:
            "Smaller GPT model with fast text generation and multi-purpose reasoning.",
    },
    {
        name: "MetaLlama 4 Maverick 17B 128E",
        svg: <img src="/meta.png" className="flex justify-center items-center" />,
        description:
            "High-performance instruction-following model with large context support.",
    },
    {
        name: "MetaLlama 4 Scout 17B 16E",
        svg: <img src="/meta.png" className="flex justify-center items-center" />,
        description:
            "Natively multimodal model supporting text and image understanding across 12 languages.",
    },
    {
        name: "Moonshot AI Kimi K2 0905",
        svg: <img src="/moonshot_logo.png" className="flex justify-center items-center" />,
        description:
            "Instruction-following language model with large context length and strong text generation.",
    },
    {
        name: "Qwen 3-32B",
        svg: <img src="/qwen_logo.png" className="flex justify-center items-center" />,
        description:
            "Large language model from Alibaba Cloud, optimized for text generation and reasoning.",
    },
];

import React from "react";
import { cn } from "@/lib/utils";

const convertGeneratedSetToCustomUI = (generatedSet: AllSetsInterface, setContext: Dispatch<SetStateAction<Set | null>> )=> {

    const [open, setOpen] = useState(false);

    return <div className={cn(`pl-1 relative backdrop-blur-[100px] border border-1 w-[400px] p-4 flex flex-col gap-2 rounded-3xl mb-10`, `${open ? "h-[300px]" : "h-[150px]"} `)}>
        <h1 className="ml-1 mb-2 text-2xl max-w-[350px] font-bold truncate">
            {generatedSet.set.title}
        </h1>
        <div className={` w-full ${open ? "h-[245px]" : "h-[60px]"}  overflow-hidden`}>
            <ScrollArea className={`w-full mt-2 h-[70%] ${open ? "pb-2 opacity-100" : "opacity-0"}`}>

                <div className="px-4 grid grid-cols-2 gap-4 mt-2">
                    {generatedSet.set.vocab.map(([term, definition], index) => (
                        <div key={index} className="flex flex-col gap-1">
                            <span className="font-semibold">{term}</span>
                            <span className="text-sm text-muted-foreground">{definition}</span>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
        <div className="absolute flex flex-row gap-2 bottom-4 ">
            <Button className="cursor-pointer rounded-full transition-all duration-300" variant="outline">Import Now</Button>
            <Button className="cursor-pointer rounded-full transition-all duration-300" variant="outline" onClick={() => setOpen(!open)}>{open ? "Collapse" : "Preview"}</Button>
        </div>
        <div className="absolute flex flex-row gap-2 bottom-4 right-6 text-sm text-muted-foreground">
            {generatedSet.set.vocab.length} cards
        </div>

        <div className="absolute bottom-[-30%] left-0 flex flex-row gap-2">
            <Button onClick={() => setContext(generatedSet.set)} className=" text-xs rounded-full cursor-pointer transition-all duration-300" variant={"outline"} >
                <Scan /> Use For Context
            </Button>
            <Button className="text-xs rounded-full cursor-pointer transition-all duration-300" variant={"outline"}>
                <BookCheck /> Quiz Me
            </Button>
             <Button className="text-xs rounded-full cursor-pointer transition-all duration-300" variant={"outline"}>
                <BookOpenText /> Help Me Study
            </Button>
        </div>
    </div>
}

export default function AIChatPage({
    currentSet
}: {
    currentSet?: Set
}) {

    const isPlaceholder = true


    const [contextOpen, setContextOpen] = useState(false);
    const [context2Open, setContext2Open] = useState(false);
    const contextRef = useRef<HTMLDivElement>(null);
    const otherContextRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            type: "text",
            content: "Your set “Tema 1 - Las familias y las comunidades” is ready.\nWant a mnemonic, a quick quiz, or a simple explanation for any term?"
        },
        {
            role: "assistant",
            type: "set",
            set: exampleSet
        },
        {
            role: "user",
            type: "text",
            content: "Can you help me study this set?"
        }
    ])

    const [pastSets, setPastSets] = useState<Set[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }
        try {
            const item = window.localStorage.getItem("sets");
            if (item) {
                const parsed = JSON.parse(item) as AllSetsInterface[];
                return parsed.map(s => s.set);
            }
            return [];
        } catch (error) {
            console.error("Failed to parse sets from localStorage", error);
            return [];
        }
    });

    const [chosenAIModel, setChosenAIModel] = useState<TextAIModel>(textAIs[0]);
    const [isHoveringSecondary, setIsHoveringSecondary] = useState<boolean>(false);
    const [contextMode, setContextMode] = useState<number>(0); // 0 = none, 1 = set-based, 2 = custom text

    const [contextSet, setContextSet] = useState<Set | null>(null);

    useEffect(() => {
        if (currentSet)
            setContextSet(currentSet);
    }, [currentSet]);

    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnterSecondary = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
            hoverTimeoutRef.current = null;
        }
        setContext2Open(true);
    };

    const handleMouseLeaveSecondary = () => {
        // add small delay before closing
        hoverTimeoutRef.current = setTimeout(() => {
            setContext2Open(false);
        }, 300); // 300ms delay
    };


    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                contextRef.current &&
                !contextRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setContextOpen(false);
            }
        };
        if (contextOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [contextOpen]);

    // START CONVERTING GENERATED SET TO CUSTOM UI




    // END CONVERTING GENERATED SET TO CUSTOM UI

    return (
        <div className="relative w-full min-h-[83vh] flex flex-col items-center justify-end">
            {/** Messages */}
            <ScrollArea className="w-[92.5%] mx-auto h-[72vh] flex flex-col gap-1 mb-auto px-10    pt-6    overflow-y-auto ">
                {
                    messages.map((msg, index) => (
                        <div key={index} className={`w-full flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[70%] p-3 rounded-lg text-md whitespace-pre-wrap `}>
                                {msg.type === "text" && msg.content}
                                {msg.type === "text" && msg.role === "user" && <div className="flex justify-end mt-2">
                                    <span className="text-xs text-muted-foreground">You</span>
                                </div>}
                                {msg.type === "text" && msg.role === "assistant" && <div className="flex justify-start mt-2">
                                    <span className="text-xs text-muted-foreground">Assistant</span>
                                </div>}
                                {msg.type === "set" && convertGeneratedSetToCustomUI(msg.set, setContextSet)}
                            </div>
                        </div>
                    ))
                }
            </ScrollArea>

            {/* Chat input + buttons */}
            <div className="absolute bottom-0 flex flex-row items-center gap-2 w-full px-4 py-2 justify-center">
                {/* Context button */}
                <div className="relative" ref={buttonRef}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <Button
                            className="rounded-full cursor-pointer dark:text-white text-black w-[3.2vw] h-[7vh] scale-[90%]"
                            size="icon-lg"
                            variant={"outline"}
                            onClick={() => setContextOpen(!contextOpen)}
                        >
                            <Plus size={100} />
                        </Button>
                    </motion.div>

                    {/* Context menu */}
                    <AnimatePresence>
                        {contextOpen && <>
                            <motion.div
                                ref={contextRef}
                                className="absolute flex flex-col gap-2 bottom-[100%] left-0 mr-2 w-[270px] h-[400px] bg-muted/50 backdrop-blur-[15px] rounded-3xl border border-muted px-4 py-3 overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}  // start slightly bottom-left
                                animate={{ opacity: 1, scale: 1, x: 0, y: -10 }}       // end at top-right
                                exit={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}       // exit back bottom-left
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                                {/** Going to press select context items here for the CUSTOM AI Model */}
                                {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                <div
                                    onMouseEnter={() => {
                                        handleMouseEnterSecondary();
                                        setContextMode(0);
                                    }}
                                    onMouseLeave={handleMouseLeaveSecondary}

                                    id="AI Selector"
                                    className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                    <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                        {chosenAIModel.svg}
                                    </div>
                                    <div className="w-[80%]">
                                        <h1 className="text-[16px]">Chosen Model</h1>
                                        <h2 className="text-[12px] text-muted-foreground">{chosenAIModel.name}</h2>
                                    </div>
                                    <div className="w-[5%] h-[50px] flex justify-center items-center">
                                        <ArrowRight size={50} />
                                    </div>
                                </div>
                                {
                                    contextSet && !currentSet && <>
                                        <div
                                            onClick={() => setContextSet(null)}
                                            id="Deselect Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <VectorSquare />
                                            </div>
                                            <div className="w-[85%]">
                                                <h1 className="text-[16px]">Deselect Context</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Unselect the current context</h2>
                                            </div>
                                        </div>
                                    </>
                                }
                                {
                                    !contextSet && <>
                                        {/** Going to press select context items here for the CUSTOM AI Model */}
                                        {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                        <div
                                            onMouseEnter={() => {
                                                handleMouseEnterSecondary();
                                                setContextMode(1);
                                            }}
                                            onMouseLeave={handleMouseLeaveSecondary}

                                            id="Create Set Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <VectorSquare />
                                            </div>
                                            <div className="w-[80%]">
                                                <h1 className="text-[16px]">Choose Set</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Choose a set for context</h2>
                                            </div>
                                            <div className="w-[5%] h-[50px] flex justify-center items-center">
                                                <ArrowRight size={50} />
                                            </div>
                                        </div>
                                    </>
                                }
                                {
                                    !contextSet && <>
                                        {/** Going to press select context items here for the CUSTOM AI Model */}
                                        {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                        <div
                                            onMouseEnter={() => {
                                                handleMouseEnterSecondary();
                                                setContextMode(2);
                                            }}
                                            onMouseLeave={handleMouseLeaveSecondary}

                                            id="Create Set Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <BadgePlus />
                                            </div>
                                            <div className="w-[80%]">
                                                <h1 className="text-[16px]">Create Set</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Create a new, custom set</h2>
                                            </div>
                                            <div className="w-[5%] h-[50px] flex justify-center items-center">
                                                <ArrowRight size={50} />
                                            </div>
                                        </div>
                                    </>
                                }
                                {
                                    contextSet && <>
                                        {/** Going to press select context items here for the CUSTOM AI Model */}
                                        {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                        <div
                                            onMouseEnter={() => {
                                                handleMouseEnterSecondary();
                                                setContextMode(3);
                                            }}
                                            onMouseLeave={handleMouseLeaveSecondary}

                                            id="Create Set Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <Brain />
                                            </div>
                                            <div className="w-[80%]">
                                                <h1 className="text-[16px]">Memorize</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Use tactics to memorize</h2>
                                            </div>
                                            <div className="w-[5%] h-[50px] flex justify-center items-center">
                                                <ArrowRight size={50} />
                                            </div>
                                        </div>
                                        {/** Going to press select context items here for the CUSTOM AI Model */}
                                        {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                        <div
                                            onMouseEnter={() => {
                                                handleMouseEnterSecondary();
                                                setContextMode(4);
                                            }}
                                            onMouseLeave={handleMouseLeaveSecondary}

                                            id="Create Set Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <NotebookPen />
                                            </div>
                                            <div className="w-[80%]">
                                                <h1 className="text-[16px]">Study Tips</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Tips to study effectively</h2>
                                            </div>
                                            <div className="w-[5%] h-[50px] flex justify-center items-center">
                                                <ArrowRight size={50} />
                                            </div>
                                        </div>
                                        <div
                                            onMouseEnter={() => {
                                                handleMouseEnterSecondary();
                                                setContextMode(4);
                                            }}
                                            onMouseLeave={handleMouseLeaveSecondary}

                                            id="Create Set Context"
                                            className="cursor-pointer w-full flex flex-row gap-4 h-[50px] ">
                                            <div className="h-[50px] w-[10%] my-auto flex justify-center items-center">
                                                <Clock />
                                            </div>
                                            <div className="w-[80%]">
                                                <h1 className="text-[16px]">Scheduling</h1>
                                                <h2 className="text-[12px] text-muted-foreground">Plan a schedule effectively</h2>
                                            </div>
                                            <div className="w-[5%] h-[50px] flex justify-center items-center">
                                                <ArrowRight size={50} />
                                            </div>
                                        </div>
                                    </>
                                }
                            </motion.div>
                            {
                                context2Open && <motion.div
                                    ref={otherContextRef}
                                    className="absolute bottom-[120%] left-[280px] mr-2 w-[220px] h-[400px] bg-muted/50 backdrop-blur-[10px] rounded-2xl border border-muted px-3 py-3 overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.8, x: -100 }}  // start slightly bottom-left
                                    animate={{ opacity: 1, scale: 1, x: 0 }}       // end at top-right
                                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                                    onMouseEnter={handleMouseEnterSecondary}
                                    onMouseLeave={handleMouseLeaveSecondary}     // exit back bottom-left
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >

                                    {
                                        contextMode === 0 && <>

                                            {/** Going to press select context items here for the CUSTOM AI Model */}
                                            {/* Placeholder for AI Model selection UI  and this component will be the hovered one*/}
                                            <ScrollArea id="AI Selector" className="cursor-pointer w-full flex flex-col gap-10 h-[380px] ">
                                                {
                                                    textAIs.map((model, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() => {
                                                                setChosenAIModel(model);
                                                                setContext2Open(false);
                                                            }}
                                                            className="w-full flex flex-row gap-4 h-full my-4 ">
                                                            <div className="max-h-[50px] w-full max-w-[15%] my-auto flex justify-center items-center">
                                                                {model.svg}
                                                            </div>
                                                            <div className="w-[80%] h-full">
                                                                <h1 className="text-[12px]">{model.name}</h1>
                                                                <h2 className="text-[10px] text-muted-foreground">{model.description}</h2>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </ScrollArea>
                                        </>
                                    }
                                    {
                                        contextMode === 1 && <><ScrollArea id="Set Selector" className="cursor-pointer w-full flex flex-col gap-10 h-[380px] ">
                                            {
                                                pastSets.length === 0 && <div className="text-sm text-muted-foreground">No past sets found.</div>
                                            }
                                            {
                                                pastSets.map((set, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => {
                                                            setContextSet(set);
                                                            setContext2Open(false);
                                                        }}
                                                        className="my-4 cursor-pointer w-full flex flex-row gap-4 h-full my-2 ">
                                                        <div className="w-[80%] h-full">
                                                            <h1 className="text-sm">{set.title}</h1>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {
                                                AllSets.map((set, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => {
                                                            setContextSet(set.set);
                                                            setContext2Open(false);
                                                        }}
                                                        className="my-4 cursor-pointer w-full flex flex-row gap-4 h-full my-2 ">
                                                        <div className="w-[80%] h-full">
                                                            <h1 className="text-sm">{set.set.title}</h1>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </ScrollArea></>
                                    }
                                </motion.div>
                            }

                        </>


                        }
                    </AnimatePresence>

                </div>

                {/* Input */}
                <div className="w-[40vw] dark:border-input dark:hover:bg-input/50 h-[8vh] bg-muted/60 px-2 py-2 border border-muted rounded-4xl flex items-center">
                    <Input
                        placeholder={isPlaceholder ? "This is a preview of the AI Chat feature. More coming later." : "Type a message here..."}
                        disabled={isPlaceholder}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="
                        w-[90%]
              !bg-transparent
              !border-0
              rounded-full
              focus:!ring-0
              focus:!border-0
              outline-none
            "

                    />
                    <div className="absolute bottom-[-13px] flex flex-row justify-between items-center gap-2">
                        {
                            contextSet && <section className="flex flex-row gap-2">
                                <div className="size-1 my-auto bg-blue-600 rounded-full" />
                                <div className="text-xs text-blue-600"><span className="text-semibold">Set</span>: {contextSet?.title.substring(0, 45)}</div>
                            </section>
                        }
                        <h1 className="text-xs">Powered by <a href="https://www.groq.com" className="text-gray-400 font-bold">Groq</a>. AI may make mistakes.</h1>
                    </div>
                </div>

                {/* Send button */}
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Button
                        className="rounded-full cursor-pointer  w-[3.2vw] h-[7vh]"
                        size="icon-lg"
                        variant={"outline"}
                        disabled={isPlaceholder || inputValue.trim() === ""}
                    >
                        <Send size={100} />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
