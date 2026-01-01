"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TurndownService from "turndown"
import { ArrowUpRightIcon, Plus, Upload } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { IconFolderCode } from "@tabler/icons-react"

interface BottomItem {
  label: string
  url: string
  type: string
  id: string
}

export default function NoteDocumentTaker() {
  const [files, setFiles] = useState<BottomItem[]>([])
  const [chosenValue1, setChosenValue] = useState<number | null>(null)
  const [chosenValue2, setChosenValue2] = useState<number | null>(null)
  const [activeFile, setActiveFile] = useState<BottomItem | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files
    if (!selectedFiles) return

    const newFiles: BottomItem[] = Array.from(selectedFiles).map((file) => ({
      id: crypto.randomUUID(),
      label: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }))

    setFiles((prev) => [...prev, ...newFiles])
  }

  const hasChosen = chosenValue1 !== null || chosenValue2 !== null

  const getViewerUrl = (file: BottomItem) => {
    if (file.type === "link") {
      // YouTube embed support
      if (file.url.includes("youtube.com") || file.url.includes("youtu.be")) {
        const id =
          file.url.split("v=")[1]?.split("&")[0] ||
          file.url.split("youtu.be/")[1]
        return `https://www.youtube.com/embed/${id}`
      }
  
      return file.url
    }
  
    if (file.type === "application/pdf") return file.url
  
    return `https://docs.google.com/gview?url=${encodeURIComponent(
      file.url
    )}&embedded=true`
  }
  
  return (
    <div className="overflow-none p-4 w-screen h-screen absolute translate-x-[-10px] translate-y-[-30px] left-0 m-0 p-0">

      {
        !hasChosen && <Empty className="absolute left-[25vw] translate-y-[20vh]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconFolderCode />
          </EmptyMedia>
          <EmptyTitle>No Files/Notes Yet</EmptyTitle>
          <EmptyDescription>
            Nothing here yet — you&apos;re just getting started. Click <strong>the sidebar expand button</strong> in the sidebar, click <strong>Add Note</strong> and upload any media you&apos;d like.
          </EmptyDescription>

        </EmptyHeader>
      </Empty>
      }

      {/* Bottom bar + cards */}
      <AnimatePresence mode="popLayout">
        <BottomBar
          files={files}
          onSelect={(idx) => {
            setChosenValue(idx)
            setActiveFile(files[idx])
          }}
          onSelect2={() => {
            setChosenValue2(-1)
          }}
          onUpload={(selectedFiles) => {
            const newFiles: BottomItem[] = Array.from(selectedFiles).map((file) => ({
              id: crypto.randomUUID(),
              label: file.name,
              url: URL.createObjectURL(file),
              type: file.type,
            }))
            setFiles((prev) => [...prev, ...newFiles])
          }}
          hasChosen={hasChosen}
          onAddLink={(url) => {
            const newItem: BottomItem = {
              id: crypto.randomUUID(),
              label: url.replace(/^https?:\/\//, "").slice(0, 30),
              url,
              type: "link",
            }
          
            setFiles((prev) => [...prev, newItem])
          }}
          
        />


        <motion.div className="flex flex-row gap-2">
          {chosenValue1 !== null && (
            <motion.div layoutId={`val-${chosenValue1}`} className="w-1/2">
              <Card>
                <h1 className="text-center">{files[chosenValue1]?.label}</h1>
                {activeFile && (
                  <motion.iframe
                    key={activeFile.id}
                    src={getViewerUrl(activeFile)}
                    className="w-full h-[72vh] rounded border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </Card>
            </motion.div>
          )}
          {chosenValue2 !== null && (
            <motion.div layoutId={`val-${-1}`} className="w-1/2">
              <Card className="px-2 gap-2 ">
                <CardHeader className="w-[90%]">
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="name">File Name</Label>
                    <Input type="name" id="name" placeholder="FileName (extension will be added accordingly)" />
                  </div>
                </CardHeader>
                <CardContent className="w-[90%]">
                  <Textarea placeholder="Type your message here." className="mx-auto h-[66vh]" />

                </CardContent>
              </Card>

            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>



    </div>
  )
}

function BottomBarButtonLink({
  onAdd,
  hasChosen,
}: {
  onAdd: (url: string) => void
  hasChosen: boolean
}) {
  const handleClick = () => {
    const url = prompt("Paste a link (YouTube, website, etc.)")
    if (!url) return
    onAdd(url)
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`px-3 py-1 flex flex-col items-center justify-center ${
        hasChosen ? "size-20" : "size-26"
      } rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs text-xs hover:bg-secondary/80`}
    >
      <ArrowUpRightIcon size={hasChosen ? 26 : 40} />
      Add Link
    </motion.button>
  )
}


export function TipTapEditor() {
  const [markdown, setMarkdown] = useState("")

  const editor = useEditor({
    extensions: [StarterKit],
    content: "Type **something** here...",
    onUpdate: ({ editor }) => {
      const turndownService = new TurndownService()
      setMarkdown(turndownService.turndown(editor.getHTML()))
    },
    immediatelyRender: false,
  })

  return (
    <div className="p-4">
      <EditorContent editor={editor} className="border p-2 rounded" />
    </div>
  )
}

function BottomBar({
  files,
  onSelect,
  onSelect2,
  onUpload,
  onAddLink,
  hasChosen,
}: {
  files: BottomItem[]
  onSelect: (idx: number) => void
  onSelect2: () => void
  onUpload: (files: FileList) => void
  onAddLink: (url: string) => void
  hasChosen: boolean
}) {
  return (
    <div className="h-auto absolute top-1/2 right-0 -translate-y-1/2 flex flex-col items-center gap-3 px-4">
      {files.map((file, idx) => (
        <BottomBarButtonFile key={file.id} idx={idx} file={file} onSelect={onSelect} hasChosen={hasChosen} />
      ))}
      <BottomBarButtonAdd idx={0} onSelect={onSelect2} hasChosen={hasChosen} />

      {/* File Upload Button */}
      <label className={`x-3 py-1 flex gap-2 flex-col justify-center items-center ${hasChosen ? "size-20" : "size-26"}  rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80`}>
        <Upload size={hasChosen ? 26 : 40} />
        Upload File
        <input
          type="file"
          multiple
          accept=".pdf,.ppt,.pptx,.doc,.docx"
          className="hidden"
          onChange={(e) => {
            if (e.target.files) onUpload(e.target.files)
            e.target.value = "" // reset so same file can be uploaded again
          }}
        />
      </label>

      <BottomBarButtonLink onAdd={onAddLink} hasChosen={hasChosen} />

    </div>
  )
}

function AddMediaButton() {
  const handleSelect = (mediaType: string) => {
    console.log(`Add ${mediaType}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-3 py-1 size-26 rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80"
        >
          Add Media
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => handleSelect("pptx")}>PPTX</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSelect("pdf")}>PDF</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSelect("docx")}>DOCX</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => handleSelect("google-slides")}>
          Google Slides
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSelect("google-docs")}>
          Google Docs
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function BottomBarButtonFile({
  file,
  onSelect,
  idx,
  hasChosen
}: {
  file: BottomItem
  onSelect: (idx: number) => void
  idx: number
  hasChosen: boolean
}) {
  return (
    <motion.button
      key={idx}
      onClick={() => onSelect(idx)}
      whileHover={{ scale: 1.1, opacity: 1 }}
      style={{ opacity: 0.5 }}
      whileTap={{ scale: 0.9 }}
      layoutId={`val-${idx}`}
      className={`px-3 py-1 flex flex-1 justify-center items-center overflow-hidden ${hasChosen ? "size-20" : "size-26"} rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs text-xs hover:bg-secondary/80`}
    >
      <span>{file.label}</span>
    </motion.button>
  )
}

function BottomBarButtonAdd({
  onSelect,
  idx,
  hasChosen
}: {
  onSelect: () => void
  idx: number
  hasChosen: boolean
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      layoutId={`val-${-1}`}
      className={`px-3 py-1 relative flex flex-col items-center justify-center ${hasChosen ? "size-20" : "size-26"} rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80`}
    >
      <Plus size={hasChosen ? 26 : 40} />
      Add Note
    </motion.button>
  )
}
