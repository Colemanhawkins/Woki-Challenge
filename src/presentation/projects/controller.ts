import { Request, Response } from 'express';
import { ProjectRepository, UpdateProjectDto, CreateProjectDto } from '../../domain';

export class ProjectController {

  constructor(
    private readonly projectRepository: ProjectRepository,
  ) { }

  public getProjects = async ( req: Request, res: Response ) => {
    try {
        const projects = await this.projectRepository.getAll();
        return res.json( projects );
    }catch ( error ) {
        res.status( 400 ).json( { error } );
    }
  };

  public getProjectsById = async ( req: Request, res: Response ) => {
    const id = req.params.id;
    console.log(id)
    try {
      const project = await this.projectRepository.findById( id );
      res.json( project );
    }catch ( error ) {
      res.status( 400 ).json( { error } );
    }
  };

  public createProject = async ( req: Request, res: Response ) => {
    try {
        const [ error, createProjectDto ] = CreateProjectDto.create( req.body );
        if ( error ) return res.status( 400 ).json( { error } );
        const project = await this.projectRepository.create( createProjectDto! );
        res.json( project );
    }catch ( error ) {
        res.status( 400 ).json( { error } );
    }
  };

  public updateProject = async ( req: Request, res: Response ) => {
    try{
        const id = req.params.id;
        const [ error, updateProjectDto ] = UpdateProjectDto.create( { ...req.body, id } );
        if ( error ) return res.status( 400 ).json( { error } );
        const updatedProject = await this.projectRepository.updateById( updateProjectDto! );
        return res.json( updatedProject );
    }catch(error){
        return res.status( 400 ).json( { error } );
    }
  };

  public deleteProject = async ( req: Request, res: Response ) => {
    try{
        const id = req.params.id;
        const deletedProject = await this.projectRepository.deleteById( id );
        res.json( deletedProject );
    }catch(error){
        return res.status( 400 ).json( { error } );
    }
  };
}