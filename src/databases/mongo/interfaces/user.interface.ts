import {  Types } from "mongoose";

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role:string
    taskIds: Types.ObjectId[];
    projectIds: Types.ObjectId[];
  }