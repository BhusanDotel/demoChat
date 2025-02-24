import { Server } from "socket.io";
import { config } from "dotenv";
config();

let io;

export const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.SOCKET_ORIGIN,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected");
  });

  return io;
};

export const getSocketIo = () => io;
