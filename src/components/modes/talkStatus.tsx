"use client"

import { useState } from "react"
import { Mic, MicOff } from "lucide-react"

interface TalkStatusProps {
  initialCanTalk?: boolean
  onStatusChange?: (canTalk: boolean) => void
}

export function TalkStatus({ initialCanTalk = true, onStatusChange }: TalkStatusProps) {
  const [canTalk, setCanTalk] = useState(initialCanTalk)

  const toggleStatus = () => {
    const newStatus = !canTalk
    setCanTalk(newStatus)
    onStatusChange?.(newStatus)
  }

  return (
    <div className=" z-50">
      <button
        className={`
          flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ease-in-out
          shadow-lg hover:shadow-xl
          ${initialCanTalk ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}
        `}
      >
        {/* Status Icon */}
        <div className="flex items-center justify-center">
          {initialCanTalk ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </div>

        {/* Status Text */}
        <span className="font-semibold text-sm">{initialCanTalk ? "You are talking." : "You are not talking."}</span>

        {/* Status Indicator Dot */}
        <div className={`w-2 h-2 rounded-full ${initialCanTalk ? "bg-white" : "bg-white"} animate-pulse`} />
      </button>
    </div>
  )
}
