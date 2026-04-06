import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from '@prisma/client';

//Use Prisma to talk to the DB
@Injectable()
export class TasksService {
	constructor(private prisma: PrismaService) {}

	createTask(title: string) {
		return this.prisma.task.create({
			data: {
				title,
				teamId: "726467d9-2a4f-440d-aaa2-93f05875d85d",
			},
		});
	}
	updateTask(id: string, data: UpdateTaskDto) {
		return this.prisma.task.update({
			where: { id },
			data: {
				title: data.title,
				description: data.description,
				status: data.status, // si tu veux: data.status as any
			},
		});
	}

	deleteTask(id: string) {
		return this.prisma.task.delete({
			where: { id },
		});
	}

	getTasks() {
		return this.prisma.task.findMany();
	}
}