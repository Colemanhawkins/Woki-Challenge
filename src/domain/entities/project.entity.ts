import { Types } from "mongoose";
import { CustomError } from "../errors/custom.error";

export class ProjectEntity {
    constructor(
      public _id: Types.ObjectId,
      public title: string,
      public description: string,
      public dueDate: Date,
      public status: 'not started' | 'in progress' | 'completed' = 'not started',
      public userIds: Types.ObjectId[] = [],
      public taskIds: Types.ObjectId[] = []
    ) {}
  
    get isCompleted() {
        return this.status === 'completed';
      }
    
    get isInProgress() {
          return this.status === 'in progress';
        }

    get isNotStarted(){
        return this.status === 'not started';
    }

    public static fromObject(object: any): ProjectEntity {
      const { _id, title, description, dueDate, status, userIds, taskIds } = object;
      if (!_id) throw CustomError.badRequest('Id is required');
      if (!title) throw CustomError.badRequest('Title is required');
      if (!description) throw CustomError.badRequest('Description is required');
      if (!dueDate || !(dueDate instanceof Date)) throw CustomError.badRequest('DueDate must be a valid Date object');
  
      return new ProjectEntity(_id, title, description, dueDate, status || 'not started', userIds || [], taskIds || []);
    }

  }