// Importing express
import express from "express";
import cors from 'cors'
import morgan from "morgan";
import 'express-async-errors'
//files importing
import dotenv from "dotenv";
import connect_db from "./config/db.js";
import test_routes from './routes/test_routes.js';
import auth_routes from './routes/auth_routes.js'
import error_middleware from "./middlewares/error_middleware.js";



// Dotenv configuration
dotenv.config();

// MongoDB connection
console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('MONGO_LOCAL_URL:', process.env.MONGO_LOCAL_URL);
connect_db();

// Create express app
const app = express();
app.use(cors())
app.use(morgan("dev"))

// Middleware to parse JSON requests
app.use(express.json());

// Default port to 3001 if not specified in .env
const port = process.env.PORT || 3001;



// Building routes
app.use('/api/v1/test', test_routes);
app.use('/api/v1/auth', auth_routes);

//validation middleware
 app.use(error_middleware);


// Starting the server
app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
    console.log(`Server running in ${process.env.DEV_MODE} mode on port: ${port}`);
});






