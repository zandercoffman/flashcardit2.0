"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BookOpenCheck,
  BrainCircuit,
  Mouse,
  Lightbulb,
  Sparkles,
  Gamepad2,
  FileQuestion,
  BookCopy,
  Languages
} from 'lucide-react';

export default function HelperPage() {
  return (
    <ScrollArea className="h-[85vh] w-full">
      <div className="container mx-auto py-10 px-4 sm:px-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">
            Welcome to Your Study Hub
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here&apos;s a quick guide to help you get the most out of our powerful learning tools. Let&apos;s get started!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1: Open a Study Set */}
          <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-cyan-700 dark:text-cyan-300">
                <BookOpenCheck className="h-8 w-8" />
                <span className="text-xl font-semibold">Step 1: Open a Study Set</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-cyan-800 dark:text-cyan-200">
              <p>To begin, simply open a study set. You can either choose from our premade library or create your own.</p>
              <p className="font-semibold">Look for links shared by your teacher or browse the dashboard for available sets.</p>
            </CardContent>
          </Card>

          {/* Step 2: Choose a Study Mode */}
          <Card className="border-lime-200 bg-lime-50 dark:border-lime-800 dark:bg-lime-950 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lime-700 dark:text-lime-300">
                <BrainCircuit className="h-8 w-8" />
                <span className="text-xl font-semibold">Step 2: Choose a Study Mode</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-lime-800 dark:text-lime-200">
              <p>At the top of each set, you&apos;ll find a “Study” menu. Click it to explore different ways to learn:</p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex items-center gap-2"><BookCopy className="h-5 w-5 text-lime-600 dark:text-lime-400" /> <strong>Study:</strong> Classic flashcard review.</li>
                <li className="flex items-center gap-2"><FileQuestion className="h-5 w-5 text-lime-600 dark:text-lime-400" /> <strong>Quiz:</strong> Test yourself with questions.</li>
                <li className="flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-lime-600 dark:text-lime-400" /> <strong>Bomba:</strong> A fast-paced game challenge.</li>
                <li className="flex items-center gap-2"><Languages className="h-5 w-5 text-lime-600 dark:text-lime-400" /> <strong>Speak It:</strong> Practice your pronunciation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Step 3: Navigate and Interact */}
          <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-700 dark:text-purple-300">
                <Mouse className="h-8 w-8" />
                <span className="text-xl font-semibold">Step 3: Navigate & Interact</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-purple-800 dark:text-purple-200">
              <p>Getting around is easy:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the <strong>→ and ← arrow keys</strong> to move between cards.</li>
                <li><strong>Click a card</strong> to flip it over and reveal the answer.</li>
                <li>Keep an eye on the <strong>progress counter</strong> at the bottom to see how far you&apos;ve come.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Helpful Tips */}
          <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-yellow-700 dark:text-yellow-300">
                <Lightbulb className="h-8 w-8" />
                <span className="text-xl font-semibold">Helpful Tips for Success</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-yellow-800 dark:text-yellow-200">
                <p>Maximize your learning with these strategies:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Mix it up:</strong> Switch between different study modes to keep things interesting.</li>
                    <li><strong>Consistency is key:</strong> Our FSRS algorithm works best when you study regularly.</li>
                    <li><strong>Practice makes perfect:</strong> Use the &quot;Speak It&quot; mode to improve pronunciation and recall.</li>
                </ul>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Features Section */}
        <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6 flex items-center justify-center gap-3">
                <Sparkles className="h-8 w-8 text-indigo-500"/>
                Advanced Features
            </h2>
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ready to take your learning to the next level? Create your own sets using our AI generator, upload from a file, or build them manually for a truly customized experience.
            </p>
        </div>
      </div>
    </ScrollArea>
  );
}
