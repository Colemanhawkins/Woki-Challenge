import {  CreateProjectDto, ProjectDatasource, ProjectEntity, ProjectRepository, UpdateProjectDto } from '../../domain';

export class ProjectRepositoryImpl implements ProjectRepository {

  constructor(
    private readonly datasource: ProjectDatasource,
  ) { }

  create( createProjectDto: CreateProjectDto ): Promise<ProjectEntity> {
    return this.datasource.create( createProjectDto );
  }

  getAll(): Promise<ProjectEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: string ): Promise<ProjectEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateProjectDto: UpdateProjectDto ): Promise<ProjectEntity> {
    return this.datasource.updateById( updateProjectDto );
  }

  deleteById( id: string ): Promise<ProjectEntity> {
    return this.datasource.deleteById( id );
  }

}