const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views');


app.get("/",(req,res,next)=>{
    console.log("Rendering...");
    res.render('first_view');
})


app.listen(3000,(req,res)=>{
    console.log("Listening at port 3000");
})