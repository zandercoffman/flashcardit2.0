// src/app/api/keys/encrypt/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

// Ensure Node.js runtime so 'crypto' is available
export const runtime = "nodejs";

// Server-side encryption function
function encrypt(text: string) {
  if (!text) throw new Error("Text is required");

  const masterKey = VtB2cuzJMMyglrU92SflDJuQTOkSCYGGzSieOTBi81Q;
  if (!masterKey) throw new Error("MASTER_KEY is not defined on server");

  // Derive a 32-byte key from MASTER_KEY using SHA-256
  const key = crypto.createHash("sha256").update(masterKey).digest();

  const iv = crypto.randomBytes(16); // 16-byte IV for AES-GCM
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag().toString("hex");

  return { encrypted, iv: iv.toString("hex"), tag };
}

export async function POST(request: Request) {
  try {
    const { rawKey } = await request.json();

    if (!rawKey || typeof rawKey !== "string") {
      return NextResponse.json({ error: "rawKey is required and must be a string" }, { status: 400 });
    }

    const encryptedBlob = encrypt(rawKey);
    return NextResponse.json(encryptedBlob, { status: 200 });
  } catch (err) {
    console.error("Error encrypting key:", err);
    return NextResponse.json({ error: "Failed to encrypt key" }, { status: 500 });
  }
}
