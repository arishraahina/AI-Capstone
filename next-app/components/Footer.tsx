import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Student Task Tracker
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering students to stay organized, prioritize academic tasks, and conquer study goals with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/tasks" className="hover:text-blue-400 transition-colors">
                  All Tasks Dashboard
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-400 transition-colors">
                  Create New Task
                </Link>
              </li>
              <li>
                <Link href="/health" className="hover:text-blue-400 transition-colors">
                  System Health Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Pages */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Information
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About App & Stack
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Next.js 16 App Router</span>
              </li>
              <li>
                <span className="text-slate-500">Tailwind CSS v4</span>
              </li>
            </ul>
          </div>

          {/* Student Productivity Tip */}
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Student Study Tip
            </h4>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              &quot;Break large assignments into bite-sized subtasks and tackle high-priority items first during your peak energy hours!&quot;
            </p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Student Task Tracker. Built with Next.js 16 & Tailwind CSS.</p>
          <div className="flex items-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
