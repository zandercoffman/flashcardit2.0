/* eslint-disable */
"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Edit3 } from "lucide-react"
import { useEffect, useState } from "react"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input as FileInput } from "@/components/ui/input"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { toast } from "sonner"
import SetAI from "./setAI/setAI"
import Loader from "../loader"
import { encrypt, decrypt } from "@/lib/ED";

interface Set {
    title: string;
    vocab: [string, string][];
}

export default function QuickCreate({
    addSet
}: {
    addSet: Function
}) {
    const [mode, setMode] = useState<null | "ai" | "manual">(null)

    const [isLoading, setIsLoading] = useState<[boolean, string]>([false, "Creating your Flashcard Set..."]);
    const [apiKey, setApiKey] = useState<{ encrypted: string, iv: string, tag: string} | boolean>(false);

    const [isLoadingAPI, setIsLoadingAPI] = useState<boolean>(false);




    if (isLoadingAPI) {
        return <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
            <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" rx="1" width="10" height="10"><animate id="spinner_c7A9" begin="0;spinner_23zP.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze" /><animate id="spinner_Acnw" begin="spinner_ZmWi.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze" /><animate id="spinner_iIcm" begin="spinner_zfQN.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze" /><animate id="spinner_WX4U" begin="spinner_rRAc.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze" /></rect><rect x="1" y="13" rx="1" width="10" height="10"><animate id="spinner_YLx7" begin="spinner_c7A9.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze" /><animate id="spinner_vwnJ" begin="spinner_Acnw.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze" /><animate id="spinner_KQuy" begin="spinner_iIcm.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze" /><animate id="spinner_arKy" begin="spinner_WX4U.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze" /></rect><rect x="13" y="13" rx="1" width="10" height="10"><animate id="spinner_ZmWi" begin="spinner_YLx7.end" attributeName="x" dur="0.2s" values="13;1" fill="freeze" /><animate id="spinner_zfQN" begin="spinner_vwnJ.end" attributeName="y" dur="0.2s" values="13;1" fill="freeze" /><animate id="spinner_rRAc" begin="spinner_KQuy.end" attributeName="x" dur="0.2s" values="1;13" fill="freeze" /><animate id="spinner_23zP" begin="spinner_arKy.end" attributeName="y" dur="0.2s" values="1;13" fill="freeze" /></rect></svg>
            <h1 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
                {isLoading[1]}
            </h1>
        </div>
    }





    const AIFormSchema = z.object({
        files: z
            .array(z.any())
            .min(1, { message: "Please upload at least one file." }),
        subject: z.string().min(1, { message: "Subject is required" }),
        questionType: z.string().min(1, { message: "Question type is required" }),
        difficulty: z.enum(["", "easy", "medium", "hard"]),
        numberOfCards: z.union([z.coerce.number().min(1).max(100), z.literal("auto")]),
        additionalNotes: z.string().optional(),
    })

    const AIForm = useForm<z.infer<typeof AIFormSchema>>({
        defaultValues: {
            files: [],
            subject: "",
            questionType: "vocabulary",
            difficulty: "",
            numberOfCards: "auto",
            additionalNotes: "",
        },
    })

    async function onSubmitAI(values: z.infer<typeof AIFormSchema>) {
        if (apiKey === false) return toast.error("No API key provided");
    
        setIsLoading([true, "Generating your set..."]);
        setIsLoadingAPI(true)
        try {
          const res = await fetch("/api/generate-flashcards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...values, apiKey }),
          });
    
          const data = await res.json();
          if (!res.ok) {
            toast.error(data.error || "Failed to generate flashcards");
            return;
          }
    
          addSet(data.set);
          toast.success("Flashcards generated!");
        } catch (err) {
          toast.error("Network error");
          console.error(err);
        } finally {
          setIsLoading([false, ""]);
          setIsLoadingAPI(false);
        }
      }

    useEffect(() => {
        const keyString = localStorage.getItem("aiKey");
        setApiKey(keyString ? true : false);
      }, []);

      async function saveKey(key: string) {
        if (!key) return;
      
        try {
          const encrypted = encrypt(key); // { encrypted, iv, tag }
          
          // Save locally
          localStorage.setItem("aiKey", JSON.stringify(encrypted));
          
          // Update state
          setApiKey(encrypted);
        } catch (err) {
          console.error("Error saving key:", err);
        }
      }
      

    if (isLoadingAPI) {
        return <Loader />
    }


    if (mode === "ai") return (
        <Card className="w-full h-full p-4 py-10 flex flex-row gap-2">
            <CardHeader className="w-1/3 justify-start align-start mb-auto">
                <CardTitle>AI-Generated Set</CardTitle>
                <CardDescription>
                    {
                        apiKey === false ? "Provide your inputs below to let the AI generate flashcards.\nIf you have unformatted or plain text (like raw notes or copied material), please place that in the “Additional Notes” section." : "To continue, you’ll need to supply an API key. If you have a referral code instead, you can enter that as well."
                    }
                </CardDescription>
            </CardHeader>
            <CardContent className="w-2/3">
                {
                    apiKey === false ? <>
                        <SetAI setAPIKey={saveKey} />
                    </> : <Form {...AIForm}>
                        <form onSubmit={AIForm.handleSubmit(onSubmitAI)} className="space-y-6">
                            <div className="flex flex-row gap-6">
                                <FormField
                                    control={AIForm.control}
                                    name="files"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <FormLabel>Upload Files</FormLabel>
                                            <FormControl>
                                                <FileInput
                                                    type="file"
                                                    multiple
                                                    onChange={(e) => field.onChange([...e.target.files!])}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={AIForm.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Biology, History..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={AIForm.control}
                                name="questionType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question Type <span className="text-red-500 text-xs">* Required</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Select question type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="vocabulary">Vocabulary</SelectItem>
                                                <SelectItem value="mixed">Mixed</SelectItem>
                                                <SelectItem value="definitions">Definitions</SelectItem>
                                                <SelectItem value="multiple choice">Multiple Choice</SelectItem>
                                                <SelectItem value="true/false">True/False</SelectItem>
                                                <SelectItem value="fill in the blank">Fill in the Blank</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="flex flex-row gap-6">
                                <FormField
                                    control={AIForm.control}
                                    name="difficulty"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <FormLabel>Difficulty</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select difficulty" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="easy">Easy</SelectItem>
                                                    <SelectItem value="medium">Medium</SelectItem>
                                                    <SelectItem value="hard">Hard</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={AIForm.control}
                                    name="numberOfCards"
                                    render={({ field }) => (
                                        <FormItem className="w-1/2">
                                            <FormLabel>Number of Cards <span className="text-red-500 text-xs">* Required</span></FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={String(field.value)}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Choose number of cards" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="auto">Let AI decide</SelectItem>
                                                    {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                                                        <SelectItem key={num} value={String(num)}>
                                                            {num}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>

                            <FormField
                                control={AIForm.control}
                                name="additionalNotes"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Additional Notes</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Any specific instructions... or also type your PLAIN text (no file) here" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex flex-row gap-2">
                                <Button type="submit">Generate</Button>
                                <Button variant="ghost" onClick={() => setMode(null)}>Back</Button>
                            </div>
                        </form>
                    </Form>
                }
            </CardContent>
        </Card >
    )

    if (mode === "manual") return (
        <div className="text-center p-6">
            <h2 className="text-2xl font-bold mb-2">Manual Mode</h2>
            <p className="text-muted-foreground mb-4">Manual creation coming soon...</p>
            <Button variant="ghost" onClick={() => setMode(null)}>Back</Button>
        </div>
    )

    return (
        <div className="h-full flex items-center justify-center bg-background p-4">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-foreground mb-2">Quick Create</h1>
                    <p className="text-muted-foreground">Choose how you'd like to get started</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Choose AI Mode */}
                    <Button onClick={() => setMode("ai")}
                        variant="outline"
                        className="cursor-pointer w-full h-40 flex flex-col items-center justify-center gap-4 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-200 bg-transparent"
                    >
                        <Sparkles className="h-12 w-12 text-primary" />
                        <div className="text-center">
                            <div className="font-semibold text-lg">AI-Generated Set</div>
                            <div className="text-sm text-muted-foreground">Let AI guide your creation</div>
                        </div>
                    </Button>

                    {/* Manual Create Mode */}
                    <Button
                        onClick={() => setMode("manual")}
                        variant="outline"
                        className="cursor-pointer w-full h-40 flex flex-col items-center justify-center gap-4 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-200 bg-transparent"
                    >
                        <Edit3 className="h-12 w-12 text-primary" />
                        <div className="text-center">
                            <div className="font-semibold text-lg">Manual Create</div>
                            <div className="text-sm text-muted-foreground">Build from scratch yourself</div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}
