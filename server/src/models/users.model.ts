
import mongoose, { Document, Int32, Schema } from 'mongoose';


export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profileImageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;   
  isActive?: boolean;
  lastLogin?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  authType?: Int32;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true}
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);