const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 8
    },
    password: { type: String, minLength:8, required: true },
    age: Number,
    email: {
        type: String,
        minLength: 8,
        lowercase: true
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
    telephone: Number,
    ProfileHash: {
        type: String,
        required: false
    },

    isAdmin: Boolean
})

module.exports = mongoose.model("User", userSchema);