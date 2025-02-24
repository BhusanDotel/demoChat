import express from "express";
const router = express.Router();
import { socketTest } from "../controllers/messageController.js";

router.post("/socket-test", socketTest);

export default router;
