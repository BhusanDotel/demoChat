import asyncHandler from "express-async-handler";
import { emitEvent } from "../utils/emitEvent.js";

export const socketTest = asyncHandler(async (req, res) => {
  emitEvent({ eventURL: "test-url", message: "Hello from server" });

  res.json({ message: "ok" });
});
