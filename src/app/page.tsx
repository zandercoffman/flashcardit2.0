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
type page = "helper" | "dashboard" | "set" | "upload" | "NoteTaker/DocumentViewer";

interface DashboardPageProps {
  defaultImportedSetID: string;
}

interface Set {
  title: string;
  vocab: [string, string][];
}

interface AllSetsInterface { id: string, set: Set }

export default function Dashboard({ defaultImportedSetID }: DashboardPageProps) {
  const [CurrentPage, setcurpage] = useState<page>("dashboard");
  const [currentHeader, setCurrentHeader] = useState<string>("Dashboard");

  function formatPageName(page: string) {
    const pageMap = {
      set: "Set",
      upload: "Create",
      helper: "Helper",
      dashboard: "Dashboard",
      quickcreate: "Quick Create",
      notetakerdocumentviewer: "Note Taker / Document Viewer"
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
        const foundSet = AllSets.find(set => set.id === defaultImportedSetID);
        if (foundSet && !(window.location.pathname == "/")) {
          const newIndex = await addSet(foundSet.set, false);
          toast.success(`Successfully found ${foundSet.set.title}. Happy Studying! (PS. I know you will do well!)`);
          setcurpage("set");
          setCurrentHeader(foundSet.set.title);
          setCurrentMode("normal");
          setSeled(newIndex); // wait until set is added to pastSets
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
              className="w-full h-full object-cover z-8 opacity-60 blur-lg dark:opacity-30 filter dark:blur-md scale-100"
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
            <MainScreen
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
    <div className={`flex flex-1 flex-col ${CurrentPage !== "NoteTaker/DocumentViewer" && "md:p-5 pt-2"}`}>
      {CurrentPage === "set" && selected !== null && pastSets[selected] ? (
        <MainSet mode={currentMode} currentSet={pastSets[selected]} extra={extra} />
      ) : CurrentPage === "upload" ? <Create addSet={addSet} /> :
        CurrentPage === "helper" ? <HelperPage /> :
          CurrentPage === "NoteTaker/DocumentViewer".toLowerCase() ? <NoteDocumentTaker /> :
            CurrentPage === "dashboard" ? <HomePage allSets={setsLoading ? undefined : pastSets} addSet={addSet} setMode={setMode} setSet={setSet} /> :
              <></>}
    </div>
  );
}
