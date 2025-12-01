import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Bot, Upload, PenSquare, Brain } from "lucide-react";
  
  export default function WhatMethodsDoYouUse() {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Our Methods</h1>
            <p className="text-lg text-muted-foreground mb-10">
              We offer several ways to create and study your sets, tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* AI Generation Card */}
            <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Bot className="w-10 h-10 text-cyan-500" />
                <div className="space-y-1">
                  <CardTitle>AI-Powered Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Harness the power of AI to create flashcard sets for you. Simply provide a topic or a block of text, and our AI assistant will generate a set of terms and definitions for you. It&apos;s the fastest way to get started.
                </p>
              </CardContent>
            </Card>
  
            {/* File Upload Card */}
            <Card className="border-lime-200 bg-lime-50 dark:border-lime-800 dark:bg-lime-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Upload className="w-10 h-10 text-lime-500" />
                <div className="space-y-1">
                  <CardTitle>Upload from File</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Already have your study materials? You can easily upload them into the app. We currently support JSON files, allowing you to bring in your existing sets from other platforms or from your own files.
                </p>
              </CardContent>
            </Card>
  
            {/* Manual Creation Card */}
            <Card className="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <PenSquare className="w-10 h-10 text-pink-500" />
                <div className="space-y-1">
                  <CardTitle>Manual Creation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  For ultimate control and customization, you can create your flashcard sets manually. Enter each term and definition one by one to ensure your study set is exactly how you want it. Perfect for detailed and personalized learning.
                </p>
              </CardContent>
            </Card>

            {/* FSRS Algorithm Card */}
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Brain className="w-10 h-10 text-blue-500" />
                <div className="space-y-1">
                  <CardTitle>Spaced Repetition (FSRS)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  To optimize your learning, we use the FSRS (Free Spaced Repetition Scheduler) algorithm. This modern, open-source algorithm schedules card reviews at the optimal time to enhance long-term memory retention, ensuring your study sessions are as effective as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
