import express from "express";
import mongoose from "mongoose";
import { ENVS } from "../../config/env.config";

export class MongoDB{ //posible hackeo
    connect(){
        try {
            mongoose.connect(ENVS.MONGO_URI, { dbName: "marvel" })
            console.log("Mongo Connected")
        } catch (error) {
            console.error(error)
        }


    }
}