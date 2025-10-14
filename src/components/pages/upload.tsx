"use client"
import { useState, useRef } from "react"
import { FileUpload } from "../aceternity/file-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { HelpCircle, Copy, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { toast } from "sonner"


interface Set {
  title: string;
  vocab: [string, string][]; 
}

export default function Upload({
  addSet,
}: {
  addSet: (set: Set) => Promise<number>
}) {
  const [files, setFiles] = useState<File[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; vocab: [string, string][] }[]>([])
  const codeBlockRef = useRef<HTMLElement>(null) // Ref to control CodeBlock's scroll
  const [isScrolling, setIsScrolling] = useState(false) // NEW: Track if scrolling is active

  const [jsonInput, setJsonInput] = useState("")
  const [jsonError, setJsonError] = useState("")
  const [isValidJson, setIsValidJson] = useState(false)
  const [parsedSet, setParsedSet] = useState<{ title: string; vocab: [string, string][] } | null>(null)

  // Handling multiple file uploads
  const handleFileUpload = (theseFiles: File[]) => {
    setFiles(theseFiles)

    theseFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        try {
          // Parse the content as JSON
          const parsedContent = JSON.parse(reader.result as string)

          // Add the file name and its vocab to the uploadedFiles state
          setUploadedFiles((prevState) => [
            ...prevState,
            { name: parsedContent?.title || "Default Vocab Set", vocab: parsedContent?.vocab || [] },
          ])
        } catch (error) {
          console.error("Error parsing JSON:", error)
        }
      }

      reader.readAsText(file)
    })
  }

  const validateJson = (input: string) => {
    if (!input.trim()) {
      setJsonError("")
      setIsValidJson(false)
      setParsedSet(null)
      return
    }

    try {
      const parsed = JSON.parse(input)

      // Validate structure
      if (!parsed.title || typeof parsed.title !== "string") {
        throw new Error("Missing or invalid 'title' field (must be a string)")
      }

      if (!Array.isArray(parsed.vocab)) {
        throw new Error("Missing or invalid 'vocab' field (must be an array)")
      }

      // Validate vocab array structure
      for (let i = 0; i < parsed.vocab.length; i++) {
        const item = parsed.vocab[i]
        if (!Array.isArray(item) || item.length !== 2 || typeof item[0] !== "string" || typeof item[1] !== "string") {
          throw new Error(`Invalid vocab item at index ${i} (must be [string, string])`)
        }
      }

      setJsonError("")
      setIsValidJson(true)
      setParsedSet(parsed)
    } catch (error) {
      setJsonError(error instanceof Error ? error.message : "Invalid JSON format")
      setIsValidJson(false)
      setParsedSet(null)
    }
  }

  const handleJsonInputChange = (value: string) => {
    setJsonInput(value)
    validateJson(value)
  }

  const copyPromptToClipboard = () => {
    const prompt = `Based on this content above/below, I want you to generate me a flashcard set which will be JSON text in the interface of interface Set {
  title: string;
  vocab: [string, string][];
}`
    navigator.clipboard.writeText(prompt)
    toast.success("Prompt copied to clipboard!")
  }

  const loadExample = () => {
    const example = {
      title: "Spanish Basics",
      vocab: [
        ["hello", "hola"],
        ["goodbye", "adiós"],
        ["thank you", "gracias"],
        ["please", "por favor"],
        ["yes", "sí"],
        ["no", "no"],
      ],
    }
    const exampleJson = JSON.stringify(example, null, 2)
    setJsonInput(exampleJson)
    validateJson(exampleJson)
  }

  const addJsonSetToStudy = () => {
    if (parsedSet) {
      addSet(parsedSet)
      toast.success("Flashcard set added successfully!")
      setJsonInput("")
      setJsonError("")
      setIsValidJson(false)
      setParsedSet(null)
    }
  }

  // Prepare combined output for display
  const combinedVocab = uploadedFiles.reduce((acc, file) => [...acc, ...file.vocab], [] as [string, string][])

  const combinedFileName = "Combined Files"

  // Function to trigger scrolling of the CodeBlock
  const handleScrollDown = () => {
    if (codeBlockRef.current) {
      codeBlockRef.current.scrollTo()
    }
  }

  const addFilesToNew = () => {
    uploadedFiles.forEach((file) => {
      addSet({ title: file.name, vocab: file.vocab })
    })
  }

  return (
    <></>
  )
}

/*<Tabs
      defaultValue="upload"
      className="w-[70vw] flex flex-col justify-center items-center mx-auto min-h-96 rounded-lg"
    >
      <TabsList>
        <TabsTrigger value="upload">Upload File</TabsTrigger>
        <TabsTrigger value="text">Input Text</TabsTrigger>
      </TabsList>
      <TabsContent value="upload" className="flex flex-col gap-2">
        <FileUpload onChange={handleFileUpload} />
        {uploadedFiles.length > 0 && (
          <Button
            variant="outline"
            className="w-[60%] mx-auto bg-transparent"
            onClick={() => {
              addFilesToNew()
            }}
          >
            Start Studying
          </Button>
        )}
      </TabsContent>

      <TabsContent value="text" className=" flex flex-cold md:flex-row gap-6  mx-auto p-6 space-y-6">

        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800 w-full md:w-1/2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Info className="h-5 w-5" />
              How to Use AI to Generate Your Flashcards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <CardDescription className="text-blue-600 dark:text-blue-400">
              Copy the prompt below and paste it into any AI assistant (ChatGPT, Claude, etc.) along with your study
              content:
            </CardDescription>
            <div className="bg-white dark:bg-gray-900 p-3 rounded-md border">
              <code className="text-sm text-gray-700 dark:text-gray-300">
                "Based on this content above/below, I want you to generate me a flashcard set which will be JSON text in
                the interface of interface Set &#123; title: string; vocab: [string, string][]; &#125;"
              </code>
            </div>
            <div className="flex gap-2">
              <Button onClick={copyPromptToClipboard} variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copy Prompt
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    See Example
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Example JSON Format</DialogTitle>
                    <DialogDescription>Here's what the AI should generate for you:</DialogDescription>
                  </DialogHeader>
                  <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                    {`{
  "title": "Spanish Basics",
  "vocab": [
    ["hello", "hola"],
    ["goodbye", "adiós"],
    ["thank you", "gracias"]
  ]
}`}
                  </pre>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="">
            <div className="flex items-center justify-between">
              <label htmlFor="json-input" className="text-sm font-medium">
                Paste Your JSON Here
              </label>
              <Button onClick={loadExample} variant="ghost" size="sm">
                Load Example
              </Button>
            </div>

            <Textarea
              id="json-input"
              placeholder="Paste your JSON flashcard set here..."
              value={jsonInput}
              onChange={(e) => handleJsonInputChange(e.target.value)}
              className="max-h-[200px] font-mono text-sm"
            />

            {jsonError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{jsonError}</AlertDescription>
              </Alert>
            )}

            {isValidJson && parsedSet && (
              <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-700 dark:text-green-300">
                  Valid JSON! Found "{parsedSet.title}" with {parsedSet.vocab.length} flashcards.
                </AlertDescription>
              </Alert>
            )}
          </div>

          {isValidJson && parsedSet && (
            <Button onClick={addJsonSetToStudy} className="w-full">
              Start Studying "{parsedSet.title}"
            </Button>
          )}
        </div>
      </TabsContent>
    </Tabs>*/
