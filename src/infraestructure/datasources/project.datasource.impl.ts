import { CreateProjectDto, ProjectDatasource, ProjectEntity, UpdateProjectDto } from '../../domain';
import { ProjectModel } from '../../databases/mongo/models';

export class ProjectDatasourceImpl implements ProjectDatasource {

  async create(createProjectDto: CreateProjectDto): Promise<ProjectEntity> {
        const project = await ProjectModel.create(createProjectDto);
        return ProjectEntity.fromObject(project.toObject());
  }

  async getAll(): Promise<ProjectEntity[]> {
    const projects = await ProjectModel.find().exec();
    return projects.map(project => ProjectEntity.fromObject(project));
  }

  async findById(id: string): Promise<ProjectEntity> {
    const project = await ProjectModel.findById(id).exec();
    if (!project) throw `Project with id ${id} not found`;
    return ProjectEntity.fromObject(project);
  }

  async updateById(updateProjectDto: UpdateProjectDto): Promise<ProjectEntity> {
    await this.findById(updateProjectDto.id.toString());
    const updatedProject = await ProjectModel.findByIdAndUpdate(updateProjectDto.id, updateProjectDto.values, { new: true }).exec();
    if (!updatedProject) throw `Project with id ${updateProjectDto.id} not found after update`;
    return ProjectEntity.fromObject(updatedProject);
  }

  async deleteById(id: string): Promise<ProjectEntity> {
    const deletedProject = await ProjectModel.findByIdAndDelete(id).exec();
    if (!deletedProject) throw `Project with id ${id} not found`;
    return ProjectEntity.fromObject(deletedProject);
  }
}