const mongoose = require('mongoose');


const Music = new mongoose.Schema({
    Title: {
        type: String,
        minLength: 1
    },
    SongHash: {
        type: String,
        required: true
    },
    Artist: {
        type: String,
        minLength: 5
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
        required: true
    },
    Plays: Number
})

module.exports = Mongoose.model("Music",Music);
