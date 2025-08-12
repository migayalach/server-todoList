import express, { Response, Request } from "express";
import userRouter from "./UserRouter";
import recordRouter from "./RecordRoute";
import { LogInfo } from "../utils";

const server = express();

const rootRouter = express.Router();

rootRouter.get("/", (request: Request, response: Response) => {
  LogInfo("GET: http://localhost:3001/api");
  response.send("Wellcome to my API");
});

server.use("/", rootRouter);
server.use("/user", userRouter);
server.use("/record", recordRouter);

export default server;
