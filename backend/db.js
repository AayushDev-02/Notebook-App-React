const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/.env'});
const url=process.env.MONGO_URI;

const mongoURI = url;

const connectToMongo = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log("Failed to connect")
    }
}

mongoose.set("strictQuery", false);

module.exports = connectToMongo;
