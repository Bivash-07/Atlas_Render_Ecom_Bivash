
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bivashchat:Bivash@123@cluster0.4wvvv.mongodb.net/Ecom", {
// mongoose.connect("mongodb://localhost:27017/Ecom", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log(`Connection successful with database`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB: ${e.message}`);
});

module.exports = mongoose.connection;
