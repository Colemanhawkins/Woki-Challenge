import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from './services/login.service';
import { UserDatasourceImpl, UserRepositoryImpl } from '../../infraestructure';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    const service = new AuthService();
    const datasource = new UserDatasourceImpl()
    const userRepository = new UserRepositoryImpl(datasource);
    const authController = new AuthController(userRepository, service);

    router.get('/', authController.login );

    return router;
  }

}