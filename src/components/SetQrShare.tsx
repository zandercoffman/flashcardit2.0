"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, QrCode, Sparkles } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { toast } from "sonner"

type SetQrShareProps = {
  setId?: string
  setTitle: string
  triggerClassName?: string
  compact?: boolean
}

function slugifyForFileName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export default function SetQrShare({
  setId,
  setTitle,
  triggerClassName,
  compact = false,
}: SetQrShareProps) {
  const [open, setOpen] = useState(false)
  const [qrDataUrl, setQrDataUrl] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return ""
    if (!setId) return window.location.href
    return `${window.location.origin}/${setId}`
  }, [setId])

  useEffect(() => {
    let isMounted = true

    const generateQr = async () => {
      if (!open || !shareUrl) return
      setIsGenerating(true)

      try {
        const QRCode = await import("qrcode")
        const result = await QRCode.toDataURL(shareUrl, {
          width: 1024,
          margin: 2,
          errorCorrectionLevel: "H",
          color: {
            dark: "#111111",
            light: "#FFFFFF",
          },
        })
        if (isMounted) {
          setQrDataUrl(result)
        }
      } catch {
        toast.error("Unable to generate QR code")
      } finally {
        if (isMounted) {
          setIsGenerating(false)
        }
      }
    }

    generateQr()

    return () => {
      isMounted = false
    }
  }, [open, shareUrl])

  const downloadQrPng = () => {
    if (!qrDataUrl) return
    const anchor = document.createElement("a")
    anchor.href = qrDataUrl
    anchor.download = `${slugifyForFileName(setTitle) || "flashcard-set"}-qr.png`
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={compact ? "icon" : "sm"}
          className={triggerClassName || "rounded-xl"}
          aria-label={`Share ${setTitle} with QR code`}
        >
          <QrCode className="size-5" />
          {!compact && <span className="ml-2">QR</span>}
        </Button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden rounded-3xl border-border/60 bg-background/95 p-0 backdrop-blur-xl sm:max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? "qr-open" : "qr-close"}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="p-5"
          >
            <DialogHeader className="space-y-1">
              <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
                <Sparkles className="size-4 text-emerald-500" />
                Share This Flashcard Set
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 rounded-2xl border border-border/60 bg-muted/20 p-4">
              <p className="mb-3 text-sm font-medium text-foreground/80 line-clamp-2">{setTitle}</p>

              <div className="mx-auto flex size-[220px] items-center justify-center rounded-2xl border border-border/50 bg-white p-3 shadow-sm">
                {isGenerating || !qrDataUrl ? (
                  <div className="size-8 rounded-full border-2 border-foreground/20 border-t-foreground/70 animate-spin" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={qrDataUrl} alt={`QR code for ${setTitle}`} className="size-full rounded-lg" />
                )}
              </div>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Scan to open this set instantly on another device.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={downloadQrPng}
                disabled={!qrDataUrl || isGenerating}
              >
                <Download className="size-4" />
                Download PNG
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
