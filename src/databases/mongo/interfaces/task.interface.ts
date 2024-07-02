import { Schema } from "mongoose";

export interface Task extends Document {
    title: string;
    description: string;
    dueDate: Date;
    status: 'not started' | 'in progress' | 'completed';
    userIds: number[];
    projectId: Schema.Types.ObjectId;
  }