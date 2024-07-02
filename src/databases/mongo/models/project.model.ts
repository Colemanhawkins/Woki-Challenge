import mongoose, { Schema } from 'mongoose';
import { Project } from '../interfaces/index';

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
  userIds: [{ type: Number }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

export const ProjectModel = mongoose.model<Project>('Project', projectSchema);