const mongoose = require("mongoose");

async function connectDB() {
    console.log("Connecting to database...");
    try {
        await mongoose.connect("mongodb+srv://yt:P6gW7nSIDHFyfS4p@yt-backend.9gz1ph5.mongodb.net/newDB");
        console.log("Connected to database");
    } catch (e) {
        console.log(e);
    }
}

module.exports = connectDB;