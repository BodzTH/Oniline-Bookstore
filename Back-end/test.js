require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const os = require("os");
app.use(express.json()); // For parsing application/json
app.use(cors());





app.get('/studentattendance', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'frontend', 'studentattendance.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get("/api/attendance", async (req, res) => {
  try {
    const attendanceList = await Attendance.find();
    res.json(attendanceList);
  } catch (error) {
    console.error("Error occurred while fetching attendance: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 3000; // Set the port number
app.listen(port, "localhost", () => {
  console.log(`Server is running on localhost:${port}`);
});
connection
  .on("connected", () => {
    console.log("Connected to attendence database.");
  })
  .on("error", (err) => {
    console.error("Error occurred in MongoDB connection to attendence: ", err);
  });
