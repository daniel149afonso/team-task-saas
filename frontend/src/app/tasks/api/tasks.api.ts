import { fetcher } from "../../../lib/fetcher";

const BASE_URL = "http://localhost:3000/tasks";

export const fetchTasks = () => fetcher(BASE_URL);

export const createTask = (title: string) =>
  fetcher(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ title }),
  });

export const updateTask = (id: string, updates: any) =>
  fetcher(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updates),
  });

export const deleteTask = (id: string) =>
  fetcher(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
