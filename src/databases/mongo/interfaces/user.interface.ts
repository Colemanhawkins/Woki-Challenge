import { Schema, Types } from "mongoose";

export interface User extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    taskIds: Types.ObjectId[]
    projectIds: Types.ObjectId[];
  }