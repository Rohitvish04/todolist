const mongoose = require("mongoose");

const db= process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    
};}

module.exports = connectDB;