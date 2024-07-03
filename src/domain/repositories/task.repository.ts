import { CreateTaskDto, UpdateTaskDto } from '../dtos';
import { TaskEntity } from '../entities';



export abstract class TaskRepository {

  abstract create( createTaskDto: CreateTaskDto ): Promise<TaskEntity>;

  //todo: paginación
  abstract getAll(): Promise<TaskEntity[]>;

  abstract findById( id: string ): Promise<TaskEntity>;
  abstract updateById( updateTaskDto: UpdateTaskDto ): Promise<TaskEntity>;
  abstract deleteById( id: string ): Promise<TaskEntity>;

}