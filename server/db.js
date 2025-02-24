import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("DB  Connected to cloud 🟢");
  } catch (error) {
    console.error(`MongoDB Error 🔴 : ${error.message}`);
    process.exit(1);
  }
};
