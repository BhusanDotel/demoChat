import { getSocketIo } from "../socketService.js";

export const emitEvent = ({ eventURL, message }) => {
  const io = getSocketIo();

  io.emit(eventURL, { message });
};
