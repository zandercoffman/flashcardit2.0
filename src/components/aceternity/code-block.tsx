/* eslint-disable */
import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { ScrollArea } from "@/components/ui/scroll-area";

// Simple CSS spinner style
const Spinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white/40 dark:bg-black/30 z-10">
    <div className="w-12 h-12 border-4 border-t-transparent border-gray-500 rounded-full animate-spin" />
  </div>
);


interface CodeBlockProps {
  language: string;
  filename?: string;
  highlightLines?: number[];
  code: string;
  scrollSpeed?: number;
  isScrolling: boolean;
  setIsScrolling: Function
}

const CodeBlock = forwardRef<any, CodeBlockProps>(({
  language,
  filename,
  highlightLines = [],
  code,
  scrollSpeed = 5,
  isScrolling,
  setIsScrolling
}, ref) => {
  const codeRef = useRef<HTMLPreElement | null>(null);
  const [blurValue, setBlurValue] = useState(0);
  
  useImperativeHandle(ref, () => ({
    scrollToNext: () => {
      if (codeRef.current) {
        setBlurValue(5);
        setIsScrolling(true); // Start spinner

        const scrollHeight = codeRef.current.scrollHeight;
        const clientHeight = codeRef.current.clientHeight;
        const maxScroll = scrollHeight - clientHeight;

        const interval = setInterval(() => {
          const currentScroll = codeRef.current?.scrollTop || 0;
          if (currentScroll < maxScroll && codeRef.current) {
            codeRef.current.scrollTop = currentScroll + 2;
          } else {
            setBlurValue(0);
            setIsScrolling(false); // Stop spinner
            clearInterval(interval);
          }
        }, scrollSpeed);
      }
    },
  }));

  return (
    <div className="relative rounded-lg border overflow-hidden bg-gray-50 dark:bg-gray-900">
      {filename && (
        <div className="px-4 py-2 border-b bg-gray-100 dark:bg-gray-800 flex items-center">
          <span className="text-sm font-mono text-gray-600 dark:text-gray-300 overflow-hidden whitespace-nowrap truncate">{filename}</span>
        </div>
      )}

      {/* Spinner overlay */}
      {isScrolling && <Spinner />}

      <motion.div
        className="p-4 overflow-x-hidden"
        animate={{
          filter: `blur(${blurValue}px)`,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <ScrollArea className="max-h-[400px]">
          <pre
            ref={codeRef}
            className="text-sm"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {code.split("\n").map((line, i) => (
              <div
                key={i}
                className={cn(
                  "px-2 py-0.5 font-mono",
                  highlightLines.includes(i + 1) && "bg-yellow-100 dark:bg-yellow-900/20"
                )}
              >
                <span className="mr-4 inline-block w-5 text-right text-gray-400">{i + 1}</span>
                {line || " "}
              </div>
            ))}
          </pre>
        </ScrollArea>
      </motion.div>
    </div>
  );
});

export { CodeBlock };
