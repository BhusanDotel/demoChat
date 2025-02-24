import express from "express";
import { config } from "dotenv";
import { connectDB } from "./db.js";
import bodyParser from "body-parser";
import http from "http";

config();

import { initSocket } from "./socketService.js";
import messageRoute from "./routes/messageRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Here goes routes
app.use("/api", messageRoute);

const server = http.createServer(app);

initSocket(server);

server.listen(PORT, () => {
  console.log("App listening on port 3000!");
});
