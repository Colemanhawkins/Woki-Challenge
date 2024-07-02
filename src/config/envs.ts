import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  PORT: get('PORT').required().asPortNumber(),

  //envs mysql
  MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),
  MYSQL_DATABASE: get('MYSQL_DATABASE').required().asString(),
  MYSQL_USER: get('MYSQL_USER').required().asString(),
  MYSQL_PASSWORD: get('MYSQL_PASSWORD').required().asString(),
  MYSQL_PORT: get('MYSQL_PORT').required().asInt(),
  MYSQL_HOST:  get('MYSQL_HOST').required().asString(),

  //envs de mongo
  MONGO_USER:   get('MONGO_USER').required().asString(),
  MONGO_PASS:  get('MONGO_PASS').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_URL:get('MONGO_URL').required().asString()
}