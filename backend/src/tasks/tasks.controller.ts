import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

//Get Http Requests
@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Post()
	createTask(@Body('title') title: string, @Body('teamId') teamId: string) {
		return this.tasksService.createTask(title, teamId);
	}

	@Get()
	getTasks() {
		return this.tasksService.getTasks();
	}
}