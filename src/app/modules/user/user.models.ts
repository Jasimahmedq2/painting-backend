import { Schema, model } from "mongoose";
import { UserRoleConstant } from "../auth/auth.constant";
import { IUser } from "./user.interface";

const UserModel = new Schema<IUser>({
  name: {
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
  role: {
    enum: UserRoleConstant,
    type: String,
    default: "customer",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
});

export const User = model<IUser>("user", UserModel);
