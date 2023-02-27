const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');


env.config();
const authRoutes = require('./Routes/Auth');
const app = express();



app.use('/api',authRoutes);



app.get("/",(req,res)=>{
    res.send(req.query.name);
})
app.use(bodyParser.json());
app.listen("3000",()=>{

});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ksqm3qe.mongodb.net/test`
  )
  .then(() => {
    console.log("DB Connected");
  }).catch((error)=>{
    console.log(error)
  
  });