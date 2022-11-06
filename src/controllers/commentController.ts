import { Request, Response } from "express";
import Comment from "../models/Comment";
import User from "../models/User";

export const createComment = async (req: Request, res: Response) => {
  const { username, text, author } = req.body;

  try {
    const createdComment = await Comment.create({
      username,
      text,
      author,
    });

    const addCommentToUser = await User.findOne({ username });
    addCommentToUser?.comments?.push(createdComment);
    addCommentToUser?.save();
    return res.status(200).json({ createdComment });
  } catch (error) {
    return res.status(400).json({
      errorMessage: error,
    });
  }
};
