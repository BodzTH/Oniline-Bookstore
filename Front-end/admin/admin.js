import { bookscard,deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity,addBook } from "../../Back-end/books.js"
deleteBookFromDatabase();
addInStockQuantity();
reduceInStockQuantity();
addBook();


fetch("http://localhost:3004/api/sendAllBooks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(bookscard),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });