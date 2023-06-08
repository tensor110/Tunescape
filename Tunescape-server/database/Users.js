const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type : String,
        minLength :8
        },
    password:String,
    age:Number,
    email:{
        type : String,
        minLength :8,
        lowercase:true
        },
    createdAt:{
    type:Date,
    immutable:true,
    default : ()=>Date.now()
    },
    updatedAt:{
        type:Date,
        immutable:true,
        default : ()=>Date.now()
        },
    telephone:Number,
    ProfileHash:String,
    isAdmin:Boolean
})

module.exports =mongoose.model("User",userSchema);