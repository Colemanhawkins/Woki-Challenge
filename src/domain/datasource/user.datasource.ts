import { StatusFilterDto } from "../dtos/users/status-filter.dto";
import { ProjectEntity, TaskEntity, UserEntity } from "../entities";

export abstract class UserDatasource {

  abstract findByEmail( email: string ): Promise<UserEntity>;

  abstract getUserProjects(  statusFilterDto: StatusFilterDto ): Promise<ProjectEntity[]>;

  abstract getUserTasks( statusFilterDto: StatusFilterDto ): Promise<TaskEntity[]>;

}