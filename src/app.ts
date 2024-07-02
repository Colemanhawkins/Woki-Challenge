
import { envs } from './config/envs';
import { MongoDatabase , SequelizeDatabase} from './databases/index';
import { Server } from './presentation/server';
import { initializeModels } from './databases/sequelize/models';

(async()=> {
  main();
})();

async function main() {
  const sequelizeDb = SequelizeDatabase.getInstance();
  try {
    // inicializacion sequelize
    await sequelizeDb.connect();
    await initializeModels();

    //inicializacion mongo
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
    //inicializacion express
    const server = new Server({
      port: envs.PORT
    });
    server.start();
  } catch (error) {
    console.error('Error :', error);
  }
}
