import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
export interface decodedInterface extends JwtPayload {
  username: string | JwtPayload;
}

const extractJWT = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, config.server.token.secret);
      (req as CustomRequest).token = decoded;
      next();
    } catch (error) {
      return res.status(404).json({
        message: error,
        error,
      });
    }
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default extractJWT;
