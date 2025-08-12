import express, { Request, Response } from "express";
import { LogInfo } from "../utils";
import { UserController } from "../controllers/UserController";
import { verifyToken } from "../middlewares";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

const userRouter = express.Router();

userRouter
  .route("/:idUser")
  .get(async (request: Request, response: Response) => {
    const idUser: string = request?.params?.idUser;
    LogInfo(`Param idUser: ${idUser}`);
    const controller: UserController = new UserController();
    const results: string = await controller.getIdUser(idUser);
    response.send(results);
  });

userRouter
  .route("/")
  .post(jsonParser, async (request: Request, response: Response) => {
    const id = request?.body?.id;
    const email = request?.body?.email;
    const fullName = request?.body?.fullName;
    LogInfo(`Body Params user`);
    const controller: UserController = new UserController();
    const results: string = await controller.registerUser({
      id,
      email,
      fullName,
    });
    response.send(results);
  });

export default userRouter;
