export default function Loader() {
    return (
      <div className="flex flex-col items-center justify-center min-h-dvh bg-background">
        <div className="relative">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
  
        {/* Loading text */}
        <p className="mt-4 text-lg font-medium text-foreground animate-pulse">Loading...</p>
  
        {/* Screen reader text */}
        <span className="sr-only">Content is loading, please wait</span>
      </div>
    )
  }
  