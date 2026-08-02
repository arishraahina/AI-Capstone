import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      {/* 404 Graphics */}
      <div className="relative">
        <span className="text-8xl font-black text-blue-100 select-none">404</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl font-extrabold shadow-lg">
            🔍
          </div>
        </div>
      </div>

      <div className="max-w-md space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Oops! The study page or resource you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
        >
          Return to Home Overview
        </Link>
        <Link
          href="/tasks"
          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
        >
          Go to Tasks Dashboard
        </Link>
      </div>
    </main>
  );
}
