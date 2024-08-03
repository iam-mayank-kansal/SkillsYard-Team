const express = require("express");
const fs = require("fs").promises; // Use fs.promises for promise-based methods
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/backend/UserApi", async (req, res) => {
    try {
        const dataPath = path.join(__dirname, "../data/UserData.json");
        let data = await fs.readFile(dataPath, "utf-8");

        if (!data.trim()) {
            console.warn("Data file is empty");
            return res.json([]);
        }

        let UserAPI = JSON.parse(data);
        
        res.json(UserAPI);
    } catch (error) {
        console.error("Error reading file:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to read data"
        });
    }
});

app.post("/backend/UserProfiles", async (req, res) => {
    const UserSendedData = req.body;
    let AllUserdata = [];

    try {
        const dataPath = path.join(__dirname, "../data/UserData.json");
        const data = await fs.readFile(dataPath, "utf-8");

        if (data) {
            AllUserdata = JSON.parse(data);
        } else {
            console.warn("File is empty or does not exist, starting with an empty array");
        }
    } catch (error) {
        console.error("Error reading file or file does not exist:", error);

    }

    AllUserdata.push(UserSendedData);

    try {
        await fs.writeFile(path.join(__dirname, "../data/UserData.json"), JSON.stringify(AllUserdata, null, 2));
        res.json({
            status: "Success",
            message: "Data written successfully"
        });
    } catch (error) {
        console.error("Error writing file:", error);
        res.status(500).json({
            status: "Error",
            message: "Failed to write data"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
