/* eslint-disable */

"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
import { AllSetsInterface, mode, Set } from "@/lib/AllSets"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AudioWaveform, Bomb, BookCheck, BookOpen, Image, LandPlot, LayoutTemplate, Megaphone, Milestone, Music, PencilLine, Settings, Settings2, Sparkles, Volume, Volume2 } from "lucide-react";


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
import { useMobile } from "@/lib/useMobile";
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


export function SiteHeader({
  currentHeader,
  currentMode,
  currentPage,
  setTTSEnabled,
  setCurrentMode,
  curStudyPathN,
  setCurrentVideo,
  currentSet
}: {
  currentHeader: string,
  currentMode: mode,
  currentPage: string | "set"
  setTTSEnabled: Function
  setCurrentMode: (value: string) => void
  curStudyPathN: number
  setCurrentVideo: (video: Video | null) => void
  currentSet: Set | undefined
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

  const isMobile = useMobile();

  const [isExpandedSidebar, setIsExpandedSidebar] = useState<boolean>(false); // false will be the default view
  const [isHoverChatGPT, setIsHoverChatGPT] = useState<boolean>(false);


  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-lg" onClick={() => setIsExpandedSidebar(!isExpandedSidebar)} />
        <MusicButton setCurrentVideo={setCurrentVideo} />
        <ClockButton />
        {currentSet && <ChatGPTButton currentSet={currentSet}/>}

        {
          currentPage == "set" && <>
            {
              isMobile ? <>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Settings />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col gap-2 ">
                          <p>Current Mode</p>
                          <Select value={currentMode || "normal"} onValueChange={setCurrentMode}>
                            <SelectTrigger className="w-[150px]">
                              <SelectValue placeholder="Select a mode" />
                            </SelectTrigger>
                            <SelectContent className="!bg-transparent !backdrop-blur-md">
                              <SelectGroup >
                                <SelectLabel>Modes</SelectLabel>

                                <SelectItem value="normal" >
                                  <div className="flex justify-start items-center gap-4 ">
                                    <BookOpen className="size-4 lg:size-6" />
                                    <div className=" w-full">
                                      <h4 className="text-xl md:text-base font-semibold">FLashcards</h4>
                                    </div>
                                  </div>
                                </SelectItem>

                                <SelectItem value="quiz">
                                  <div className="flex justify-start items-center gap-4 ">
                                    <BookCheck className="size-4 lg:size-6" />
                                    <div className=" w-full">
                                      <h4 className="text-xl md:text-base font-semibold">Quiz</h4>
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

                                <SelectItem value="picturematch">
                                  <div className="flex justify-start items-center gap-4 ">
                                    <Image className="size-4 lg:size-6" />
                                    <div className=" w-full">
                                      <h4 className="text-xl md:text-base font-semibold">Picture Match</h4>
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
                          <Toggle aria-label="Toggle italic" pressed={useTTS} onPressedChange={(value: boolean) => {
                            willSetSETTTS(value);
                            if (typeof window !== "undefined") {
                              sessionStorage.setItem("ttsEnabled", JSON.stringify(value));
                            }
                          }}>
                            <Dialog>
                              <DialogTrigger>
                                <Settings2 className="size-4 lg:size-6" />
                              </DialogTrigger>
                              <DialogContent>
                                <DialogTitle>Settings</DialogTitle>
                                <div className="flex flex-col gap-2 mt-2">

                                  <TTSSettings
                                    ttsEnabledKey="ttsEnabled"
                                    firstVoiceKey="firstVoice"
                                    secondVoiceKey="secondVoice"
                                  />

                                </div>
                              </DialogContent>
                            </Dialog>

                          </Toggle>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </> : <>
                <div className="flex flex-row gap-2 ">
                  <Select value={currentMode || "normal"} onValueChange={setCurrentMode}>
                    <SelectTrigger className={`flex flex-row items-center justify-center overflow-hidden w-full rounded-2xl`}>
                      <SelectValue placeholder="Select a mode" className="flex !flex-row" />
                    </SelectTrigger>
                    <SelectContent className="rounded-3xl translate-y-[3rem] px-2 bg-transparent backdrop-blur-xl" >
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
              </>
            }
          </>
        }



        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base text-center md:text-left  md:mx-0 font-medium">
          {!(thisMode === "studyplan" && isExpandedSidebar) ? currentHeader : currentHeader.substring(0, 6) + "..."}
        </h1>


        <div className="ml-auto flex items-center gap-2">
          {
            currentMode === "studyplan" && <StepsHeader steps={steps} currentStep={curStudyPathN} isExpandedSidebar={isExpandedSidebar} />
          }
        </div>
      </div>
    </header>
  )
}
