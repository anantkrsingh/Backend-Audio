const express = require('express');

const app = express();




app.get("/",(req,res)=>{
    res.send(req.body.name);
})
app.listen("3000",()=>{

})