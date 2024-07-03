import { StatusFilterDto } from "../dtos/users/status-filter.dto";
import { ProjectEntity, TaskEntity } from "../entities";

export abstract class UserRepository {

  abstract getUserProjects( statusFilterDto: StatusFilterDto): Promise<ProjectEntity[]>;

  abstract getUserTasks(  statusFilterDto: StatusFilterDto ): Promise<TaskEntity[]>;

}