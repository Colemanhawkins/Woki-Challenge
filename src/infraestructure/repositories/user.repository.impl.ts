import { ProjectEntity, TaskEntity, UserDatasource, UserEntity, UserRepository } from '../../domain';
import { StatusFilterDto } from '../../domain/dtos/users/status-filter.dto';

export class UserRepositoryImpl implements UserRepository {

  constructor(
    private readonly datasource: UserDatasource,
  ) { }

  findByEmail(email: string): Promise<UserEntity> {
    return this.datasource.findByEmail( email);
  }

  getUserProjects( statusFilterDto: StatusFilterDto ): Promise<ProjectEntity[]> {
    return this.datasource.getUserProjects( statusFilterDto);
  }

  getUserTasks(statusFilterDto: StatusFilterDto): Promise<TaskEntity[]> {
    return this.datasource.getUserTasks(statusFilterDto);
  }

}