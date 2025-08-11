import { LogInfo } from "../utils";
import express, { Request, Response } from "express";

const server = express();

const rootRouter = express.Router();

rootRouter.get("/", (request: Request, response: Response) => {
  LogInfo("GET: http://localhost:3001/api");
  response.send("Wellcome to my API");
});

server.use("/", rootRouter);

export default server;
