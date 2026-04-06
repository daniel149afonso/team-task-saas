import { TaskStatus } from '@prisma/client';

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: TaskStatus;
}
