const express  =require("express");
const app  =  express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

function receiveUsernameandgreetthem(req,res,next){
    console.log("i m running");
    var bc= req.body.text;
    res.setbc = bc;
    next()
}

app.post("/receive",receiveUsernameandgreetthem,(req,res)=>{
    res.send(`OK,${res.setbc}`)
})

app.listen(5000)