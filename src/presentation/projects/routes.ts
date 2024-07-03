import { Router } from 'express';
import { ProjectController } from './controller';
import { ProjectDatasourceImpl } from '../../infraestructure/datasources/project.datasource.impl';
import { ProjectRepositoryImpl } from '../../infraestructure/repositories/project.repository.impl';

export class ProjectRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ProjectDatasourceImpl();
    const projectRepository = new ProjectRepositoryImpl( datasource );
    const projectController = new ProjectController(projectRepository);

    router.get('/', projectController.getProjects );
    router.get('/:id', projectController.getProjectsById );
    
    router.post('/', projectController.createProject );
    router.put('/:id', projectController.updateProject );
    router.delete('/:id', projectController.deleteProject );


    return router;
  }

}