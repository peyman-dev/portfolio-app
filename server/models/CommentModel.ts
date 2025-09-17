import mongoose, { model, models, Schema } from "mongoose";

export const CommentSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
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
