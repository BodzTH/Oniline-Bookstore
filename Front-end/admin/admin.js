/* import {bookscard, deleteBookFromDatabase, addInStockQuantity, reduceInStockQuantity, addBook} from "../../Back-end/books.js";
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
})(); */
document.addEventListener('DOMContentLoaded', async () => {

  try {
      const response = await fetch('http://localhost:3000/api/getAllorders');
      const orders = await response.json();
      console.log(orders)
      let last_order_id=0;
      let ordersHTML=``
      orders.forEach(order => {
        if(order.order_id!=last_order_id){
          ordersHTML+=`
          <div class="js-order">
          <div class="js-name-order">order ID: ${order.order_id}</div>
          <div class="js-order--status">order status: ${order.order_status}</div>    
          <div class="js-name-order">name: ${order.first_name} ${order.last_name}</div>
          <div class="js-phone-number-orders">phone number: ${order.phone_number}</div>
          <div class="js-countery-orders">countery: ${order.countery}</div>
          <div class="js-city-orders">city: ${order.city}</div>
          </div><hr>
          <div class="js-book-id">Book ID: ${order.book_ID}</div>
          <div class="js-book-name">Book Name: ${order.book_name}</div>
          <div class="js-book-quantity">quantity: ${order.Book_count}</div>
          <image src='${order.book_image}' class="js-book-image"></image>`
          console.log(ordersHTML)
          last_order_id+=1}
          else{
            ordersHTML+=`
            <div class="js-book-id">Book ID: ${order.book_ID}</div>
            <div class="js-book-name">Book Name: ${order.book_name}</div>
            <div class="js-book-quantity">quantity: ${order.Book_count}</div>
            <image src='${order.book_image}' class="js-book-image"></image>`
          }
})
document.querySelector('.js-orders-container').innerHTML=ordersHTML;
  }

  
       catch (error) {
      console.error('Error fetching books data:', error);
      alert('Error fetching books data. Please try again later.');
  }
});


