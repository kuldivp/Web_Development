const express = require("express");
const User = require('../models/user_model'); // Ensure you have the correct path to the model
const router = express.Router();

// CREATE functionality
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const userdata = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userdata);
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }
        res.status(500).json({ error: error.message });
    }
});

// READ all users
router.get("/", async (req, res) => {
    try {
        const showall = await User.find();
        res.status(200).json(showall);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

// READ single user by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;  // Accessing the ID from the URL
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// DELETE user by ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});



// PATCH update user by ID
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const updateData = req.body; // The data to update

    try {
        // Find user by ID and update with the provided data
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;