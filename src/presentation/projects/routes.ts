import { Router } from 'express';
import { ProjectController } from './controller';
import { ProjectDatasourceImpl } from '../../infraestructure/datasources/project.datasource.impl';
import { ProjectRepositoryImpl } from '../../infraestructure/repositories/project.repository.impl';
import { AuthMiddleware } from '../middleware/auth.middleware';

export class ProjectRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ProjectDatasourceImpl();
    const projectRepository = new ProjectRepositoryImpl( datasource );
    const projectController = new ProjectController(projectRepository);

    router.get('/', projectController.getProjects );
    router.get('/:id', projectController.getProjectsById );
    
    router.post('/',  [AuthMiddleware.validateJWT],projectController.createProject );
    router.put('/:id',  [AuthMiddleware.validateJWT], projectController.updateProject );
    router.delete('/:id', [AuthMiddleware.validateJWT], projectController.deleteProject );


    return router;
  }

}