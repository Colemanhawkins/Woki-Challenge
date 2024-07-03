import { LoginUserDto } from '../dtos';

export abstract class AuthRepository {

  abstract login( loginUserDto: LoginUserDto ): Promise<String>;
}