import {  ProjectEntity, TaskEntity, UserDatasource } from '../../domain';
import { TaskModel, ProjectModel} from '../../databases/mongo/models';
import { StatusFilterDto } from '../../domain/dtos/users/status-filter.dto';

export class UserDatasourceImpl implements UserDatasource {

  async getUserProjects(statusFilterDto: StatusFilterDto): Promise<ProjectEntity[]> {
    const { _id , status } = statusFilterDto
    const projects = await ProjectModel.find({ 
      userIds: _id,
      status: status}).exec();
    return projects.map(project => ProjectEntity.fromObject(project));
  }

  async getUserTasks(statusFilterDto: StatusFilterDto): Promise<TaskEntity[]> {
    const { _id , status } = statusFilterDto
    const tasks = await TaskModel.find({ 
      userIds: _id,
      status: status}).exec();
    return tasks.map(task => TaskEntity.fromObject(task));
  }
}