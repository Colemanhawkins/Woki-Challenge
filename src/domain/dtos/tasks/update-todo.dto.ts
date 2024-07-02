export class UpdateTodoDto {
  constructor(
    public readonly _id: string,
    public readonly title?: string,
    public readonly description?: string,
    public readonly dueDate?: Date,
    public readonly status?: 'not started' | 'in progress' | 'completed',
    public readonly userIds?: number[],
    public readonly projectId?: string,
  ) {}

  static create(props: any): [string?, UpdateTodoDto?] {
    const { _id, title, description, dueDate, status, userIds, projectId } = props;

    if (!_id || !/^[0-9a-fA-F]{24}$/.test(_id)) {
      return ['id must be a valid MongoDB ObjectId'];
    }

    if(!title)return ['Title is required']

    if (dueDate && !(dueDate instanceof Date)) {
      return ['dueDate must be a valid Date object'];
    }

    return [undefined, new UpdateTodoDto(_id, title, description, dueDate, status, userIds, projectId)];
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