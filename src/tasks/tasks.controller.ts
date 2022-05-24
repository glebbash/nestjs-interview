import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

interface TaskInputDto {
  input: string;
}

interface TaskResultDto {
  result: string;
}

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @HttpCode(200)
  @Post('task1')
  task1(@Body() { input }: TaskInputDto): TaskResultDto {
    const result = this.service.task1(input);

    return { result };
  }
}
