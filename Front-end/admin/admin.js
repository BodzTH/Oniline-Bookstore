import {bookscard, deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity, addBook} from "../../Back-end/books.js";
import { cart } from "../../Back-end/cart.js";

deleteBookFromDatabase();

addInStockQuantity();

reduceInStockQuantity();

addBook();

// Function to perform the POST request
setInterval(async () => {
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
    .then((data) => {
      console.log("POST request successful:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}, 1000);

function totalCartQuantity() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
}

let totalQuantity = totalCartQuantity();

console.log(totalQuantity);


  setInterval(async () => {
    fetch("http://localhost:3004/api/sendTotalQuantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: totalQuantity }),
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
