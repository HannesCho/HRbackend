import mongoose, { Document, Schema } from "mongoose";
import { IComment } from "../types/model.type";

export interface ICommentModel extends IComment, Document {}

const CommentSchema: Schema = new Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  author: { type: String, required: true },
});

const Comment = mongoose.model<ICommentModel>("Comment", CommentSchema);

export default Comment;
