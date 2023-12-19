const express = require('express');
const app = express();

// Define a route
app.get('/api/user', (req, res) => {
  res.send('Hello, this is your Express.js server!');
});

const PORT = 3004; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
