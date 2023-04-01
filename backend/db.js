const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Aayush:ClrZvsoXBEntFXzV@cluster0.vdqdhhd.mongodb.net/test'

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
