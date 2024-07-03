import { Router } from 'express';
import { TaskRoutes } from './tasks/routes';
import { ProjectRoutes } from './projects/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/tasks', TaskRoutes.routes );

    router.use('/api/projects', ProjectRoutes.routes)
    return router;
  }

}