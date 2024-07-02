import { CustomError } from "../errors/custom.error";

export class ProjectEntity {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public dueDate: Date,
      public status: 'not started' | 'in progress' | 'completed' = 'not started',
      public userIds: string[] = [],
      public tasksIds: string[] = []
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
      const { id, title, description, dueDate, status, userIds, tasksIds } = object;
      if (!id) throw CustomError.badRequest('Id is required');
      if (!title) throw CustomError.badRequest('Title is required');
      if (!description) throw CustomError.badRequest('Description is required');
      if (!dueDate || !(dueDate instanceof Date)) throw CustomError.badRequest('DueDate must be a valid Date object');
  
      return new ProjectEntity(id, title, description, dueDate, status || 'not started', userIds || [], tasksIds || []);
    }
  
    public toMongooseObject(): any {
      return {
        _id: this.id,
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
        status: this.status,
        userIds: this.userIds.length > 0 ? this.userIds : [],
        tasks: this.tasksIds.length > 0 ? this.tasksIds : [] 
      };
    }
  }