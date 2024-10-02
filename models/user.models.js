import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
    trim: true,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
