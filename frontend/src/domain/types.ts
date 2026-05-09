export type TaskStatus = 'todo' | 'doing' | 'done';

export interface Task {
  id: string;
  teamId: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  createdAt: string;
  tasks?: Task[];
}

export interface User {
  id: string;
  email: string;
}
