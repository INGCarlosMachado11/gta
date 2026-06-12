import mongoose, { Schema } from "mongoose";

const powerSchema = new Schema(
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
    heros: {
        type:[ Schema.Types.ObjectId],
        ref: "Heros",


    },
    status: {
      type: Boolean,
      default: true,
    },
    damage: {
      type: Number,
      unique: true,
      require: [true, "Missing damage"],
    },
  },
  {
    timestamps: true,
  },


);

export const Power = mongoose.model("Power", powerSchema);