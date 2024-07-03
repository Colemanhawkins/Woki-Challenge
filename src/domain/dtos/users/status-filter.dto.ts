
export class StatusFilterDto {
  constructor(
    public readonly _id: string,
    public readonly status: string,
  ) {}

  static create(props: any): [string?, StatusFilterDto?] {
    const { _id,  status } = props;
    console.log(status)
    if (!_id || !/^[0-9a-fA-F]{24}$/.test(_id)) {
      return ['id must be a valid MongoDB ObjectId'];
    }

   if(   status !== 'not started' 
      && status !==  'in progress'
      && status !==  'completed' ) return [`Invalid status must be: "not started" OR "in progress" OR "completed"`]

    return [undefined, new StatusFilterDto(_id, status)];
  }

}