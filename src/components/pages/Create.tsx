"use client"
import { ReactElement, useState } from "react"
import { FileUpload } from "../aceternity/file-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, CheckCircle2, AlertCircle, Sparkles, FileJson, UploadIcon, Pencil } from "lucide-react"
import { toast } from "sonner"
import { ScrollArea } from "../ui/scroll-area"
import Image from "next/image"

interface Set {
  title: string
  vocab: [string, string][]
}

export default function Create({
  addSet,
}: {
  addSet: (set: Set, isAutomatic: boolean) => Promise<number>
}) {
  const [thisStep, setStep] = useState<number>(0);
  const [promptCopied, setPromptCopied] = useState<boolean>(false);
  const [jsonInput, setJsonInput] = useState<string>("");
  const [jsonError, setJsonError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const chatGptPrompt = `Create a flashcard set based on the text and/or files I provide. Use this exact TypeScript structure:
interface Set {
  title: string;
  vocab: [string, string][];
}

interface AllSetsInterface {
  id: string;
  set: Set;
}

Instructions:
1. Read the text I provide below.
2. Identify key terms and their definitions from the text.
3. Create a clear, concise title for the flashcard set based on the content.
4. For each key term, create a tuple [term, definition] in the vocab array.
5. Return a single JSON object that matches AllSetsInterface exactly.
6. The id should be a short, unique string.

Important: Output only the JSON, no explanations, commentary, or formatting outside of the JSON. When the generation has completed, remind the user to copy this JSON back over to their "flashcardit.vercel.app" tab starting from the character { and ending with }.

Here is the text to use (and/or) the custom instructions to use:
`;

  const parseSetFromJson = (raw: string): { set?: Set; error?: string } => {
    if (!raw.trim()) {
      return { error: "Please paste the JSON from ChatGPT." };
    }

    const firstBrace = raw.indexOf("{");
    const lastBrace = raw.lastIndexOf("}");
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      return { error: "Could not find a JSON object. Make sure it starts with { and ends with }." };
    }

    const jsonSlice = raw.slice(firstBrace, lastBrace + 1);

    try {
      const parsed = JSON.parse(jsonSlice);
      const candidate: Set | undefined = parsed?.set ?? parsed;

      if (!candidate || typeof candidate !== "object") {
        return { error: "JSON is missing a valid Set object." };
      }

      if (typeof candidate.title !== "string" || !candidate.title.trim()) {
        return { error: "Set.title must be a non-empty string." };
      }

      if (!Array.isArray(candidate.vocab) || candidate.vocab.length === 0) {
        return { error: "Set.vocab must be a non-empty array." };
      }

      for (const item of candidate.vocab) {
        if (!Array.isArray(item) || item.length !== 2) {
          return { error: "Each vocab item must be a [term, definition] pair." };
        }
        const [term, definition] = item;
        if (typeof term !== "string" || typeof definition !== "string") {
          return { error: "Each vocab pair must contain two strings." };
        }
      }

      return { set: { title: candidate.title.trim(), vocab: candidate.vocab } };
    } catch {
      return { error: "Invalid JSON. Make sure you copied the full JSON block." };
    }
  };

  const steps: {
    title: string,
    description: ReactElement
    side: ReactElement
  }[] = [
      {
        title: "Step 1: Open ChatGPT with the prompt",
        description: <>
          Click the big button to open ChatGPT with everything pre-filled. Then paste your topic or notes and press send.
        </>,
        side: (
          <div className="flex flex-col gap-4 justify-start items-center">
            <Image className="rounded-3xl shadow-xl" src={"/img/create/chatgpt.png"} alt={"A picture of ChatGPT with a custom prompt to create flashcards."} width={500} height={500} />
            <div className="flex flex-col gap-3 w-full items-center">
              <Button
                className="rounded-3xl border-2 px-12 cursor-pointer bg-white/50 dark:bg-neutral-800/50"
                variant={"secondary"}
                onClick={() => {
                  const link = `https://chat.openai.com/?q=${encodeURIComponent(chatGptPrompt)}`;
                  window.open(link, "_blank");
                  setStep(1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mb-[0.5] text-foreground transition-colors" viewBox="0 0 24 24"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" fill="currentColor"></path></svg>
                Open Prompt In ChatGPT
              </Button>
              <Button
                className="rounded-3xl cursor-pointer px-10"
                variant={"ghost"}
                onClick={async () => {
                  await navigator.clipboard.writeText(chatGptPrompt);
                  setPromptCopied(true);
                  setTimeout(() => setPromptCopied(false), 2000);
                }}
              >
                {promptCopied ? "Prompt Copied" : "Copy Prompt"}
              </Button>
              <p className="text-xs text-muted-foreground">Tip: If nothing opens, use “Copy Prompt”, then paste into ChatGPT.</p>
            </div>
          </div>
        )
      },
      {
        title: "Step 2: Copy the JSON back here",
        description: <>In ChatGPT, click “Copy code” on the JSON. Then return to this page and paste it in the box below.</>,
        side: (
          <div className="flex flex-col gap-4 justify-start items-center">
            <Image className="rounded-3xl shadow-xl" src={"/img/create/2.png"} alt={"A picture of ChatGPT with a custom prompt to create flashcards."} width={500} height={500} />
            <Image className="rounded-3xl shadow-xl" src={"/img/create/2-2.png"} alt={"A picture of ChatGPT with a custom prompt to create flashcards."} width={500} height={500} />
          </div>
        )
      },
    ]




  return (
    <div className="w-full flex gap-6 items-center justify-center h-[80vh] flex-row px-4 py-6">
      <div className="flex w-[40%] justify-start">
        {steps[thisStep].side}
      </div>
      <ScrollArea className="flex h-[80vh] flex-col items-center justify-center px-auto gap-5 w-[60%]">
        <div className="w-full rounded-3xl border bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-xl px-6 py-5">
          <h1 className="text-2xl font-semibold">Create flashcards with AI in 2 easy steps</h1>
          <p className="text-sm text-muted-foreground mt-1">No tech skills needed. Just copy, paste, and you’re done.</p>
        </div>

        {steps.map((step, idx) => {
          const isActive = thisStep === idx;
          return (
            <div key={idx} className={`mt-2 mb-2 w-full px-4 py-3 flex flex-row gap-4 rounded-3xl items-center border ${isActive ? "bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-lg" : "bg-white/20 dark:bg-neutral-900/20"}`}>
              <div className="size-12 min-w-12 shadow-xl border rounded-full flex items-center justify-center bg-white/50 dark:bg-neutral-800/50">{idx + 1}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{step.title}</h2>
                {isActive && <p className="text-gray-400 text-sm">{step.description}</p>}
              </div>
            </div>
          );
        })}

        {thisStep === 1 && (
          <div className="w-full flex flex-col gap-2 rounded-3xl border bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-xl px-5 py-4">
            <h3 className="text-lg font-medium">Paste JSON here</h3>
            <p className="text-xs text-muted-foreground mt-1">It should match the Set interface: title + vocab pairs.</p>
            <Textarea
              className="mt-3 min-h-[160px] rounded-2xl bg-white/50 dark:bg-neutral-800/50"
              placeholder="Paste the JSON from ChatGPT here..."
              value={jsonInput}
              onChange={(e) => {
                setJsonInput(e.target.value);
                if (jsonError) setJsonError("");
              }}
            />
            {jsonError && <p className="mt-2 text-sm text-red-400">{jsonError}</p>}
            <div className="mt-3 flex items-center gap-3">
              <Button
                className="rounded-3xl"
                disabled={isSubmitting}
                onClick={async () => {
                  const result = parseSetFromJson(jsonInput);
                  if (!result.set) {
                    setJsonError(result.error ?? "Invalid JSON format.");
                    return;
                  }
                  setIsSubmitting(true);
                  try {
                    await addSet(result.set, true);
                    toast.success("Flashcards added!");
                    setJsonInput("");
                    setJsonError("");
                  } catch {
                    toast.error("Something went wrong. Please try again.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                {isSubmitting ? "Adding..." : "Add flashcards"}
              </Button>
              <Button
                variant="outline"
                className="rounded-3xl"
                onClick={() => {
                  setJsonInput("");
                  setJsonError("");
                }}
              >
                Clear
              </Button>
            </div>
          </div>
        )}

        <div className="flex mt-2 w-full justify-between items-center gap-3">
          <Button
            variant="outline"
            className="rounded-3xl"
            onClick={() => setStep(Math.max(0, thisStep - 1))}
            disabled={thisStep === 0}
          >
            Back
          </Button>
          <Button
            className="rounded-3xl"
            onClick={() => setStep(Math.min(steps.length - 1, thisStep + 1))}
            disabled={thisStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}
