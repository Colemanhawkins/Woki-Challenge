import { Request, Response } from 'express';
import { CustomError, LoginUserDto, UserRepository } from '../../domain';
import { AuthService } from './services/login.service';

export class AuthController {

  constructor(
    private userRepository: UserRepository,
    private authService: AuthService
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
        const user = await this.userRepository.findByEmail(loginUserDto.email)
        if (!user) return res.status(400).json('Email is not valid')
        const login = await this.authService.login(loginUserDto, user)
        return  res.json(login)
    }catch(error){
        return this.handleError(error, res)
    }
}
  validateEmail = (req: Request, res: Response) => {
    res.json('validateEmail');
  }
}