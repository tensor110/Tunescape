const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  uid: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  profileURL : String,
//   updatedAt: {
//     type: Date,
//     default: () => Date.now(),
//   },
//   isAdmin: Boolean,
});

module.exports = mongoose.model("User", userSchema);
