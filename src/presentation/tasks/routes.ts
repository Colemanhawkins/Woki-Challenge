import { Router } from 'express';
import { TaskController } from './controller';
import { TaskRepositoryImpl } from '../../infraestructure/repositories/task.repository.impl';
import { TaskDatasourceImpl } from '../../infraestructure/datasources/task.datasouce.impl';
import { AuthMiddleware } from '../middleware/auth.middleware';

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