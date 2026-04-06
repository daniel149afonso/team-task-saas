import { useState } from "react";

export function TeamForm({ onCreate }: { onCreate: (name: string) => void }) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
	e.preventDefault();
	if (!name.trim()) return;
	onCreate(name);
	setName("");
  };

  return (
	<form onSubmit={handleSubmit}>
	  <input
		value={name}
		onChange={(e) => setName(e.target.value)}
		placeholder="Team name"
	  />
	  <button type="submit">Create Team</button>
	</form>
  );
}
