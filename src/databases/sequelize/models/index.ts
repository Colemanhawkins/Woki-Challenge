import User from '../models/user.model';
import { sequelize } from '../../../config';

export const initializeModels = async (): Promise<void> => {
  const models = {
    User: User(sequelize),
  };
  try {
    await sequelize.sync({ alter: false }); 
    console.log('Models Sync.');
  } catch (error) {
    console.error('Error Sync models:', error);
    throw error; 
  }
};
