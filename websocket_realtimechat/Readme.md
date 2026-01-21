# 💬 Realtime Group Chat Application

A **Realtime Group Chat Application** built using **React, Node.js, Express, Socket.IO (WebSockets)** with support for live messaging, user join/leave notifications, and typing indicators.  
Users can join the chat by entering their name and start chatting instantly.

---

## 🚀 Live Demo

👉 Click the link, enter your name, and join the group chat in realtime  
🔗 **[Realtime Group Chat Application](https://groupchat-app-a7dv.onrender.com)**

*(Frontend & Backend deployed on Render)*

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React.js
- 🌐 WebSocket (Socket.IO Client)
- 🔐 dotenv (Environment Variables)
- 🎨 Tailwind CSS
- 🧠 React Hooks (`useState`, `useEffect`, `useRef`)

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 🔌 Socket.IO (WebSockets)
- 🌍 CORS
- 🔐 dotenv

---

## ✨ Features

- ✅ Realtime group chat using WebSockets
- ✅ User enters name before joining the chat
- ✅ User joined notification (system message)
- ✅ User left notification when:
  - browser tab is closed
  - page is refreshed
  - connection is lost
- ✅ Typing indicator (`user is typing...`)
- ✅ Messages aligned based on sender
- ✅ Timestamps for each message
- ✅ Environment-based configuration using `.env`
- ✅ Frontend & Backend deployed on Render
- ✅ Clean and responsive UI

---

## 🧠 How It Works

1. User opens the chat application
2. Enters their name
3. Clicks **Join Group**
4. Application establishes a WebSocket connection
5. Messages are exchanged in realtime
6. Join / Leave events are broadcast to all users
7. On refresh or tab close, the user is marked as left

---

## 🔌 WebSocket Events Used

### Client → Server
- `joinRoom`
- `chatMessage`
- `typing`
- `stopTyping`

### Server → Client
- `roomNotice` (user joined)
- `userLeft`
- `chatMessage`
- `typing`
- `stopTyping`

---

## 📁 Project Structure

chat-app/
├── server/
│ ├── index.js
│ ├── package.json
│ └── .env
│
├── client/
│ ├── src/
│ ├── package.json
│ └── .env

yaml
Copy code

---

## 🔐 Environment Variables

### Backend (`server/.env`)
```env
PORT=3000
CLIENT_URL=https://groupchat-app-a7dv.onrender.com/
Frontend (client/.env)
env
Copy code
REACT_APP_SOCKET_URL=https://chat-app-xw90.onrender.com/
🧪 Run Locally
Backend
bash
Copy code
cd Backend
npm install
npm start
Frontend
bash
Copy code
cd Frontend
npm install
npm start
```
#### 🌍 Deployment
- Frontend deployed as a Static Site on Render

- Backend deployed as a Web Service on Render

- Environment variables configured via Render dashboard

#### 🧩 Future Enhancements
- 🟢 Online users list

- 👤 User avatars

- 🔐 Authentication (JWT)

- 💬 Private chat rooms

- 📱 Mobile-first UI

- 📦 Message persistence (MongoDB)

#### 👨‍💻 Author
 Saad A. Naikwade
<a href="https://www.linkedin.com/in/saad-naikwade/">Full Stack Developer (MERN)</a>
Electronics & Communication Engineer
