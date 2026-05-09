import type { Task, TaskStatus } from '../../../domain/types';

interface Props {
  tasks: Task[];
  onUpdate: (id: string, updates: { status?: TaskStatus }) => void;
  onDelete: (id: string) => void;
}

const nextStatus: Record<TaskStatus, TaskStatus | null> = {
  todo: 'doing',
  doing: 'done',
  done: null,
};

const statusLabel: Record<TaskStatus, string> = {
  todo: 'Start',
  doing: 'Complete',
  done: '',
};

export function TaskList({ tasks, onUpdate, onDelete }: Props) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <strong>No tasks yet</strong>
        <p>Add a task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <span className={`badge badge-${task.status}`}>{task.status}</span>
          <span className="task-card-title">{task.title}</span>
          <div className="task-card-actions">
            {nextStatus[task.status] && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onUpdate(task.id, { status: nextStatus[task.status]! })}
              >
                {statusLabel[task.status]}
              </button>
            )}
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
