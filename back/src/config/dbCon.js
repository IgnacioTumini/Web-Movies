import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbCon = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};
