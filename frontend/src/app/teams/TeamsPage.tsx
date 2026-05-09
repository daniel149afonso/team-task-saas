import { useEffect, useState } from 'react';
import type { Team } from '../../domain/types';
import { fetchTeams, createTeam } from './api/teams.api';
import { TeamForm } from './components/TeamForm';
import { TeamList } from './components/TeamList';

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  async function load() {
    const data = await fetchTeams();
    setTeams(data ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className="page-header">
        <h1>Teams</h1>
        <p>Manage your teams and view their tasks</p>
      </div>

      <div className="card section">
        <div className="section-title" style={{ marginBottom: 16 }}>New team</div>
        <TeamForm onCreate={async (name) => { await createTeam(name); load(); }} />
      </div>

      <div className="section">
        <div className="section-title" style={{ marginBottom: 16 }}>
          All teams ({teams.length})
        </div>
        <TeamList teams={teams} />
      </div>
    </>
  );
}
