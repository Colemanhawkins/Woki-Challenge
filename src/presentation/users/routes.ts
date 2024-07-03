import { Router } from 'express';
import { UserController } from './controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { UserDatasourceImpl, UserRepositoryImpl } from '../../infraestructure';

export class UserRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl( datasource );
    const userController = new UserController(userRepository);

    router.get('/projects',[AuthMiddleware.validateJWT], userController.getUserProyects );
    router.get('/tasks',[AuthMiddleware.validateJWT], userController.getUserTasks );


    return router;
  }

}