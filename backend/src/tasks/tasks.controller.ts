import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';

//Get Http Requests
@Controller('tasks')
export class TasksController {
	constructor(private readonly tasksService: TasksService) {}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
		return this.tasksService.updateTask(id, body);
	}

	@Post()
	createTask(@Body('title') title: string) {
		return this.tasksService.createTask(title);
	}

	@Delete(':id')
		deleteTask(@Param('id') id: string) {
		return this.tasksService.deleteTask(id);
	}

	@Get()
	getTasks() {
		return this.tasksService.getTasks();
	}
}