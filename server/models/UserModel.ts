import { model, models, Schema } from "mongoose";

export const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
    minLength: 3,
    maxLength: 24,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

export default models.User || model("User", UserSchema);
