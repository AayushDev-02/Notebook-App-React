const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/?directConnection=true'

const connectToMongo = () => {
    mongoose.connect(process.env + mongoURI, () => {
        console.log('Connected to MongoDB');
    })
}

mongoose.set("strictQuery", false);

module.exports = connectToMongo;
