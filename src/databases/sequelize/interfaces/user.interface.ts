import { Optional } from "sequelize";

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserInstance extends Optional<UserAttributes, 'id'> {}