import mongoose, { Schema } from 'mongoose';
import { Task } from '../interfaces';

const taskSchema = new mongoose.Schema<Task>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['not started', 'in progress', 'completed'],
    default: 'not started',
  },
  userIds: [{ type: Number }],
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' }
});

export const TaskModel = mongoose.model<Task>('Task', taskSchema);
