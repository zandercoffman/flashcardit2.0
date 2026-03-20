"use client"

import { useMemo } from "react"
import { Share2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

type SetNativeShareProps = {
  setId?: string
  setTitle: string
  triggerClassName?: string
  compact?: boolean
}

export default function SetNativeShare({
  setId,
  setTitle,
  triggerClassName,
  compact = false,
}: SetNativeShareProps) {
  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return ""
    if (!setId) return window.location.href
    return `${window.location.origin}/${setId}`
  }, [setId])

  const copyLinkToClipboard = async () => {
    if (!shareUrl) {
      toast.error("Unable to share this set right now")
      return
    }

    try {
      await navigator.clipboard.writeText(shareUrl)
      toast.success("Link copied to clipboard")
    } catch {
      toast.error("Sharing is not supported on this device")
    }
  }

  const onShare = async () => {
    if (!shareUrl) {
      toast.error("Unable to share this set right now")
      return
    }

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: setTitle,
          text: `Study ${setTitle} on Flashcardit`,
          url: shareUrl,
        })
        return
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return
        }
      }
    }

    await copyLinkToClipboard()
  }

  return (
    <Button
      variant="ghost"
      size={compact ? "icon" : "sm"}
      className={triggerClassName || "rounded-xl"}
      onClick={onShare}
      aria-label={`Share ${setTitle}`}
    >
      <Share2 className="size-5" />
      {!compact && <span className="ml-2">Share</span>}
    </Button>
  )
}
