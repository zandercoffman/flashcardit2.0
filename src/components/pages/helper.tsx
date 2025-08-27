import React from 'react';
import { ScrollArea } from '../ui/scroll-area';

export default function HelperPage() {
  return (
    <ScrollArea className="h-[calc(100%-5rem)] w-[90%] flex items-center flex-col mx-auto">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What is Flashcard/It?
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Flashcard/It is a virtual tool that turns study materials (PDFs, slides, vocab lists, etc.) into interactive flashcards. It auto-generates a JSON file for instant use in the app, offering Study Mode (flip cards) and Multiple Choice Mode (quizzes) to make review faster and easier for students.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        How does it work?
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        All sets are stored in a .json file that follows a specific interface (a predefined output that a file should be). The set is AI-generated (e.g., by ChatGPT), and once uploaded, the program automatically processes it—no extra setup needed.
      </p>
    </ScrollArea>
  );
};