const mongoose = require('mongoose');
require("dotenv").config();

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.re3ha3x.mongodb.net/otp`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB database!");
    } catch (error) {
        console.error("Connection failed!", error);
        process.exit(1);
    }
};

module.exports = connectDB;