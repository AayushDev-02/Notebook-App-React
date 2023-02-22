const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/Notebook-app'

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
