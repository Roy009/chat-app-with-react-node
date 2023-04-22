const express = require('express');
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const colors = require("colors");
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send("API is Running")
});

app.get("/api/chat", (req,res) => {
    res.send(chats);
})

app.listen(PORT,console.log(`Server started on PORT ${PORT}`.yellow.bold));