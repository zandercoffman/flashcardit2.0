"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs } from "@/components/ui/aceternity-tabs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, Dices, ExternalLink } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { APESPConvoExamples, ConvoFRQ } from "./APESPConvoExamples";

const buildCustomSourcePrompt = (topicIdea: string) => {
  const trimmedIdea = topicIdea.trim() || "El uso equilibrado de la tecnología en la escuela";
  return `You are creating AP Spanish Language and Culture interpersonal speaking practice materials.

Create ONE conversation source set for this topic:
${trimmedIdea}

Return ONLY valid JSON. No markdown. No explanation. No code fences.

The JSON must match this exact shape and key names:
{
  "name": "string in Spanish, framed as a conversation topic",
  "temaCurricular": "string in Spanish",
  "introduction": "1-2 sentence introduction in Spanish",
  "questions": ["string", "string", "string", "string", "string", "string", "string", "string", "string", "string"],
  "audio": ["string", "string", "string", "string", "string"]
}

Rules:
- Keep Spanish level appropriate for AP Spanish Language and Culture.
- Ensure all fields are non-empty strings.
- Questions should feel like an interactive AP-style conversation.
- Do not include any additional keys.`;
};

const normalizeJsonPayload = (raw: string) => {
  return raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
};

const parseCustomConvoMaterial = (raw: string): ConvoFRQ | null => {
  try {
    const normalized = normalizeJsonPayload(raw);
    const parsed = JSON.parse(normalized) as Partial<ConvoFRQ>;

    const questions = Array.isArray(parsed.questions)
      ? parsed.questions.filter((question): question is string => typeof question === "string" && question.trim().length > 0)
      : [];
    const audio = Array.isArray(parsed.audio)
      ? parsed.audio.filter((line): line is string => typeof line === "string" && line.trim().length > 0)
      : [];

    if (
      typeof parsed.name !== "string" ||
      typeof parsed.temaCurricular !== "string" ||
      typeof parsed.introduction !== "string" ||
      questions.length === 0 ||
      audio.length === 0
    ) {
      return null;
    }

    return {
      name: parsed.name.trim(),
      temaCurricular: parsed.temaCurricular.trim(),
      introduction: parsed.introduction.trim(),
      questions,
      audio,
    };
  } catch {
    return null;
  }
};

export default function APESPConvo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [chosenTopic, setChosenTopic] = useState<ConvoFRQ | null>(null);
  const [chosenMode, setChosenMode] = useState<"physical" | "digital" | "setup">("setup");
  const [conversationNotes, setConversationNotes] = useState("");
  const [practiceReply, setPracticeReply] = useState("");
  const [customTopicIdea, setCustomTopicIdea] = useState("");
  const [customSourcePayload, setCustomSourcePayload] = useState("");
  const [customPrompt, setCustomPrompt] = useState("");

  const hasJsonPayload = customSourcePayload.trim().length > 0;
  const canImport = hasJsonPayload;

  const copyCustomPrompt = async () => {
    const prompt = buildCustomSourcePrompt(customTopicIdea);
    setCustomPrompt(prompt);
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
    }
  };

  const openCustomPromptInChatGPT = () => {
    const prompt = buildCustomSourcePrompt(customTopicIdea);
    setCustomPrompt(prompt);
    const encoded = encodeURIComponent(prompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const buildConversationChatGPTPrompt = () => {
    if (!chosenTopic) {
      return "";
    }

    return `You are an AP Spanish Language and Culture conversation partner.

Use this conversation setup:
Tema curricular: ${chosenTopic.temaCurricular}
Introducción: ${chosenTopic.introduction}

Conversation questions:
${chosenTopic.questions.map((question, index) => `${index + 1}. ${question}`).join("\n")}

Audio cues:
${chosenTopic.audio.map((line, index) => `${index + 1}. ${line}`).join("\n")}

Student notes:
${conversationNotes || "(No notes provided)"}

Practice reply:
${practiceReply || "(No reply drafted)"}

Roleplay the conversation one turn at a time in Spanish. Keep the responses realistic, concise, and AP Spanish appropriate. Ask one question, wait for the student response, then continue.`;
  };

  const openConversationInChatGPT = () => {
    const prompt = buildConversationChatGPTPrompt();
    const encoded = encodeURIComponent(prompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const importCustomSources = (mode: "digital" | "physical") => {
    const parsed = parseCustomConvoMaterial(customSourcePayload);
    if (!parsed) {
      return;
    }

    setChosenMode(mode);
    setChosenTopic(parsed);
    setConversationNotes("");
    setPracticeReply("");
  };

  const resetToHome = () => {
    setChosenTopic(null);
    setChosenMode("setup");
    setConversationNotes("");
    setPracticeReply("");
  };

  const retryCurrentPrompt = () => {
    setConversationNotes("");
    setPracticeReply("");
  };

  const tabs = [
    {
      title: "🧭 Context",
      value: "context",
      content: (
        <Card className="h-full rounded-3xl p-8">
          <ScrollArea className="h-[50vh] pr-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
              Tema curricular
            </p>
            <p className="mb-4 text-2xl font-bold text-[#4d2d00]">{chosenTopic?.temaCurricular}</p>
            <p className="text-[18px] leading-8 text-neutral-800">{chosenTopic?.introduction}</p>
          </ScrollArea>
        </Card>
      ),
    },
    {
      title: "❓ Questions",
      value: "questions",
      content: (
        <Card className="h-full rounded-3xl p-8 border-2 border-[#fbae25]/60">
          <ScrollArea className="h-[50vh] pr-4">
            <p className="mb-4 text-2xl font-bold text-[#4d2d00]">{chosenTopic?.name}</p>
            <div className="space-y-3">
              {chosenTopic?.questions.map((question, index) => (
                <div key={index} className="rounded-2xl border border-[#fbae25]/35 bg-white px-4 py-3 text-sm text-neutral-800">
                  <span className="mr-2 font-bold text-[#7a4a00]">{index + 1}.</span>
                  {question}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      ),
    },
    {
      title: "🎧 Audio",
      value: "audio",
      content: (
        <Card className="h-full rounded-3xl p-8 border-2 border-[#fbae25]/60">
          <ScrollArea className="h-[50vh] pr-4">
            <p className="mx-auto mb-3 w-fit rounded-full border border-[#fbae25]/50 bg-[#fbae25]/20 px-4 py-1 text-center text-xs font-semibold text-[#7a4a00]">
              Fuente oral para practicar la conversación.
            </p>
            <div className="space-y-3">
              {chosenTopic?.audio.map((line, index) => (
                <div key={index} className="rounded-2xl border border-[#fbae25]/35 bg-white px-4 py-3 text-sm text-neutral-800">
                  <span className="mr-2 font-bold text-[#7a4a00]">{index + 1}.</span>
                  {line}
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      ),
    },
  ];

  if (!chosenTopic) {
    return (
      <section className="w-full max-w-[80vw] h-full mx-auto mt-4">
        <header className="mb-8 px-4 text-center w-full mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
            AP Spanish Language and Culture
          </p>
          <h1 className="ml-[12vw] text-center w-full flex flex-row gap-2 text-balance text-3xl font-black leading-tight text-neutral-900 dark:text-white sm:text-4xl md:text-5xl">
            Practice a Standout
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <div className="flex flex-row gap-2 max-w-3xl text-xs mx-auto items-center justify-center ">
            <p className="mx-auto mt-3 w-[85%] text-neutral-600 sm:text-base">
              Choose a conversation topic, study the question flow, and practice answering like you would in the AP interpersonal speaking section. Use the setup card to generate or import your own prompt set.
            </p>
            <Button
              className="ml-6 cursor-pointer rounded-full px-4 py-2"
              variant={"outline"}
              onClick={() => {
                const randomIndex = Math.floor(Math.random() * APESPConvoExamples.length);
                api?.scrollTo(randomIndex);
              }}
            >
              <Dices className="mr-2" />
              Choose Random Topic
            </Button>
          </div>
        </header>

        <Carousel className="w-[60%] h-full mx-auto" setApi={setApi}>
          <CarouselContent>
            {APESPConvoExamples.map((material, index) => (
              <CarouselItem key={index}>
                <Card className="h-[360px] relative rounded-4xl px-2 max-w-xl mx-auto bg-[#fbae25] text-white">
                  <CardHeader className="flex flex-col">
                    <div className="flex flex-col gap-2 w-[75%]">
                      <CardTitle className="text-4xl">{material.name}</CardTitle>
                    </div>
                    <p className="mt-4 max-w-md text-lg leading-6 text-black/90">
                      {material.introduction}
                    </p>
                    <CardAction className="flex flex-row absolute bottom-6 right-6 rounded-3xl px-4 py-2 gap-4">
                      <ShinyButton
                        onClick={() => {
                          setChosenMode("digital");
                          setChosenTopic(material);
                        }}
                        className="bg-white text-black"
                      >
                        Start Practice
                      </ShinyButton>
                    </CardAction>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {current} / {count}
        </div>

        <Card className="mt-6 mx-auto w-[60%] hidden rounded-3xl border border-dashed border-[#fbae25]/60 bg-[#fff8ea] p-4 sm:p-6">
          <CardHeader className="p-0">
            <CardTitle className="text-xl text-[#7a4a00]">Create Your Own Conversation Prompt with ChatGPT</CardTitle>
            <CardDescription className="text-sm text-[#7a4a00]/80">
              Follow these steps in order. When you have JSON ready, import it at the bottom.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4 space-y-3">
            <div className="rounded-2xl border border-[#fbae25]/35 bg-white p-3 text-sm text-[#7a4a00]">
              <p className="font-semibold mb-2">Quick Start</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Type your topic idea in Step 1.</li>
                <li>Copy the prompt in Step 2 and paste it into ChatGPT.</li>
                <li>Paste ChatGPT&apos;s JSON response into Step 3.</li>
                <li>Press Import + Start Paper Mode or Import + Start Digital Mode.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
              <p className="text-sm font-semibold text-[#7a4a00]">Step 1: Enter your topic</p>
              <p className="text-xs text-[#7a4a00]/80 mb-2">
                Example: &quot;Should students volunteer more in their communities?&quot;
              </p>
              <Textarea
                value={customTopicIdea}
                onChange={(e) => setCustomTopicIdea(e.target.value)}
                className="min-h-[72px] rounded-2xl bg-white"
                placeholder="Type your conversation topic idea here (optional but recommended)."
              />
            </div>

            <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
              <p className="text-sm font-semibold text-[#7a4a00]">Step 2: Generate the conversation prompt in ChatGPT</p>
              <p className="text-xs text-[#7a4a00]/80 mb-2">
                Use one of these buttons. ChatGPT should return JSON only.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" className="rounded-full cursor-pointer" onClick={copyCustomPrompt}>
                  <ClipboardCopy className="mr-2 h-4 w-4" />
                  Copy Step 2 Prompt
                </Button>
                <Button type="button" className="rounded-full cursor-pointer" onClick={openCustomPromptInChatGPT}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Step 2 in ChatGPT
                </Button>
              </div>
              <Textarea
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                className="mt-2 min-h-[150px] rounded-2xl bg-white"
                placeholder="Your generated prompt will appear here. You can edit it before using ChatGPT."
              />
            </div>

            <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
              <p className="text-sm font-semibold text-[#7a4a00]">Step 3: Paste ChatGPT JSON output</p>
              <p className="text-xs text-[#7a4a00]/80 mb-2">
                Required keys: name, temaCurricular, introduction, questions, audio.
              </p>
              <Textarea
                value={customSourcePayload}
                onChange={(e) => setCustomSourcePayload(e.target.value)}
                className="min-h-[190px] rounded-2xl bg-white"
                placeholder='Paste ChatGPT JSON here. Example keys: { "name": "...", "temaCurricular": "...", "introduction": "...", "questions": ["..."], "audio": ["..."] }'
              />
              <p className="mt-2 text-xs text-[#7a4a00]/80">
                JSON status: {hasJsonPayload ? "Ready" : "Missing"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <RainbowButton className="!font-semibold" disabled={!canImport} onClick={() => importCustomSources("physical")}>
                Import + Start Paper Mode
              </RainbowButton>
              <ShinyButton
                className={cn("bg-white", !canImport && "pointer-events-none opacity-50")}
                onClick={() => {
                  if (!canImport) return;
                  importCustomSources("digital");
                }}
              >
                Import + Start Digital Mode
              </ShinyButton>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative flex flex-row gap-10 max-w-[95vw] mx-auto w-full items-start justify-start mt-2">
      <div className="w-1/2 h-[60vh]">
        <Tabs tabs={tabs} />
      </div>

      <div className="w-1/2 h-[60vh] flex flex-col gap-2">
        <div className="flex flex-row rounded-4xl items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
          <div>
            <p className="text-xs text-muted-foreground">Mode</p>
            <p className="text-lg font-semibold">{chosenMode === "digital" ? "Digital Practice" : "Paper Practice"}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-muted-foreground">Selected Topic</p>
            <p className="text-lg font-semibold">{chosenTopic?.name}</p>
          </div>
          <div>
            <Button variant="outline" size="sm" onClick={retryCurrentPrompt}>
              Reset Notes
            </Button>
          </div>
        </div>

        <Card className="rounded-[3rem] border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">Conversation Notes</CardTitle>
            <CardDescription>
              Use this space to outline your claim, transitions, or key vocabulary before practicing aloud.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4 space-y-3">
            <Textarea
              className="min-h-[170px] resize-none rounded-2xl"
              placeholder="Write planning notes here..."
              value={conversationNotes}
              onChange={(e) => setConversationNotes(e.target.value)}
            />
            <Textarea
              className="min-h-[120px] resize-none rounded-2xl"
              placeholder="Draft one strong response you want to practice aloud..."
              value={practiceReply}
              onChange={(e) => setPracticeReply(e.target.value)}
            />
          </CardContent>
          <CardFooter className="p-0 mt-4 flex flex-wrap gap-2 justify-end">
            <Button variant="outline" className="rounded-full" onClick={resetToHome}>
              Go Back to Home Screen
            </Button>
            <Button className="rounded-full" onClick={openConversationInChatGPT} disabled={!chosenTopic}>
              <ExternalLink className="mr-2" />
              Open Practice in ChatGPT
            </Button>
          </CardFooter>
        </Card>

        <Card className="rounded-[3rem] border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">What to Focus On</CardTitle>
            <CardDescription>
              Keep your answers direct, connected, and natural.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              <li>Answer the question first, then expand with one detail.</li>
              <li>Use connectors like <span className="font-semibold">porque</span>, <span className="font-semibold">sin embargo</span>, and <span className="font-semibold">además</span>.</li>
              <li>Listen for the conversation partner&apos;s reaction before jumping to the next idea.</li>
              <li>Keep your tone natural and AP-appropriate.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}