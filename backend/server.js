const express = require('express');
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const colors = require("colors");
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();
connectDB();

app.get('/',(req,res)=>{
    res.send("API is Running")
});

app.use('/api/user', userRoutes)
app.listen(PORT,console.log(`Server started on PORT ${PORT}`.yellow.bold));