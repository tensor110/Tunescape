const mongoose= require('mongoose');

const songSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    songHash: {
        type: String,
        required: true
    },
    createdAt:{
        type: String,
        immutable: true,
        default: ()=> Date.now()
    },
    updatedAt:{
        type: Date,
        default: ()=> Date.now()
    },
    thumbnailHash: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: String,
        immutable: true       
    },
    plays: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    }

});


module.exports= mongoose.model("Song", songSchema);