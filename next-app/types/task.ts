export type Priority = 'High' | 'Medium' | 'Low';
export type TaskStatus = 'Pending' | 'Completed';
export type TaskCategory = 'Homework' | 'Exam Prep' | 'Project' | 'Reading' | 'Lab Report' | 'General';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  category: TaskCategory;
  dueDate: string;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
  category: TaskCategory;
  dueDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
