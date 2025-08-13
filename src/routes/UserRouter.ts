import express, { Request, Response } from "express";
import { LogInfo } from "../utils";
import { UserController } from "../controllers/UserController";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

const userRouter = express.Router();

userRouter
  .route("/:idFirebase")
  .get(async (request: Request, response: Response) => {
    const idFirebase: string = request?.params?.idFirebase;
    LogInfo(`Param idUser: ${idFirebase}`);
    const controller: UserController = new UserController();
    const results: any = await controller.getIdUser(idFirebase);
    response
      .status(results.status)
      .json({ message: results.message, infomation: results.infomation });
  });

userRouter
  .route("/")
  .post(jsonParser, async (request: Request, response: Response) => {
    const idFirebase = request?.body?.idFirebase;
    const email = request?.body?.email;
    const fullName = request?.body?.fullName;
    LogInfo(`Body Params user`);
    const controller: UserController = new UserController();
    const results: any = await controller.registerUser({
      idFirebase,
      email,
      fullName,
    });
    response.status(results.status).json({ message: results.message });
  });

export default userRouter;
