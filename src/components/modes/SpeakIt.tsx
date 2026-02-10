/* eslint-disable */
"use client"

import { useEffect, useState, useRef } from "react"
import {
  AudioWaveform,
  Mic,
  MicOff,
  Speaker,
  Volume2,
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "../ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Voice {
  name: string
  lang: string
  voiceURI: string
}

interface Set {
  title: string
  vocab: [string, string][]
}

const SpeakIt = ({
  CurrentSet,
}: {
  CurrentSet: Set
}) => {
  const [isListening, setIsListening] = useState(false)
  const [finalTranscript, setFinalTranscript] = useState("")
  const [interimTranscript, setInterimTranscript] = useState("")
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  const [voices, setVoices] = useState<Voice[]>([])
  const [leftVoice, setLeftVoice] = useState<Voice | null>(null)
  const [rightVoice, setRightVoice] = useState<Voice | null>(null)

  const [index, setIndex] = useState<number>(0)
  const [hasPressedStart, setHasPressedStart] = useState<boolean>(false)
  const [showSettings, setShowSettings] = useState<boolean>(false)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [score, setScore] = useState<number>(0)

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices()
      const voiceList = availableVoices.map((voice) => ({
        name: voice.name,
        lang: voice.lang,
        voiceURI: voice.voiceURI,
      }))
      setVoices(voiceList.filter((voice) => !voice.name.toLowerCase().includes("microsoft")))

      // Set default voices if available
      if (voiceList.length > 0 && !leftVoice) {
        setLeftVoice(voiceList[0])
      }
      if (voiceList.length > 1 && !rightVoice) {
        setRightVoice(voiceList[1])
      }
    }

    loadVoices()
    speechSynthesis.addEventListener("voiceschanged", loadVoices)

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices)
    }
  }, [leftVoice, rightVoice])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

      if (!SpeechRecognition) {
        alert("Speech Recognition API not supported in this browser")
        return
      }

      const recognition = new SpeechRecognition()
      recognition.interimResults = true
      recognition.lang = "es-US"

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        let interim = ""
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptChunk = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            setFinalTranscript((prev) => prev + transcriptChunk + " ")
          } else {
            interim += transcriptChunk
          }
        }
        setInterimTranscript(interim)
      }

      recognition.onend = () => {
        if (isListening) {
          setIsListening(false)
        }
      }

      recognitionRef.current = recognition
    }
  }, [isListening])

  const speak = (text: string, voice: Voice | null) => {
    if (!voice) return

    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    const selectedVoice = speechSynthesis.getVoices().find((v) => v.voiceURI === voice.voiceURI)
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }
    speechSynthesis.speak(utterance)
  }

  const getLanguageName = (langCode: string) => {
    try {
      return new Intl.DisplayNames(["en"], { type: "language" }).of(langCode.split("-")[0]) || langCode
    } catch {
      return langCode
    }
  }

  const startListening = () => {
    if (recognitionRef.current) {
      setFinalTranscript("")
      setInterimTranscript("")
      setFeedback(null)
      recognitionRef.current.start()
      setIsListening(true)
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const checkPronunciation = () => {
    const spokenText = finalTranscript.trim().toLowerCase()
    const targetWord = CurrentSet.vocab[index][0].toLowerCase()

    // Simple similarity check - you can enhance this with more sophisticated algorithms
    const isCorrect = spokenText.includes(targetWord) || targetWord.includes(spokenText)

    setFeedback(isCorrect ? "correct" : "incorrect")

    if (isCorrect) {
      setScore((prev) => prev + 1)
      setTimeout(() => {
        nextWord()
      }, 1500)
    }
  }

  const nextWord = () => {
    if (index < CurrentSet.vocab.length - 1) {
      setIndex((prev) => prev + 1)
      setFinalTranscript("")
      setInterimTranscript("")
      setFeedback(null)
      setIsListening(false);

      speak(CurrentSet.vocab[index + 1][0], leftVoice);
    }
  }

  const resetPractice = () => {
    setIndex(0)
    setScore(0)
    setFinalTranscript("")
    setInterimTranscript("")
    setFeedback(null)
  }

  const progressPercentage = ((index + 1) / CurrentSet.vocab.length) * 100

  // Settings/Setup Screen
  if (!hasPressedStart || showSettings) {
    return (
      <div className="min-h-dvh p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <AudioWaveform className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-foreground">Speak It</h1>
            </div>
            <p className="text-muted-foreground text-md max-w-2xl mx-auto">
              Practice your pronunciation with AI-powered speech recognition. Speak clearly and get instant feedback on
              your vocabulary.
            </p>
          </div>

          {/* Voice Setup Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Target Language Voice */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                  <Volume2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Target Language</CardTitle>
                <CardDescription>Voice for "{CurrentSet.vocab[index][0]}"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select
                  value={leftVoice?.voiceURI || ""}
                  onValueChange={(value) => {
                    const selectedVoice = voices.find((v) => v.voiceURI === value)
                    if (selectedVoice) setLeftVoice(selectedVoice)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a voice..." />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {voices.map((v) => (
                      <SelectItem key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({getLanguageName(v.lang)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => speak(CurrentSet.vocab[index][0], leftVoice)}
                >
                  <Speaker className="w-4 h-4 mr-2" />
                  Test Voice
                </Button>
              </CardContent>
            </Card>

            {/* Native Language Voice */}
            <Card className="border-2 border-secondary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 p-3 bg-secondary/10 rounded-full w-fit">
                  <Volume2 className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Native Language</CardTitle>
                <CardDescription>Voice for "{CurrentSet.vocab[index][1]}"</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select
                  
                  value={rightVoice?.voiceURI || ""}
                  onValueChange={(value) => {
                    const selectedVoice = voices.find((v) => v.voiceURI === value)
                    if (selectedVoice) setRightVoice(selectedVoice)
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a voice..." />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {voices.map((v) => (
                      <SelectItem key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({getLanguageName(v.lang)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => speak(CurrentSet.vocab[index][1], rightVoice)}
                >
                  <Speaker className="w-4 h-4 mr-2" />
                  Test Voice
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => {
                setHasPressedStart(true)
                setShowSettings(false)
              }}
            >
              Start Practice
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Main Practice Screen
  return (
    <div className="min-h-dvh px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setShowSettings(true)}>
                <Settings className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                Score: {score}/{CurrentSet.vocab.length}
              </Badge>
              <Button variant="outline" size="sm" onClick={resetPractice}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>
                {index + 1} of {CurrentSet.vocab.length}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        {/* Main Practice Card */}
        <Card className="mb-6 border-2 border-primary/20">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => speak(CurrentSet.vocab[index][0], leftVoice)}
                className="flex items-center gap-2"
              >
                <Speaker className="w-4 h-4" />
                Listen
              </Button>
              <div className="text-center">
                <CardTitle className="text-4xl font-bold text-primary mb-2">{CurrentSet.vocab[index][0]}</CardTitle>
                <CardDescription className="text-lg">{CurrentSet.vocab[index][1]}</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => speak(CurrentSet.vocab[index][1], rightVoice)}
                className="flex items-center gap-2"
              >
                <Speaker className="w-4 h-4" />
                Meaning
              </Button>
            </div>
          </CardHeader>

          <CardContent className="text-center space-y-6">
            {/* Microphone Button */}
            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={isListening ? stopListening : startListening}
                size="lg"
                className={`
                  w-24 h-24 rounded-full transition-all duration-300 transform
                  ${
                    isListening
                      ? "bg-destructive hover:bg-destructive/90 scale-110 animate-pulse"
                      : "bg-primary hover:bg-primary/90 hover:scale-105"
                  }
                `}
              >
                {isListening ? <MicOff className="!w-16 !h-16" /> : <Mic className="!w-16 !h-16" />}
              </Button>

              <p className="text-sm text-muted-foreground">
                {isListening ? "Listening... Speak now!" : "Tap to start speaking"}
              </p>
            </div>

            {/* Speech Recognition Display */}
            {(finalTranscript || interimTranscript) && (
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">You said:</p>
                    <p className="text-lg font-medium">
                      {finalTranscript}
                      <span className="text-muted-foreground italic">{interimTranscript}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Feedback Display */}
            {feedback && (
              <div
                className={`flex items-center justify-center gap-3 p-4 rounded-lg ${
                  feedback === "correct" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                }`}
              >
                {feedback === "correct" ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-semibold">Excellent! Well done!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6" />
                    <span className="font-semibold">Try again! You can do it!</span>
                  </>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              {finalTranscript && !feedback && (
                <Button onClick={checkPronunciation} className="px-6">
                  Check Pronunciation
                </Button>
              )}

              {feedback === "incorrect" && (
                <Button variant="outline" onClick={nextWord} className="px-6 bg-transparent">
                  Skip Word
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Completion Message */}
        {index >= CurrentSet.vocab.length - 1 && feedback === "correct" && (
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
              <p className="text-muted-foreground mb-4">
                You've completed the vocabulary set with a score of {score}/{CurrentSet.vocab.length}
              </p>
              <Button onClick={resetPractice} size="lg">
                Practice Again
                <RotateCcw className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default SpeakIt
