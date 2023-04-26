const http = require('http');
const express = require('express')
const cors = require('cors')
const socketIO = require('socket.io')

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

server.listen(port, () => {
    console.log(`Server is working on ${port}`);
})