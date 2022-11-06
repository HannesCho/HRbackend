import express from "express";
import {
  editUser,
  deleteUser,
  userProfile,
  loggedInUser,
} from "../controllers/userController";
import extractJWT from "../middleware/extractJWT";

const userRouter = express.Router();

userRouter.get("/", extractJWT, loggedInUser);
userRouter.get("/:id", extractJWT, userProfile);
userRouter.delete("/:id", extractJWT, deleteUser);
userRouter.put("/:id", extractJWT, editUser);

export default userRouter;
