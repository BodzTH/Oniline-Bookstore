const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

let cartItems = {};
let AllBooks = [];
let totalQuantity = 0;
let deletedBook = {};

app.post("/api/sendAllBooks", async (req, res) => {
  try {
    if (
      !Array.isArray(req.body) ||
      req.body.some((book) => typeof book !== "object")
    ) {
      res.status(400).json({ message: "Invalid data format" });
      return;
    }
    AllBooks = req.body;
    res.json({ message: "Books received" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/sendCartItems", async (req, res) => {
  try {
    if (
      typeof req.body !== "object" ||
      req.body === null ||
      Array.isArray(req.body)
    ) {
      res.status(400).json({ message: "Invalid data format" });
      return;
    }
    cartItems = req.body;
    res.json({ message: "Cart Items received" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/getAllBooks", async (req, res) => {
  try {
    res.json(AllBooks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/getCartItems", async (req, res) => {
  try {
    res.json(cartItems);
    cartItems = {};
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/sendTotalQuantity", async (req, res) => {
  try {
    totalQuantity = parseInt(req.body.quantity);
    res.json({ message: "Total Quantity received" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/getTotalQuantity", async (req, res) => {
  try {
    res.json(totalQuantity);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/sendDeletedBook", async (req, res) => {
  try {
    deletedBook = req.body;
    res.json({ message: "deleted Item received" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/api/getDeletedBook", async (req, res) => {
  try {
    const response = { ...deletedBook };
    deletedBook = {};
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const PORT = 5030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
