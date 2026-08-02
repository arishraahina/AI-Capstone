import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health Check - Student Task Tracker',
  description: 'Server Component system health check fetching live todo endpoint data from JSONPlaceholder API.',
};

interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function HealthPage() {
  let todoData: TodoData | null = null;
  let errorMsg = '';
  let statusCode = 200;

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      cache: 'no-store',
    });
    if (!res.ok) {
      statusCode = res.status;
      throw new Error(`API responded with status code ${res.status}`);
    }
    todoData = await res.json();
  } catch (err: unknown) {
    statusCode = 500;
    errorMsg = err instanceof Error ? err.message : 'Failed to fetch API data.';
  }

  return (
    <main className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            System Health Check
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Server Component
            </span>
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Server-side data fetch test querying external JSONPlaceholder REST endpoint.
          </p>
        </div>

        <Link
          href="/"
          className="self-start sm:self-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {todoData ? (
        <div className="space-y-6">
          {/* Success Banner */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 text-emerald-900 flex items-start gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-md">
              ✓
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-emerald-950">Success Message</h2>
              <p className="text-sm text-emerald-800 mt-0.5">
                Data fetched successfully from external JSONPlaceholder server!
              </p>
              <p className="text-xs text-emerald-700 mt-2 font-mono bg-emerald-100/80 px-2.5 py-1 rounded-lg inline-block">
                Endpoint: https://jsonplaceholder.typicode.com/todos/1
              </p>
            </div>
          </div>

          {/* Response Metrics Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Metric 1: API Status */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">API Status</div>
                <div className="text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                  {statusCode} OK
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                HTTP
              </div>
            </div>

            {/* Metric 2: Todo ID */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Todo ID</div>
                <div className="text-2xl font-extrabold text-blue-600 mt-1 font-mono">
                  #{todoData.id}
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                ID
              </div>
            </div>

            {/* Metric 3: Todo Title */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sm:col-span-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Fetched Todo Title</div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-slate-900 font-medium text-base">
                &quot;{todoData.title}&quot;
              </div>
            </div>

            {/* Metric 4: Completed Status */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sm:col-span-2 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed Status</div>
                <div className="text-lg font-bold text-slate-900 mt-1 flex items-center gap-2">
                  {todoData.completed ? (
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
                      Completed (true)
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-300">
                      Pending (false)
                    </span>
                  )}
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                User ID: {todoData.userId}
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* Error State */
        <div className="bg-rose-50 border border-rose-200 rounded-3xl p-8 text-rose-900 space-y-4">
          <h2 className="text-xl font-extrabold text-rose-950">API Health Check Failed</h2>
          <p className="text-sm text-rose-800">{errorMsg}</p>
          <p className="text-xs text-rose-600">Please check your internet connection or try again later.</p>
        </div>
      )}
    </main>
  );
}