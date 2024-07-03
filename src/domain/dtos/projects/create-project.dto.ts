export class CreateProjectDto {
    constructor(
      public readonly title: string,
      public readonly description: string,
      public readonly dueDate: Date,
      public readonly status: 'not started' | 'in progress' | 'completed'
    ) {}
  
    static create(props: any): [string?, CreateProjectDto?] {
      const { title, description, dueDate, status } = props;
  
      if (!title) {
        return ['Title is required'];
      }
  
      if (!description) {
        return ['Description is required'];
      }
  
      if ( dueDate ) {
        const newdueDate = new Date(dueDate)
        if ( newdueDate.toString() === 'Invalid Date' && newdueDate > new Date() ) {
          return ['dueDate must be a valid Date object'];
        }
      }
      
      const newStatus =   status === 'not started' 
      || status ===  'in progress'
      || status ===  'completed' ? status  : 'not started' 
    
      return [undefined, new CreateProjectDto(title, description, dueDate, newStatus)];
    }
  }