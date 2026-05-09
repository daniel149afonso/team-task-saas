import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Task, Team } from '../../domain/types';
import { fetchTasks, createTask, updateTask, deleteTask } from './api/tasks.api';
import { fetchTeams } from '../teams/api/teams.api';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

export default function TasksPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const teamId = searchParams.get('teamId') ?? '';

  async function load() {
    const data = await fetchTasks(teamId || undefined);
    setTasks(data ?? []);
  }

  useEffect(() => {
    fetchTeams().then((data) => setTeams(data ?? []));
  }, []);

  useEffect(() => {
    load();
  }, [teamId]);

  const selectedTeam = teams.find((t) => t.id === teamId);

  return (
    <>
      <div className="page-header">
        <h1>Tasks</h1>
        <p>{selectedTeam ? `Showing tasks for ${selectedTeam.name}` : 'Showing all tasks'}</p>
      </div>

      <div className="section">
        <div className="form-row" style={{ marginBottom: 24 }}>
          <div className="form-group">
            <label>Filter by team</label>
            <select
              value={teamId}
              onChange={(e) => setSearchParams(e.target.value ? { teamId: e.target.value } : {})}
            >
              <option value="">All teams</option>
              {teams.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <div className="section-title" style={{ marginBottom: 16 }}>New task</div>
          {teams.length === 0 ? (
            <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
              Create a team first before adding tasks.
            </p>
          ) : (
            <TaskForm
              teams={teams}
              selectedTeamId={teamId}
              onCreate={async (title, tId) => {
                await createTask(title, tId);
                load();
              }}
            />
          )}
        </div>

        <TaskList
          tasks={tasks}
          onUpdate={async (id, updates) => { await updateTask(id, updates); load(); }}
          onDelete={async (id) => { await deleteTask(id); load(); }}
        />
      </div>
    </>
  );
}
