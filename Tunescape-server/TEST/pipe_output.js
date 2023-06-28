const express = require("express")
const app = express();
const {createReadStream} = require("fs")

const output = createReadStream("Suzume.mp3")

app.get("/",(req,res)=>{
    output.pipe(res)
})


app.listen(4000)