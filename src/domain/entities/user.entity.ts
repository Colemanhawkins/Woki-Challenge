import { Types } from "mongoose";
import { CustomError } from "../errors/custom.error";

export class UserEntity {
    constructor(
      public _id: string,
      public firstName: string,
      public lastName: string,
      public email: string,
      public password: string,
      public role: string,
      public projectIds: Types.ObjectId[] = [],
      public taskIds: Types.ObjectId[] = []
    ) {}

    public static fromObject(object: any): UserEntity {
      const { _id, firstName, lastName, email, password, role, projectIds, taskIds } = object;
      if (!_id) throw CustomError.badRequest('Id is required');
      if (!firstName) throw CustomError.badRequest('First Name is required');
      if (!lastName) throw CustomError.badRequest('Last Name is required');
      if (!email) throw CustomError.badRequest('Email is required');
      if ( !role ) throw CustomError.badRequest( 'Missing role' );
  
      return new UserEntity(
        _id,
        firstName,
        lastName,
        email,
        password,
        role,
        projectIds || [],
        taskIds || []
      );
    }
  
}
