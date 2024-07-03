import { CreateProjectDto, UpdateProjectDto } from '../dtos';
import { ProjectEntity } from '../entities';

export abstract class ProjectRepository {

  abstract create( createProjectDto: CreateProjectDto ): Promise<ProjectEntity>;

  //todo: paginación
  abstract getAll(): Promise<ProjectEntity[]>;

  abstract findById( id: string ): Promise<ProjectEntity>;
  abstract updateById( updateProjectDto: UpdateProjectDto ): Promise<ProjectEntity>;
  abstract deleteById( id: string ): Promise<ProjectEntity>;

}