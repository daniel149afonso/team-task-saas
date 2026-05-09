import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Team } from '../../../domain/types';

interface Props {
  teams: Team[];
  selectedTeamId: string;
  onCreate: (title: string, teamId: string) => void;
}

export function TaskForm({ teams, selectedTeamId, onCreate }: Props) {
  const [title, setTitle] = useState('');
  const [teamId, setTeamId] = useState(selectedTeamId || '');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !teamId) return;
    onCreate(title.trim(), teamId);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group" style={{ flex: 2 }}>
          <label>Task title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
          />
        </div>
        <div className="form-group">
          <label>Team</label>
          <select value={teamId} onChange={(e) => setTeamId(e.target.value)} required>
            <option value="">Select team…</option>
            {teams.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-end' }}>
          Add task
        </button>
      </div>
    </form>
  );
}
