import { Router, Request, Response } from 'express';
import prisma from '../lib/prisma';
import { TaskStatus } from '@prisma/client';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { teamId } = req.query;
    const tasks = await prisma.task.findMany({
      where: teamId ? { teamId: teamId as string } : undefined,
      orderBy: { createdAt: 'desc' },
    });
    res.json(tasks);
  } catch {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, teamId } = req.body;
    if (!title || !teamId) {
      res.status(400).json({ error: 'title and teamId are required' });
      return;
    }
    const task = await prisma.task.create({ data: { title, teamId } });
    res.status(201).json(task);
  } catch {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = await prisma.task.update({
      where: { id },
      data: { title, description, status: status as TaskStatus },
    });
    res.json(task);
  } catch {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

export default router;
