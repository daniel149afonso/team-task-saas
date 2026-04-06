export function TaskList({
	tasks,
	onUpdate,
	onDelete,
	}: {
	tasks: any[];
	onUpdate: (id: string, updates: any) => void;
	onDelete: (id: string) => void;
	}) {
	return (
		<div>
		{tasks.map((task) => (
			<div key={task.id}>
			<p>{task.title}</p>
			<p>Status: {task.status}</p>

			<button onClick={() => onUpdate(task.id, { status: "doing" })}>
				Doing
			</button>

			<button onClick={() => onUpdate(task.id, { status: "done" })}>
				Done
			</button>

			<button onClick={() => onDelete(task.id)}>Delete</button>
			</div>
		))}
		</div>
	);
}
