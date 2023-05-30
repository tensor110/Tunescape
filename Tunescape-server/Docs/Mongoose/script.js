const mongoose=require('mongoose')
const User=require("./User")
mongoose.connect(" mongodb://127.0.0.1:27017")
console.log("hi")

const user=new User({name:"Soubhik",age:"19"})
user.save().then(()=>console.log("User Saved"))