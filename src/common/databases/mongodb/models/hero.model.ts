import mongoose, { Schema } from "mongoose";

const heroSchema = new Schema({
    name: {
        type: String,
        require: [true, "Missing name"],
    },
    power: {
        type: Number,
        default: 0
    },
    canFly: {
        type: Boolean,
        default: false
    },

    status: {
        type: Boolean,
        default: true
    },
},  {
    timestamps: true
}
)

export const Hero = mongoose.model("Hero", heroSchema);