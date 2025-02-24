import asyncHandler from "express-async-handler";
import { emitEvent } from "../utils/emitEvent.js";

export const socketTest = asyncHandler(async (req, res) => {
  const { from, to, message } = req.body;
  console.log("from", to);

  emitEvent({ eventURL: "test-url", message });

  res.json({ message: "ok" });
});
