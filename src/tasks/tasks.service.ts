import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  task1(input: string): string {
    return input;
  }
}
