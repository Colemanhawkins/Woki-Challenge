import { ProjectEntity, TaskEntity, UserDatasource, UserRepository } from '../../domain';
import { StatusFilterDto } from '../../domain/dtos/users/status-filter.dto';

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly datasource: UserDatasource,
  ) { }

  getUserProjects( statusFilterDto: StatusFilterDto ): Promise<ProjectEntity[]> {
    return this.datasource.getUserProjects( statusFilterDto);
  }

  getUserTasks(statusFilterDto: StatusFilterDto): Promise<TaskEntity[]> {
    return this.datasource.getUserTasks(statusFilterDto);
  }

}