"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { puter } from "@heyputer/puter.js";
import Image from "next/image";
import {
  Badge,
} from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs } from "@/components/ui/aceternity-tabs";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import {
  AudioLines,
  BookOpen,
  CheckCircle,
  FileDown,
  Hourglass,
  LogIn,
  Play,
  RefreshCcw,
  Sparkles,
  Timer,
  Wand2,
} from "lucide-react";

type TimingMode = "timed" | "untimed";
type ModelLike = { id?: string; name?: string };
type ChatContentPart = string | { text?: string | null } | null | undefined;
type ChatResponseLike = {
  message?: { content?: string | ChatContentPart[] };
  choices?: Array<{ message?: { content?: string } }>;
};
type SpeechToTextResponse = string | { text?: string | null };

const DEFAULT_READING_SECONDS = 15 * 60;
const DEFAULT_WRITING_SECONDS = 40 * 60;

export default function APESPArgEssay() {
  const [phase, setPhase] = useState<"setup" | "session">("setup");

  // setup controls
  const [topic, setTopic] = useState("Technology and society");
  const [difficulty, setDifficulty] = useState("AP");
  const [wordGoal, setWordGoal] = useState(250);
  const [timingMode, setTimingMode] = useState<TimingMode>("timed");
  const [models, setModels] = useState<string[]>([]);
  const [chatModel, setChatModel] = useState("gpt-5.4-nano");

  // source mode toggles
  const [autoArticle, setAutoArticle] = useState(true);
  const [autoImage, setAutoImage] = useState(true);
  const [autoAudio, setAutoAudio] = useState(true);

  // sources
  const [articleText, setArticleText] = useState<string>("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [audioSrc, setAudioSrc] = useState<string>("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioTranscript, setAudioTranscript] = useState<string>("");
  const [audioPlayCount, setAudioPlayCount] = useState(0);

  // loading/error
  const [articleLoading, setArticleLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [transcribeLoading, setTranscribeLoading] = useState(false);

  // timers
  const [readingLeft, setReadingLeft] = useState(DEFAULT_READING_SECONDS);
  const [writingLeft, setWritingLeft] = useState(DEFAULT_WRITING_SECONDS);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const readingRef = useRef(DEFAULT_READING_SECONDS);
  const writingRef = useRef(DEFAULT_WRITING_SECONDS);

  // essay state
  const [essay, setEssay] = useState("");
  const [outlineLoading, setOutlineLoading] = useState(false);
  const [grammarLoading, setGrammarLoading] = useState(false);
  const [scoringLoading, setScoringLoading] = useState(false);
  const [score, setScore] = useState<{ value: number; feedback: string } | null>(null);
  const [locked, setLocked] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const isClient = typeof window !== "undefined";

  const loadModels = useCallback(async () => {
    if (!isClient || !signedIn) return;
    try {
      const list = (await puter.ai.listModels()) as ModelLike[];
      const names = list
        .map((m) => m?.id || m?.name)
        .filter((name): name is string => Boolean(name));
      if (names.length) {
        const firstModel = names[0];
        setModels(names);
        if (firstModel && !names.includes(chatModel)) setChatModel(firstModel);
      }
    } catch {
      // silent; fall back to defaults
    }
  }, [chatModel, isClient, signedIn]);

  const resetAll = useCallback(() => {
    setPhase("setup");
    setArticleText("");
    setImageSrc("");
    setAudioSrc("");
    setAudioFile(null);
    setAudioTranscript("");
    setAudioPlayCount(0);
    setEssay("");
    setScore(null);
    setLocked(false);
    setReadingLeft(DEFAULT_READING_SECONDS);
    setWritingLeft(DEFAULT_WRITING_SECONDS);
    readingRef.current = DEFAULT_READING_SECONDS;
    writingRef.current = DEFAULT_WRITING_SECONDS;
    clearTimer();
  }, []);

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startTimer = useCallback(() => {
    clearTimer();
    if (timingMode === "untimed") return;
    intervalRef.current = setInterval(() => {
      setReadingLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 0;
        readingRef.current = next;
        return next;
      });
      setWritingLeft((prev) => {
        if (readingRef.current > 0) return prev;
        const next = prev > 0 ? prev - 1 : 0;
        writingRef.current = next;
        return next;
      });
    }, 1000);
  }, [timingMode]);

  useEffect(() => {
    if (timingMode === "untimed") return;
    if (readingLeft === 0 && writingLeft === 0) {
      setLocked(true);
      clearTimer();
      toast.warning("Time is up - writing is now locked.");
    }
  }, [readingLeft, writingLeft, timingMode]);

  useEffect(() => () => clearTimer(), []);

  const wordCount = useMemo(() => essay.trim().split(/\s+/).filter(Boolean).length, [essay]);

  useEffect(() => {
    if (!isClient) return;
    try {
      setSignedIn(puter.auth.isSignedIn());
    } catch {
      setSignedIn(false);
    }
  }, [isClient]);

  useEffect(() => {
    loadModels();
  }, [loadModels]);

  const ensurePuterSession = useCallback(async () => {
    if (!isClient) return false;
    setAuthLoading(true);
    try {
      if (!puter.auth.isSignedIn()) {
        await puter.auth.signIn({ attempt_temp_user_creation: true });
      }
      setSignedIn(true);
      return true;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err ?? "");
      if (/popup|blocked/i.test(msg)) {
        toast.error("Sign-in popup was blocked. Enable popups for this site and try again.");
      } else {
        toast.error("Could not sign in with Puter. Try again or allow a temporary account.");
      }
      setSignedIn(false);
      return false;
    } finally {
      setAuthLoading(false);
    }
  }, [isClient]);

  const handleManualSignIn = async () => {
    const sessionReady = await ensurePuterSession();
    if (sessionReady) {
      await loadModels();
      toast.success("Puter session ready.");
    }
  };

  const extractChatText = (resp: ChatResponseLike | null | undefined) => {
    if (!resp) return "";
    if (typeof resp.message?.content === "string") return resp.message.content;
    if (Array.isArray(resp.message?.content))
      return resp.message.content
        .map((c) => (typeof c === "string" ? c : c?.text || ""))
        .join("\n");
    if (resp.choices?.[0]?.message?.content) return resp.choices[0].message.content;
    return "";
  };

  const generateArticle = useCallback(async () => {
    if (!isClient) return;
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setArticleLoading(true);
    try {
      const prompt = `Topic: ${topic}. Level: ${difficulty}. Generate a written source (journalistic article) of 250-300 words in Spanish with data and multiple arguments for an AP Spanish Language & Culture argumentative essay.`;
      const resp = await puter.ai.chat(prompt, { model: chatModel });
      const text = extractChatText(resp as ChatResponseLike) || "Could not generate the article.";
      setArticleText(text);
    } catch {
      toast.error("Error generating article.");
    } finally {
      setArticleLoading(false);
    }
  }, [chatModel, difficulty, ensurePuterSession, isClient, topic]);

  const generateImage = useCallback(async () => {
    if (!isClient) return;
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setImageLoading(true);
    try {
      const img = await puter.ai.txt2img({
        prompt: `Infographic or chart relevant to the topic: ${topic}. Clean style, clear data, Spanish labels/text.`,
        model: "gpt-image-1.5",
        quality: "low",
      });
      const src = (img as HTMLImageElement)?.src;
      if (src) setImageSrc(src);
    } catch {
      toast.error("Error generating visual resource.");
    } finally {
      setImageLoading(false);
    }
  }, [ensurePuterSession, isClient, topic]);

  const generateAudio = useCallback(async () => {
    if (!isClient) return;
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setAudioLoading(true);
    try {
      const textForAudio =
        articleText ||
        `Short radio commentary about the topic ${topic}, presenting contrasting opinions in about 90 seconds.`;
      const audioEl = await puter.ai.txt2speech(textForAudio, {
        provider: "openai",
      });
      const src = (audioEl as HTMLAudioElement)?.src;
      if (src) setAudioSrc(src);
    } catch {
      toast.error("Error generating audio.");
    } finally {
      setAudioLoading(false);
    }
  }, [articleText, ensurePuterSession, isClient, topic]);

  const handleStart = async () => {
    setPhase("session");
    if (autoArticle) await generateArticle();
    if (autoImage) await generateImage();
    if (autoAudio) await generateAudio();
    startTimer();
  };

  const handleOutline = async () => {
    if (!essay && !articleText) {
      toast.info("You need at least the written source to generate an outline.");
      return;
    }
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setOutlineLoading(true);
    try {
      const prompt = `Topic: ${topic}. Generate a brief outline (thesis + 3 points with specific evidence citing the sources) for the AP argumentative essay.`;
      const resp = await puter.ai.chat(prompt, { model: chatModel });
      const text = extractChatText(resp as ChatResponseLike);
      if (text) setEssay((prev) => `${prev}\n\n---\nSuggested outline:\n${text}`);
    } catch {
      toast.error("Could not generate the outline.");
    } finally {
      setOutlineLoading(false);
    }
  };

  const handleGrammar = async () => {
    if (!essay.trim()) {
      toast.info("Write something first.");
      return;
    }
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setGrammarLoading(true);
    try {
      const prompt = `Review grammar, coherence, and cohesion of the following essay (Spanish). Return concise bullet-point suggestions:\n\n${essay}`;
      const resp = await puter.ai.chat(prompt, { model: chatModel });
      const text = extractChatText(resp as ChatResponseLike);
      if (text) setEssay((prev) => `${prev}\n\n---\nReview:\n${text}`);
    } catch {
      toast.error("Could not review the text.");
    } finally {
      setGrammarLoading(false);
    }
  };

  const handleScore = async () => {
    if (!essay.trim()) {
      toast.info("There is no essay to evaluate.");
      return;
    }
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setScoringLoading(true);
    try {
      const prompt = `Evaluate this essay using the AP Spanish Language and Culture Presentational Writing rubric (0-5). Return format: Score: X/5 \\n Feedback: • ...\n\nAvailable sources:\n${articleText}\n\nEssay:\n${essay}`;
      const resp = await puter.ai.chat(prompt, { model: chatModel });
      const text = extractChatText(resp as ChatResponseLike);
      const match = text.match(/score\\s*[:\\-]?\\s*(\\d(?:\\.\\d)?)/i);
      const value = match ? Number(match[1]) : NaN;
      setScore({ value: isNaN(value) ? 0 : value, feedback: text });
      setLocked(true);
      clearTimer();
    } catch {
      toast.error("Could not score the essay.");
    } finally {
      setScoringLoading(false);
    }
  };

  const handleImageFile = (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageSrc(url);
    setAutoImage(false);
  };

  const handleAudioFile = (file: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAudioSrc(url);
    setAudioFile(file);
    setAudioTranscript("");
    setAutoAudio(false);
  };

  const formatSeconds = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleTranscribe = async () => {
    if (!audioFile) {
      toast.info("Upload audio to transcribe.");
      return;
    }
    const sessionReady = await ensurePuterSession();
    if (!sessionReady) return;
    setTranscribeLoading(true);
    try {
      const resp = (await puter.ai.speech2txt(audioFile, { model: "whisper-1" })) as SpeechToTextResponse;
      const text = typeof resp === "string" ? resp : (resp.text ?? "");
      setAudioTranscript(text);
    } catch {
      toast.error("Could not transcribe the audio.");
    } finally {
      setTranscribeLoading(false);
    }
  };

  const tabs = [
    {
      title: "📄 Written Source",
      value: "written",
      content: (
        <Card className="w-full h-full overflow-hidden relative rounded-2xl p-6 text-base text-foreground">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">Article</Badge>
            <Button variant="ghost" size="icon" onClick={generateArticle} disabled={articleLoading}>
              {articleLoading ? <Spinner /> : <RefreshCcw className="w-4 h-4" />}
            </Button>
          </div>
          <ScrollArea className="h-[60%] pr-4">
            {articleLoading ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner /> Generating article...
              </div>
            ) : (
              <p className="whitespace-pre-wrap leading-6 text-sm md:text-base">
                {articleText || "Enter or generate the written source."}
              </p>
            )}
          </ScrollArea>
          {!autoArticle && (
            <Textarea
              className="mt-4"
              placeholder="Paste or write your written source..."
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              disabled={locked}
            />
          )}
        </Card>
      ),
    },
    {
      title: "📊 Visual Source",
      value: "visual",
      content: (
        <Card className="w-full h-full overflow-hidden relative rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">Visual</Badge>
            <Button variant="ghost" size="icon" onClick={generateImage} disabled={imageLoading}>
              {imageLoading ? <Spinner /> : <RefreshCcw className="w-4 h-4" />}
            </Button>
            {imageSrc && (
              <Button variant="ghost" size="icon" asChild>
                <a href={imageSrc} download target="_blank" rel="noreferrer">
                  <FileDown className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
          <div className="h-[75%] flex items-center justify-center bg-muted rounded-xl overflow-hidden">
            {imageLoading ? (
              <Spinner className="w-6 h-6" />
            ) : imageSrc ? (
              <Image
                src={imageSrc}
                alt="Visual source"
                width={1200}
                height={900}
                unoptimized
                className="object-contain w-full h-full"
              />
            ) : (
              <p className="text-sm text-muted-foreground">Upload or generate a visual resource.</p>
            )}
          </div>
          {!autoImage && (
            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-sm">Image URL</Label>
              <Input
                placeholder="https://..."
                onChange={(e) => setImageSrc(e.target.value)}
                value={imageSrc}
                disabled={locked}
              />
              <Label className="text-sm">Or select a file</Label>
              <Input type="file" accept="image/*" onChange={(e) => handleImageFile(e.target.files?.[0] || null)} disabled={locked} />
            </div>
          )}
        </Card>
      ),
    },
    {
      title: "🎧 Audio Source",
      value: "audio",
      content: (
        <Card className="w-full h-full overflow-hidden relative rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">Audio</Badge>
            <Button variant="ghost" size="icon" onClick={generateAudio} disabled={audioLoading}>
              {audioLoading ? <Spinner /> : <RefreshCcw className="w-4 h-4" />}
            </Button>
            <Badge variant="outline" className="flex items-center gap-1">
              <AudioLines className="w-4 h-4" /> {audioPlayCount} plays
            </Badge>
          </div>
          <div className="h-[70%] flex items-center justify-center bg-muted rounded-xl">
            {audioLoading ? (
              <Spinner className="w-6 h-6" />
            ) : audioSrc ? (
              <audio
                controls
                className="w-full"
                src={audioSrc}
                onPlay={() => setAudioPlayCount((c) => c + 1)}
              />
            ) : (
              <p className="text-sm text-muted-foreground">Upload or generate audio.</p>
            )}
          </div>
          {!autoAudio && (
            <div className="mt-4 flex flex-col gap-2">
              <Label className="text-sm">Audio URL</Label>
              <Input
                placeholder="https://..."
                onChange={(e) => {
                  setAudioSrc(e.target.value);
                  setAudioFile(null);
                  setAudioTranscript("");
                }}
                value={audioSrc}
                disabled={locked}
              />
              <Label className="text-sm">Or select a file</Label>
              <Input
                type="file"
                accept="audio/*"
                onChange={(e) => handleAudioFile(e.target.files?.[0] || null)}
                disabled={locked}
              />
              {audioFile && (
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="secondary" onClick={handleTranscribe} disabled={transcribeLoading}>
                    {transcribeLoading ? <Spinner className="mr-2" /> : <AudioLines className="w-4 h-4 mr-2" />}
                    Transcribe
                  </Button>
                  {audioTranscript && <Badge variant="outline">Transcript ready</Badge>}
                </div>
              )}
              {audioTranscript && (
                <Textarea
                  className="mt-2"
                  value={audioTranscript}
                  onChange={(e) => setAudioTranscript(e.target.value)}
                  disabled={locked}
                  placeholder="Audio transcript"
                />
              )}
            </div>
          )}
        </Card>
      ),
    },
  ];

  const prepDone = timingMode === "untimed" || readingLeft === 0;

  return (
    <section className="w-full h-full flex flex-col gap-6">
      {phase === "setup" ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>AP Spanish Argumentative Essay</CardTitle>
            <CardDescription>Set your sources and timer, then start practicing.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Label>Topic</Label>
                <Input value={topic} onChange={(e) => setTopic(e.target.value)} />
              </div>
              <div>
                <Label>Difficulty</Label>
                <Input value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
              </div>
              <div>
                <Label>Word goal</Label>
                <Input
                  type="number"
                  min={0}
                  value={wordGoal}
                  onChange={(e) => setWordGoal(Number(e.target.value))}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label>Timed mode</Label>
                <Switch checked={timingMode === "timed"} onCheckedChange={(c) => setTimingMode(c ? "timed" : "untimed")} />
              </div>
              <div>
                <Label>Chat model</Label>
                <Select value={chatModel} onValueChange={setChatModel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {[chatModel, ...(models.filter((m) => m !== chatModel))].map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Label>Auto-generate article</Label>
                <Switch checked={autoArticle} onCheckedChange={setAutoArticle} />
              </div>
              <div className="flex items-center justify-between">
                <Label>Auto-generate visual</Label>
                <Switch checked={autoImage} onCheckedChange={setAutoImage} />
              </div>
              <div className="flex items-center justify-between">
                <Label>Auto-generate audio</Label>
                <Switch checked={autoAudio} onCheckedChange={setAutoAudio} />
              </div>
              <div className="rounded-xl border p-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Uses Puter AI GPT-5 nano + GPT-Image 1.5 + OpenAI TTS.
                </p>
              </div>
              <div className="rounded-xl border p-3 flex items-center justify-between gap-3">
                <div className="text-sm text-muted-foreground">
                  Puter auth: {signedIn ? "Signed in" : "Not signed in"}
                </div>
                <Button
                  size="sm"
                  variant={signedIn ? "secondary" : "default"}
                  onClick={handleManualSignIn}
                  disabled={authLoading}
                >
                  {authLoading ? <Spinner className="mr-2" /> : <LogIn className="w-4 h-4 mr-2" />}
                  {signedIn ? "Refresh session" : "Sign in to Puter"}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={resetAll}>
              <Timer className="w-4 h-4 mr-2" /> Reset
            </Button>
            <Button onClick={handleStart}>
              <Play className="w-4 h-4 mr-2" /> Start session
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Sources */}
            <div className="w-full md:w-[45%] h-[26rem]">
              <Tabs tabs={tabs} />
            </div>

            {/* Essay area */}
            <Card className="w-full md:w-[55%] h-full flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Essay</CardTitle>
                  <div className="flex items-center gap-2">
                    {timingMode === "timed" && (
                      <>
                        <Badge variant={prepDone ? "default" : "secondary"} className="flex items-center gap-1">
                          <Hourglass className="w-4 h-4" />
                          {prepDone ? `Writing: ${formatSeconds(writingLeft)}` : `Reading: ${formatSeconds(readingLeft)}`}
                        </Badge>
                      </>
                    )}
                    <Badge variant={wordCount >= wordGoal ? "default" : "outline"}>
                      {wordCount} / {wordGoal} words
                    </Badge>
                  </div>
                </div>
                <CardDescription>Write your argumentative essay. It will lock when time ends or after scoring.</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-3">
                <Textarea
                  className="min-h-[260px]"
                  value={essay}
                  onChange={(e) => setEssay(e.target.value)}
                  placeholder="Write your essay here..."
                  disabled={locked || (!prepDone && timingMode === "timed")}
                />
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="secondary" onClick={handleOutline} disabled={outlineLoading || locked}>
                    {outlineLoading ? <Spinner className="mr-2" /> : <Wand2 className="w-4 h-4 mr-2" />}
                    Generate outline
                  </Button>
                  <Button size="sm" variant="secondary" onClick={handleGrammar} disabled={grammarLoading || locked}>
                    {grammarLoading ? <Spinner className="mr-2" /> : <BookOpen className="w-4 h-4 mr-2" />}
                    Quick review
                  </Button>
                  <Button size="sm" onClick={handleScore} disabled={scoringLoading || locked || (!prepDone && timingMode === "timed")}>
                    {scoringLoading ? <Spinner className="mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                    Submit and score
                  </Button>
                  <Button size="sm" variant="outline" onClick={resetAll}>
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
                {score && (
                  <Card className="border-dashed">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Score: {score.value}/5
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap text-sm text-muted-foreground">{score.feedback}</p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            <Badge variant="outline" className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Puter AI active
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Timer className="w-3 h-3" /> {timingMode === "timed" ? "55 min (15 + 40)" : "No time limit"}
            </Badge>
          </div>
        </div>
      )}
    </section>
  );
}
