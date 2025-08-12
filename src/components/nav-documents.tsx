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

export function NavDocuments({
  items,
  setSeled,
  setcurpage,
  setCurrentHeader
}: {
  items: Set[],
  setSeled: Function,
  setcurpage: Function,
  setCurrentHeader: Function
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Sets</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarMenuItem key={`${item.title}-${index}`}>
            <SidebarMenuButton asChild onClick={() => {
              setSeled(index)
              setcurpage("set")
              setCurrentHeader(item.title)
            }}>
              <span className="whitespace-nowrap">{item.title}</span>
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
                  <DropdownMenuItem variant="destructive">
                    <IconTrash />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <IconDots className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
