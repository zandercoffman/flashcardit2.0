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
            {/* Study Path Mode Card */}
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Star className="w-10 h-10 text-green-500" />
                <div className="space-y-1">
                  <CardTitle>Study Path Mode Progress</CardTitle>
                  <CardDescription>
                    Your learning journey just got clearer.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We've made significant progress on the Study Path Mode. You can
                  now track your progress as you move through your personalized
                  study plan. More exciting features are coming to this mode
                  soon!
                </p>
              </CardContent>
            </Card>
  
            {/* Bomba Card */}
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Zap className="w-10 h-10 text-red-500" />
                <div className="space-y-1">
                  <CardTitle>Bomba is Live!</CardTitle>
                  <CardDescription>
                    A thrilling new way to test your knowledge.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Introducing Bomba! A fast-paced quiz mode where you have to
                  answer questions before the bomb "explodes". It's a fun and
                  engaging way to challenge yourself and master your study sets.
                </p>
              </CardContent>
            </Card>
  
            {/* General UI Improvements Card */}
            <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <Check className="w-10 h-10 text-blue-500" />
                <div className="space-y-1">
                  <CardTitle>General UI Improvements</CardTitle>
                  <CardDescription>
                    A smoother and more intuitive experience.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We've polished the user interface to make your study sessions
                  more enjoyable. This includes better layouts, clearer
                  instructions, and a more responsive design across all devices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
