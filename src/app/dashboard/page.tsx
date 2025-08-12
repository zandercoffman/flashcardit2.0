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

import { data } from "./vocab"
import HomePage from "../../components/pages/home"
import React, { useState, useEffect } from "react"
import MainSet from "@/components/set/MainSet"
import Upload from "@/components/pages/upload"
import HelperPage from "@/components/pages/helper"
import { toast } from "sonner"

type mode = "normal" | "quiz" | null;
type page = "helper" | "dashboard" | "set" | "upload";

interface Set {
  title: string;
  vocab: [string, string][]; // Array of tuples with two strings
  extraInfo?: Array<string>
}


export default function Page() {

  const [CurrentPage, setcurpage] = useState<page>("dashboard");
  const [currentHeader, setCurrentHeader] = useState<string>("Dashboard");

  

  const [currentMode, setCurrentMode] = useState<mode>("normal");

  const [selected, setSeled] = useState<number | null>(null);
  const [pastSets, setPastSets] = useState<Set[]>([data as Set]);

  const [ttsEnabled, setTTSEnabled] = useState<boolean>(false);

  const getRidOfSet = (index: number) => {
    setSeled(null);

    setTimeout(() => {
      setPastSets(prevSets => prevSets.filter((_, i) => i !== index));
    }, 100);
  }

  const addSet = (newSet: Set) => {
    setPastSets(prevSets => [...prevSets, newSet]);
    toast(`${newSet.title} has been successfully been added to your vocab list!`)
  }

  useEffect(() => {
    if (CurrentPage == "set")
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
        setSeled={setSeled} />
      <SidebarInset>
        <SiteHeader
          currentHeader={currentHeader} currentPage={CurrentPage} setTTSEnabled={setTTSEnabled}
          currentMode={currentMode} setCurrentMode={function (value: string): void {
            setCurrentMode(value as mode)
          }} />
        <div className="flex flex-1 flex-col p-5">
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
  addSet: Function;
}) {
  return (
    <div className="flex flex-1 flex-col p-5">
      {CurrentPage === "set" ? (
        <MainSet mode={currentMode} currentSet={pastSets[selected || 0]} />
      ) : CurrentPage === "upload" ? <Upload addSet={addSet}/> : 
      CurrentPage === "helper" ? <HelperPage/> : 
      CurrentPage === "dashboard" ? <HomePage/> : <></> }


    </div>
  );
}
