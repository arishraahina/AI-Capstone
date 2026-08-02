import { Metadata } from 'next';
import TaskFilterSearch from '@/components/TaskFilterSearch';
import { initialTasks } from '@/lib/sample-data';

export const metadata: Metadata = {
  title: 'Tasks Dashboard - Student Task Tracker',
  description: 'View, search, filter, and manage all your student study tasks, homework assignments, and exam prep.',
};

export default function TasksPage() {
  return (
    <main className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            All Student Tasks
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Search, filter by status or priority, and keep track of your daily study workload.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
            {initialTasks.length} Sample Tasks Loaded
          </span>
        </div>
      </div>

      {/* Task Search & Filter Grid Component */}
      <TaskFilterSearch initialTasks={initialTasks} />
    </main>
  );
}
