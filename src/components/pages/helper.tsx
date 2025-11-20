import React from 'react';
import { ScrollArea } from '../ui/scroll-area';

export default function HelperPage() {
  return (
    <div className="min-h-screen  py-10 px-4 sm:px-10">
    <div className="max-w-3xl dark:text-black text-white mx-auto dark:bg-white bg-black rounded-xl shadow-md p-8 space-y-6">
      <h1 className="text-3xl font-bold text-orange-500">📘 How to Use FlashcardIt to Study</h1>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🔗 Step 1 — Open the study set</h2>
        <p>Go to the link your teacher shared with you.</p>
        <p className="text-blue-600 underline">
          Example: <a href="https://flashcardit.vercel.app/ap-tema-1-las-familias-y-las-comunidades" target="_blank" rel="noopener noreferrer">https://flashcardit.vercel.app/ap-tema-1-las-familias-y-las-comunidades</a>
        </p>
        <p>The page will load a set of flashcards (for example, Topic 1).</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">🧠 Step 2 — Choose a study mode</h2>
        <p>At the top of the page, you’ll see a menu labeled “Study.” Click there to choose one of the following modes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Study</strong> – Go through the flashcards one by one and click to flip them.</li>
          <li><strong>Quiz</strong> – Test your knowledge with multiple-choice or written-answer questions.</li>
          <li><strong>Speak It</strong> – Practice pronunciation by saying the answers out loud.</li>
          <li><strong>Picture Match</strong> – Match terms with visual meanings (if the set supports it).</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">💡 Step 3 — Navigate through the flashcards</h2>
        <p>Use the → (right arrow) to go to the next card.</p>
        <p>Use the ← (left arrow) to go back to the previous card.</p>
        <p>At the bottom, you’ll see a counter (e.g., 1/59) that shows your progress. Hover over the counter to see all the words.</p>
        <p>Click a card to flip it and see the answer.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">📝 Helpful Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Use Study to review and memorize terms.</li>
          <li>Switch to Quiz or Speak It to practice and check your learning.</li>
          <li>Try Picture Match if you’re more of a visual learner.</li>
          <li>Study every day — spaced repetition helps you remember longer.</li>
        </ul>
      </section>
    </div>
  </div>
  );
};