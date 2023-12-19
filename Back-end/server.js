const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

let storedData = {}; // Temporarily store data here

app.post('/api/receiveData', (req, res) => {
    storedData = req.body;
    res.json({ message: 'Data received' });
});

app.get('/api/getData', (req, res) => {
    res.json(storedData);
});

const PORT = 3004; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});