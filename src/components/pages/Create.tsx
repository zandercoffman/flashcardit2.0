"use client"
import { useState } from "react"
import { FileUpload } from "../aceternity/file-upload"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, CheckCircle2, AlertCircle, Sparkles, FileJson, UploadIcon, Pencil } from "lucide-react"
import { toast } from "sonner"
import { ScrollArea } from "../ui/scroll-area"

interface Set {
  title: string
  vocab: [string, string][]
}

export default function Create({
  addSet,
}: {
  addSet: (set: Set, isAutomatic: boolean) => Promise<number>
}) {
  const [files, setFiles] = useState<File[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; vocab: [string, string][] }[]>([])

  const [jsonInput, setJsonInput] = useState("")
  const [jsonError, setJsonError] = useState("")
  const [isValidJson, setIsValidJson] = useState(false)
  const [parsedSet, setParsedSet] = useState<{ title: string; vocab: [string, string][] } | null>(null)

  const [manualTitle, setManualTitle] = useState("")
  const [manualVocab, setManualVocab] = useState("")

  // AI Prompt from your text file
  const AI_PROMPT = `Make me a flashcard set based on the text or files I provide.
Follow this exact TypeScript structure:

interface Set {
  title: string;
  vocab: [string, string][];
}

interface AllSetsInterface {
  id: string;
  set: Set;
}

Instructions:
1. Read the content I give you.
2. Identify the key terms and their definitions.
3. Create a title based on the topic.
4. Put every flashcard as a tuple in the vocab array: [term, definition].
5. Return a single JSON object that matches AllSetsInterface exactly.
6. The id should be a short unique string.

Output only the JSON. No explanations, no commentary, no formatting outside of the JSON.`

  // Handling multiple file uploads
  const handleFileUpload = (theseFiles: File[]) => {
    setFiles(theseFiles)
    setUploadedFiles([]) // Clear previous uploads

    theseFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        try {
          const parsedContent = JSON.parse(reader.result as string)

          // Validate the structure
          if (!parsedContent.set || !parsedContent.set.title || !Array.isArray(parsedContent.set.vocab)) {
            throw new Error("Invalid file structure")
          }

          setUploadedFiles((prevState) => [
            ...prevState,
            {
              name: parsedContent.set.title || "Flashcard Set",
              vocab: parsedContent.set.vocab || [],
            },
          ])

          toast.success(`Loaded: ${parsedContent.set.title}`)
        } catch (error) {
          toast.error(`Error parsing ${file.name}: ${error instanceof Error ? error.message : "Invalid JSON"}`)
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

      // Check if it matches AllSetsInterface (with set property)
      let setData = parsed
      if (parsed.set) {
        setData = parsed.set
      }

      // Validate structure
      if (!setData.title || typeof setData.title !== "string") {
        throw new Error("Missing or invalid 'title' field (must be a string)")
      }

      if (!Array.isArray(setData.vocab)) {
        throw new Error("Missing or invalid 'vocab' field (must be an array)")
      }

      // Validate vocab array structure
      for (let i = 0; i < setData.vocab.length; i++) {
        const item = setData.vocab[i]
        if (!Array.isArray(item) || item.length !== 2 || typeof item[0] !== "string" || typeof item[1] !== "string") {
          throw new Error(`Invalid vocab item at index ${i} (must be [string, string])`)
        }
      }

      setJsonError("")
      setIsValidJson(true)
      setParsedSet(setData)
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
    navigator.clipboard.writeText(AI_PROMPT)
    toast.success("Prompt copied! Paste it into ChatGPT, Claude, or any AI assistant.")
  }

  const addJsonSetToStudy = () => {
    if (parsedSet) {
      addSet(parsedSet, false)
      toast.success("Flashcard set added successfully!")
      setJsonInput("")
      setJsonError("")
      setIsValidJson(false)
      setParsedSet(null)
    }
  }

  const addFilesToStudy = () => {
    uploadedFiles.forEach((file) => {
      addSet({ title: file.name, vocab: file.vocab }, true)
    })
    toast.success(`Added ${uploadedFiles.length} flashcard set(s)!`)
    setUploadedFiles([])
    setFiles([])
  }

  const handleManualCreate = () => {
    if (!manualTitle.trim() || !manualVocab.trim()) {
      toast.error("Please provide a title and at least one vocabulary pair.")
      return
    }

    try {
      const vocabPairs = manualVocab
        .split("\n")
        .map((line) => {
          const parts = line.split(",").map((part) => part.trim())
          if (parts.length !== 2 || !parts[0] || !parts[1]) {
            throw new Error(`Invalid line: "${line}". Each line must be 'term, definition'.`)
          }
          return [parts[0], parts[1]] as [string, string]
        })
        .filter((pair) => pair) // Filter out any empty lines that might result

      const newSet: Set = {
        title: manualTitle,
        vocab: vocabPairs,
      }

      addSet(newSet, false)
      toast.success(`Successfully created and added "${manualTitle}"!`)
      setManualTitle("")
      setManualVocab("")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to parse vocabulary.")
    }
  }

  return (
    <div className="w-full max-w-5xl h-[75vh] mx-auto p-6 overflow-hidden">
      <Tabs defaultValue="ai" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ai" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Generate with AI
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <UploadIcon className="h-4 w-4" />
            Create JSON File
          </TabsTrigger>
          <TabsTrigger value="manual" className="flex items-center gap-2">
            <Pencil className="h-4 w-4" />
            Create Manually
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="space-y-6">
          <ScrollArea className="h-[70vh] flex flex-col gap-2 rounded-xl">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  Generate Flashcards with AI
                </CardTitle>
                <CardDescription className="text-blue-600 dark:text-blue-400">
                  Use ChatGPT, Claude, or any AI assistant to automatically create flashcards from your study materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-blue-900 dark:text-blue-200">
                    Step 1: Copy the prompt below
                  </h3>
                  <div className="bg-white dark:bg-gray-900 p-4 rounded-md border border-blue-200 dark:border-blue-700 relative">
                    <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {AI_PROMPT}
                    </pre>
                  </div>
                  <Button onClick={copyPromptToClipboard} variant="default" size="sm" className="w-full">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Prompt to Clipboard
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-blue-900 dark:text-blue-200">Step 2: Paste into AI</h3>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Open ChatGPT, Claude, or your favorite AI assistant. Paste the prompt along with your study content
                    (notes, textbook pages, articles, etc.)
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-blue-900 dark:text-blue-200">
                    Step 3: Paste the AI output HERE ⬇️
                  </h3>
                  <Textarea
                    placeholder="Paste the JSON output from the AI here..."
                    value={jsonInput}
                    onChange={(e) => handleJsonInputChange(e.target.value)}
                    className="min-h-[200px] font-mono text-sm"
                  />

                  {jsonError && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{jsonError}</AlertDescription>
                    </Alert>
                  )}

                  {isValidJson && parsedSet && (
                    <Alert className="border-green-200 bg-green-50 dark:bg-green-950 mt-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-700 dark:text-green-300">
                        ✓ Valid JSON! Found &quot;{parsedSet.title}&quot; with {parsedSet.vocab.length} flashcard(s)
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                {isValidJson && parsedSet && (
                  <Button onClick={addJsonSetToStudy} className="w-full" size="lg">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Start Studying &quot;{parsedSet.title}&quot;
                  </Button>
                )}
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-sm">Example Output</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs overflow-x-auto">
                  {`{\n  "id": "span101",\n  "set": {\n    "title": "Spanish Basics",\n    "vocab": [\n      ["hello", "hola"],\n      ["goodbye", "adiós"],\n      ["thank you", "gracias"],\n      ["please", "por favor"]\n    ]\n  }\n}`}
                </pre>
              </CardContent>
            </Card>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="upload" className="space-y-6 h-full rounded-xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5" />
                Create JSON Files
              </CardTitle>
              <CardDescription>Create flashcard sets that you&apos;ve previously generated or downloaded</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FileUpload onChange={handleFileUpload} />

              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <Alert className="border-green-200 bg-green-50 dark:bg-green-950">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700 dark:text-green-300">
                      Successfully loaded {uploadedFiles.length} flashcard set(s):
                      <ul className="list-disc list-inside mt-2">
                        {uploadedFiles.map((file, idx) => (
                          <li key={idx}>
                            {file.name} ({file.vocab.length} cards)
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Button onClick={addFilesToStudy} className="w-full" size="lg">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Start Studying All Sets
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manual" className="space-y-6 h-full rounded-xl">
          <ScrollArea className="h-[55vh]">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pencil className="h-5 w-5" />
                  Create a New Set Manually
                </CardTitle>
                <CardDescription>
                  Enter a title and then your vocabulary. Each line should be a term and its definition, separated by a
                  comma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="manual-title" className="font-semibold text-sm">
                    Set Title
                  </label>
                  <Input
                    id="manual-title"
                    placeholder="e.g., Spanish 101"
                    value={manualTitle}
                    onChange={(e) => setManualTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="manual-vocab" className="font-semibold text-sm">
                    Vocabulary
                  </label>
                  <Textarea
                    id="manual-vocab"
                    placeholder="hello, hola\ngoodbye, adiós\nthank you, gracias"
                    value={manualVocab}
                    onChange={(e) => setManualVocab(e.target.value)}
                    className="min-h-[250px] font-mono text-sm"
                  />
                </div>
                <Button onClick={handleManualCreate} className="w-full" size="lg">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Create and Study Set
                </Button>
              </CardContent>
            </Card>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
