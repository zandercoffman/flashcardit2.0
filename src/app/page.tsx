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

import HomePage from "@/components/pages/home"
import React, { useState, useEffect, useRef } from "react"
import MainSet from "@/components/set/MainSet"
import Upload from "@/components/pages/upload"
import HelperPage from "@/components/pages/helper"
import { toast } from "sonner"
import QuickCreate from "@/components/pages/QuickCreate"
import { AllSets } from "@/lib/AllSets"

type mode = "normal" | "quiz" | "speakit" | "picturematch" | null;
type page = "helper" | "dashboard" | "set" | "upload";

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
      upload: "Upload",
      helper: "Helper",
      dashboard: "Dashboard",
      quickcreate: "Quick Create",
    };
  
    return pageMap[page as keyof typeof pageMap] || page;
  }  
  

  const [currentMode, setCurrentMode] = useState<mode>("normal");

  const [selected, setSeled] = useState<number | null>(null);
  const [pastSets, setPastSets] = useState<Set[]>([]);

  const [ttsEnabled, setTTSEnabled] = useState<boolean>(false);

  const dashboardRef = useRef<HTMLButtonElement>(null);

  const getRidOfSet = (index: number) => {
    setSeled(null);

    setTimeout(() => {
      setPastSets(prevSets => prevSets.filter((_, i) => i !== index));
    }, 100);
  }

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
          toast.error(`${newSet.title} is already in your vocab list!`);
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

      toast(`${newSet.title} has been successfully been added to your vocab list!`);
      if (dashboardRef?.current) {
        dashboardRef.current.click();
      }

    });
  };

  useEffect(() => {
    const existingSets = JSON.parse(localStorage.getItem("sets") || "[]") as AllSetsInterface[];
    if (existingSets) {
      setPastSets(existingSets.map(set => set.set));
    }
  }, [])

  useEffect(() => {
    const process = async () => {
      if (defaultImportedSetID) {
        setTimeout(async () => {
          const foundSet = AllSets.find(set => set.id === defaultImportedSetID);
          if (foundSet && !(window.location.pathname == "/")) {
            const newIndex = await addSet(foundSet.set, false);
            toast.success(`Successfully found ${foundSet.set.title}. Happy Studying! (PS. I know you will do well!)`);
            setcurpage("set");
            setCurrentHeader(foundSet.set.title);
            setCurrentMode("normal");
            setSeled(newIndex); // wait until set is added to pastSets
          }
        }, 100); // Small delay
      }

    };
    process();
  }, [defaultImportedSetID, AllSets]); // Add defaultImportedSetID to the dependency array

  useEffect(() => {
    if (pastSets.length > 0 && typeof window !== null) {
      const lastIndex = pastSets.length - 1;

      setcurpage("set");
      setCurrentHeader(pastSets[lastIndex].title);
      setCurrentMode("normal");
      if (!(window.location.pathname == "/")) {
         setSeled(lastIndex);
      }
     
    }
  }, [pastSets]);

  useEffect(() => {
    document.title = formatPageName(CurrentPage) || "Page";
    if (selected != null && CurrentPage == "set")
      setSeled(null)
  }, [CurrentPage])

  

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar
        variant="inset"
        setcurpage={setcurpage}
        setCurrentHeader={setCurrentHeader}
        pastSets={pastSets}
        dashRef={dashboardRef}
        setSeled={setSeled} />
      <SidebarInset>
        <SiteHeader
          currentHeader={currentHeader} currentPage={CurrentPage} setTTSEnabled={setTTSEnabled}
          currentMode={currentMode} setCurrentMode={function (value: string): void {
            setCurrentMode(value as mode)
          }} />
        <div className="flex flex-1 flex-col md:p-5">
          <MainScreen
            selected={selected}
            CurrentPage={CurrentPage}
            pastSets={pastSets}
            currentMode={currentMode}
            addSet={addSet}
          />

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
  addSet
}: {
  selected: number | null;
  CurrentPage: page;
  pastSets: Set[];
  currentMode: mode;
  addSet: (set: Set, isAutomatic: boolean) => Promise<number>;
}) {
  return (
    <div className="flex flex-1 flex-col md:p-5 pt-5">
      {CurrentPage === "set" ? (
        <MainSet mode={currentMode} currentSet={pastSets[selected || 0]} />
      ) : CurrentPage === "upload" ? <Upload addSet={addSet} /> :
        CurrentPage === "helper" ? <HelperPage /> :
          CurrentPage === "dashboard" ? <HomePage allSets={pastSets} addSet={addSet}/> :
            CurrentPage === "quickcreate" ? <QuickCreate addSet={addSet} /> : <></>}


    </div>
  );
}

