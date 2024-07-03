import { Request, Response } from 'express';
import { StatusFilterDto } from '../../domain/dtos';
import { UserRepository } from '../../domain';

export class UserController {

  constructor(
    private readonly userRepository: UserRepository,
  ) { }


  public getUserProyects = async ( req: Request, res: Response ) => {
    try {
      const { user , status } = req.body
      const props = { _id: user._id , status}
      const [ error, statusFilterDto ] = StatusFilterDto.create( props );
      if( error ) return res.status( 400 ).json( { error } );
      if ( !statusFilterDto) return res.status( 500 ).json( { error } );
      const projects = await this.userRepository.getUserProjects(statusFilterDto);
      return res.json( projects );
    }catch ( error ) {
        res.status( 400 ).json( { error } );
    }
  };

  public getUserTasks = async ( req: Request, res: Response ) => {
    try {
      const { user , status } = req.body
      const props = { _id: user._id , status}
      const [ error, statusFilterDto ] = StatusFilterDto.create( props );
      if( error ) return res.status( 400 ).json( { error } );
      if ( !statusFilterDto) return res.status( 500 ).json( { error } );
      const tasks = await this.userRepository.getUserTasks(statusFilterDto);
      res.json( tasks );
    }catch ( error ) {
      res.status( 400 ).json( { error } );
    }
  };

}