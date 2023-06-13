const express=require("express");
const app = express();
app.set("views","views");
app.set("view engine","ejs")
const welcomeRoute  = require('./welcomeroute');

app.use('/welcome',welcomeRoute)

app.get('/',(req,res)=>{
    res.send("HI");
})

app.listen(3000)