const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@shooting-stars.lweczfy.mongodb.net/tunescape?retryWrites=true&w=majority`;

console.log(uri)
module.exports= async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database successfully.");
  } catch (err) {
    console.log("Database error: ", err.message);
  }


  //mongoose.on
}
