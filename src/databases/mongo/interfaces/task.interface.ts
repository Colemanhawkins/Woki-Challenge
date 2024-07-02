import { Types } from "mongoose";

export interface Task extends Document {
    title: string;
    description: string;
    dueDate: Date;
    status: 'not started' | 'in progress' | 'completed';
    userIds: Types.ObjectId[];
    projectId: Types.ObjectId;
  }