import { cn } from "@/lib/utils"

export interface Step {
  label: string
  description?: string
}

interface StepsProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export function Steps({ steps, currentStep, className }: StepsProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isActive = stepNumber === currentStep
          const isUpcoming = stepNumber > currentStep

          return (
            <div key={index} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors",
                    isCompleted || isActive ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600",
                  )}
                >
                  {stepNumber}
                </div>

                {/* Step Label */}
                <div
                  className={cn(
                    "mt-2 text-sm font-medium",
                    isCompleted || isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {step.label}
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn("mx-2 h-0.5 flex-1 transition-colors", isCompleted ? "bg-indigo-600" : "bg-gray-200")}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
