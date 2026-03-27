import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Post()
	createTask(@Body() body: { title: string }) {
		return this.tasksService.createTask(body.title);
	}
	@Get()
	getTasks() {
		return this.tasksService.getTasks();
	}
}