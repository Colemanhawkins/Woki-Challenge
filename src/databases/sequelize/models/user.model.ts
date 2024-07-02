// user.model.ts

import { DataTypes, Sequelize } from 'sequelize';
import { bcryptAdapter } from '../../../config/index';
import { UserModel } from '../class/user.class';

const User = (sequelize: Sequelize): typeof UserModel => {
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8, 255], 
        },
      },
    },
    {
      modelName: 'User',
      tableName: 'User', 
      timestamps: true, 
      underscored: true,
      hooks: {
        beforeCreate: async (user: UserModel) => {
          user.password = await bcryptAdapter.hash(user.password); 
        },
        beforeUpdate: async (user: UserModel) => {
          if (user.changed('password')) {
            user.password = await bcryptAdapter.hash(user.password); 
          }
        },
      },
    }
  );
};

export default User; 