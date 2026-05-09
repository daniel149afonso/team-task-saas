import { fetcher } from '../../../lib/fetcher';
import type { Task, TaskStatus } from '../../../domain/types';

const BASE_URL = 'http://localhost:3000/tasks';

export const fetchTasks = (teamId?: string): Promise<Task[]> =>
  fetcher(teamId ? `${BASE_URL}?teamId=${teamId}` : BASE_URL);

export const createTask = (title: string, teamId: string): Promise<Task> =>
  fetcher(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ title, teamId }),
  });

export const updateTask = (id: string, updates: { title?: string; description?: string; status?: TaskStatus }): Promise<Task> =>
  fetcher(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updates),
  });

export const deleteTask = (id: string): Promise<null> =>
  fetcher(`${BASE_URL}/${id}`, { method: 'DELETE' });
