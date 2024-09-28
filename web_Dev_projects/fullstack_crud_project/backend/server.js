const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const userRoutes = require("./routes/user_route"); // Your route file

dotenv.config();

app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection failed:", error));

// Use user routes
app.use("/users", userRoutes); // Prefix your route

// Root route to confirm API is running
app.get("/", (req, res) => {
    res.send("API is running");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
