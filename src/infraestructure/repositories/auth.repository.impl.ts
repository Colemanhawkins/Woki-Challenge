import {  AuthDatasource, AuthRepository, LoginUserDto, ProjectEntity } from '../../domain';

export class AuthRepositoryImpl implements AuthRepository {

  constructor(
    private readonly datasource: AuthDatasource,
  ) { }

  login( loginUserDto: LoginUserDto ): Promise<String> {
    return this.datasource.login( loginUserDto );
  }
}