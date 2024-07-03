import { Router } from 'express';
import { TaskController } from './controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { TaskDatasourceImpl, TaskRepositoryImpl } from '../../infraestructure';

export class TaskRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new TaskDatasourceImpl();
    const taskRepository = new TaskRepositoryImpl( datasource );
    const taskController = new TaskController(taskRepository);

    router.get('/', taskController.getTasks );
    router.get('/:id', taskController.getTaskById );
    
    router.post('/', [AuthMiddleware.validateJWT] ,taskController.createTask );
    router.put('/:id', [AuthMiddleware.validateJWT], taskController.updateTask );
    router.delete('/:id',  [AuthMiddleware.validateJWT],taskController.deleteTask );

    return router;
  }

}