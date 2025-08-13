import { LogError, LogSuccess, LogWarning } from "../utils";
import { IUserController } from "../interfaces";
import { IUser } from "@/interfaces/IUser.interface";
import { postUser, getIdUser } from "../domain/orm/user.orm";

export class UserController implements IUserController {
  async registerUser(user: IUser): Promise<any> {
    let response: any = "";
    if (user.idFirebase) {
      try {
        await postUser(user);
        LogSuccess(
          `[/api/user] Post User By email: ${user.email} successfully registered`
        );
        response = {
          status: 200,
          message: `User with email: ${user.email} successfully registered `,
        };
      } catch (error) {
        LogError(`[/api/user] Added user had an error: ${error}`);
        response = {
          status: 500,
          message: `Error registering user`,
        };
      }
    } else {
      LogWarning(`[/api/user] To register a new user, enter the Firebase ID.`);
      response = {
        status: 400,
        message: `Please, provide a Firebase Id to create a new user.`,
      };
    }
    return response;
  }

  async getIdUser(idFirebase: string): Promise<any> {
    let response: any = "";
    if (idFirebase.length) {
      try {
        const infomation = await getIdUser(idFirebase);
        LogSuccess(`[/api/user] Get User By ID: ${idFirebase}`);
        response = {
          status: 200,
          message: `Get user By Id: ${idFirebase}`,
          infomation,
        };
      } catch (error) {
        LogError(`[ORM ERROR]: Getting User By ID: ${error}`);
        response = {
          status: 500,
          message: `User does not exist`,
        };
      }
    } else {
      LogError(`[/api/user] User ID: ${idFirebase} does not exist`);
      response = {
        status: 400,
        message: `Please, provide a correct Firebase.`,
      };
    }
    return response;
  }
}
