import { useEffect, useState } from "react";
import type { TaskStatus } from "../domain/task";

type Task = {
	id: string;
	title: string;
	status: TaskStatus;
};

export default function Test() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [title, setTitle] = useState("");

	//Runs only on the first render
	useEffect(() => {
		fetchTasks();
	}, []);

	//Get the tasks from the backend
	const fetchTasks = () => {
		fetch("http://localhost:3000/tasks")
			.then(res =>{
				if (!res.ok) {
					console.log("Error"+res.status+ ": unable to connect to the backend");
					return ;
				}
				return res.json();
			})
			.then(data => setTasks(data));
	};

	//Create the task
	const createTask = async () => {
		try {
				await fetch("http://localhost:3000/tasks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ title }),
			});

			setTitle("");
			fetchTasks();
		} catch (err) {
			console.error("Error creating task", err);
		}
	};

	const updateTask = async (id: string, updates: any) => {
		try {
			await fetch(`http://localhost:3000/tasks/${id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(updates),
			});

			fetchTasks(); // refresh the task list
		} catch (err) {
			console.error("Error updating task", err);
		}
	};

	const deleteTask = async (id: string) => {
		await fetch(`http://localhost:3000/tasks/${id}`, {
			method: "DELETE",
		});

		fetchTasks();
	};

	return (
		<div>
			<h1>Tasks</h1>
			
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="New task"
			/>
			<button onClick={createTask}>Add</button>

			{tasks.length === 0 && <p>No tasks yet</p>}
			{tasks.map((t) => (
				<div key={t.id}>{t.title}</div>
			))}

			{/*Task Status*/}
			{tasks.map(task => (
				<div key={task.id}>
					<p>{task.title}</p>
					<p>Status: {task.status}</p>

					<button onClick={() => updateTask(task.id, { status: "doing" })}>
						Mark as Doing
					</button>

					<button onClick={() => updateTask(task.id, { status: "done" })}>
						Mark as Done
					</button>

					<button onClick={() => deleteTask(task.id)}>
						Delete
					</button>

				</div>
))}
		</div>
	);
}