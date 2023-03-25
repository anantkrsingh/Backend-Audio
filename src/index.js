const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const env = require('dotenv');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');




env.config();
const authRoutes = require('./Routes/Auth');
const roomRoutes = require('./Routes/Generator')
const { createMeeting } = require('./Controllers/Generator');
const app = express();


app.use(cors);
app.use(express.json())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',authRoutes);
app.use('/api/meeting',roomRoutes )



app.get("/",(req,res)=>{
  console.log(req.query.name);
    res.send(req.query.name);
})

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