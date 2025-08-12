import express, { Request, response, Response } from "express";
import { LogInfo } from "../utils";
import { RecordController } from "../controllers/RecordController";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

const recordRouter = express.Router();

recordRouter
  .route("/")

  .get(async (request: Request, response: Response) => {
    LogInfo(``);
    const controller: RecordController = new RecordController();
    const results: any = await controller.get();
    response.send(results);
  })

  .post(async (request: Request, response: Response) => {
    LogInfo(``);
    const controller: RecordController = new RecordController();
    const results: any = await controller.post();
    response.send(results);
  })

  .put(async (request: Request, response: Response) => {
    LogInfo(``);
    const controller: RecordController = new RecordController();
    const results: any = await controller.put();
    response.send(results);
  })

  .delete(async (request: Request, response: Response) => {
    LogInfo(``);
    const controller: RecordController = new RecordController();
    const results: any = await controller.delete();
    response.send(results);
  });

export default recordRouter;
