export function TeamList({ teams }: { teams: any[] }) {
  return (
    <div>
      {teams.map((team) => (
        <div key={team.id}>
          <p>{team.name}</p>
        </div>
      ))}
    </div>
  );
}
