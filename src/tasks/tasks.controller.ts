import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

class TaskInputDto {
  input: string;
}

@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @HttpCode(200)
  @Post('task1')
  async task1(@Body() { input }: TaskInputDto) {
    return this.service.task1(input);
  }
}
