/* eslint-disable */

"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
import { AllSetsInterface, mode, Set } from "@/lib/AllSets"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AudioWaveform, Bomb, BookCheck, BookOpen, Ellipsis, Handshake, Image, LandPlot, LayoutTemplate, Library, Megaphone, Milestone, Music, PackageOpen, PencilLine, Settings, Settings2, Sparkles, Volume, Volume2 } from "lucide-react";


import { VolumeX } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

import { CalendarIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Switch } from "./ui/switch";
import { ComboboxDemo } from "./pages/compOfPages/combobox";
import { TTSSettings } from "./pages/compOfPages/TTSSettings";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import StepsHeader from "./StepsHeader"
import { steps } from "@/lib/studyPlan"
import MusicButton, { Video } from "./MusicButton"
import { BetaBadge2, InProgressBadge } from "./CustomBadges"
import ClockButton from "./ClockButton"
import { AnimatePresence, motion } from "framer-motion"
import ChatGPTButton from "./OpenInChatGPT"
import { Badge } from "./ui/badge"
import { getShortNameForSet, getShortNameFromSetFromId, isSetInAnyList, isSetInList } from "@/lib/AllLists"
import { AllSets } from "@/lib/AllSets"
import SetQrShare from "./SetQrShare"
import { AllCustomModes } from "@/lib/customModes/interface"
import { darkenHexColor, lightenHexColor } from "@/lib/color"


export function SiteHeader({
  currentHeader,
  currentMode,
  currentPage,
  setTTSEnabled,
  setCurrentMode,
  curStudyPathN,
  setCurrentVideo,
  currentSet,
  initialListId
}: {
  currentHeader: string,
  currentMode: mode,
  currentPage: string | "set"
  setTTSEnabled: Function
  setCurrentMode: (value: string) => void
  curStudyPathN: number
  setCurrentVideo: (video: Video | null) => void
  currentSet: Set | undefined
  initialListId?: string
}) {

  const [thisMode, setThisMode] = useState<mode>(currentMode);
  const [useTTS, willSetSETTTS] = useState<boolean>(false);

  const [voices, setVoices] = useState<any>([]);

  

  useEffect(() => {
    const loadVoices = () => {
      const synthVoices = window.speechSynthesis.getVoices();
      setVoices(synthVoices);
    };

    // Some browsers might not have voices loaded immediately
    if (typeof window !== 'undefined') {
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
      }
      loadVoices();
    }
  }, []);

  useEffect(() => {
    setThisMode(currentMode);
  }, [currentMode])

  const { isMobile } = useSidebar()

  const [isExpandedSidebar, setIsExpandedSidebar] = useState<boolean>(false); // false will be the default view
  const [isHoverChatGPT, setIsHoverChatGPT] = useState<boolean>(false);
  const currentSetId = currentSet
    ? AllSets.find((setObj) => setObj.set.title === currentSet.title)?.id
    : undefined;

    const matchedCustomMode = AllCustomModes.find((m) => m.id === currentSetId)


  return (
    <header className="flex min-h-(--header-height) shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-sm transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className={`flex w-full items-center px-2 sm:px-4 lg:gap-3 lg:px-6 ${isMobile ? "flex-wrap gap-y-2 py-3" : "py-2"}`}>
        <SidebarTrigger className="-ml-1 text-lg hover:bg-accent rounded-md transition-colors" onClick={() => setIsExpandedSidebar(!isExpandedSidebar)} />
        {!isMobile && <MusicButton setCurrentVideo={setCurrentVideo} />}
        {!isMobile && <ClockButton />}
        {!isMobile && currentSet && currentMode !== "custommode" && <ChatGPTButton currentSet={currentSet} />}

        {
          currentPage == "set" && !isMobile && <>
            <div className="flex flex-row gap-2">
              <Select value={currentMode || "normal"} onValueChange={setCurrentMode}>
                <SelectTrigger className="py-6  flex flex-row items-center pr-2 justify-center overflow-hidden w-full rounded-3xl bg-background/50 hover:bg-background/70 transition-colors">
                  <SelectValue placeholder="Select a mode" className="flex !flex-row " />
                </SelectTrigger>
                <SelectContent className="rounded-xl translate-y-[3rem] px-2 bg-background/95 backdrop-blur-xl border"  >
                  <SelectGroup >
                    <SelectLabel>Modes</SelectLabel>

                    <SelectItem value="normal" >
                      <div className="flex justify-start items-center gap-4 ">
                        <BookOpen className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Flashcards</h4>
                        </div>
                      </div>
                    </SelectItem>

                    {matchedCustomMode && (() => {
                      const ModeIcon = matchedCustomMode.miniShowcaseIcon
                      return (
                        <SelectItem
                          value="custommode"
                          className="group scale-[95%] hover:scale-[100%] transition-all relative my-2 overflow-hidden rounded-4xl border-2 px-3 py-4 shadow-[0_2px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition hover:translate-y-[-1px] hover:shadow-[0_5px_30px_rgba(0,0,0,0.22)]"
                          style={{
                            backgroundColor: matchedCustomMode.miniShowcaseColor,
                            color: matchedCustomMode.miniShowcaseTextColor,
                            backgroundImage:
                              "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04))",
                            backdropFilter: "blur(14px)",
                            WebkitBackdropFilter: "blur(14px)",
                            borderStyle: "solid",
                            borderWidth: "2px",
                            borderColor: darkenHexColor(matchedCustomMode.miniShowcaseColor, 0.2)
                          }}
                        >
                          <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_25%)]" />
                          <div className="relative flex justify-start items-center translate-x-[3px] gap-4">
                            <ModeIcon
                              className={`size-4 lg:size-6 color-[${matchedCustomMode.miniShowcaseTextColor}]`}
                            />
                            <div className=" w-full">
                              <h4 className="text-xl md:text-base font-semibold flex flex-col ">
                                {matchedCustomMode.miniShowcaseText}
                                
                              </h4> for
                              <Badge variant={"outline"} className="gradient-border-badge ml-1">{getShortNameFromSetFromId(currentSetId ?? "")}</Badge>
                            </div>
                          </div>
                        </SelectItem>
                      )
                    })()}

                    {
                      !matchedCustomMode && currentSetId !== undefined && isSetInAnyList(currentSetId) && <SelectItem value="practicetest">
                        <div className="flex justify-start items-center gap-4 ">
                          <Library className="size-4 lg:size-6" />
                          <div className=" w-full">
                            <h4 className="text-xl md:text-base font-semibold flex flex-col ">Practice Tests <Badge variant={"outline"} className="gradient-border-badge">for {getShortNameFromSetFromId(currentSetId ?? "")}</Badge></h4>
                          </div>
                        </div>
                      </SelectItem>
                    }

                    {
                      currentSetId !== undefined && isSetInAnyList(currentSetId) && <SelectItem value="resources">
                        <div className="flex justify-start items-center gap-4 ">
                          <PackageOpen className="size-4 lg:size-6" />
                          <div className=" w-full">
                            <h4 className="text-xl md:text-base font-semibold flex flex-col ">Resources <Badge variant={"outline"} className="gradient-border-badge">for {getShortNameFromSetFromId(currentSetId ?? "")}</Badge></h4>
                          </div>
                        </div>
                      </SelectItem>
                    }

                    

                    <SelectItem value="studyplan">
                      <div className="flex justify-start items-center gap-4 ">
                        <LandPlot className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base flex flex-col font-semibold">Study Path <BetaBadge2 /></h4>
                        </div>
                      </div>
                    </SelectItem>

                    {
                      /**<SelectItem value="aichat">
                      <div className="flex justify-start items-center gap-4 ">
                        <Sparkles className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base flex flex-col font-semibold">AI Chat <InProgressBadge /></h4>
                        </div>
                      </div>
                    </SelectItem> */
                    }

                    <SelectItem value="quiz">
                      <div className="flex justify-start items-center gap-4 ">
                        <BookCheck className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Quiz</h4>
                        </div>
                      </div>
                    </SelectItem>

                    {/** <SelectItem value="buddyguess">
                      <div className="flex justify-start items-center gap-4 ">
                        <Handshake className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Buddy Guess</h4>
                        </div>
                      </div>
                    </SelectItem> */}

                    <SelectItem value="matching">
                      <div className="flex justify-start items-center gap-4 ">
                        <LayoutTemplate className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Matching</h4>
                        </div>
                      </div>
                    </SelectItem>

                    <SelectItem value="speakit">
                      <div className="flex justify-start items-center gap-4 ">
                        <AudioWaveform className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Speak It</h4>
                        </div>
                      </div>
                    </SelectItem>

                    <SelectItem value="bomba">
                      <div className="flex justify-start items-center gap-4 ">
                        <Bomb className="size-4 lg:size-6" />
                        <div className=" w-full">
                          <h4 className="text-xl md:text-base font-semibold">Bomba</h4>
                        </div>
                      </div>
                    </SelectItem>

                    {/**
                 * <SelectItem value="sentencecreator">
                  <div className="flex justify-start items-center gap-4 ">
                    <PencilLine className="size-4 lg:size-6" />
                    <div className=" w-full">
                      <h4 className="text-sm font-semibold">Sentence Creator</h4>
                    </div>
                  </div>
                </SelectItem>
                 */}

                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </>
        }



        {!isMobile && (
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
        )}

        {
          !isMobile && currentSetId && isSetInList(initialListId ?? "", currentSetId) && <Badge className="ml-2" variant={"outline"}>
            {getShortNameForSet(initialListId ?? "")}
          </Badge>
        }

        <h1 className={`font-semibold text-center md:text-left md:mx-0 ${isMobile ? "order-3 w-full text-sm truncate" : "text-base"}`}>
          {!(thisMode === "studyplan" && isExpandedSidebar) ? currentHeader : currentHeader.substring(0, 6) + "..."}
        </h1>


        <div className={`ml-auto flex items-center gap-2 ${isMobile ? "w-auto" : ""}`}>
          {
            isMobile && currentPage == "set" && currentSet && <SetQrShare setId={currentSetId} setTitle={currentSet.title} compact triggerClassName="rounded-lg" />
          }
          {
            isMobile && currentPage == "set" && currentMode !== "custommode" && currentSet && <ChatGPTButton currentSet={currentSet} />
          }
          {
            isMobile && currentPage == "set" && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-lg">
                    <Ellipsis className="size-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Study Settings</DialogTitle>
                  <div className="flex flex-col gap-4 mt-4">
                    <div>
                      <p className="font-semibold text-sm mb-2">Study Mode</p>
                      <Select value={currentMode || "normal"} onValueChange={setCurrentMode}>
                        <SelectTrigger className="rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                          <SelectValue placeholder="Select a mode" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl px-2 bg-background/95 backdrop-blur-xl border">
                          <SelectGroup>
                            <SelectLabel>Modes</SelectLabel>

                            <SelectItem value="normal" >
                              <div className="flex justify-start items-center gap-4 ">
                                <BookOpen className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base font-semibold">Flashcards</h4>
                                </div>
                              </div>
                            </SelectItem>

                            {
                              currentSetId !== undefined && isSetInAnyList(currentSetId) && <SelectItem value="resources">
                                <div className="flex justify-start items-center gap-4 ">
                                  <PackageOpen className="size-4 lg:size-6" />
                                  <div className=" w-full">
                                    <h4 className="text-xl md:text-base font-semibold flex flex-col ">Resources <Badge variant={"outline"} className="gradient-border-badge">for {getShortNameFromSetFromId(currentSetId ?? "")}</Badge></h4>
                                  </div>
                                </div>
                              </SelectItem>
                            }

                            {
                              currentSetId !== undefined && isSetInAnyList(currentSetId) && <SelectItem value="resources">
                                <div className="flex justify-start items-center gap-4 ">
                                  <PackageOpen className="size-4 lg:size-6" />
                                  <div className=" w-full">
                                    <h4 className="text-xl md:text-base font-semibold flex flex-col ">Resources <Badge variant={"outline"} className="gradient-border-badge">for {getShortNameFromSetFromId(currentSetId ?? "")}</Badge></h4>
                                  </div>
                                </div>
                              </SelectItem>
                            }

                            <SelectItem value="studyplan">
                              <div className="flex justify-start items-center gap-4 ">
                                <LandPlot className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base flex flex-col font-semibold">Study Path <BetaBadge2 /></h4>
                                </div>
                              </div>
                            </SelectItem>

                            {
                              /**<SelectItem value="aichat">
                              <div className="flex justify-start items-center gap-4 ">
                                <Sparkles className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base flex flex-col font-semibold">AI Chat <InProgressBadge /></h4>
                                </div>
                              </div>
                            </SelectItem> */
                            }

                            <SelectItem value="quiz">
                              <div className="flex justify-start items-center gap-4 ">
                                <BookCheck className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base font-semibold">Quiz</h4>
                                </div>
                              </div>
                            </SelectItem>

                            <SelectItem value="matching">
                              <div className="flex justify-start items-center gap-4 ">
                                <LayoutTemplate className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base font-semibold">Matching</h4>
                                </div>
                              </div>
                            </SelectItem>

                            <SelectItem value="speakit">
                              <div className="flex justify-start items-center gap-4 ">
                                <AudioWaveform className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base font-semibold">Speak It</h4>
                                </div>
                              </div>
                            </SelectItem>

                            <SelectItem value="bomba">
                              <div className="flex justify-start items-center gap-4 ">
                                <Bomb className="size-4 lg:size-6" />
                                <div className=" w-full">
                                  <h4 className="text-xl md:text-base font-semibold">Bomba</h4>
                                </div>
                              </div>
                            </SelectItem>

                            {/**
                       * <SelectItem value="sentencecreator">
                        <div className="flex justify-start items-center gap-4 ">
                          <PencilLine className="size-4 lg:size-6" />
                          <div className=" w-full">
                            <h4 className="text-sm font-semibold">Sentence Creator</h4>
                          </div>
                        </div>
                      </SelectItem>
                       */}

                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <Toggle aria-label="Toggle TTS" pressed={useTTS} onPressedChange={(value: boolean) => {
                        willSetSETTTS(value);
                        if (typeof window !== "undefined") {
                          sessionStorage.setItem("ttsEnabled", JSON.stringify(value));
                        }
                      }} className="rounded-lg">
                        <Settings2 className="size-5" />
                      </Toggle>
                      <span className="text-sm font-medium">TTS Settings</span>
                    </div>
                    {useTTS && (
                      <div className="border-t pt-4">
                        <TTSSettings
                          ttsEnabledKey="ttsEnabled"
                          firstVoiceKey="firstVoice"
                          secondVoiceKey="secondVoice"
                        />
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )
          }
          {
            !isMobile && currentMode === "studyplan" && <StepsHeader steps={steps} currentStep={curStudyPathN} isExpandedSidebar={isExpandedSidebar} />
          }
        </div>
      </div>
    </header>
  )
}
