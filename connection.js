
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection successful with database`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e.message}`);
});

module.exports = mongoose.connection;