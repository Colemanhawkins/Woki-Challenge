import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  PORT: get('PORT').required().asPortNumber(),

  //envs de mongo
  MONGO_USER:   get('MONGO_USER').required().asString(),
  MONGO_PASS:  get('MONGO_PASS').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_URL: get('MONGO_URL').required().asString(),

  //secret JWT
  JWT_SECRET:  get('JWT_SECRET').required().asString()
}