import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.SECRETKEY || "MYSECRETKEY";

export const verifyToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token: any = request.headers["x-access-token"];
  if (!token) {
    response.status(403).send({
      authenticationError: "Missing JWT in request",
      message: "Not authenticacion to consume this endpoint",
    });
  }

  jwt.verify(token, secret, (error: any, decoded: any) => {
    if (error) {
      response.status(500).send({
        authenticationError: "JWT verification failed",
        message: "Failed to verify JWT token in request",
      });
    }
  });

  next();
};
