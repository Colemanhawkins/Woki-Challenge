import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infraestructure';

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