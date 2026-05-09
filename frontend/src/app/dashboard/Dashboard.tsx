import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Team, Task } from '../../domain/types';
import { fetchTeams } from '../teams/api/teams.api';
import { fetchTasks } from '../tasks/api/tasks.api';

export default function Dashboard() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTeams().then(setTeams);
    fetchTasks().then(setTasks);
  }, []);

  const todo = tasks.filter((t) => t.status === 'todo').length;
  const doing = tasks.filter((t) => t.status === 'doing').length;
  const done = tasks.filter((t) => t.status === 'done').length;
  const recent = tasks.slice(0, 8);

  return (
    <>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of your teams and tasks</p>
      </div>

      <div className="stat-grid">
        <div className="stat-card accent">
          <div className="stat-label">Teams</div>
          <div className="stat-value">{teams.length}</div>
        </div>
        <div className="stat-card todo">
          <div className="stat-label">To do</div>
          <div className="stat-value">{todo}</div>
        </div>
        <div className="stat-card doing">
          <div className="stat-label">In progress</div>
          <div className="stat-value">{doing}</div>
        </div>
        <div className="stat-card done">
          <div className="stat-label">Done</div>
          <div className="stat-value">{done}</div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-title">Recent tasks</div>
          <button className="btn btn-secondary btn-sm" onClick={() => navigate('/tasks')}>View all</button>
        </div>

        {recent.length === 0 ? (
          <div className="empty-state">
            <strong>No tasks yet</strong>
            <p>Create a team and add your first task to get started.</p>
          </div>
        ) : (
          <div className="task-list">
            {recent.map((task) => (
              <div key={task.id} className="task-card">
                <span className={`badge badge-${task.status}`}>{task.status}</span>
                <span className="task-card-title">{task.title}</span>
                <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                  {teams.find((t) => t.id === task.teamId)?.name ?? ''}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
