import { groq, createGroq } from "@ai-sdk/groq"
import { streamText } from "ai"
import { cookies } from "next/headers"
import { nanoid } from "nanoid"

/* ---------- Types ---------- */

export interface Set {
  title: string
  vocab: [string, string][]
}

type ChatMessage = {
  role: "system" | "user" | "assistant"
  content: string
}

/* ---------- Config ---------- */

// 👇 change model here
const DEFAULT_MODEL = "gemma2-9b-it"

// 👇 daily free limit (built-in only)
const DAILY_LIMIT = 5

/* ---------- Helpers ---------- */

async function getAnonId() {
  const store = cookies()
  const existingAnonId = await (await store).get("anon_id")?.value

  if (existingAnonId) {
    return existingAnonId
  }

  const newAnonId = nanoid()
  ;(await store).set("anon_id", newAnonId, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
  })

  return newAnonId
}

// 🔴 Replace with real DB logic
async function enforceDailyLimit(_anonId: string) {
  // lookup today's usage
  // if >= DAILY_LIMIT -> throw
  return
}

/* ---------- Route ---------- */

export async function POST(req: Request) {
  const anonId = await getAnonId()

  const {
    messages,
    apiKey,
    set,
    model = DEFAULT_MODEL,
  }: {
    messages: ChatMessage[]
    apiKey?: string
    set?: Set
    model?: string
  } = await req.json()

  const isBYOK = Boolean(apiKey)

  if (!isBYOK) {
    await enforceDailyLimit(anonId)
  }

  const provider = isBYOK
    ? createGroq({ apiKey })
    : groq

  /* ---------- System Prompt ---------- */

  const systemPrompt: ChatMessage = {
    role: "system",
    content: `
You are a study assistant that creates short, memorable mnemonics.
Be creative, concise, and student-friendly.
${set ? `Study set: "${set.title}"` : ""}
${set ? `Vocabulary:\n${set.vocab
      .map(([term, def]) => `- ${term}: ${def}`)
      .join("\n")}` : ""}
`,
  }

  const result = streamText({
    model: provider(model),
    messages: [systemPrompt, ...messages].slice(-15),
  })

  return result.toTextStreamResponse()
}
