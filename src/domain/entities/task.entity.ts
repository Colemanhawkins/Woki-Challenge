import { CustomError } from "../errors/custom.error";

export class TaskEntity {
    constructor(
      public id: number,
      public title: string,
      public description: string,
      public dueDate: Date,
      public status: 'not started' | 'in progress' | 'completed' = 'not started',
      public userIds: string[] = [],
      public projectId?: string
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
      const { id, title, description, dueDate, status, userIds, projectId } = object;
      if (!id) throw CustomError.badRequest('Id is required');
      if (!title) throw  CustomError.badRequest('Title is required');
      if (!description) throw  CustomError.badRequest('Description is required');
      if (!dueDate || !(dueDate instanceof Date)) throw CustomError.badRequest('DueDate must be a valid Date object');
  
      return new TaskEntity(id, title, description, dueDate, status || 'not started', userIds || [], projectId || null);
    }
  
    // Método para convertir la entidad a un objeto plano compatible con Mongoose
    public toMongooseObject(): any {
      return {
        _id: this.id,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status,
        userIds:this.userIds.length > 0 ? this.userIds : [],
        projectId: this.projectId
      };
    }
  }