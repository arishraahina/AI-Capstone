'use client';

import { useState, useMemo } from 'react';
import { Task, Priority, TaskCategory } from '@/types/task';
import TaskCard from './TaskCard';

interface TaskFilterSearchProps {
  initialTasks: Task[];
}

export default function TaskFilterSearch({ initialTasks }: TaskFilterSearchProps) {
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Completed'>('All');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Toggle task status (Pending <-> Completed)
  const handleToggleStatus = (id: string) => {
    setTaskList((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
          : t
      )
    );
  };

  // Delete task
  const handleDeleteTask = (id: string) => {
    setTaskList((prev) => prev.filter((t) => t.id !== id));
  };

  // Filter tasks based on search, status, priority, and category
  const filteredTasks = useMemo(() => {
    return taskList.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'All' || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === 'All' || task.priority === priorityFilter;

      const matchesCategory =
        categoryFilter === 'All' || task.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
    });
  }, [taskList, searchQuery, statusFilter, priorityFilter, categoryFilter]);

  const categories: TaskCategory[] = [
    'Homework',
    'Exam Prep',
    'Project',
    'Reading',
    'Lab Report',
    'General',
  ];

  const priorities: Priority[] = ['High', 'Medium', 'Low'];

  const resetFilters = () => {
    setSearchQuery('');
    setStatusFilter('All');
    setPriorityFilter('All');
    setCategoryFilter('All');
  };

  return (
    <div className="space-y-8">
      {/* Search & Filters Panel */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks by title or keywords..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start lg:self-auto">
            {(['All', 'Pending', 'Completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  statusFilter === status
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

        </div>

        {/* Secondary Filter Dropdowns & Controls */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600">
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Priority Filter */}
            <div className="flex items-center gap-1.5">
              <span>Priority:</span>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="All">All Priorities</option>
                {priorities.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-1.5">
              <span>Category:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Results Summary & Clear Button */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 font-medium">
              Showing <strong className="text-blue-600">{filteredTasks.length}</strong> of {taskList.length} tasks
            </span>
            {(searchQuery || statusFilter !== 'All' || priorityFilter !== 'All' || categoryFilter !== 'All') && (
              <button
                onClick={resetFilters}
                className="text-blue-600 hover:text-blue-800 font-bold underline flex items-center gap-1"
              >
                Clear Filters
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Task Cards Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleStatus={handleToggleStatus}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto shadow-sm">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching tasks found</h3>
          <p className="text-sm text-slate-500 mt-1">
            Try adjusting your search keywords, priority, or status filters.
          </p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-xs shadow-md hover:bg-blue-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
