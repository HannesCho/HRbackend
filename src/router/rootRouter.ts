import express from "express";
import { userList, Login, Signup } from "../controllers/userController";
import extractJWT from "../middleware/extractJWT";

const rootRouter = express.Router();

rootRouter.get("/", extractJWT, userList);
rootRouter.post("/signup", Signup);
rootRouter.post("/login", Login);

export default rootRouter;
