import { Types } from "mongoose";
import { CustomError } from "../errors/custom.error";

export class TaskEntity {
    constructor(
      public _id: Types.ObjectId,
      public title: string,
      public description: string,
      public dueDate: Date,
      public status: 'not started' | 'in progress' | 'completed' = 'not started',
      public userIds: Types.ObjectId[] = [],
      public projectId?: Types.ObjectId | null
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

    public static fromObject(object: any): TaskEntity {
      const { _id, title, description, dueDate, status, userIds, projectId } = object;
      if (!_id) throw CustomError.badRequest('Id is required');
      if (!title) throw  CustomError.badRequest('Title is required');
      if (!description) throw  CustomError.badRequest('Description is required');
      if (!dueDate || !(dueDate instanceof Date)) throw CustomError.badRequest('DueDate must be a valid Date object');
  
      return new TaskEntity(_id, title, description, dueDate, status || 'not started', userIds || [], projectId || null);
    }
  
    // Método para convertir la entidad a un objeto plano compatible con Mongoose
    public toMongooseObject(): any {
      return {
        _id: this._id,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status,
        userIds:this.userIds.length > 0 ? this.userIds : [],
        projectId: this.projectId
      };
    }
  }