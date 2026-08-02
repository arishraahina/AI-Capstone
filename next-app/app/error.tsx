'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App Error Boundary caught error:', error);
  }, [error]);

  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-3xl font-extrabold">
        ⚠️
      </div>

      <div className="max-w-md space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Something went wrong!
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {error.message || 'An unexpected error occurred while loading this page.'}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all"
        >
          Try Again
        </button>
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
