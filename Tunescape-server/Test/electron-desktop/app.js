const express = require("express");
const app = express ();

app.get("/",(req,res)=>{
    res.send(`<h1>Hello Electron!This is Soubhik!</h1>
    <a href = "www.google.com/" >Open Google</a>`)
})

app.listen(3000)