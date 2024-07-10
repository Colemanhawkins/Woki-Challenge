import { JwtAdapter, bcryptAdapter } from '../../../config';
import { CustomError, LoginUserDto, UserEntity, UserRepository } from '../../../domain';

interface loginRes {
    user: UserEntity,
    token: string
}


export class AuthService {

  constructor(

  ) {}

    async login( loginUserDto: LoginUserDto, user: UserEntity): Promise<loginRes> {
    const isMatching = bcryptAdapter.compare( loginUserDto.password, user.password );
    if ( !isMatching ) throw CustomError.badRequest('Password is not valid');
    const userEntity = UserEntity.fromObject( user );
    const token = await JwtAdapter.generateToken({ id: userEntity._id, email: userEntity.email, role: userEntity.role });
    if ( !token ) throw CustomError.internalServer('Error while creating JWT');

    return {
        user: user,
        token: token
    }
  }
}