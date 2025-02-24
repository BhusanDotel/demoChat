import express from "express";
import { config } from "dotenv";
import { connectDB } from "./db.js";

config();

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();

// Middleware
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
