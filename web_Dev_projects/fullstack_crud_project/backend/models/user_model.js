const mongoose = require("mongoose"); 

// Define the schema
const user_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Ensures the name field is mandatory
        trim: true      // Removes any leading or trailing whitespace
    },
    email: {
        type: String,
        required: true, // Ensures the email field is mandatory
        unique: true,   // Ensures that email addresses are unique
        trim: true,     // Removes any leading or trailing whitespace
        lowercase: true // Converts email addresses to lowercase
    },
    age: {
        type: Number,
        required: true, // Ensures the age field is mandatory
        min: 0          // Ensures age is a positive number
    }
});

// Create the model
const user = mongoose.model('user', user_schema);

module.exports = user;
