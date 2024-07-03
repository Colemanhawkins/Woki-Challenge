import { Router } from 'express';
import { TaskRoutes } from './tasks/routes';
import { ProjectRoutes } from './projects/routes';
import { AuthRoutes } from './auth/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/tasks', TaskRoutes.routes );

    router.use('/api/projects', ProjectRoutes.routes)

    router.use('/api/auth', AuthRoutes.routes)

    return router;
  }

}