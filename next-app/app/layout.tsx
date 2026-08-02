import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Student Task Tracker',
    template: '%s | Student Task Tracker',
  },
  description: 'A modern Next.js 16 student task tracking application designed for managing homework, exams, projects, and study schedules efficiently.',
  keywords: ['Student Task Tracker', 'Next.js 16', 'Study Planner', 'Homework Manager', 'Tailwind CSS'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}