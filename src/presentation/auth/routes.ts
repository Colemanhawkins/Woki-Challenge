import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDatasourceImpl } from '../../infraestructure/datasources/auth.datasource.impl';
import { AuthRepositoryImpl } from '../../infraestructure/repositories/auth.repository.impl';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl( datasource );
    const authController = new AuthController(authRepository);

    router.get('/', authController.login );

    return router;
  }

}