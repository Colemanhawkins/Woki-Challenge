import { CustomError } from "../errors/custom.error";

export class UserEntity {
    constructor(
      public id: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public emailValidated: boolean,
      public password: string,
      public projectsIds: string[] = [],
      public tasksIds: string[] = []
    ) {}

    public static fromObject(object: any): UserEntity {
      const { id, firstName, lastName, email, emailValidated, password, projectsIds, tasksIds } = object;
      if (!id) throw CustomError.badRequest('Id is required');
      if (!firstName) throw CustomError.badRequest('First Name is required');
      if (!lastName) throw CustomError.badRequest('Last Name is required');
      if (!email) throw CustomError.badRequest('Email is required');
      if (emailValidated === undefined) throw CustomError.badRequest('Email Validated is required');
      if (!password) throw CustomError.badRequest('Password is required');

      return new UserEntity(
        id,
        firstName,
        lastName,
        email,
        emailValidated,
        password,
        projectsIds || [],
        tasksIds || []
      );
    }
  
    // Método para convertir la entidad a un objeto plano compatible con Mongoose
    public toMongooseObject(): any {
      return {
        _id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        emailValidated: this.emailValidated,
        password: this.password,
        projectsIds: this.projectsIds.length > 0 ? this.projectsIds : [],
        tasksIds: this.tasksIds.length > 0 ? this.tasksIds : [],
      };
    }
}
