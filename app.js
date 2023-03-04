const express = require('express');

const app=express();

const things = require('./routes');

// app.get("/hello",(req,res)=>{
//     res.send("Hello,Vasanth!!")
// })
app.use(things);
app.listen(3000,()=>{
    console.log("Listening at port 3000");
})