import express, { Express, Request, Response } from "express";
import swaggerUi, { serve } from "swagger-ui-express";
import cors from "cors";
import helmet from "helmet";
import rootRouter from "../routes";
import mongoose from "mongoose";

const server: Express = express();

server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      exporer: true,
    },
  })
);

server.use("/api", rootRouter);
server.use(express.static("public"));

// TODO Mongose connection
mongoose.connect("mongodb://localhost:27017/todoList");

server.use(helmet());
server.use(cors());

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

server.get("/", (request: Request, response: Response) => {
  response.redirect("/api");
});

export default server;
