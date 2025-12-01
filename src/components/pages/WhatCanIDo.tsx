import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { BrainCircuit, Gamepad2, Copy, FileQuestion, Plus } from "lucide-react";
  
  export default function WhatCanIDo() {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">What Can You Do?</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Our application is a powerful tool designed to help you learn and retain information effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FSRS Algorithm Card */}
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <BrainCircuit className="w-10 h-10 text-blue-500" />
                <div className="space-y-1">
                  <CardTitle>Optimized Learning with FSRS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We use the FSRS algorithm, a modern spaced repetition system, to schedule reviews at the perfect time to maximize your memory retention.
                </p>
              </CardContent>
            </Card>
  
            {/* Games Card */}
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Gamepad2 className="w-10 h-10 text-green-500" />
                <div className="space-y-1">
                  <CardTitle>Engaging Games</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Make learning fun! Challenge yourself with interactive games like &apos;Bomba&apos; that test your knowledge in a fast-paced, exciting way.
                </p>
              </CardContent>
            </Card>
  
            {/* Flashcards Card */}
            <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Copy className="w-10 h-10 text-yellow-500" />
                <div className="space-y-1">
                  <CardTitle>Classic Flashcards</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Create, manage, and review flashcards with ease. It&apos;s the classic, effective way to study and memorize terms and definitions.
                </p>
              </CardContent>
            </Card>

            {/* Quizzes Card */}
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <FileQuestion className="w-10 h-10 text-red-500" />
                <div className="space-y-1">
                  <CardTitle>Quizzes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Test your understanding and prepare for exams with our quiz feature. A great way to gauge your progress and identify areas for improvement.
                </p>
              </CardContent>
            </Card>

            {/* And More Card */}
            <Card className="border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Plus className="w-10 h-10 text-gray-500" />
                <div className="space-y-1">
                  <CardTitle>And More!</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Enjoy features like AI-powered set creation, file uploads, a library of premade sets, and a personalized study path to guide your learning journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
