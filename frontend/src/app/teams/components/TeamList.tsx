import { useNavigate } from 'react-router-dom';
import type { Team } from '../../../domain/types';

export function TeamList({ teams }: { teams: Team[] }) {
  const navigate = useNavigate();

  if (teams.length === 0) {
    return (
      <div className="empty-state">
        <strong>No teams yet</strong>
        <p>Create your first team to start organizing tasks.</p>
      </div>
    );
  }

  return (
    <div className="team-grid">
      {teams.map((team) => (
        <div key={team.id} className="team-card">
          <div className="team-card-name">{team.name}</div>
          <div className="team-card-meta">
            {team.tasks?.length ?? 0} task{team.tasks?.length !== 1 ? 's' : ''}
          </div>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => navigate(`/tasks?teamId=${team.id}`)}
          >
            View tasks
          </button>
        </div>
      ))}
    </div>
  );
}
