import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import crypto from "crypto";
import { fi } from "date-fns/locale";

// Ensure Node.js runtime so 'crypto' is available
export const runtime = "nodejs";

// Server-side decryption function
function decrypt(encrypted: string, ivHex: string, tagHex: string) {
  if (!encrypted || !ivHex || !tagHex) {
    throw new Error("encrypted, iv, and tag are required");
  }

  const masterKey = "VtB2cuzJMMyglrU92SflDJuQTOkSCYGGzSieOTBi81Q";
  if (!masterKey) throw new Error("MASTER_KEY is not defined on server");

  // Derive the 32-byte key from MASTER_KEY
  const key = crypto.createHash("sha256").update(masterKey).digest();
  const iv = Buffer.from(ivHex, "hex");
  const tag = Buffer.from(tagHex, "hex");

  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

interface Set {
  title: string;
  vocab: [string, string][];
}

export async function POST(request: Request) {
  try {
    const { subject, questionType, difficulty, numberOfCards, additionalNotes, apiKey } = await request.json();
    const decrypted = decrypt(apiKey.encrypted, apiKey.iv, apiKey.tag);

    // Use the BYOK key here
    const ai = new GoogleGenAI({apiKey: decrypted});

    const prompt = `Create a set of flashcards in JSON format...
Subject: ${subject}
Question Type: ${questionType}
Difficulty: ${difficulty}
Number of cards: ${numberOfCards}
Additional Notes: ${additionalNotes}

Return ONLY JSON in this structure. Do not have any new lines, any formatting, give it all in one line:
{
  "title": "Example Set",
  "vocab": [["Question 1", "Answer 1"], ["Question 2", "Answer 2"]]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    })
    const text = response.text?.replace(/^```json\s*|```$/g, "").trim() || "";

    let set: Set;
    try {
      set = JSON.parse(text);
    } catch (jsonError) {
      return NextResponse.json({ error: "Failed to parse AI response as JSON.", rawText: text }, { status: 500 });
    }

    if (
      typeof set.title !== "string" ||
      !Array.isArray(set.vocab) ||
      !set.vocab.every(card => Array.isArray(card) && card.length === 2)
    ) {
      return NextResponse.json({ error: "AI response JSON structure is incorrect.", parsedSet: set }, { status: 500 });
    }

    return NextResponse.json({ text, set }, { status: 200 });

  } catch (error) {
    console.error("Error generating flashcards:", error);
    return NextResponse.json({ error: `Failed to generate flashcards. Error: ${JSON.stringify(error)}` }, { status: 500 });
  }
}
