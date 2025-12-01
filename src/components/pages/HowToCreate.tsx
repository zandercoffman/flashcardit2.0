import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wand2, PenSquare, UploadIcon } from "lucide-react";

export default function HowToCreate() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          3 Ways to Create a Study Set
        </h2>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Generate with AI Card */}
          <Card className="h-full w-full border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <Wand2 className="w-10 h-10 text-purple-500" />
              <div className="space-y-1">
                <CardTitle>Generate with AI</CardTitle>
                <CardDescription>
                  Let AI do the heavy lifting for you.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Go to the "Generate with AI" tab. Copy our custom prompt and
                paste it into your favorite AI assistant (like ChatGPT or
                Claude) along with your notes or any text. Paste the AI's JSON
                output back into our app to instantly create your set.
              </p>
            </CardContent>
          </Card>

          {/* Upload JSON File Card */}
          <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <UploadIcon className="w-10 h-10 text-blue-500" />
              <div className="space-y-1">
                <CardTitle>Upload a File</CardTitle>
                <CardDescription>
                  Use your existing JSON flashcard files.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                If you already have a study set in a valid JSON format, simply
                go to the "Upload JSON File" tab. Drag and drop your file to
                load it into the app and start studying right away.
              </p>
            </CardContent>
          </Card>

          {/* Manual Creation Card */}
          <Card className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <CardHeader className="flex flex-row items-start gap-4 space-y-0">
              <PenSquare className="w-10 h-10 text-orange-500" />
              <div className="space-y-1">
                <CardTitle>Create Manually</CardTitle>
                <CardDescription>
                  For when you know exactly what you need.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Switch to the "Create Manually" tab. Give your set a title,
                then type your terms and definitions. Each new line should
                contain one pair separated by a comma (e.g., "Hello, Hola").
                It's simple, direct, and gives you full control.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
