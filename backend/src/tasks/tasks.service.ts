import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

//Use Prisma to talk to the DB
@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

 createTask(title: string, teamId: string) {
  return this.prisma.task.create({
      data: {
        title,
        teamId,
      },
    });
  }

  getTasks() {
    return this.prisma.task.findMany();
  }
}