import { CustomError } from "../errors/custom.error";

export class UserEntity {
    constructor(
      public _id: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public emailValidated: boolean,
      public password: string,
      public projectIds: string[] = [],
      public taskIds: string[] = []
    ) {}

    public static fromObject(object: any): UserEntity {
      const { _id, firstName, lastName, email, emailValidated, password, projectIds, taskIds } = object;
      if (!_id) throw CustomError.badRequest('Id is required');
      if (!firstName) throw CustomError.badRequest('First Name is required');
      if (!lastName) throw CustomError.badRequest('Last Name is required');
      if (!email) throw CustomError.badRequest('Email is required');
      if (emailValidated === undefined) throw CustomError.badRequest('Email Validated is required');
      if (!password) throw CustomError.badRequest('Password is required');

      return new UserEntity(
        _id,
        firstName,
        lastName,
        email,
        emailValidated,
        password,
        projectIds || [],
        taskIds || []
      );
    }
  
    // Método para convertir la entidad a un objeto plano compatible con Mongoose
    public toMongooseObject(): any {
      return {
        _id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        emailValidated: this.emailValidated,
        password: this.password,
        projectIds: this.projectIds.length > 0 ? this.projectIds : [],
        taskIds: this.taskIds.length > 0 ? this.taskIds : [],
      };
    }
}
