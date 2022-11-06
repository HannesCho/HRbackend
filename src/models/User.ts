import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../types/model.type";

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  street: String,
  housenumber: String,
  zipcode: Number,
  city: String,
  country: String,
  role: { type: String, required: true },
  admin: { type: Boolean, default: false, required: true },
  comments: [{ type: Object }],
});

const User = mongoose.model<IUserModel>("User", UserSchema);

export default User;
