import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://chat-app-xw90.onrender.com');
}