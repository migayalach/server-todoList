import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3001;

app.get("/", (request: Request, response: Response) => {
  response.send("hello");
});

app.listen(port, () => {
  console.log("SERVER IN LINE");
});
