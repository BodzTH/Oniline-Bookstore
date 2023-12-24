import {bookscard, deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity, addBook} from "../../Back-end/books.js";
import { totalCartQuantity } from "../../Back-end/cart.js";

deleteBookFromDatabase();

addInStockQuantity();

reduceInStockQuantity();

addBook();

// Function to perform the POST request
setInterval(async () => {
  fetch("http://localhost:5030/api/sendAllBooks", {
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
    .then((data) => {
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}, 1000);


  setInterval(async () => {
    fetch("http://localhost:5030/api/sendTotalQuantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: totalCartQuantity() }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("POST request successful:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, 100);
