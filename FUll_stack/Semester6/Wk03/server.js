const express = require('express');
const socketio = require('socket.io'); // import socket.io

/*
Socket은 주로 실시간 양방향 통신을 가능하게 하는 도구로 사용됩니다 
- 클라이언트와 서버가 서로 실시간으로 데이터를 보낼수있게합니다 
- 클라이언트가 서버에게 메세지를 보내면 서버는 다른 클라이언트에게 메세지를 보낼수있습니다
- 실시간 데이터 업데이트 
- 실시간 채팅
*/

// socket.io is a library that enables real-time, bidirectional and event-based communication between the browser and the server.
const app = express();
const SERVER_PORT = 3000;


const server = app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/chat.html")

});

// http://localhost:3000/
app.get("/group", (req, res) => {
  res.sendFile(__dirname + "/views/group_chat.html")

});
// create a new instance of socket.io by passing the server object
const io_server = socketio(server); 
// listen for connection event
io_server.on("connection", (socket) => {
  console.log(`New Socket: ${socket.id}`)

  socket.on('disconnect' , () => {
    console.log(`Socket Disconnected: ${socket.id}`)
  })

  console.log("********************************************************")


  socket.on("message", (data)=>
  {
    console.log(`Message from Server:  ${socket.id}: ${data}`)
  })

  socket.on("chat_message", (data) => {
    data.clientId = socket.id
    console.log(JSON.stringify(data))
    socket.broadcast.emit("chat_message", data)
    io_server.emit("chat_message", data)
  })

  socket.on('group_message', (data) => {
    console.log(JSON.stringify(data))
    io_server.socket.in(data.group_name).emit('group_message', data)
  })

  socket.on('join_group', (groupName) => {
    console.log(`${socket.id} joined ${groupName}`)
    socket.join(groupName)
  })

  socket.on("leave_group", (groupName) => {
    console.log(`${socket.id} left ${groupName}`)
    socket.leave(groupName)
  })
})
