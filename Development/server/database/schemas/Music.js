const mongoose = require('mongoose');


const Music = new mongoose.Schema({
    Title: {
        type: String,
        minLength: 2
    },
    SongHash: {
        type: String,
        required: true
    },
    Artist: {
        type: String,
        minLength: 2
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    ThumbnailHash: {
        type: String,
        required:true
    },
    Plays: Number,

})

module.exports = mongoose.model("Music",Music);
