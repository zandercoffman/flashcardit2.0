import crypto from "crypto";

export function encrypt(text: string) {
  if (!text) throw new Error("Text is required for encryption");

  const masterKey = VtB2cuzJMMyglrU92SflDJuQTOkSCYGGzSieOTBi81Q;
  if (!masterKey) throw new Error("MASTER_KEY is not defined");

  const secret = crypto.createHash("sha256").update(masterKey).digest();
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv("aes-256-gcm", secret, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  const tag = cipher.getAuthTag().toString("hex");

  return { encrypted, iv: iv.toString("hex"), tag };
}

export function decrypt(encrypted: string, ivHex: string, tagHex: string) {
  const masterKey = VtB2cuzJMMyglrU92SflDJuQTOkSCYGGzSieOTBi81Q;
  if (!masterKey) throw new Error("MASTER_KEY is not defined");

  const secret = crypto.createHash("sha256").update(masterKey).digest();
  const iv = Buffer.from(ivHex, "hex");

  const decipher = crypto.createDecipheriv("aes-256-gcm", secret, iv);
  decipher.setAuthTag(Buffer.from(tagHex, "hex"));

  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
