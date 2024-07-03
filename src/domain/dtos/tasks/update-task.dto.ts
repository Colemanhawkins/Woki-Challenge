import { Types } from "mongoose";

export class UpdateTaskDto {
  constructor(
    public readonly _id: Types.ObjectId,
    public readonly title?: string,
    public readonly description?: string,
    public readonly dueDate?: Date,
    public readonly status?: 'not started' | 'in progress' | 'completed',
    public readonly userIds?: Types.ObjectId[],
    public readonly projectId?: Types.ObjectId,
  ) {}

  static create(props: any): [string?, UpdateTaskDto?] {
    const { _id, title, description, dueDate, status, userIds, projectId } = props;

    if (!_id || !/^[0-9a-fA-F]{24}$/.test(_id)) {
      return ['id must be a valid MongoDB ObjectId'];
    }

    if(!title)return ['Title is required']
    
    if ( dueDate ) {
      const newdueDate = new Date(dueDate)
      if ( newdueDate.toString() === 'Invalid Date' && newdueDate > new Date() ) {
        return ['dueDate must be a valid Date object'];
      }
    }
  
    const newStatus =   status === 'not started' 
    || status ===  'in progress'
    || status ===  'completed' ? status  : 'not started' 


    return [undefined, new UpdateTaskDto(_id, title, description, dueDate, newStatus, userIds, projectId)];
  }

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.title !== undefined) returnObj.title = this.title;
    if (this.description !== undefined) returnObj.description = this.description;
    if (this.dueDate !== undefined) returnObj.dueDate = this.dueDate;
    if (this.status !== undefined) returnObj.status = this.status;
    if (this.userIds !== undefined) returnObj.userIds = this.userIds;
    if (this.projectId !== undefined) returnObj.projectId = this.projectId;

    return returnObj;
  }
}