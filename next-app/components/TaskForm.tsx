'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Priority, TaskCategory } from '@/types/task';

export default function TaskForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium' as Priority,
    category: 'Homework' as TaskCategory,
    dueDate: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.title.trim()) {
      setErrorMsg('Please enter a task title.');
      return;
    }

    if (!formData.dueDate) {
      setErrorMsg('Please select a due date.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(true);

      // Reset form after short delay and optional redirect
      setTimeout(() => {
        setSuccessMessage(false);
        router.push('/tasks');
      }, 1500);
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
          +
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Create New Task</h2>
          <p className="text-sm text-slate-500">Fill in details below to add a task to your study schedule.</p>
        </div>
      </div>

      {/* Success Notification Alert */}
      {successMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fadeIn">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <h4 className="font-bold text-sm">Task Added Successfully!</h4>
            <p className="text-xs text-emerald-700">Redirecting to your tasks dashboard...</p>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {errorMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-center gap-2">
          <span>⚠️</span> {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-slate-700 mb-2">
            Task Title <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Complete Chapter 3 Calculus Exercises"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            placeholder="Add relevant notes, links, or specific instructions for this task..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 resize-none"
          />
        </div>

        {/* Priority & Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Priority Selection */}
          <div>
            <label htmlFor="priority" className="block text-sm font-bold text-slate-700 mb-2">
              Priority Level
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            >
              <option value="High">🔴 High Priority</option>
              <option value="Medium">🟡 Medium Priority</option>
              <option value="Low">🔵 Low Priority</option>
            </select>
          </div>

          {/* Category Selection */}
          <div>
            <label htmlFor="category" className="block text-sm font-bold text-slate-700 mb-2">
              Course / Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            >
              <option value="Homework">Homework Assignment</option>
              <option value="Exam Prep">Exam / Quiz Prep</option>
              <option value="Project">Course Project</option>
              <option value="Reading">Required Reading</option>
              <option value="Lab Report">Lab Report</option>
              <option value="General">General Study</option>
            </select>
          </div>

        </div>

        {/* Due Date Input */}
        <div>
          <label htmlFor="dueDate" className="block text-sm font-bold text-slate-700 mb-2">
            Due Date <span className="text-rose-500">*</span>
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/tasks')}
            className="px-6 py-3 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Saving Task...
              </>
            ) : (
              'Add Task to Tracker'
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
