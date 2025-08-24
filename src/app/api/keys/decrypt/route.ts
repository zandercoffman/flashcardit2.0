// src/app/api/keys/decrypt/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

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

export async function POST(request: Request) {
  try {
    const { encrypted, iv, tag } = await request.json();

    if (!encrypted || !iv || !tag) {
      return NextResponse.json({ error: "encrypted, iv, and tag are required" }, { status: 400 });
    }

    const decryptedText = decrypt(encrypted, iv, tag);
    return NextResponse.json({ decrypted: decryptedText }, { status: 200 });
  } catch (err) {
    console.error("Error decrypting key:", err);
    return NextResponse.json({ error: "Failed to decrypt key" }, { status: 500 });
  }
}
