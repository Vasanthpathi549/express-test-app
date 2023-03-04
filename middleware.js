const express = require('express');
const app = express();

//simple req
app.use((req,res,next)=>{
    console.log("Request "+Date
    .now());
    next();
})

app.get('/',(req,res,next)=>{
    console.log("Coming from middleware");
    res.send('Middleware route handler');
    next();
})

app.use('/',(req,res,next)=>{
    console.log("End");
})

app.listen(3000)