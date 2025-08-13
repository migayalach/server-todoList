import { IUser } from "../../interfaces/IUser.interface";
import dotenv from "dotenv";
import { userEntity } from "../entities/user.entity";
import mongoose from "mongoose";
dotenv.config();

export const postUser = async (user: IUser): Promise<any> => {
  const userModel = userEntity();
  return await userModel.create(user);
};

export const getIdUser = async (idFirebase: string): Promise<any> => {
  const userModel = userEntity();
  return await userModel.findOne({ idFirebase });
};
