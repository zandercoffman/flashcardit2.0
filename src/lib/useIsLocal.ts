// lib/useIsLocal.ts
import { useMemo } from "react"

export function useIsLocal(): boolean {
  return useMemo(() => {
    if (typeof window === "undefined") return false
    return window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
  }, [])
}
