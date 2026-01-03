/* eslint-disable */
"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookOpenText, FilePenLine, HandHelping, Info, LucideIcon, LucideProps, Sparkles } from "lucide-react"
import { CalendarIcon } from "lucide-react"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import HomePage from "@/components/pages/home"
import HelperPage from "@/components/pages/helper"
import { ScrollArea } from "./ui/scroll-area"
import NoteTaker from "./notetaker/page"
import { Badge } from "./ui/badge"
import AIChatPage from "./AIChat/page"
import Create from "./pages/Create"
import { ModeToggle } from "./mode-toggle"

type PageData = {
  title: string;
  page: React.FC;
  icon: LucideIcon;
};


interface Set {
  title: string;
  vocab: [string, string][]; // Array of tuples with two strings
  extraInfo?: Array<string>
}

var thisdata = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      page: HomePage,
      icon: IconDashboard,
    },
    {
      title: "Notes",
      page: NoteTaker,
      icon: FilePenLine
    },
    {
      title: "AI Chat",
      page: AIChatPage,
      icon: Sparkles,
    }
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Zander Coffman's Webpage",
      url: "https://zandercoffman.vercel.app",
      icon: IconUsers
    },
  ],
  documents: [] as Set[],
}


export function AppSidebar({ ...props }: any) {
  const sets = props.pastSets || [];

  return (
    <Sidebar collapsible="offcanvas" variant={props.variant} className="p-2  *:bg-transparent">
      <SidebarHeader className="my-4 mx-auto md:my-0 md:mx-0 bg-transparent z-22 p-2" >
        <SidebarMenu className="bg-transparent z-22">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-2"
            >

              <HoverCard>
                <HoverCardTrigger asChild >
                  <a href="'''
                  
                  '''"
                    className="flex flex-row relative translate-x-[-0.5rem] justify-center gap-2 align-center items-center w-min mr-2">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="my-auto translate-x-[0.3rem] text-black dark:text-white"
                    >
                      <rect
                        x="14"
                        y="10"
                        width="36"
                        height="26"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                      />
                      <rect
                        x="10"
                        y="18"
                        width="36"
                        height="26"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M28 22 L22 32 H28 L24 42 L36 28 H30 L34 22 Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>

                    <span className="text-2xl md:text-base font-extrabold my-auto translate-y-[-.25rem]">flashcardit</span>
                    <Badge className="translate-y-[-.25rem] rounded-xl font-extrabold px-2 pb-1 bg-transparent backdrop-blur-3xl border border-black/50 dark:border-white/20" variant={"secondary"}>.vercel.app</Badge>
                    <Info className="translate-y-[-.25rem]" size={14} />
                  </a>

                </HoverCardTrigger>
                <HoverCardContent className="w-100 rounded-2xl ml-2 bg-transparent border border-white/20 backdrop-blur-3xl" side="right" align="start">
                  <div className="flex w-full justify-between gap-4">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="my-auto translate-x-[0.3rem] text-black dark:text-white"
                    >
                      <rect
                        x="14"
                        y="10"
                        width="36"
                        height="26"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                        opacity="0.4"
                      />
                      <rect
                        x="10"
                        y="18"
                        width="36"
                        height="26"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M28 22 L22 32 H28 L24 42 L36 28 H30 L34 22 Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="space-y-1 w-[90%]">
                      <h4 className="text-sm font-extrabold">flashcardit.vercel.app</h4>
                      <p className="text-sm">
                        The AI-powered flashcard app to boost your learning and retention. Filled with modern features to enhance your study sessions. Modes like Spaced Repetition, Matching, and Flashcards.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined August 29th, 2024
                      </div>
                      <div className="text-muted-foreground text-xs">
                        Created by a passionate developer, <a href="https://zandercoffman.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500">Zander Coffman</a>.
                      </div>
                      <ButtonGroup className="mt-2">
                        <Button variant="outline" size="sm" asChild>
                          

                          <a href="https://github.com/zandercoffman/flashcardit2.0" target="_blank" rel="noopener noreferrer"> <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black dark:text-white"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0.5C5.73 0.5 0.75 5.64 0.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.57v-2.04c-3.2.71-3.87-1.57-3.87-1.57-.53-1.36-1.29-1.72-1.29-1.72-1.06-.75.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.8 2.73 1.28 3.4.98.11-.77.41-1.28.75-1.58-2.55-.3-5.23-1.31-5.23-5.83 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21a10.7 10.7 0 0 1 5.79 0c2.2-1.53 3.17-1.21 3.17-1.21.64 1.64.24 2.86.12 3.16.74.83 1.18 1.89 1.18 3.18 0 4.53-2.69 5.52-5.25 5.82.42.37.8 1.1.8 2.22v3.29c0 .31.21.69.8.57A11.27 11.27 0 0 0 23.25 12C23.25 5.64 18.27 0.5 12 0.5Z"
                            />
                          </svg>Version 2.0 (Current)</a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://github.com/zandercoffman/flashcardit" target="_blank" rel="noopener noreferrer"> <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-black dark:text-white"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 0.5C5.73 0.5 0.75 5.64 0.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.26.79-.57v-2.04c-3.2.71-3.87-1.57-3.87-1.57-.53-1.36-1.29-1.72-1.29-1.72-1.06-.75.08-.73.08-.73 1.17.08 1.79 1.23 1.79 1.23 1.04 1.8 2.73 1.28 3.4.98.11-.77.41-1.28.75-1.58-2.55-.3-5.23-1.31-5.23-5.83 0-1.29.45-2.35 1.19-3.18-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.21a10.7 10.7 0 0 1 5.79 0c2.2-1.53 3.17-1.21 3.17-1.21.64 1.64.24 2.86.12 3.16.74.83 1.18 1.89 1.18 3.18 0 4.53-2.69 5.52-5.25 5.82.42.37.8 1.1.8 2.22v3.29c0 .31.21.69.8.57A11.27 11.27 0 0 0 23.25 12C23.25 5.64 18.27 0.5 12 0.5Z"
                            />
                          </svg>Version 1.0</a>
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mx-2 h-[90vh] my-2 md:mx-0 md:my-0 overflow-hidden !bg-transparent z-20 translate-y-[-0.5rem]">
        <NavMain items={thisdata.navMain as PageData[]}
          setcurpage={props.setcurpage}
          dashRef={props.dashRef}
          setCurrentHeader={props.setCurrentHeader} />
        <ScrollArea className="h-[60vh]">
          <NavDocuments items={sets as Set[]}
            setSeled={props.setSeled}
            setcurpage={props.setcurpage}
            setCurrentHeader={props.setCurrentHeader}
            getRidOfSet={props.getRidOfSet}
            currentVideo={props.currentVideo} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="mx-2 w-full text-sm flex flex-row gap-2 mb-4 md:mx-0 md:mb-0">
        <div className="flex flex-row gap-2 w-[40%] items-center">
          <div className="size-[3px] rounded-full bg-blue-100 animate-ping"/>
          Version 2.0.4
        </div>
        <div className="w-[60%] flex flex-row gap-1 justify-end">
          <ModeToggle/>
          <Button variant={"outline"} size="icon-sm">
            <IconSettings/>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
