import { CreateTaskDto, UpdateTaskDto } from '../dtos';
import { TaskEntity } from '../entities';

export abstract class TaskDatasource {

  abstract create( createTodoDto: CreateTaskDto ): Promise<TaskEntity>;
  abstract getAll(): Promise<TaskEntity[]>;
  abstract findById( id: string ): Promise<TaskEntity>;
  abstract updateById( updateTodoDto: UpdateTaskDto ): Promise<TaskEntity>;
  abstract deleteById( id: string ): Promise<TaskEntity>;

}