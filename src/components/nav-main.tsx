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
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary w-[60%] text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground duration-200 ease-linear"
              onClick={() => {
                setcurpage("quickcreate");
                setCurrentHeader("Quick Create");
              }}
            >
              <IconCirclePlusFilled />
              <span className="!text-right">Quick Create</span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip="Upload"
              className="w-[40%] 
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
              <SidebarMenuButton tooltip={item.title} onClick={() => {
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
