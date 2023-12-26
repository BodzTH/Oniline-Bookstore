const cors = require("cors");
const express = require("express");
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

let cartItmes = []; // Temporarily store data here
let AllBooks = [];
let totalQuantity = 0;
let deletedBook = {};

//Books From cart.js
app.post("/api/sendAllBooks", (req, res) => {
  AllBooks = req.body;
  res.json({ message: "Books received" });
});

//Books to Next

app.get("/api/getAllBooks", (req, res) => {
  res.json(AllBooks);
});

//AddToCart From Next
app.post("/api/sendCartItems", (req, res) => {
  cartItmes = req.body;
  res.json({ message: "Cart Items received" });
});

//CartItems to cart.js
app.get("/api/getCartItems", (req, res) => {
  res.json(cartItmes);
});

//TotalQuantity from admin.js
app.post("/api/sendTotalQuantity", (req, res) => {
  totalQuantity = parseInt(req.body.quantity);
  res.json({ message: "Total Quantity received" });
  console.log(totalQuantity);
});

//Total Quantity to Next

app.get("/api/getTotalQuantity", (req, res) => {
  res.json(totalQuantity);
});

//Delete Book from cart.js
app.post("/api/sendDeletedBook", (req, res) => {
  deletedBook = req.body;
  res.json({ message: "deleted Item received" });
});

//Delete Book to Next

app.get("/api/getDeletedBook", (req, res) => {
  res.json(deletedBook);
  deletedBook = {};
});

const PORT = 5030; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
