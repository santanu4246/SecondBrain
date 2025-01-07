import mongoose from "mongoose";
import { DATABASE_URL } from "./config/utils";

const db = () => {
    mongoose
        .connect(DATABASE_URL)
        .then(() => {
            console.log("Connected to MongoDB successfully");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
};

export { db };
