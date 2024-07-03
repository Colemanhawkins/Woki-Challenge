import { Request, Response } from 'express';
import { AuthRepository, CustomError, LoginUserDto } from '../../domain';

export class AuthController {

  constructor(
    public readonly authRepository: AuthRepository,
  ) {}

  private handleError = (error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${ error }`);
    return res.status(500).json({ error: 'Internal server error' })
  } 

  login = async (req: Request, res: Response) => {
    try{
        const [error, loginUserDto] = LoginUserDto.create(req.body);
        if ( error ) return res.status(400).json({error})
        if ( loginUserDto === undefined ) return res.status(500).json({error})
        const token = await this.authRepository.login(loginUserDto)
        return res.json(token)
    }catch(error){
        return this.handleError(error, res)
    }
}
  validateEmail = (req: Request, res: Response) => {
    res.json('validateEmail');
  }
}