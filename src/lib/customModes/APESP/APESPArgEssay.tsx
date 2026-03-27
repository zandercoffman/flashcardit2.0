"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { exampleMaterials } from "./APESPArgEssayExamples";
import { Tabs } from "@/components/ui/aceternity-tabs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShinyButton } from "@/components/magicui/shiny-button";
import { useState, useEffect, useRef } from "react";
import { AnimatedCircularProgressBar } from "@/components/aceternity/circleProgress";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ClipboardCopy, Dices, ExternalLink, ForwardIcon, Minus, Play, Plus, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export interface EssayMaterials {
  printSource: string;
  audioTransscript: string;
  visualSourcePath: string;
  title: string;
  description: string;
}

const AP_ESP_2025_RUBRIC = `AP Spanish Language and Culture 2025 Scoring Guidelines (Argumentative Essay)
Score 1 (Poor):
- Almost no treatment of topic in task context
- Poor comprehension of sources with frequent/significant inaccuracies
- Mostly repeats source statements or no source references
- Position minimally suggested; argument undeveloped/incoherent
- Little/no organization; no effective transitions/cohesion
- Barely understandable; significant errors impede comprehension
- Very few vocabulary resources
- Little/no control of grammar/syntax/usage
- Very simple sentences or fragments

Score 2 (Weak):
- Unsuitable treatment of topic in task context
- Low comprehension of sources; information limited/inaccurate
- Summarizes one or two sources; may not support argument
- Position suggested; argument somewhat incoherent
- Limited organization; ineffective transitions/cohesion
- Partially understandable; errors force interpretation/confusion
- Limited vocabulary/idiomatic language
- Limited control of grammar/syntax/usage
- Strings of simple sentences/phrases

Score 3 (Fair):
- Suitable treatment of topic in task context
- Moderate comprehension of sources; some inaccuracies
- Summarizes at least two sources in support of argument
- Position defended with some coherence
- Some organization; limited transitions/cohesion
- Generally understandable; errors may impede comprehension
- Appropriate but basic vocabulary/idiomatic language
- Some control of grammar/syntax/usage
- Mostly simple sentences with a few compound

Score 4 (Good):
- Generally effective treatment of topic in task context
- Comprehension of sources; may include a few inaccuracies
- Summarizes content from all three sources with limited integration
- Position defended clearly; coherent argument
- Organized essay; some effective transitions/cohesion
- Fully understandable; errors do not impede comprehensibility
- Varied and generally appropriate vocabulary/idiomatic language
- General control of grammar/syntax/usage
- Mostly paragraph-length discourse with simple/compound and a few complex sentences

Score 5 (Strong):
- Effective treatment of topic in task context
- High source comprehension with very few minor inaccuracies
- Integrates content from all three sources to support argument
- Position defended with high clarity, coherence, and detail
- Organized essay with effective transitions/cohesive devices
- Fully understandable with clear expression; occasional errors do not impede
- Varied and appropriate vocabulary/idiomatic language
- Accuracy and variety in grammar/syntax/usage with few errors
- Paragraph-length discourse with variety of simple/compound and some complex sentences`;

const STUDY_MOTIVATION_QUOTES = [
  "Don't watch the clock; do what it does. Keep going.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Focus on progress, not perfection.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Small daily improvements over time lead to stunning results.",
  "When you feel like quitting, remember why you started.",
  "It always seems impossible until it's done.",
  "Your dreams are worth the effort.",
  "The key to success is consistency, not intensity.",
  "The key to staying motivated is progress, no matter how small.",
];

export default function APESPArgEssay() {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const [chosenTopic, setChosenTopic] = useState<EssayMaterials | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [perQuestionTime, setPerQuestionTime] = useState(0);
  const [phase, setPhase] = useState<"reading" | "writing" | "done" | null>(null);

  const [chosenMode, setChosenMode] = useState<"physical" | "digital" | "setup">("setup")

  const [part1Open, setPart1Open] = useState(true);
  const [part2Open, setPart2Open] = useState(false);
  const [part1Text, setPart1Text] = useState("");
  const [part2Text, setPart2Text] = useState("");
  const [audioPlayCount, setAudioPlayCount] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [availableSpanishVoices, setAvailableSpanishVoices] = useState<SpeechSynthesisVoice[]>([]);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioPlayCountRef = useRef(0);
  const isAudioPlayingRef = useRef(false);
  const [customTopicIdea, setCustomTopicIdea] = useState("");
  const [customSourcePayload, setCustomSourcePayload] = useState("");
  const [customImagePrompt, setCustomImagePrompt] = useState("");
  const [customVisualPreview, setCustomVisualPreview] = useState("");
  const [completionQuote, setCompletionQuote] = useState("");

  const hasJsonPayload = customSourcePayload.trim().length > 0;
  const hasUploadedImage = customVisualPreview.trim().length > 0;
  const canImport = hasJsonPayload;

  const buildCustomSourcePrompt = (topicIdea: string) => {
    const trimmedIdea = topicIdea.trim() || "Impacto del uso de la tecnologia en la educacion";
    return `You are creating AP Spanish Language and Culture argumentative essay practice materials.

Create ONE source set for this topic:
${trimmedIdea}

Return ONLY valid JSON. No markdown. No explanation. No code fences.

The JSON must match this exact shape and key names:
{
  "title": "string in Spanish, framed as a debate question",
  "description": "1 sentence in Spanish describing the prompt context",
  "printSource": "400-500 word argumentative source in formal Spanish, single string",
  "audioTransscript": "2-3 sentence transcript in Spanish that sounds like a radio excerpt"
}

Rules:
- Keep Spanish level appropriate for AP Spanish Language and Culture.
- Ensure all fields are non-empty strings.
- Do not include any additional keys.`;
  };

  const buildCustomImagePrompt = (topicIdea: string) => {
    const trimmedIdea = topicIdea.trim() || "Impacto del uso de la tecnologia en la educacion";
    return `Create a realistic infographic-style educational image for an AP Spanish Language and Culture argumentative essay prompt.

Topic:
${trimmedIdea}

Requirements:
- 16:9 composition
- Clean infographic aesthetic
- Includes charts/icons/data cues relevant to the topic
- Neutral academic tone
- No logos, no watermarks
- Text in Spanish only, short labels
- Suitable for high school AP classroom use
- High resolution`;
  };

  const normalizeJsonPayload = (raw: string) => {
    return raw
      .trim()
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();
  };

  const parseCustomEssayMaterial = (raw: string): EssayMaterials | null => {
    try {
      const normalized = normalizeJsonPayload(raw);
      const parsed = JSON.parse(normalized) as Partial<EssayMaterials>;

      if (
        typeof parsed.title !== "string" ||
        typeof parsed.description !== "string" ||
        typeof parsed.printSource !== "string" ||
        typeof parsed.audioTransscript !== "string"
      ) {
        return null;
      }

      return {
        title: parsed.title.trim(),
        description: parsed.description.trim(),
        printSource: parsed.printSource.trim(),
        audioTransscript: parsed.audioTransscript.trim(),
        visualSourcePath:
          typeof parsed.visualSourcePath === "string" && parsed.visualSourcePath.trim()
            ? parsed.visualSourcePath.trim()
            : exampleMaterials[0]?.visualSourcePath || "/apesp/arg/Gemini_Generated_Image_z4yujbz4yujbz4yu.png",
      };
    } catch {
      return null;
    }
  };

  const copyCustomPrompt = async () => {
    const prompt = buildCustomSourcePrompt(customTopicIdea);
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
    }
  };

  const copyCustomImagePrompt = async () => {
    const prompt = buildCustomImagePrompt(customTopicIdea);
    setCustomImagePrompt(prompt);
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
    }
  };

  const openCustomPromptInChatGPT = () => {
    const prompt = buildCustomSourcePrompt(customTopicIdea);
    const encoded = encodeURIComponent(prompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const openImagePromptInChatGPT = () => {
    const prompt = buildCustomImagePrompt(customTopicIdea);
    setCustomImagePrompt(prompt);
    const encoded = encodeURIComponent(prompt);
    window.open(`https://chat.openai.com/?q=${encoded}`, "_blank", "noopener,noreferrer");
  };

  const importCustomSources = (mode: "digital" | "physical") => {
    const parsed = parseCustomEssayMaterial(customSourcePayload);
    if (!parsed) {
      return;
    }

    const mergedMaterial: EssayMaterials = {
      ...parsed,
      visualSourcePath: customVisualPreview || parsed.visualSourcePath,
    };

    setChosenMode(mode);
    setChosenTopic(mergedMaterial);
  };

  const uploadCustomSourceFile = async (file: File | null) => {
    if (!file) return;
    try {
      const text = await file.text();
      setCustomSourcePayload(text);
    } catch {
    }
  };

  const uploadCustomVisualFile = (file: File | null) => {
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setCustomVisualPreview((prev) => {
      if (prev.startsWith("blob:")) {
        URL.revokeObjectURL(prev);
      }
      return previewUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (customVisualPreview.startsWith("blob:")) {
        URL.revokeObjectURL(customVisualPreview);
      }
    };
  }, [customVisualPreview]);

  useEffect(() => {
    // Reset the listen counter whenever the selected prompt changes.
    setAudioPlayCount(0);
    setIsAudioPlaying(false);
    audioPlayCountRef.current = 0;
    isAudioPlayingRef.current = false;

    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      activeUtteranceRef.current = null;
    }
  }, [chosenTopic]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis
        .getVoices()
        .filter((voice) => voice.lang.toLowerCase().startsWith("es"));
      setAvailableSpanishVoices(voices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const pickPreferredVoice = () => {
    if (!availableSpanishVoices.length) {
      return null;
    }

    const isSpainSpanish = (voice: SpeechSynthesisVoice) => voice.lang.toLowerCase() === "es-es";
    const includesMonica = (voice: SpeechSynthesisVoice) => voice.name.toLowerCase().includes("monica");
    const hasMaleHint = (voice: SpeechSynthesisVoice) => {
      const n = voice.name.toLowerCase();
      const maleHints = ["male", "man", "hombre", "jorge", "carlos", "diego", "alvaro", "alberto", "antonio", "enrique", "pablo", "raul"];
      return maleHints.some((hint) => n.includes(hint));
    };

    // 1) Exact request: Monica with Spain Spanish locale.
    const monicaSpain = availableSpanishVoices.find((voice) => isSpainSpanish(voice) && includesMonica(voice));
    if (monicaSpain) {
      return monicaSpain;
    }

    // 2) Male voice in Spain Spanish if Monica is unavailable.
    const maleSpain = availableSpanishVoices.find((voice) => isSpainSpanish(voice) && hasMaleHint(voice));
    if (maleSpain) {
      return maleSpain;
    }

    // 3) Any Spain Spanish voice.
    const anySpain = availableSpanishVoices.find((voice) => isSpainSpanish(voice));
    if (anySpain) {
      return anySpain;
    }

    // 4) Last fallback: first available Spanish voice.
    return availableSpanishVoices[0] || null;
  };

  const playAudioTranscript = () => {
    if (!chosenTopic?.audioTransscript?.trim()) {
      return;
    }

    if (audioPlayCountRef.current >= 2) {
      return;
    }

    if (isAudioPlayingRef.current) {
      return;
    }

    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chosenTopic.audioTransscript);
    utterance.lang = "es-ES";
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    const preferredVoice = pickPreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    }

    utterance.onend = () => {
      isAudioPlayingRef.current = false;
      setIsAudioPlaying(false);
      activeUtteranceRef.current = null;
    };

    utterance.onerror = () => {
      isAudioPlayingRef.current = false;
      setIsAudioPlaying(false);
      activeUtteranceRef.current = null;
    };

    window.speechSynthesis.cancel();
    activeUtteranceRef.current = utterance;
    setAudioPlayCount(prev => {
      const newCount = prev + 1;
      audioPlayCountRef.current = newCount;
      return newCount;
    });
    isAudioPlayingRef.current = true;
    setIsAudioPlaying(true);
    window.speechSynthesis.speak(utterance);
  };

  const buildChatGPTRubricPrompt = () => {
    if (!chosenTopic) {
      return "";
    }

    return `You are an AP Spanish Language and Culture reader grading an Argumentative Essay.

Evaluate the student response using ONLY this rubric:\n${AP_ESP_2025_RUBRIC}

Prompt title: ${chosenTopic.title}

Print source:\n${chosenTopic.printSource}

Audio source transcript:\n${chosenTopic.audioTransscript}

Student notes (Part I):\n${part1Text || "(No notes provided)"}

Student essay (Part II):\n${part2Text || "(No essay provided)"}

Return your evaluation in this exact structure:
1) Overall score (1-5)
2) Short justification for score
3) Criterion-by-criterion feedback aligned to rubric bullets
4) 3 highest-impact revisions the student should make
5) A revised thesis statement in Spanish
6) One model paragraph in Spanish that improves organization and source integration`;
  };

  const openEssayInChatGPT = () => {
    const prompt = buildChatGPTRubricPrompt();
    const encoded = encodeURIComponent(prompt);
    const url = `https://chat.openai.com/?q=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const togglePart1 = () => {
    setPart1Open((prev) => {
      const next = !prev;
      if (next) {
        setPart2Open(false);
      }
      return next;
    });
  };

  const togglePart2 = () => {
    setPart2Open((prev) => {
      const next = !prev;
      if (next) {
        setPart1Open(false);
      }
      return next;
    });
  };

  const resetToHome = () => {
    setChosenTopic(null);
    setChosenMode("setup");
    setPart1Text("");
    setPart2Text("");
    setPart1Open(true);
    setPart2Open(false);
    setCurrentTime(0);
    setPerQuestionTime(0);
    setPhase(null);
    setCompletionQuote("");
  };

  const retryCurrentPrompt = () => {
    setPart1Text("");
    setPart2Text("");
    setPart1Open(true);
    setPart2Open(false);
    setCurrentTime(15 * 60);
    setPerQuestionTime(15 * 60);
    setPhase("reading");
    const randomQuote = STUDY_MOTIVATION_QUOTES[Math.floor(Math.random() * STUDY_MOTIVATION_QUOTES.length)] || "";
    setCompletionQuote(randomQuote);
  };

  // Timer logic
  useEffect(() => {
    if (!chosenTopic) {
      setCurrentTime(0);
      setPerQuestionTime(0);
      setPhase(null);
      return;
    }

    // Start with reading phase (15 minutes)
    setPhase("reading");
    setPerQuestionTime(15 * 60); // 15 minutes in seconds
    setCurrentTime(15 * 60);
  }, [chosenTopic]);

  // Countdown timer effect
  useEffect(() => {
    if (!chosenTopic || currentTime === 0) return;

    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const newTime = prev - 1;

        // When reading phase ends, switch to writing
        if (newTime === 0 && phase === "reading") {
          setPhase("writing");
          setPerQuestionTime(40 * 60); // 40 minutes in seconds
          return 40 * 60;
        }

        // When writing ends, lock timer and unlock grading handoff
        if (newTime === 0 && phase === "writing") {
          setPhase("done");
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [chosenTopic, currentTime, phase]);

  useEffect(() => {
    if (phase === "done") {
      const randomQuote = STUDY_MOTIVATION_QUOTES[Math.floor(Math.random() * STUDY_MOTIVATION_QUOTES.length)] || "";
      setCompletionQuote(randomQuote);
    }
  }, [phase]);

  const tabs = [
    {
      title: "📰 Print Source",
      value: "product",
      content: (
        <Card
          className="w-full overflow-hidden relative h-full rounded-3xl p-8 "
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          <ScrollArea className="h-[50vh] pr-4">
            {chosenMode === "digital" && (
              <h1 className="text-2xl font-bold mb-4">📰 Tu pregunta: {chosenTopic?.title}</h1>
            )}
            <p className="text-[18px] leading-8">{chosenTopic?.printSource}</p>
          </ScrollArea>
        </Card>
      ),
    },

    {
      title: "📊 Visual Source",
      value: "playground",
      content: (
        <Card
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 border-2 border-[#fbae25]/60"
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >

          <ScrollArea className="h-[50vh] pr-4">
            {chosenMode === "digital" && (
              <h1 className="text-2xl font-bold mb-4">📊 Tu pregunta: {chosenTopic?.title}</h1>
            )}
            <p className="mx-auto mb-3 w-fit rounded-full border border-[#fbae25]/50 bg-[#fbae25]/20 px-4 py-1 text-center text-sm font-semibold text-[#7a4a00]">
              Cuidado: Algunas de las imágenes quizás no sean perfectamente claras. Obtenga lo que puedas de ellas, pero no te frustres si no entiendes cada detalle.
            </p>
            <Image className="rounded-xl mx-auto" src={chosenTopic?.visualSourcePath || ""} alt="Visual source" width={500} height={500} />
          </ScrollArea>

        </Card>
      ),
    },

    {
      title: "🎧 Audio Source",
      value: "services",
      content: (
        <Card
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 border-2 border-[#fbae25]/60 "
          style={{ fontFamily: '"Times New Roman", Times, serif', fontWeight: 400 }}
        >
          <ScrollArea className="h-[50vh] relative z-10">
            {chosenMode === "digital" && (
              <>
                <h1 className="text-2xl font-bold mb-2 text-center text-[#7a4a00]">🎧 Tu pregunta: {chosenTopic?.title}</h1>
                <p className="mx-auto mb-3 w-fit rounded-full border border-[#fbae25]/50 bg-[#fbae25]/20 px-4 py-1 text-center text-sm font-semibold text-[#7a4a00]">
                  Aquí tienes la fuente 3.
                </p>
              </>
            )}

            <div className="h-full w-full flex flex-col items-center justify-center gap-5">
              <Button
                type="button"
                aria-label="Play audio source"
                onClick={playAudioTranscript}
                disabled={audioPlayCount >= 2 || isAudioPlaying}
                className="h-28 w-28 my-10 cursor-pointer rounded-full border-2 border-[#7a4a00]/20 bg-[#fbae25] text-[#4d2d00] shadow-[0_0_42px_rgba(251,174,37,0.55)] hover:scale-105 hover:bg-[#ffbb41] transition-transform"
              >
                <Play className="size-12 fill-current ml-1" />
              </Button>
              <div className="max-w-2xl rounded-2xl border border-[#fbae25]/45 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-[#7a4a00]">
                <p>
                  Cuidado: Solo puedes escuchar esta fuente dos veces, como el examen AP.
                </p>
                <p className="mt-2 text-xs font-bold">
                  Reproducciones usadas: {audioPlayCount}/2 {audioPlayCount >= 2 ? "(Bloqueado)" : ""}
                </p>
              </div>
            </div>
          </ScrollArea>
        </Card>
      ),
    },
  ]

  if (!chosenTopic) {
    return <section className="w-full max-w-[80vw] h-full mx-auto mt-4">
      <header className="mb-8 px-4 text-center w-full mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
          AP Spanish Language and Culture
        </p>
        <h1 className="ml-[6vw] text-center w-full flex flex-row gap-2 text-balance text-3xl font-black leading-tight text-neutral-900 sm:text-4xl md:text-5xl">
          Practice a Standout
          <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Argumentative Essay
          </span>
        </h1>
        <div className="flex flex-row gap-2 max-w-3xl text-xs mx-auto items-center justify-center ">
          <p className="mx-auto mt-3 w-[85%] text-neutral-600 sm:text-base">
            Practice the AP format by choosing a prompt, analyzing sources, and building a clear claim with strong evidence. Start by selecting a topic, and then pressing Start Writing to begin.
          </p>
          <Button
            className="ml-6 cursor-pointer rounded-full px-4 py-2 "
            variant={"outline"}
            onClick={() => {
              const randomIndex = Math.floor(Math.random() * exampleMaterials.length);
              api?.scrollTo(randomIndex);
            }}>
            <Dices className="mr-2" />
            Choose Random Topic
          </Button>
        </div>
      </header>
      <Carousel className="w-[60%] h-full mx-auto" setApi={setApi}>
        <CarouselContent>
          {
            exampleMaterials.map((material, index) => (
              <CarouselItem key={index}>
                <Card className="h-[360px] relative rounded-4xl px-2 max-w-xl mx-auto bg-[#fbae25] text-white">
                  <CardHeader>
                    <div className="flex flex-col gap-2">
                      <CardTitle className="text-3xl">{material.title}</CardTitle>
                      <CardDescription className="text-xl mt-4 !text-black">{material.description}</CardDescription>
                    </div>
                    <CardAction className="flex flex-row absolute bottom-6 right-6 rounded-3xl px-4 py-2 gap-4">
                      <RainbowButton className="!font-semibold mr-2"
                        onClick={() => {
                          setChosenMode("physical");
                          setChosenTopic(material);
                        }}>
                        Start Writing on Paper
                      </RainbowButton>
                      <ShinyButton onClick={() => {
                        setChosenMode("digital");
                        setChosenTopic(material);
                      }} className="bg-white">Start Writing Digitally</ShinyButton>
                    </CardAction>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>

      <Card className="mt-6 mx-auto w-[60%] hidden rounded-3xl border border-dashed border-[#fbae25]/60 bg-[#fff8ea] p-4 sm:p-6">
        <CardHeader className="p-0">
          <CardTitle className="text-xl text-[#7a4a00]">Create Your Own Sources with ChatGPT</CardTitle>
          <CardDescription className="text-sm text-[#7a4a00]/80">
            New here? Follow these 4 steps in order. When done, press Import at the bottom.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 mt-4 space-y-3">
          <div className="rounded-2xl border border-[#fbae25]/35 bg-white p-3 text-sm text-[#7a4a00]">
            <p className="font-semibold mb-2">Quick Start (for first-time students)</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Type your topic idea in Step 1 and open ChatGPT with the prompt button.</li>
              <li>Copy ChatGPT&apos;s JSON response and paste it into Step 3 (or upload a JSON file).</li>
              <li>Generate an image in ChatGPT with Step 2, then upload that image.</li>
              <li>Press Import + Start Digital Mode (or Paper Mode).</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
            <p className="text-sm font-semibold text-[#7a4a00]">Step 1: Enter your topic</p>
            <p className="text-xs text-[#7a4a00]/80 mb-2">
              Example: "Should schools limit AI use for homework?"
            </p>
            <Textarea
              value={customTopicIdea}
              onChange={(e) => setCustomTopicIdea(e.target.value)}
              className="min-h-[72px] rounded-2xl bg-white"
              placeholder="Type your essay topic idea here (optional but recommended)."
            />
          </div>

          <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
            <p className="text-sm font-semibold text-[#7a4a00]">Step 2: Generate the text sources in ChatGPT</p>
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
              <label className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium cursor-pointer bg-white">
                <Upload className="h-4 w-4" />
                Upload JSON Instead
                <input
                  type="file"
                  accept="application/json,.json,text/plain"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    uploadCustomSourceFile(file);
                  }}
                />
              </label>
            </div>
          </div>

          <div className="mt-1 rounded-2xl border border-[#fbae25]/40 bg-white p-3">
            <p className="text-sm font-semibold text-[#7a4a00]">Step 3: Generate and upload your image</p>
            <p className="text-xs text-[#7a4a00]/80 mb-2">
              Create the visual separately in ChatGPT image generation, then upload it here.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline" className="rounded-full cursor-pointer" onClick={copyCustomImagePrompt}>
                <ClipboardCopy className="mr-2 h-4 w-4" />
                Copy Step 3 Image Prompt
              </Button>
              <Button type="button" className="rounded-full cursor-pointer" onClick={openImagePromptInChatGPT}>
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Step 3 in ChatGPT
              </Button>
              <label className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium cursor-pointer bg-white">
                <Upload className="h-4 w-4" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    uploadCustomVisualFile(file);
                  }}
                />
              </label>
            </div>
            <Textarea
              value={customImagePrompt}
              onChange={(e) => setCustomImagePrompt(e.target.value)}
              className="mt-2 min-h-[110px] rounded-2xl bg-white"
              placeholder="Your image prompt will appear here. You can edit it before using ChatGPT."
            />
            {customVisualPreview && (
              <div className="mt-3">
                <p className="mb-1 text-xs text-[#7a4a00]/80">Uploaded visual preview:</p>
                <img
                  src={customVisualPreview}
                  alt="Uploaded visual source preview"
                  className="w-full max-h-[220px] object-contain rounded-xl border"
                />
              </div>
            )}
            <p className="mt-2 text-xs text-[#7a4a00]/80">
              Image status: {hasUploadedImage ? "Uploaded" : "Not uploaded yet (optional)"}
            </p>
          </div>

          <div className="rounded-2xl border border-[#fbae25]/40 bg-white p-3">
            <p className="text-sm font-semibold text-[#7a4a00]">Step 4: Paste ChatGPT JSON output</p>
            <p className="text-xs text-[#7a4a00]/80 mb-2">
              Required keys: title, description, printSource, audioTransscript.
            </p>
            <Textarea
              value={customSourcePayload}
              onChange={(e) => setCustomSourcePayload(e.target.value)}
              className="min-h-[170px] rounded-2xl bg-white"
              placeholder='Paste ChatGPT JSON here. Example keys: { "title": "...", "description": "...", "printSource": "...", "audioTransscript": "..." }'
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
  }


  //Setup
  return (
    <section className="relative flex flex-row gap-10 max-w-[95vw] mx-auto w-full items-start justify-start mt-2">
      <div className="w-1/2 h-[60vh]">
        <Tabs tabs={tabs} />
      </div>
      {
        (chosenMode === "digital") ? <div className="w-1/2 h-[60vh] flex flex-col gap-2">
          <div className="flex rounded-4xl items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
            <AnimatedCircularProgressBar
              max={perQuestionTime}
              value={currentTime}
              min={0}

              gaugePrimaryColor="#806BFF"
              gaugeSecondaryColor="rgba(255,255,255,0.08)"
              className={cn("size-14", currentTime <= 5 && "animate-pulse")}
            />
            <div>
              <p className="text-xs text-muted-foreground">Timer</p>
              <p className="text-lg font-semibold">{Math.floor(currentTime / 60)}:{String(currentTime % 60).padStart(2, "0")}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-muted-foreground">Current Phase</p>
              <p className="text-lg font-semibold">
                {phase === "reading" ? "Reading Sources" : phase === "writing" ? "Writing Essay" : "Time Complete"}
              </p>
            </div>
            <div>
              {
                phase !== "done" && <Button variant="outline" size="sm" onClick={() => {

                  if (phase === "reading") {
                    setPhase("writing");
                    setCurrentTime(40 * 60);
                    setPerQuestionTime(40 * 60);
                  } else if (phase === "writing") {
                    setPhase("done");
                    setCurrentTime(0);
                  }
                }}>
                  <ForwardIcon />
                  Skip Phase
                </Button>
              }
            </div>
          </div>
          {phase === "done" && (
            <div className=" flex  my-2 flex-col items-center justify-center rounded-[3rem] px-10 py-6 gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Excelente trabajo</p>
              <h2 className="text-md font-bold">¡Lo hiciste bien! Espero que tengas una gran sesión de estudio.</h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Buen trabajo terminando el flujo completo de ensayo al estilo AP. Sigue practicando y tu argumentación seguirá fortaleciéndose.
               </p>
              {completionQuote && (
                <p className="max-w-2xl text-base italic text-muted-foreground">"{completionQuote}"</p>
              )}
            </div>
          )}
          {
            phase !== "done" && <div id="notes-section" className="flex flex-col rounded-4xl items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
            <div className="flex flex-row gap-2 w-full">
              <div>
                <p className="text-xs text-muted-foreground">Part I</p>
                <p className="text-lg font-semibold">Taking Notes</p>
              </div>
              <Button variant="ghost" size="icon-lg" className="cursor-pointer ml-auto" onClick={togglePart1}>
                {part1Open ? <Minus /> : <Plus />}
              </Button>
            </div>

            {part1Open && (
              <Textarea
                className="h-[36vh] resize-none rounded-2xl mb-1"
                value={part1Text}
                onChange={(e) => setPart1Text(e.target.value)}
              />
            )}
          </div>
          }
          
          <div id="essay-section" className="flex flex-col rounded-4xl items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
            <div className="flex flex-row gap-2 w-full">
              <div>
                <p className="text-xs text-muted-foreground">Part II</p>
                <p className="text-lg font-semibold">Writing the Essay</p>
              </div>
              {
                phase === "writing" && <Button variant="ghost" size="icon-lg" className="cursor-pointer ml-auto" onClick={togglePart2}>
                  {part2Open ? <Minus /> : <Plus />}
                </Button>
              }
              {
                phase === "reading" && <p className="text-sm ml-auto w-1/2 text-muted-foreground">The essay writing section will unlock once you enter the writing phase. Use the reading time to analyze the sources and plan your essay!</p>
              }
              {
                phase === "done" && <p className="text-sm ml-auto w-1/2 text-muted-foreground">Time is up. You can now open your essay in ChatGPT to grade it against the AP rubric.</p>
              }

            </div>

            {
              part2Open && phase === "writing" ? (
                <Textarea
                  className="h-[36vh] resize-none rounded-2xl mb-1"
                  placeholder="Start writing your essay here..."
                  value={part2Text}
                  onChange={(e) => setPart2Text(e.target.value)}
                />
              ) : (
                phase !== "done" && part2Open && <div className="flex items-center justify-center">
                  <p className="text-sm text-muted-foreground">The essay writing section will unlock once you enter the writing phase. Use the reading time to analyze the sources and plan your essay!</p>
                </div>
              )
            }

            {
              phase === "done" && (
                <div className="w-full flex items-center justify-end mt-2">
                  <Button
                    onClick={openEssayInChatGPT}
                    disabled={!part2Text.trim()}
                    className="rounded-full"
                  >
                    <ExternalLink className="mr-2" />
                    Grade In ChatGPT (AP Rubric)
                  </Button>
                </div>
              )
            }
          </div>
        </div> : (chosenMode === "physical") && <div className="w-1/2 h-[60vh] flex flex-col gap-2">
          <div className="flex rounded-[3rem] items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 px-5 py-4">
            <div className="mx-auto flex flex-col text-center mt-4">
              <div className="mx-auto flex flex-row mb-2 gap-6 justify-center items-center">
                <AnimatedCircularProgressBar
                  max={perQuestionTime}
                  value={currentTime}
                  min={0}

                  gaugePrimaryColor="#806BFF"
                  gaugeSecondaryColor="rgba(255,255,255,0.08)"
                  className={cn("size-60 text-3xl", currentTime <= 5 && "animate-pulse")}
                />
                <div className="min-w-[120px] text-left">
                  <p className="text-md text-muted-foreground">Timer</p>
                  <p className="text-3xl font-semibold">{Math.floor(currentTime / 60)}:{String(currentTime % 60).padStart(2, "0")}</p>
                  {
                    phase !== "done" && <Button variant="outline" size="sm" className="mt-2" onClick={() => {

                      if (phase === "reading") {
                        setPhase("writing");
                        setCurrentTime(40 * 60);
                        setPerQuestionTime(40 * 60);
                      } else if (phase === "writing") {
                        setPhase("done");
                        setCurrentTime(0);
                      }
                    }}>
                      <ForwardIcon />
                      Skip Phase
                    </Button>
                  }
                </div>
              </div>

              <div className="flex my-2 flex-row gap-10 items-center justify-center mx-auto">

                <div>
                  <p className="text-md text-muted-foreground">Current Phase</p>
                  <p className="text-2xl font-semibold">{phase === "reading" ? "Reading Sources" : phase === "writing" ? "Writing Essay" : "Time Complete"}</p>
                </div>

              </div>

            </div>
          </div>

          {phase === "done" && (
            <div className=" flex flex-col items-center justify-center rounded-[3rem] px-10 py-6 gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Excelente trabajo</p>
              <h2 className="text-md font-bold">¡Lo hiciste bien! Espero que tengas una gran sesión de estudio.</h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                Buen trabajo terminando el flujo completo de ensayo al estilo AP. Sigue practicando y tu argumentación seguirá fortaleciéndose.
               </p>
              {completionQuote && (
                <p className="max-w-2xl text-base italic text-muted-foreground">"{completionQuote}"</p>
              )}
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                <Button variant="outline" className="rounded-full" onClick={resetToHome}>
                  Go Back to Home Screen
                </Button>
                <Button className="rounded-full" onClick={retryCurrentPrompt}>
                  Try Again
                </Button>
              </div>
            </div>
          )}

          <div className="flex mt-4 flex-col items-center justify-center rounded-[3rem] px-10 py-4 items-center gap-3 border border-[#806BFF]/30 light:border-[#806BFF]/40 bg-[#0F1424] light:bg-slate-50 ">
            <p className="text-xs mt-1 font-semibold uppercase tracking-[0.26em] text-neutral-500">
              Tu pregunta:
            </p>
            <h1 className="text-2xl text-center mb-2">{chosenTopic?.title}</h1>
          </div>
        </div>
      }
    </section>
  )
}