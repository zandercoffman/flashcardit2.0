import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Check, Star, Zap } from "lucide-react";
  
  export default function VersionInfo({ version }: { version: string }) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Version {version} is Here!</h1>
            <p className="text-lg text-muted-foreground mb-10">
              Check out the latest updates and improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Show All Words Menu Card */}
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Star className="w-10 h-10 text-green-500" />
                <div className="space-y-1">
                  <CardTitle>Show All Words Menu</CardTitle>
                  <CardDescription>
                    See your full word list at a glance.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  A new “Show All Words” menu lets you quickly browse every term
                  in your set without flipping through cards one by one.
                </p>
              </CardContent>
            </Card>

            {/* Spanish Conjugations Menu Card */}
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Zap className="w-10 h-10 text-red-500" />
                <div className="space-y-1">
                  <CardTitle>Spanish Conjugations Menu</CardTitle>
                  <CardDescription>
                    Fast access to verb forms.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  The new Spanish conjugations menu makes it easy to review verb
                  forms and study Spanish more efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Open in ChatGPT Card */}
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Check className="w-10 h-10 text-blue-500" />
                <div className="space-y-1">
                  <CardTitle>Open Cards in ChatGPT</CardTitle>
                  <CardDescription>
                    Continue studying with AI.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  A new ChatGPT shortcut opens your cards in ChatGPT so you can
                  ask questions, get explanations, and practice interactively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
