/* eslint-disable */
"use client"

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LucideIcon, LucideProps, Plus, Search } from "lucide-react"
import Create from "./pages/Create"
import { SearchBar } from "./pages/compOfPages/SearchBar"
import { InProgressBadge, NewBadge } from "./CustomBadges"

export function NavMain({
  items,
  setcurpage,
  setCurrentHeader,
  dashRef
}: {
  items: {
    title: string
    page: React.FC<any>
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  }[],
  setcurpage: Function,
  setCurrentHeader: Function,
  dashRef: any
}) {
  const newStuff: string[] = ["Notes"];
  const inProgressStuff: string[] = ["AI Chat"];

  return (
    <SidebarGroup className="w-[20vw]">
      <SidebarGroupContent className="flex translate-y-[-10px] flex-col gap-2">
        <SidebarMenu className=" font-semibold">
          <SidebarMenuItem className="flex flex-col md:flex-row items-center mt-1 align-center gap-2">
            <SearchBar />
            <SidebarMenuItem className="my-0 py-0 h-min w-1/2">
              <SidebarMenuButton tooltip={"Create"}
                className="text-sm rounded-3xl w-full mx-auto flex gap-2 justify-center "
                onClick={() => {
                  setcurpage("upload");
                  setCurrentHeader("Create");
                }}>
                <Plus />
                <span>Create</span>
                {newStuff.includes("Create") && <NewBadge />}
                {inProgressStuff.includes("Create") && <InProgressBadge />}
              </SidebarMenuButton>
            </SidebarMenuItem>


          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>

          {items.map((item) => (
            <SidebarMenuItem key={item.title} ref={item.title === "Dashboard" ? dashRef : null} className="my-0 py-0 h-min">
              <SidebarMenuButton tooltip={item.title}
                className="text-sm "
                onClick={() => {
                  const slug = item.title === "AI Chat" ? "aichat" : item.title.toLowerCase();
                  setcurpage(slug);
                  setCurrentHeader(item.title);
                }}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                {newStuff.includes(item.title) && <NewBadge />}
                {inProgressStuff.includes(item.title) && <InProgressBadge />}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
