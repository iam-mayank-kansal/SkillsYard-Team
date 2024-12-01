require('dotenv').config(); // To manage environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MongoDB = process.env.MONGO_URI; // Use environment variable
if (!MongoDB) {
    console.error("MongoDB connection string is missing in .env");
    process.exit(1); // Exit if MONGO_URI is not provided
}

mongoose.connect(MongoDB, {
    tls: true,
    tlsAllowInvalidCertificates: true, // Only for development; avoid in production
})
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.error(`Cannot connect to DB: ${err}`);
        process.exit(1); // Exit on DB connection failure
    });

// Schema and Model
const Team_Member_Schema = new mongoose.Schema({
    user_no: { type: Number },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { versionKey: false });

const Team_Model = mongoose.model("Team_Member", Team_Member_Schema);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/backend/userapi", async (req, res) => {
    try {
        const teamDetails = await Team_Model.find();
        res.status(200).send(teamDetails);
    } catch (error) {
        console.error("Error retrieving data:", error.message);
        res.status(500).send("Error retrieving data");
    }
});

app.post("/backend/userprofiles", async (req, res) => {
    const { user_no, name, email, password } = req.body;
    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const teamMember = await Team_Model.create({ user_no, name, email, password: hashedPassword });
        res.status(201).json({ status: "Success", message: "User saved successfully", user: teamMember });
    } catch (error) {
        console.error("Error saving user:", error.message);
        res.status(500).json({ status: "Failed", message: "Failed to Save User" });
    }
});

app.patch("/backend/updateUser", async (req, res) => {
    const { _id, ...updatedData } = req.body;
    try {
        const updateUser = await Team_Model.findByIdAndUpdate(_id, updatedData, { new: true });
        if (!updateUser) return res.status(404).json({ status: "Failed", message: "User not found" });
        res.status(200).json({ status: "Success", message: "User Updated Successfully", user: updateUser });
    } catch (error) {
        console.error("Error updating user:", error.message);
        res.status(500).json({ status: "Failed", message: "Failed to Update User" });
    }
});

app.delete("/backend/deleteUser", async (req, res) => {
    const { _id } = req.body;
    try {
        const deleteUser = await Team_Model.findByIdAndDelete(_id);
        if (!deleteUser) return res.status(404).json({ status: "Failed", message: "User not found" });
        res.status(200).json({ status: "Success", message: "User Deleted Successfully", user: deleteUser });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).send({ status: "Failed", message: "Failed to Delete User" });
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
