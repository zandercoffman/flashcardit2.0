/* eslint-disable */
"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Video, defaultVideos } from "@/components/MusicButton"
import HomePage from "@/components/pages/home"
import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react"
import MainSet from "@/components/set/MainSet"
import Create from "@/components/pages/Create"
import HelperPage from "@/components/pages/helper"
import { toast } from "sonner"
import { AllSets } from "@/lib/AllSets"

import { mode } from "@/lib/AllSets"
import NoteDocumentTaker from "@/components/notetaker/page"
import AiChatPage from "@/components/AIChat/page"
import { AllLists, List } from "@/lib/AllLists"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
type page = "helper" | "dashboard" | "set" | "upload" | "Notes" | "aichat";

interface DashboardPageProps {
  defaultImportedSetID: string;
  typeOfPage: "list" | "set";
}

interface Set {
  title: string;
  vocab: [string, string][];
}

export const studyMotivationQuotes: string[] = [
  "Don't watch the clock; do what it does. Keep going.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Push yourself, because no one else is going to do it for you.",
  "The secret of getting ahead is getting started.",
  "Little by little, one travels far.",
  "Focus on progress, not perfection.",
  "Discipline is choosing between what you want now and what you want most.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "A year from now, you'll wish you had started today.",
  "Dreams don't work unless you do.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Don't wait for opportunity. Create it.",
  "Start where you are. Use what you have. Do what you can.",
  "Great things are done by a series of small things brought together.",
  "Motivation gets you started. Habit keeps you going.",
  "Procrastination is the enemy of success.",
  "Your future is created by what you do today, not tomorrow.",
  "The journey of a thousand miles begins with a single step.",
  "If it doesn't challenge you, it won't change you.",
  "Study while others are sleeping; work while others are loafing.",
  "Don't stop when you're tired; stop when you're done.",
  "Every accomplishment starts with the decision to try.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and love of what you are doing.",
  "Strive for progress, not perfection.",
  "Small daily improvements over time lead to stunning results.",
  "The best way to get something done is to begin.",
  "Success is built on consistency, not inspiration.",
  "When you feel like quitting, remember why you started.",
  "The expert in anything was once a beginner.",
  "Your dreams are worth the effort.",
  "It always seems impossible until it’s done.",
  "Work hard in silence, let success make the noise.",
  "Don’t let what you cannot do interfere with what you can do.",
  "Make each day your masterpiece.",
  "Start strong, finish stronger.",
  "The secret to getting ahead is starting before you’re ready.",
  "Energy and persistence conquer all things.",
  "You don’t have to be extreme, just consistent.",
  "Discipline is the bridge between goals and accomplishment.",
  "Study like a champion today, lead like a champion tomorrow.",
  "What you do today can improve all your tomorrows.",
  "Stay focused, stay humble, work hard.",
  "Consistency is what transforms average into excellence.",
  "Your education is a dress rehearsal for a life that is yours to lead.",
  "Don’t count the days, make the days count.",
  "Action is the foundational key to all success.",
  "When you feel overwhelmed, take one small step at a time.",
  "One step at a time is good walking.",
  "Focus on being productive instead of busy.",
  "The difference between ordinary and extraordinary is that little extra.",
  // Added 100 more
  "Success is not in what you have, but who you become.",
  "A little progress each day adds up to big results.",
  "Do something today that your future self will thank you for.",
  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
  "Great things never come from comfort zones.",
  "You don’t have to see the whole staircase, just take the first step.",
  "It’s not about having time. It’s about making time.",
  "Stop wishing, start doing.",
  "Small steps in the right direction can turn out to be the biggest step of your life.",
  "You are capable of more than you know.",
  "Consistency compounds into success.",
  "The secret to your future is hidden in your daily routine.",
  "Your dreams are only dreams until you take action.",
  "The only limit to your impact is your imagination and commitment.",
  "Be stronger than your strongest excuse.",
  "Don’t let fear of failure stop you from trying.",
  "You don’t find time. You make time.",
  "Every expert was once a beginner.",
  "Your effort today creates your reality tomorrow.",
  "Don’t let yesterday take up too much of today.",
  "Nothing will work unless you do.",
  "Do the hard work now, or regret it later.",
  "Excuses are the nails used to build a house of failure.",
  "Discipline is choosing between what you want now and what you want most.",
  "Be patient. Great things take time.",
  "Don’t just go through life, grow through life.",
  "Push harder than yesterday if you want a different tomorrow.",
  "The journey is the reward.",
  "Focus on what you can control.",
  "Every accomplishment starts with the desire to try.",
  "Fall seven times, stand up eight.",
  "Don’t limit your challenges. Challenge your limits.",
  "The key to success is to start before you are ready.",
  "Take pride in how far you’ve come and have faith in how far you can go.",
  "Action is the antidote to fear.",
  "Small efforts repeated consistently lead to big outcomes.",
  "Stop being afraid of what could go wrong and start being excited about what could go right.",
  "Your comfort zone is lovely, but nothing ever grows there.",
  "Every day is a chance to get better.",
  "Dream it. Wish it. Do it.",
  "Opportunities don’t happen. You create them.",
  "Don’t wait for motivation. Create it.",
  "The future depends on what you do today.",
  "Work hard, stay positive, and get up early. It’s the best part of the day.",
  "Be so good they can’t ignore you.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Success isn’t overnight. It’s when every day you get a little better than the day before.",
  "Your life does not get better by chance. It gets better by change.",
  "Do what you can with what you have, where you are.",
  "Nothing worth having comes easy.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Study now, shine later.",
  "Today’s struggles are the building blocks for tomorrow’s successes.",
  "Don’t stop until you’re proud.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "The key to success is consistency, not intensity.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Your dreams demand hustle.",
  "Great things take time and effort.",
  "Consistency is the mother of mastery.",
  "It always seems impossible until you do it.",
  "The distance between dreams and reality is called action.",
  "You are stronger than your distractions.",
  "Study now so you don’t struggle later.",
  "Discipline weighs ounces, regret weighs tons.",
  "Every morning is a new opportunity to improve yourself.",
  "You can do anything, but not everything.",
  "Motivation is what gets you started. Discipline is what keeps you going.",
  "Do what others won’t, so you can live like others can’t.",
  "The best way to predict your future is to create it.",
  "Small daily improvements are the key to staggering long-term results.",
  "Don’t let today be a wasted day.",
  "Your brain is a muscle. Train it.",
  "Be consistent. Small efforts over time yield big results.",
  "Success is built on focus and effort, not luck.",
  "The best investment you can make is in yourself.",
  "Every day is a chance to start anew.",
  "Your only limit is your mind.",
  "Discomfort is the currency of growth.",
  "Be relentless. Stay consistent.",
  "The most effective way to do it is to do it.",
  "Persistence guarantees that results are inevitable.",
  "Take it one day, one hour, one minute at a time.",
  "Motivation is fleeting. Habit is eternal.",
  "Don’t dream your life. Live your dreams.",
  "Your consistency will pay off more than your talent.",
  "Each day you study is a brick in the foundation of your future.",
  "Success is the sum of effort, persistence, and resilience.",
  "Focus on the small wins today, and the big victory comes tomorrow.",
  "Hard work compounds over time.",
  "The key to staying motivated is progress, no matter how small."
];


export interface AllSetsInterface { id: string, set: Set }

export default function Dashboard({ defaultImportedSetID, typeOfPage }: DashboardPageProps) {

  const [currentList, setCurrentList] = useState<List | null>(null);

  const [CurrentPage, setcurpage] = useState<page>("dashboard");
  const [currentHeader, setCurrentHeader] = useState<string>("Dashboard");

  function formatPageName(page: string) {
    const pageMap = {
      set: "Set",
      upload: "Create",
      helper: "Helper",
      dashboard: "Dashboard",
      quickcreate: "Quick Create",
      notetakerdocumentviewer: "Notes",
      aichat: "AI Chat"
    };

    return pageMap[page as keyof typeof pageMap] || page;
  }


  const [currentMode, setCurrentMode] = useState<mode>("normal");
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);



  const [selected, setSeled] = useState<number | null>(null);
  const [pastSets, setPastSets] = useState<Set[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const item = window.localStorage.getItem("sets");
      if (item) {
        const parsed = JSON.parse(item) as AllSetsInterface[];
        return parsed.map(s => s.set);
      }
      return [];
    } catch (error) {
      console.error("Failed to parse sets from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    setMode("normal")
  }, [selected])

  const [setsLoading, setSetsLoading] = useState(false);


  const [ttsEnabled, setTTSEnabled] = useState<boolean>(false);

  const dashboardRef = useRef<HTMLButtonElement>(null);

  const getRidOfSet = (index: number) => {
    const removedSet = pastSets[index];
    if (!removedSet) return;

    // Update component state first
    const newPastSets = pastSets.filter((_, i) => i !== index);
    setPastSets(newPastSets);

    // Update localStorage
    const existingSetsFromStorage = JSON.parse(localStorage.getItem("sets") || "[]") as AllSetsInterface[];
    const updatedSetsForStorage = existingSetsFromStorage.filter(item => item.set.title !== removedSet.title);
    localStorage.setItem("sets", JSON.stringify(updatedSetsForStorage));

    // Navigate UI
    setcurpage("dashboard");
    setCurrentHeader("Dashboard");
    setSeled(null);
    setCurrentMode("normal");

    toast.success(`Set "'${removedSet.title}'" has been deleted.`);
  }

  // START IMPM

  const addSet = (newSet: Set, isAutomatic: boolean = false): Promise<number> => {

    //Going to add this set to localStorage if it not is in it already
    const addToLocalStorage = async () => {
      const existingSets = JSON.parse(localStorage.getItem("sets") || "[]") as AllSetsInterface[];
      if (!existingSets) {
        //Setup localStoragea
        localStorage.setItem("sets", JSON.stringify([newSet]));
      } else { //Add to here if there is already the set in the existingSets, don't add it, otherwise add it
        const foundSet = existingSets.find(set => set.set.title === newSet.title);
        if (!foundSet) {
          existingSets.push({ id: crypto.randomUUID(), set: newSet } as AllSetsInterface);
          localStorage.setItem("sets", JSON.stringify(existingSets));
        } else {
          toast.error(`'${newSet.title}' is already in your vocab list!`);
        }

      }
      //Then, reset localStorage at sets to existingSets once again
      localStorage.setItem("sets", JSON.stringify(existingSets));

    }

    if (!isAutomatic) {
      addToLocalStorage();
    }


    return new Promise(resolve => {
      setPastSets(prevSets => {
        const updatedSets = [...prevSets, newSet];
        resolve(updatedSets.length - 1); // return new index
        return updatedSets;
      });

      toast(`'${newSet.title}' has been successfully been added to your vocab list!`);
      if (dashboardRef?.current) {
        dashboardRef.current.click();
      }

    });
  };
  const setMode = (mode: mode) => {
    setCurrentMode(mode)
  }

  const setSet = (idx: number) => {
    setSeled(idx);
    setcurpage("set")
  }

  //STAT IMPM

  useEffect(() => {
    const process = async () => {
      if (defaultImportedSetID) {
        if (typeOfPage === "set") {
          const foundSet = AllSets.find(set => set.id === defaultImportedSetID);
          if (foundSet && !(window.location.pathname == "/")) {
            const newIndex = await addSet(foundSet.set, false);
            toast.success(`Successfully found ${foundSet.set.title}. Happy Studying! (PS. I know you will do well!)`, {
              description: <div className="mt-2 text-xs">
                &apos;{studyMotivationQuotes[Math.floor(Math.random() * studyMotivationQuotes.length)]}&apos;
              </div>,
              duration: 8000
            });
            setcurpage("set");
            setCurrentHeader(foundSet.set.title);
            setCurrentMode("normal");
            setSeled(newIndex); // wait until set is added to pastSets
          }
        } else if (typeOfPage === "list") {
          const foundList = AllLists.find(list => list.id === defaultImportedSetID);
          if (foundList) setCurrentList(foundList);
        }
      }

    };
    process();
  }, [defaultImportedSetID]);

  useEffect(() => {
    document.title = formatPageName(CurrentPage) || "Page";
  }, [CurrentPage])

  //START STUDY MODE TRACKER

  const [curStudyPathN, setCurStudyPathN] = useState<number>(0);

  const getYouTubeThumbnail = (link: string) => {
    try {
      const url = new URL(link)
      const id = url.searchParams.get("v")
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ""
    } catch {
      return ""
    }
  }

  //END STUDY MODE TRACKER

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
      className="overflow-hidden"
    >
      <AppSidebar
        variant="inset"
        setcurpage={setcurpage}
        setCurrentHeader={setCurrentHeader}
        pastSets={pastSets}
        dashRef={dashboardRef}
        setSeled={setSeled}
        getRidOfSet={getRidOfSet}
        currentVideo={currentVideo} />
      <SidebarInset>
        {currentVideo && (
          <div className="fixed inset-0 z-8 pointer-events-none">
            <img
              src={getYouTubeThumbnail(currentVideo.link)}
              className="w-full h-full object-cover z-8 opacity-10 blur-lg dark:opacity-30 filter dark:blur-md scale-100"
              style={{ border: 'none' }}
            />
          </div>
        )}
        <div className="relative z-10">
          <SiteHeader
            currentHeader={currentHeader} currentPage={CurrentPage} setTTSEnabled={setTTSEnabled}
            currentMode={currentMode} setCurrentMode={function (value: string): void {
              setCurrentMode(value as mode)
            }}
            setCurrentVideo={setCurrentVideo}
            curStudyPathN={curStudyPathN} />
          <div className="flex flex-1 flex-col px-2">
            {
              currentList ? <ListScreen currentList={currentList} /> : <MainScreen
                selected={selected}
                CurrentPage={CurrentPage}
                pastSets={pastSets}
                currentMode={currentMode}
                addSet={addSet}
                setsLoading={setsLoading}
                setMode={setMode}
                setSet={setSet}
                extra={{
                  curStudyPathN: curStudyPathN,
                  setCurStudyPathN: setCurStudyPathN
                }}
              />
            }

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function MainScreen({
  selected,
  CurrentPage,
  pastSets,
  currentMode,
  addSet,
  setsLoading,
  setMode,
  setSet,
  extra
}: {
  selected: number | null;
  CurrentPage: page;
  pastSets: Set[];
  currentMode: mode;
  addSet: (set: Set, isAutomatic: boolean) => Promise<number>;
  setsLoading: boolean;
  setMode: (mode: mode) => void;
  setSet: (idx: number) => void;
  extra: {
    curStudyPathN: number
    setCurStudyPathN: Dispatch<SetStateAction<number>>
  }
}) {
  return (
    <div className={`flex flex-1 flex-col ${CurrentPage !== "Notes" && "md:p-5 pt-2"}`}>
      {CurrentPage === "set" && selected !== null && pastSets[selected] ? (
        <MainSet mode={currentMode} currentSet={pastSets[selected]} extra={extra} />
      ) : CurrentPage === "upload" ? <Create addSet={addSet} /> :
        CurrentPage === "helper" ? <HelperPage /> :
          CurrentPage === "Notes".toLowerCase() ? <NoteDocumentTaker /> :
            CurrentPage === "aichat" ? <AiChatPage /> :
              CurrentPage === "dashboard" ? <HomePage allSets={setsLoading ? undefined : pastSets} addSet={addSet} setMode={setMode} setSet={setSet} /> :
                <></>}
    </div>
  );
}

function ListScreen({ currentList }: { currentList: List }) {
  const Icon = currentList.icon;
  return (
    <ScrollArea className="p-4 h-[90vh] md:p-8 w-full mx-auto flex flex-col">
      <div className="flex flex-row gap-6 mb-8 w-[95%] mx-auto">
        <Icon size={64} className="my-auto"/>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">{currentList.title}</h1>
          <p className="mb-6">{currentList.description}</p>
        </div>
      </div>
      <div className="gap-2 w-full h-full w-[95%] mx-auto flex flex-col">
        {currentList.sets.map((setRef) => {
          const foundSet = AllSets.find(set => set.id === setRef.id);
          if (!foundSet) return null;
          const length = foundSet.set.vocab.length;

          return (
            <div key={setRef.id} className="w-full flex flex-row justify-between p-4 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl flex flex-row gap-2 font-semibold my-auto">
                {foundSet.set.title}
                <Badge variant={"outline"}>{length} {length > 1 ? "items" : "item"}</Badge>
              </h2>
              <Button
                className="mt-2 px-6 py-2 rounded-xl cursor-pointer"
                onClick={async () => {
                  // Logic to add set to pastSets and navigate to it
                }}
              >
                Study This Set
              </Button>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}