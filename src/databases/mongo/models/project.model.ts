import mongoose, { Schema } from 'mongoose';
import { Project } from '../interfaces';

const projectSchema = new mongoose.Schema<Project>({
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
  taskIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
    default: [],
  }],
  userIds: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: [],
  }],
});

export const ProjectModel = mongoose.model<Project>('Project', projectSchema);