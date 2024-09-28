// Importing express
import express from "express";
import dotenv from "dotenv";
import connect_db from "./config/db.js";

// Dotenv configuration
dotenv.config();

// MongoDB connection
console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('MONGO_LOCAL_URL:', process.env.MONGO_LOCAL_URL);
connect_db();

// Create express app
const app = express();

// Default port to 3001 if not specified in .env

const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Building routes
app.get('/', (req, res) => {
    res.send("<h3>Welcome to the Job Portal</h3>");
});

// Starting the server
app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log(`Server running in ${process.env.DEV_MODE} mode on port: ${port}`);
});










