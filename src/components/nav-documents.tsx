/* eslint-disable */
"use client"

import {
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { BookOpenText, Braces, FileText } from "lucide-react";

interface Set {
  title: string;
  vocab: [string, string][]; // Array of tuples with two strings
  extraInfo?: Array<string>
}
import { saveAs } from 'file-saver';
import { toast } from "sonner"
import { useEffect, useState } from "react";
import { BlurFade } from "./ui/blur-fade";
import { Skeleton } from "@/components/ui/skeleton"
import { ScrollArea } from "./ui/scroll-area";
import { Video } from "./MusicButton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function NavDocuments({
  items,
  setSeled,
  setcurpage,
  setCurrentHeader,
  getRidOfSet,
  currentVideo
}: {
  items: Set[],
  setSeled: Function,
  setcurpage: Function,
  setCurrentHeader: Function,
  getRidOfSet: Function,
  currentVideo: Video | null
}) {
  const { isMobile } = useSidebar()
  const [theseItems, setTheseItems] = useState<Set[]>(items);

  useEffect(() => {
    setTheseItems(items)
  }, [items])

  return (
    <SidebarGroup className="w-[19vw] group-data-[collapsible=icon]:hidden" >
      {currentVideo && <>
        <SidebarGroupLabel>Music</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem className="overflow-hidden whitespace-nowrap">
            <span className="whitespace-nowrap inline-block animate-marquee text-xs ml-2 text-gray-600">🎶 Playing: {currentVideo.title} — 🎶 Playing: {currentVideo.title} — 🎶 Playing: {currentVideo.title}</span>
            <style jsx>{`
  .animate-marquee {
    display: inline-block;
    padding-left: 50%; /* start off to the right */
    animation: marquee 15s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); } /* move to the left */
  }
`}</style>

          </SidebarMenuItem>
        </SidebarMenu>
      </>}
      <SidebarGroupLabel>Sets</SidebarGroupLabel>
      <SidebarMenu>
        <ScrollArea className="h-[50vh]">
          {theseItems.length > 0 ? theseItems.map((item, index) => (
            <SidebarMenuItem key={`${item.title}-${index}`}>
              <SidebarMenuButton asChild onClick={() => {
                setSeled(index)
                setcurpage("set")
                setCurrentHeader(item.title)
              }}>
                <BlurFade delay={0.2 + (0.06 * index)}>
                  <span className="whitespace-nowrap">{item.title}</span>
                </BlurFade>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction
                    showOnHover
                    className="data-[state=open]:bg-accent rounded-sm"
                  >
                    <IconDots />
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 rounded-lg"
                  side={isMobile ? "bottom" : "right"}
                  align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Email</DropdownMenuItem>
                          <DropdownMenuItem>Message</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>More...</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <BookOpenText />
                      <span>Study</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      const promise = () =>
                        new Promise(async (resolve, reject) => {
                          try {
                            const response = await fetch('/api/generate-printable', {
                              method: "POST",
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ vocab: item.vocab })
                            });

                            if (!response.ok) {
                              throw new Error('Network response was not ok');
                            }

                            const blob = await response.blob();
                            saveAs(blob, 'set.pdf');

                            resolve({ message: 'Your set has been generated!' });
                          } catch (error) {
                            reject(error);
                          }
                        });

                      toast.promise(promise, {
                        loading: 'Generating PDF...',
                        success: (data) => `Successfully generated your PDF of ${item.title}. Happy Studying!`,
                        error: 'Failed to generate the PDF. Try again.',
                      });

                    }}>
                      <FileText />
                      <span>Download as PDF</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      const promise = () =>
                        new Promise((resolve, reject) => {
                          try {
                            const json = JSON.stringify(item.vocab, null, 2); // pretty print it
                            const blob = new Blob([json], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);

                            const link = document.createElement('a');
                            link.href = url;
                            link.download = `${item.title || 'vocab-set'}.json`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            URL.revokeObjectURL(url);

                            resolve({ message: 'Your set has been downloaded!' });
                          } catch (error) {
                            reject(error);
                          }
                        });

                      toast.promise(promise, {
                        loading: 'Preparing your vocab set...',
                        success: (data) => `Successfully downloaded ${item.title}.json!`,
                        error: 'Failed to download the JSON file. Try again.',
                      });
                    }}
                    >
                      <Braces />
                      <span>Download as JSON</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <IconShare3 />
                      <span>Share</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive" onClick={() => getRidOfSet(index)}>
                      <IconTrash />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          )) : new Array(20).fill(null).map((_, index) => {
            return <Skeleton key={index} className="w-[92%] h-8 my-2 ml-2 rounded-full" />
          })}
        </ScrollArea>
      </SidebarMenu>
    </SidebarGroup>
  )
}
