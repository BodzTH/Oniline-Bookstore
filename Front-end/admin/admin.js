import { bookscard,deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity,addBook } from "../../Back-end/books.js"

// Function to perform the POST request
export const sendAllBooks = () => {
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
};

sendAllBooks(); 

const runFunctions = async () => {
  deleteBookFromDatabase();
  sendAllBooks();

  addInStockQuantity();
  sendAllBooks();

  reduceInStockQuantity();
  sendAllBooks();

  addBook();
  sendAllBooks();
}

runFunctions();

