import {  CreateTaskDto, TaskDatasource, TaskEntity, TaskRepository, UpdateTaskDto } from '../../domain';

export class TaskRepositoryImpl implements TaskRepository {

  constructor(
    private readonly datasource: TaskDatasource,
  ) { }


  create( createTaskDto: CreateTaskDto ): Promise<TaskEntity> {
    return this.datasource.create( createTaskDto );
  }

  getAll(): Promise<TaskEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: string ): Promise<TaskEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTaskDto: UpdateTaskDto ): Promise<TaskEntity> {
    return this.datasource.updateById( updateTaskDto );
  }

  deleteById( id: string ): Promise<TaskEntity> {
    return this.datasource.deleteById( id );
  }

}