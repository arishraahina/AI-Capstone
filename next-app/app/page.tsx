import { Metadata } from 'next';
import Link from 'next/link';
import StatCard from '@/components/StatCard';
import TaskCard from '@/components/TaskCard';
import { initialTasks } from '@/lib/sample-data';

export const metadata: Metadata = {
  title: 'Home - Student Task Tracker',
  description: 'Welcome to Student Task Tracker. Organize your daily study tasks, homework assignments, exams, and projects easily.',
};

export default function Home() {
  const totalCount = initialTasks.length;
  const completedCount = initialTasks.filter((t) => t.status === 'Completed').length;
  const pendingCount = initialTasks.filter((t) => t.status === 'Pending').length;

  // Grab top 3 high priority tasks for quick focus preview
  const featuredTasks = initialTasks.slice(0, 3);

  return (
    <main className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-blue-100 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Next.js 16 Powered Task Manager
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-md">
            Master Your Academic Goals with <span className="text-blue-200 underline decoration-blue-400 decoration-wavy">Student Task Tracker</span>
          </h1>

          <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-medium">
            Welcome! Effortlessly prioritize assignments, track upcoming exam prep, monitor project deadlines, and streamline your study schedule in one clean dashboard.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/tasks"
              className="px-6 py-3.5 rounded-xl bg-white text-blue-700 font-extrabold text-sm shadow-xl hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View All Tasks ({totalCount})
            </Link>

            <Link
              href="/add-task"
              className="px-6 py-3.5 rounded-xl bg-blue-500/40 hover:bg-blue-500/60 text-white font-extrabold text-sm border border-white/30 backdrop-blur-sm transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-lg font-bold">+</span> Add New Task
            </Link>

            <Link
              href="/health"
              className="px-5 py-3.5 rounded-xl text-blue-100 hover:text-white text-sm font-semibold hover:underline transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              API Health Check
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Stat Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Summary
          </h2>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Live Overview
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            type="total"
            title="Total Tasks"
            count={totalCount}
            description="Total items registered in system"
          />
          <StatCard
            type="completed"
            title="Completed Tasks"
            count={completedCount}
            description="Successfully finished study goals"
          />
          <StatCard
            type="pending"
            title="Pending Tasks"
            count={pendingCount}
            description="Active items requiring your focus"
          />
        </div>
      </section>

      {/* Featured Urgent Tasks Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Priority Tasks
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Top items scheduled for review.
            </p>
          </div>
          <Link
            href="/tasks"
            className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group"
          >
            Explore Dashboard 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>

      {/* Quick App Feature Highlights */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <h3 className="font-bold text-slate-900 text-base">Instant Task Filtering</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Filter tasks by status, search key terms, and sort by subject categories effortlessly.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
            🚀
          </div>
          <h3 className="font-bold text-slate-900 text-base">Server Components</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Built with Next.js 16 App Router for maximum speed, fast initial loads, and clean SEO.
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
            📱
          </div>
          <h3 className="font-bold text-slate-900 text-base">Fully Responsive UI</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Optimized for seamless experience across mobile devices (375px) up to high-res displays (1280px+).
          </p>
        </div>
      </section>
    </main>
  );
}