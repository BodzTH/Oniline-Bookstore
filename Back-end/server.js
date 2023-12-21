const cors = require("cors");
const express = require("express");
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

let cartItmes = {}; // Temporarily store data here
let AllBooks = [];
//Data From Next
app.post("/api/sendCartItems", (req, res) => {
  cartItmes = req.body;
  res.json({ message: "Cart Items received" });
});

//Data to cart.js
app.get("/api/getCartItems", (req, res) => {
  res.json(cartItmes);
  cartItmes={};
});

//Data From cart.js
app.post("/api/sendAllBooks", (req, res)=>{
  AllBooks = req.body;
  res.json({ message: "Books received" });
});

//Data to Next
app.get("/api/getAllBooks", (req, res) => {
  res.json(AllBooks);
});

const PORT = 3004; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
