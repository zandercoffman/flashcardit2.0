import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
type mode = "normal" | "quiz" | null;
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { BookCheck, BookOpen, Megaphone, Milestone, Volume2 } from "lucide-react";


import { VolumeX } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

import { CalendarIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react";
import { languages, Language } from "@/app/dashboard/languages";

export function SiteHeader({
  currentHeader,
  currentMode,
  currentPage,
  setTTSEnabled,
  setCurrentMode
}: {
  currentHeader: string,
  currentMode: mode,
  currentPage: any | "set"
  setTTSEnabled: Function
  setCurrentMode: (value: string) => void
}) {

  const [thisMode, setThisMode] = useState<mode>(currentMode);
  const [useTTS, willSetSETTTS] = useState<boolean>(false);

  useEffect(() => {
    setThisMode(currentMode);
  }, [currentMode])

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        {
          currentPage == "set" && <>
            <div className="flex flex-row gap-2 ">
              <Select value={currentMode || "normal"} onValueChange={setCurrentMode}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Select a mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup >
                    <SelectLabel>Modes</SelectLabel>
                    <SelectItem value="normal" >
                      <div className="flex justify-start items-center gap-4 ">
                        <BookOpen className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-sm font-semibold">Study</h4>
                        </div>
                      </div>
                    </SelectItem>

                    <SelectItem value="quiz">
                      <div className="flex justify-start items-center gap-4 ">
                        <BookCheck className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-sm font-semibold">Quiz</h4>
                        </div>
                      </div>
                    </SelectItem>


                  </SelectGroup>
                </SelectContent>
              </Select>
              <Toggle aria-label="Toggle italic" pressed={useTTS} onPressedChange={(value: boolean) => {
                willSetSETTTS(value);
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("ttsEnabled", JSON.stringify(value));
                }
              }}>
                {!useTTS ?
                  <div className="flex justify-start items-center gap-4 ">
                    <VolumeX className="size-4 lg:size-6" />
                  </div> :
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex justify-start items-center gap-4 ">
                        <Volume2 className="size-4 lg:size-6" />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 mt-4 h-[80vh] flex flex-col gap-4 ">
                      <div className="flex justify-between gap-4">
                        <Megaphone className="size-12" />
                        <div className="space-y-1">
                          <Select onValueChange={(value) => {
                            if (typeof window !== null) {
                              sessionStorage.setItem("Voice1", `${value}`)
                            }
                          }}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select a voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Voices</SelectLabel>
                                <SelectItem value="en-US">Google US English - en-US</SelectItem>
                                <SelectItem value="en-GB">Google UK English Female - en-GB</SelectItem>
                                <SelectItem value="es-ES">Google español - es-ES</SelectItem>
                                <SelectItem value="es-US">Google español de Estados Unidos - es-US</SelectItem>
                                <SelectItem value="de-DE">Google Deutsch - de-DE</SelectItem>
                                <SelectItem value="fr-FR">Google français - fr-FR</SelectItem>
                                <SelectItem value="hi-IN">Google हिन्दी - hi-IN</SelectItem>
                                <SelectItem value="id-ID">Google Bahasa Indonesia - id-ID</SelectItem>
                                <SelectItem value="it-IT">Google italiano - it-IT</SelectItem>
                                <SelectItem value="ja-JP">Google 日本語 - ja-JP</SelectItem>
                                <SelectItem value="ko-KR">Google 한국의 - ko-KR</SelectItem>
                                <SelectItem value="nl-NL">Google Nederlands - nl-NL</SelectItem>
                                <SelectItem value="pl-PL">Google polski - pl-PL</SelectItem>
                                <SelectItem value="pt-BR">Google português do Brasil - pt-BR</SelectItem>
                                <SelectItem value="ru-RU">Google русский - ru-RU</SelectItem>
                                <SelectItem value="zh-CN">Google 普通话（中国大陆） - zh-CN</SelectItem>
                                <SelectItem value="zh-HK">Google 粵語（香港） - zh-HK</SelectItem>
                                <SelectItem value="zh-TW">Google 國語（臺灣） - zh-TW</SelectItem>
                              </SelectGroup>

                            </SelectContent>
                          </Select>
                          <div className="text-muted-foreground text-xs">
                            This will be the voice for the <span className="text-white font-bold">first</span> side of the card.
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between gap-4">
                        <Megaphone className="size-12" />
                        <div className="space-y-1">
                          <Select onValueChange={(value) => {
                            if (typeof window !== null) {
                              sessionStorage.setItem("Voice2", `${value}`)
                            }
                          }}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select a voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Voices</SelectLabel>
                                <SelectItem value="en-US">Google US English - en-US</SelectItem>
                                <SelectItem value="en-GB">Google UK English Female - en-GB</SelectItem>
                                <SelectItem value="es-ES">Google español - es-ES</SelectItem>
                                <SelectItem value="es-US">Google español de Estados Unidos - es-US</SelectItem>
                                <SelectItem value="de-DE">Google Deutsch - de-DE</SelectItem>
                                <SelectItem value="fr-FR">Google français - fr-FR</SelectItem>
                                <SelectItem value="hi-IN">Google हिन्दी - hi-IN</SelectItem>
                                <SelectItem value="id-ID">Google Bahasa Indonesia - id-ID</SelectItem>
                                <SelectItem value="it-IT">Google italiano - it-IT</SelectItem>
                                <SelectItem value="ja-JP">Google 日本語 - ja-JP</SelectItem>
                                <SelectItem value="ko-KR">Google 한국의 - ko-KR</SelectItem>
                                <SelectItem value="nl-NL">Google Nederlands - nl-NL</SelectItem>
                                <SelectItem value="pl-PL">Google polski - pl-PL</SelectItem>
                                <SelectItem value="pt-BR">Google português do Brasil - pt-BR</SelectItem>
                                <SelectItem value="ru-RU">Google русский - ru-RU</SelectItem>
                                <SelectItem value="zh-CN">Google 普通话（中国大陆） - zh-CN</SelectItem>
                                <SelectItem value="zh-HK">Google 粵語（香港） - zh-HK</SelectItem>
                                <SelectItem value="zh-TW">Google 國語（臺灣） - zh-TW</SelectItem>
                              </SelectGroup>

                            </SelectContent>
                          </Select>
                          <div className="text-muted-foreground text-xs">
                            This will be the voice for the <span className="text-white font-bold">second</span> side of the card.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>}

              </Toggle>
            </div>
          </>
        }
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{currentHeader}</h1>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
