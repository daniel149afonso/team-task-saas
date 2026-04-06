import { fetcher } from "../../../lib/fetcher";

const BASE_URL = "http://localhost:3000/teams";

export const fetchTeams = () => fetcher(BASE_URL);

export const createTeam = (name: string) =>
  fetcher(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
