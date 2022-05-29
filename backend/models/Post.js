const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    authorWallet: String,
    likes: Number,
    name: String,
    content: String,
});

module.exports = new mongoose.model("Post", postSchema);
