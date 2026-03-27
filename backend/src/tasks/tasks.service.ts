import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  createTask(title: string) {
  return this.prisma.task.create({
    data: {
      title,
    },
    });
  }
  getTasks() {
    return this.prisma.task.findMany();
  }
}