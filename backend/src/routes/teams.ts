import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany({ include: { tasks: true } });
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: 'name is required' });
      return;
    }
    const team = await prisma.team.create({ data: { name } });
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create team' });
  }
});

export default router;
