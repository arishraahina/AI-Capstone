import { Task } from '@/types/task';

interface TaskCardProps {
  task: Task;
  onToggleStatus?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function TaskCard({ task, onToggleStatus, onDelete }: TaskCardProps) {
  const isCompleted = task.status === 'Completed';

  const priorityStyles = {
    High: 'bg-rose-100 text-rose-700 border-rose-200',
    Medium: 'bg-amber-100 text-amber-700 border-amber-200',
    Low: 'bg-sky-100 text-sky-700 border-sky-200',
  }[task.priority];

  const categoryStyles = {
    Homework: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    'Exam Prep': 'bg-purple-50 text-purple-700 border-purple-100',
    Project: 'bg-blue-50 text-blue-700 border-blue-100',
    Reading: 'bg-teal-50 text-teal-700 border-teal-100',
    'Lab Report': 'bg-cyan-50 text-cyan-700 border-cyan-100',
    General: 'bg-slate-100 text-slate-700 border-slate-200',
  }[task.category] || 'bg-slate-100 text-slate-700 border-slate-200';

  return (
    <div className={`group bg-white rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden ${
      isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200/80 hover:border-blue-300'
    }`}>
      {/* Top Accent Stripe */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${
        isCompleted ? 'bg-emerald-500' : task.priority === 'High' ? 'bg-rose-500' : task.priority === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
      }`} />

      <div>
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Priority Badge */}
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${priorityStyles}`}>
              {task.priority} Priority
            </span>
            {/* Category Badge */}
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${categoryStyles}`}>
              {task.category}
            </span>
          </div>

          {/* Status Badge */}
          <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border shadow-2xs ${
            isCompleted 
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
              : 'bg-amber-100 text-amber-800 border-amber-300'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-600' : 'bg-amber-600 animate-pulse'}`} />
            {task.status}
          </span>
        </div>

        {/* Task Title */}
        <h3 className={`text-lg font-bold text-slate-900 leading-snug ${isCompleted ? 'line-through text-slate-500' : ''}`}>
          {task.title}
        </h3>

        {/* Task Description */}
        <p className="mt-2 text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {task.description}
        </p>
      </div>

      {/* Footer Info & Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs font-medium text-slate-500">
        {/* Due Date */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Due: <strong className="text-slate-700">{task.dueDate}</strong></span>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex items-center gap-1.5">
          {onToggleStatus && (
            <button
              onClick={() => onToggleStatus(task.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-colors flex items-center gap-1 shadow-2xs ${
                isCompleted 
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              title={isCompleted ? 'Mark as Pending' : 'Mark as Completed'}
            >
              {isCompleted ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  Reopen
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </>
              )}
            </button>
          )}

          {onDelete && (
            <button
              onClick={() => onDelete(task.id)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              title="Delete task"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
