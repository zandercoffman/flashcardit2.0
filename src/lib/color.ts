export type ColorShades = {
  lighter: string
  darker: string
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

function normalizeHex(hex: string): string {
  const trimmed = hex.trim()
  const value = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed

  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(value)) {
    throw new Error(`Invalid hex color: ${hex}`)
  }

  if (value.length === 3) {
    return value
      .split("")
      .map((char) => char + char)
      .join("")
      .toUpperCase()
  }

  return value.toUpperCase()
}

function parseHexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = normalizeHex(hex)

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  }
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (channel: number) =>
    clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0").toUpperCase()

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function shiftChannel(channel: number, target: number, amount: number): number {
  return channel + (target - channel) * amount
}

export function lightenHexColor(hex: string, amount = 0.2): string {
  const safeAmount = clamp(amount, 0, 1)
  const { r, g, b } = parseHexToRgb(hex)

  return rgbToHex(
    shiftChannel(r, 255, safeAmount),
    shiftChannel(g, 255, safeAmount),
    shiftChannel(b, 255, safeAmount),
  )
}

export function darkenHexColor(hex: string, amount = 0.2): string {
  const safeAmount = clamp(amount, 0, 1)
  const { r, g, b } = parseHexToRgb(hex)

  return rgbToHex(
    shiftChannel(r, 0, safeAmount),
    shiftChannel(g, 0, safeAmount),
    shiftChannel(b, 0, safeAmount),
  )
}

export function getHexColorShades(hex: string, amount = 0.2): ColorShades {
  return {
    lighter: lightenHexColor(hex, amount),
    darker: darkenHexColor(hex, amount),
  }
}
