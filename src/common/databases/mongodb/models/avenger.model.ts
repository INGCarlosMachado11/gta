import mongoose, { Schema } from "mongoose";

const avengerSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: [true, "Missing name"],
    },
    description: {
      type: String,
      require: [false]
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Avenger = mongoose.model("Avenger", avengerSchema);