import express from "express";
import { createComment } from "../controllers/commentController";

const commentRouter = express.Router();

commentRouter.post("/", createComment);

export default commentRouter;
