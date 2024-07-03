import { JwtAdapter, bcryptAdapter } from '../../config';
import { UserModel } from '../../databases/mongo/models';
import { AuthDatasource, CustomError, LoginUserDto, UserEntity } from '../../domain';

export class AuthDatasourceImpl implements AuthDatasource {

  constructor() {}

    async login( loginUserDto: LoginUserDto ): Promise<String> {

    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) throw CustomError.badRequest('Email not exist');
    const isMatching = bcryptAdapter.compare( loginUserDto.password, user.password );
    if ( !isMatching ) throw CustomError.badRequest('Password is not valid');
    const userEntity = UserEntity.fromObject( user );
    const token = await JwtAdapter.generateToken({ id: userEntity._id, email: userEntity.email, role: userEntity.role });
    if ( !token ) throw CustomError.internalServer('Error while creating JWT');

    return token
  }
}