import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const Room = "group";

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("joinRoom", async (userName) => {
    // socket.userName=userName
    console.log(`${userName} is joining the group.`);

    await socket.join(Room);

    //send to all
    // io.to(Room).emit("roomNotice",userName)

    // Broadcast
    socket.to(Room).emit("roomNotice", userName);

    socket.on("chatMessage", (msg) => {
      socket.to(Room).emit("chatMessage", msg);
      
    });
    socket.on("typing", (userName) => {
      socket.to(Room).emit("typing",userName);

    });
    socket.on("stopTyping", (userName) => {
      socket.to(Room).emit("stopTyping",userName);

    });

    socket.on("disconnect", () => {
  if (userName) {
    socket.broadcast.emit("userLeft", userName);
  }
});

  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(4600, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
