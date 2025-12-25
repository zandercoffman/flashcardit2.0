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
import { BookOpenText, FilePenLine, HandHelping, LucideIcon, LucideProps } from "lucide-react"
import { CalendarIcon } from "lucide-react"
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
      title: "NoteTaker/DocumentViewer",
      page: NoteTaker,
      icon: FilePenLine
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
    <Sidebar collapsible="offcanvas" variant={props.variant}>
      <SidebarHeader className="my-4 mx-auto md:my-0 md:mx-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >

              <HoverCard>
                <HoverCardTrigger asChild >
                  <a href="'''
                  
                  '''"
                    className="flex flex-row gap-2 align-center items-center w-min">
                    <BookOpenText className=" text-3xl md:text-base" />
                    <span className="text-2xl md:text-base font-semibold">Flashcard/It</span>
                  </a>

                </HoverCardTrigger>
                <HoverCardContent className="w-80" side="right" align="start">
                  <div className="flex justify-between gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="text-muted-foreground text-xs">
                        Joined December 2021
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mx-2 h-[90vh] my-2 md:mx-0 md:my-0 overflow-hidden">
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

        <NavSecondary items={thisdata.navSecondary} className="mt-auto" />
      </SidebarContent>

    </Sidebar>
  )
}
