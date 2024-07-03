import { CreateTaskDto, TaskDatasource, TaskEntity, UpdateTaskDto } from '../../domain';
import { TaskModel } from '../../databases/mongo/models';

export class TaskDatasourceImpl implements TaskDatasource {

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
        const task = await TaskModel.create(createTaskDto);
        return TaskEntity.fromObject(task.toObject());
  }

  async getAll(): Promise<TaskEntity[]> {
    const tasks = await TaskModel.find().exec();
    return tasks.map(task => TaskEntity.fromObject(task));
  }

  async findById(id: string): Promise<TaskEntity> {
    const task = await TaskModel.findById(id).exec();
    if (!task) throw `Task with id ${id} not found`;
    return TaskEntity.fromObject(task);
  }

  async updateById(updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    await this.findById(updateTaskDto.id.toString());
    const updatedTask = await TaskModel.findByIdAndUpdate(updateTaskDto.id, updateTaskDto.values, { new: true }).exec();
    if (!updatedTask) throw `Task with id ${updateTaskDto.id} not found after update`;
    return TaskEntity.fromObject(updatedTask);
  }

  async deleteById(id: string): Promise<TaskEntity> {
    const deletedTask = await TaskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) throw `Task with id ${id} not found`;
    return TaskEntity.fromObject(deletedTask);
  }
}