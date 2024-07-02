
import { envs } from './config/envs';
import { MongoDatabase } from './databases/index';
import { Server } from './presentation/server';
import { AppRoutes } from './presentation/routes';

(async()=> {
  main();
})();

async function main() {
  try {
    //inicializacion mongo
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
    //inicializacion express
    const server = new Server({
      port: envs.PORT,
      routes: AppRoutes.routes,
    });
    server.start();
  } catch (error) {
    console.error('Error :', error);
  }
}
