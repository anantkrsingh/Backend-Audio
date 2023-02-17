const express = require('express');

const app = express();




app.get("/",(req,res)=>{
    res.send(req.query.name);
})
app.listen("3000",()=>{

})