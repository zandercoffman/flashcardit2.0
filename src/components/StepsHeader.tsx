/**
 * v0 by Vercel.
 * @see https://v0.app/t/R4ytiDFCBew
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function StepsHeader({
  steps,
  currentStep
}: {
  steps: { label: string }[]
  currentStep: number
}) {
  return (
    <div className="flex flex-row w-min gap-2 items-center justify-between w-full px-4 py-6">
      {
        steps.map((step, idx) => {
          return <>
            {
              idx + 1 < currentStep ? <>
                <div className="flex items-center space-x-2">
                  <div className="min-w-8 min-h-8 rounded-full dark:bg-white bg-black flex items-center justify-center dark:text-black text-white font-bold">{idx + 1}</div>
                  <div className="text-sm font-semibold">{step.label}</div>
                </div>
                {
                  idx < steps.length - 1 && <div className="w-14 h-1 rounded-xl dark:bg-white bg-black" />
                }
              </> : <>
                <div className="flex  !dark:text-gray-200 items-center space-x-2">
                  <div className="min-w-8 min-h-8 rounded-full  bg-white dark:bg-gray-900 flex items-center justify-center text-black dark:text-gray-200 font-bold">{idx + 1}</div>
                  <div className="text-sm font-semibold dark:text-gray-200">{step.label}</div>
                </div>
                {
                  idx < steps.length - 1 && <div className="w-14 h-1 rounded-xl bg-white dark:bg-gray-900" />
                }
              </>
            }
          </>
        })
      }

    </div>
  )
}