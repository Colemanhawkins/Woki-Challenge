import mongoose, { Schema } from 'mongoose';

import { bcryptAdapter } from '../../../config';
import { User } from '../interfaces';

const userSchema = new mongoose.Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  projectIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Project',
    default: [],
  }],
  taskIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
    default: [],
  }],
});

userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
      this.password = bcryptAdapter.hash(this.password);
    }
    next();
  });
  
userSchema.pre('findOneAndUpdate', function(next) {
    const update = this.getUpdate() as mongoose.UpdateQuery<User>
    if (update.password) {
      update.password = bcryptAdapter.hash(update.password);
    }
    next();
})

export const UserModel = mongoose.model<User>('User', userSchema);