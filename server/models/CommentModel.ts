import mongoose, { model, models, Schema } from "mongoose";

export const CommentSchema = new Schema({
  user: {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false,
    },
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
});

export default models.Comment || model("Comment", CommentSchema);
