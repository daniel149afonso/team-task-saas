import { useState } from "react";

export function TaskForm({ onCreate }: { onCreate: (title: string) => void }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
	if (!title.trim()) return;
	onCreate(title);
	setTitle("");
  };

  return (
	<form onSubmit={handleSubmit}>
	  <input
		value={title}
		onChange={(e) => setTitle(e.target.value)}
		placeholder="New task"
	  />
	  <button type="submit">Add</button>
	</form>
  );
}
