const mongoose = require("mongoose");
const postSchema = require("./Post");
const userSchema = new mongoose.Schema({
    wallet: String,
    name: String,
    bio: String,
});

module.exports = mongoose.model("User", userSchema);
