import { fetcher } from '../../../lib/fetcher';
import type { Team } from '../../../domain/types';

const BASE_URL = 'http://localhost:3000/teams';

export const fetchTeams = (): Promise<Team[]> => fetcher(BASE_URL);

export const createTeam = (name: string): Promise<Team> =>
  fetcher(BASE_URL, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
