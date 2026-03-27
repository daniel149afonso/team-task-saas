import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
};

export default function Test() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  };

  const createTask = async () => {
    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
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
    </div>
  );
}