"use client";

import { useEffect, useState } from "react";
import { fetchTeams, createTeam } from "./api/teams.api";
import { TeamForm } from "./components/TeamForm";
import { TeamList } from "./components/TeamList";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  const load = async () => {
    const data = await fetchTeams();
    setTeams(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Teams</h1>

      <TeamForm onCreate={async (name) => { await createTeam(name); load(); }} />

      <TeamList teams={teams} />
    </div>
  );
}
