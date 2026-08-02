export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse max-w-7xl mx-auto py-6">
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-8 w-64 bg-slate-200 rounded-xl" />
        <div className="h-4 w-96 bg-slate-200 rounded-lg" />
      </div>

      {/* Hero / Stat skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-32 bg-slate-200 rounded-2xl" />
        <div className="h-32 bg-slate-200 rounded-2xl" />
        <div className="h-32 bg-slate-200 rounded-2xl" />
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 bg-slate-200 rounded-2xl" />
        <div className="h-64 bg-slate-200 rounded-2xl" />
        <div className="h-64 bg-slate-200 rounded-2xl" />
      </div>

      {/* Loading Spinner Text */}
      <div className="flex items-center justify-center gap-3 pt-6">
        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-semibold text-slate-500">Loading Student Task Tracker...</span>
      </div>
    </div>
  );
}
