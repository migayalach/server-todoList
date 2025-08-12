// import { Delete, Get, Post, Query, Route, Tags } from "tsoa";
import { IUserController } from "../interfaces";
import { IUser } from "@/interfaces/IUser.interface";

// @Route("/todoList/user")
// @Tags("UserController")
export class UserController implements IUserController {
  // @Get("/")
  async getIdUser(idUser: string): Promise<any> {
    console.log(idUser);
    return "get";
  }

  // @Post("/")
  async registerUser(user: IUser): Promise<any> {
    console.log(user.id);
    console.log(user.email);
    console.log(user.fullName);
    return "post";
  }
}
