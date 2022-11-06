import jwt from "jsonwebtoken";
import config from "../config/config";
import { IUser } from "../types/model.type";

const signJWT = (
  user: IUser,
  callback: (error: Error | null, token: string | null) => void
): void => {
  try {
    jwt.sign(
      {
        username: user.username,
      },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      callback(error, null);
    } else {
      console.log("Unexpected error", error);
    }
  }
};

export default signJWT;
