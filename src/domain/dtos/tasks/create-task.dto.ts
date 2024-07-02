export class CreateTaskDTO {
    constructor(
      public readonly title: string,
      public readonly description: string,
      public readonly dueDate: Date
    ) {}
  
    static create(props: any): [string?, CreateTaskDTO?] {
      const { title, description, dueDate } = props;
  
      if (!title) {
        return ['Title is required'];
      }
  
      if (!description) {
        return ['Description is required'];
      }
  
      if (!dueDate || !(dueDate instanceof Date)) {
        return ['DueDate must be a valid Date object'];
      }

      if (dueDate && dueDate < new Date()){
        return ['DueDate invalid']
      }
  
      return [undefined, new CreateTaskDTO(title, description, dueDate)];
    }
  }