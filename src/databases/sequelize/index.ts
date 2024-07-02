import { Sequelize } from 'sequelize';
import { sequelize } from '../../config';

export class SequelizeDatabase {
  private static instance: SequelizeDatabase;
  private connection: Sequelize;

  private constructor() {
    this.connection = sequelize;
  }

  public static getInstance(): SequelizeDatabase {
    if (!SequelizeDatabase.instance) {
      SequelizeDatabase.instance = new SequelizeDatabase();
    }
    return SequelizeDatabase.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.connection.authenticate();
      console.log('Sequelize connected!')
    } catch (error) {
      console.error('Unable to connect to MySQL database:', error);
      throw error;
    }
  }

}