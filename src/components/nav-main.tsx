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
import { LucideIcon, LucideProps } from "lucide-react"
import Upload from "./pages/upload"

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
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className=" font-semibold">
          <SidebarMenuItem className="flex flex-col md:flex-row items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-xl pl-4 md:pl-2 md:text-sm md:w-[60%] h-[120%] rounded-full md:rounded-lg md:h-min text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground duration-200 ease-linear"
              onClick={() => {
                setcurpage("quickcreate");
                setCurrentHeader("Quick Create");
              }}
            >
              <IconCirclePlusFilled className="text-3xl md:text-base" />
              <span className="!text-right">Quick Create</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Upload"
              className="w-full text-xl pl-4 md:pl-2 md:text-sm md:w-[40%] h-[120%] rounded-full md:rounded-lg md:h-min 
             bg-white text-black 
             hover:bg-gray-100 hover:text-black 
             active:bg-gray-200 active:text-black 
             dark:bg-black dark:text-white 
             dark:hover:bg-gray-900 dark:hover:text-white 
             dark:active:bg-gray-800 dark:active:text-white 
             duration-200 ease-linear"
             onClick={() => {
              setcurpage("upload");
              setCurrentHeader("Upload");
             }}
            >
              <IconCirclePlusFilled />
              <span>Upload</span>
            </SidebarMenuButton>


          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} ref={item.title === "Dashboard" ? dashRef : null}>
              <SidebarMenuButton tooltip={item.title} 
                className="text-lg md:text-base "
              onClick={() => {
                setcurpage(item.title.toLowerCase());
                setCurrentHeader(item.title);
              }}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
