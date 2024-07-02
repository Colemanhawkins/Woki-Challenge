import { Model } from "sequelize";
import { bcryptAdapter } from "../../../config/index";
import { UserAttributes, UserInstance } from "../interfaces/user.interface";

export class UserModel extends Model<UserAttributes, UserInstance> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public async comparePassword(password: string): Promise<boolean> {
      return bcryptAdapter.compare(password, this.password);
    }
  }