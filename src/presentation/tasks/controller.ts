import { Request, Response } from 'express';
import { CreateTaskDto, UpdateTaskDto } from '../../domain/dtos';
import { TaskRepository } from '../../domain';

export class TaskController {

  constructor(
    private readonly taskRepository: TaskRepository,
  ) { }


  public getTasks = async ( req: Request, res: Response ) => {
    try {
        const tasks = await this.taskRepository.getAll();
        return res.json( tasks );
    }catch ( error ) {
        res.status( 400 ).json( { error } );
    }
  };

  public getTaskById = async ( req: Request, res: Response ) => {
    const id = req.params.id;
    try {
      const task = await this.taskRepository.findById( id );
      res.json( task );
    }catch ( error ) {
      res.status( 400 ).json( { error } );
    }
  };

  public createTask = async ( req: Request, res: Response ) => {
    try {
        const [ error, createTaskDto ] = CreateTaskDto.create( req.body );
        if ( error ) return res.status( 400 ).json( { error } );
        const todo = await this.taskRepository.create( createTaskDto! );
        res.json( todo );
    }catch ( error ) {
        console.log(error)
        res.status( 400 ).json( { error } );
    }
  };

  public updateTask = async ( req: Request, res: Response ) => {
    try{
        const id = req.params.id;
        const [ error, updateTaskDto ] = UpdateTaskDto.create( { ...req.body, id } );
        if ( error ) return res.status( 400 ).json( { error } );
        const updatedTask = await this.taskRepository.updateById( updateTaskDto! );
        return res.json( updatedTask );
    }catch(error){
        return res.status( 400 ).json( { error } );
    }
  };

  public deleteTask = async ( req: Request, res: Response ) => {
    try{
        const id = req.params.id;
        const deletedTask = await this.taskRepository.deleteById( id );
        res.json( deletedTask );
    }catch(error){
    return res.status( 400 ).json( { error } );
    }
  };
}