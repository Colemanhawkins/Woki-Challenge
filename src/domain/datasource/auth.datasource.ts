import { LoginUserDto } from '../dtos';

export abstract class AuthDatasource {

  abstract login( loginUserDto: LoginUserDto ): Promise<String>;

}