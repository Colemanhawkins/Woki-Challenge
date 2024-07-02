import { Schema } from "mongoose";

export interface Project extends Document {
    title: string;
    description: string;
    dueDate: Date;
    status: 'not started' | 'in progress' | 'completed';
    userIds: number[]; 
    tasks: Schema.Types.ObjectId[];
  }