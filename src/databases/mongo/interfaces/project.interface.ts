import {  Types } from "mongoose";

export interface Project extends Document {
    title: string;
    description: string;
    dueDate: Date;
    status: 'not started' | 'in progress' | 'completed';
    userIds: Types.ObjectId[]; 
    taskIds: Types.ObjectId[];
  }