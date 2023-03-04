var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    res.send("Get Request");
})


// router.get("/:id",(req,res)=>{
//     console.log(req.params.name);
//     res.send("Get Request"+req.params.id);
// })

router.get("*",(req,res)=>{
    res.send("Sorry, Invalid URL")
})

router.get("/:id([0-9]{4})",(req,res)=>{
    console.log(req.params.name);
    res.send("Get Request pattern"+req.params.id);
})

router.get("/:name/:id",(req,res)=>{
    console.log(req.params.name);
    res.send("Get Request"+req.params.id);
})



router.post("/",(req,res)=>{
    res.send("Get Request");
})


router.get("/name",(req,res)=>{
    res.send("Hello Vasanth !!!!")
})

//export this route
module.exports=router;