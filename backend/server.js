const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
const User = require("./models/User");
const Post = require("./models/Post");

app.use(
    cors({
        origin: "*",
    })
);
mongoose.connect(process.env.DATABASE_LINK, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("err", (err) => console.error(err));
db.once("open", () => console.log("Connected to MongoDB"));
// const user = new User({
//     wallet: "0x1111111111",
//     name: "Marko",
//     likes: 1,
//     image: "link",
//     bio: "Caoooo",
// });
// user.save().then(() => console.log("User is saved"));
const post = new Post({
    authorWallet: "0x1111111111",
    likes: 1,
    name: "Marko",
    content: "Hello World I am Marko",
});
// post.save().then(() => console.log("Post is saved"));
const indexRoute = require("./routes/index");

app.use(express.static("public"));
console.log("GetPosts, CreatePosts, EditProfile, Like, Statisctis, login");
app.use("/", indexRoute);
const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
