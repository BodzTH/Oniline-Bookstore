import {bookscard, deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity, addBook} from "../../Back-end/books.js";
import { totalCartQuantity } from "../../Back-end/cart.js";

deleteBookFromDatabase();

addInStockQuantity();

reduceInStockQuantity();

addBook();

// Function to perform the POST request
setInterval(async () => {
  try {
    const response = await fetch("http://localhost:5030/api/sendAllBooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookscard),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    console.log("POST request successful:", data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}, 1000);



(async () => {
  try {
    console.log("Sending POST request...");
    
    const response = await fetch("http://localhost:5030/api/sendTotalQuantity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: totalCartQuantity() }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const data = await response.json();
    console.log("POST request successful:", data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
})();
