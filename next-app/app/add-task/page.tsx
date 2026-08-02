import { Metadata } from 'next';
import TaskForm from '@/components/TaskForm';

export const metadata: Metadata = {
  title: 'Add Task - Student Task Tracker',
  description: 'Create and add a new study task, homework assignment, or exam prep item to your schedule.',
};

export default function AddTaskPage() {
  return (
    <main className="space-y-8 max-w-4xl mx-auto">
      {/* Page Title & Intro */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Add a New Study Task
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          Keep your schedule organized by logging new assignments, lab reports, or upcoming exam preparation deadlines.
        </p>
      </div>

      {/* Client Component Interactive Task Form */}
      <TaskForm />

      {/* Helpful Tips Banner */}
      <div className="bg-blue-50/80 rounded-2xl border border-blue-200/80 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-blue-900">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
          💡
        </div>
        <div>
          <h4 className="font-bold text-sm text-blue-950">Effective Task Setting Tip</h4>
          <p className="mt-0.5 text-blue-800 leading-relaxed">
            Assign realistic due dates and mark urgent assignments with High priority to ensure you never miss a submission deadline.
          </p>
        </div>
      </div>
    </main>
  );
}