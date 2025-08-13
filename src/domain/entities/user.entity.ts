import { IUser } from "../../interfaces/IUser.interface";
import mongoose from "mongoose";

export const userEntity = () => {
  const usersSchema = new mongoose.Schema<IUser>({
    idFirebase: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: false },
  });

  return mongoose.models.Users || mongoose.model<IUser>("Users", usersSchema);
};
