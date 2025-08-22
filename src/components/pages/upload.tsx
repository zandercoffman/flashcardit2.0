// eslint-disable-next-line @typescript-eslint/no-explicit-any
"use client";
import React, { useState, useRef } from "react";
import { FileUpload } from "../aceternity/file-upload";
import { motion } from "framer-motion";
import { CodeBlock } from "../aceternity/code-block"; // Assuming CodeBlock is in this path
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";

export default function Upload({
  addSet
}:{
  addSet: Function
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<
    { name: string; vocab: [string, string][] }[]
  >([]);
  const codeBlockRef = useRef<any>(null); // Ref to control CodeBlock's scroll
  const [isScrolling, setIsScrolling] = useState(false); // NEW: Track if scrolling is active

  // Handling multiple file uploads
  const handleFileUpload = (theseFiles: File[]) => {
    setFiles(theseFiles);

    theseFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        try {
          // Parse the content as JSON
          const parsedContent = JSON.parse(reader.result as string);

          // Add the file name and its vocab to the uploadedFiles state
          setUploadedFiles((prevState) => [
            ...prevState,
            { name: parsedContent?.title || "Default Vocab Set", vocab: parsedContent?.vocab || [] },
          ]);
         
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };

      reader.readAsText(file);
    });
  };

  // Prepare combined output for display
  const combinedVocab = uploadedFiles.reduce(
    (acc, file) => [...acc, ...file.vocab],
    [] as [string, string][]
  );

  const combinedFileName = "Combined Files";

  // Function to trigger scrolling of the CodeBlock
  const handleScrollDown = () => {
    if (codeBlockRef.current) {
      codeBlockRef.current.scrollToNext();
    }
  };

  const addFilesToNew = () => {
    uploadedFiles.forEach((file) => {
      addSet({title: file.name, vocab: file.vocab});
    });
  }

  return (
    <div className="w-full flex flex-row justify-center items-center max-w-4xl mx-auto min-h-96 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <div className="flex flex-col gap-2">
        <FileUpload onChange={handleFileUpload} />
        {uploadedFiles.length > 0 && 
          <Button 
          variant="outline" 
          className="w-[60%] mx-auto"
          onClick={() => {
            addFilesToNew();      
          }}>
            Start Studying
          </Button>
        } 
      </div>
    </div>
  );
}
