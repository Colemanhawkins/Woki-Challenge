import { Sequelize } from 'sequelize';
import { envs } from './envs';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: envs.MYSQL_HOST,
  port: Number(envs.MYSQL_PORT),
  username: envs.MYSQL_USER,
  password: envs.MYSQL_PASSWORD,
  database: envs.MYSQL_DATABASE,
});

export default sequelize;