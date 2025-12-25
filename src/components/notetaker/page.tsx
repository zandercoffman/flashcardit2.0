"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../ui/card"
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

  const getViewerUrl = (file: BottomItem) => {
    if (file.type === "application/pdf") return file.url
    // fallback to Google Docs Viewer for PPTX/DOCX
    return `https://docs.google.com/gview?url=${encodeURIComponent(
      file.url
    )}&embedded=true`
  }

  return (
    <div className="p-4 w-[95vw] h-screen fixed">

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
                    className="w-full h-[90vh] mt-4 rounded border"
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
              <Card>{chosenValue2}
                <TipTapEditor />

              </Card>

            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>



    </div>
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
      <div className="mt-4">
        <h3 className="font-semibold">Markdown Output:</h3>
        <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap">
          {markdown}
        </pre>
      </div>
    </div>
  )
}

function BottomBar({
  files,
  onSelect,
  onSelect2,
  onUpload,
}: {
  files: BottomItem[]
  onSelect: (idx: number) => void
  onSelect2: () => void
  onUpload: (files: FileList) => void
}) {
  return (
    <div className="h-auto absolute top-1/2 left-0 -translate-y-1/2 flex flex-col items-center gap-3 px-4">
      {files.map((file, idx) => (
        <BottomBarButtonFile key={file.id} idx={idx} file={file} onSelect={onSelect} />
      ))}
      <BottomBarButtonAdd idx={0} onSelect={onSelect2} />

      {/* File Upload Button */}
      <label className="px-3 py-1 size-26 rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80">
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
}: {
  file: BottomItem
  onSelect: (idx: number) => void
  idx: number
}) {
  return (
    <motion.button
      key={idx}
      onClick={() => onSelect(idx)}
      whileHover={{ scale: 1.1, opacity: 1 }}
      style={{opacity: 0.5}}
      whileTap={{ scale: 0.9 }}
      layoutId={`val-${idx}`}
      className="px-3 py-1 size-26 rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80"
    >
      {file.label}
    </motion.button>
  )
}

function BottomBarButtonAdd({
  onSelect,
  idx,
}: {
  onSelect: () => void
  idx: number
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      layoutId={`val-${-1}`}
      className="px-3 py-1 size-26 rounded text-xs rounded-xl cursor-pointer bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80"
    >
      Add Note
    </motion.button>
  )
}
