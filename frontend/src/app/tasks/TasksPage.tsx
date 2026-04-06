"use client";

import { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api/tasks.api";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
	const data = await fetchTasks();
	setTasks(data);
  };

  useEffect(() => {
	load();
  }, []);

  return (
	<div>
	  <h1>Tasks</h1>

	  <TaskForm onCreate={async (title) => { await createTask(title); load(); }} />

	  <TaskList
		tasks={tasks}
		onUpdate={async (id, updates) => { await updateTask(id, updates); load(); }}
		onDelete={async (id) => { await deleteTask(id); load(); }}
	  />
	</div>
  );
}
