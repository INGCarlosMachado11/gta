import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      require: [true, "Missing name"],
    },
    email: {
      type: String,
      require: [true, "Missing email"],
    },
    password: {
      type: String,
      require: [true, "Missing password"],
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
