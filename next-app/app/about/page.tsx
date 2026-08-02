import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Student Task Tracker',
  description: 'Learn about Student Task Tracker, its purpose, tech stack, and key features built for modern academic productivity.',
};

export default function AboutPage() {
  const techStack = [
    { name: 'Next.js 16', desc: 'App Router architecture with Server Components by default for optimal performance.', icon: '⚛️' },
    { name: 'TypeScript', desc: 'Strict type safety ensuring reliability across components and task data models.', icon: '📘' },
    { name: 'Tailwind CSS v4', desc: 'Modern utility-first styling with custom blue design tokens and responsive layouts.', icon: '🎨' },
    { name: 'React 19', desc: 'Latest UI library powering seamless interactive client components.', icon: '🚀' },
  ];

  const features = [
    { title: 'Interactive Task Management', desc: 'Filter tasks by status (Pending/Completed), priority levels (High/Medium/Low), and categories.' },
    { title: 'API Integration & Health Monitoring', desc: 'Server Component data fetching with live external JSONPlaceholder status verification.' },
    { title: 'Responsive Mobile-First UI', desc: 'Fully optimized for small mobile viewports (375px) up to large desktops (1280px+).' },
    { title: 'Fast & Lightweight', desc: 'Minimal client JS footprint using Server Components for speed and instant load times.' },
  ];

  return (
    <main className="space-y-12 max-w-5xl mx-auto">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
          About the Application
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Designed for Student Productivity & Academic Success
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Student Task Tracker is a beginner-friendly full-stack web application designed to help students organize daily course workloads, keep track of assignment deadlines, and maintain focus.
        </p>
      </div>

      {/* App Mission Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
        <div className="space-y-4 flex-1">
          <h2 className="text-2xl font-extrabold tracking-tight">Our Mission</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Managing university or school assignments across multiple subjects can be overwhelming. This project provides a clean, distraction-free environment to log tasks, categorize them by course, set priorities, and celebrate completed milestones.
          </p>
          <div className="pt-2">
            <Link
              href="/add-task"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition-colors"
            >
              Start Tracker Now →
            </Link>
          </div>
        </div>
        <div className="w-full md:w-64 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-2">
          <div className="text-4xl">🎓</div>
          <div className="text-2xl font-black">100% Free</div>
          <div className="text-xs text-blue-200">Built for Students & Educators</div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Built with Modern Tech Stack
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Leveraging modern web standards and Next.js 16 best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="text-3xl">{tech.icon}</div>
              <h3 className="font-bold text-slate-900 text-base">{tech.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight text-center">
          Key Features & Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-extrabold flex items-center justify-center shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}