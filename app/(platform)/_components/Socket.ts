import { io, Socket } from "socket.io-client";
const Url = 'http://localhost:3000/api/socket';
const socket: Socket = io(Url);
export default socket;