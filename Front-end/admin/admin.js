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


function updateOrderStatus(){
  document.querySelector('.js-edit-order-status-button').addEventListener('click', async () => {
      const orderID = document.querySelector('.js-order-id-edit-order-status').value;
      const status = document.querySelector('.js-order-status-edit-order-status').value;
      try {
          const response = await fetch('http://localhost:3000/updateOrderStatus', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ orderID, status }),
          });
          const data = await response.json();
          console.log(data);
          alert('Order status updated successfully.');
      } catch (error) {
          console.error('Error updating order status:', error);
          alert('Error updating order status. Please try again later.');
      }
  });
}

function addNumberofBooks(){
  document.querySelector('.js-add-book-button').addEventListener('click', async () => {
      const bookID = document.querySelector('.js-book-id-add-book').value;
      const quantity = document.querySelector('.js-book-quantity-add-book').value;
      try {
          const response = await fetch('http://localhost:3000/addNumberofBooks', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ bookID, quantity }),
          });
          const data = await response.json();
          console.log(data);
          alert('Book added successfully.');
      } catch (error) {
          console.error('Error adding book:', error);
          alert('Error adding book. Please try again later.');
      }
  });
}

function reduceNumberofBooks(){
  document.querySelector('.js-take-from-stock-button').addEventListener('click', async () => {
      const bookID = document.querySelector('.js-book-id-take-from-stock').value;
      const quantity = document.querySelector('.js-reduce-quantity').value;
      try {
          const response = await fetch('http://localhost:3000/reduceNumberofBooks', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ bookID, quantity }),
          });
          const data = await response.json();
          console.log(data);
          alert('Book added successfully.');
      } catch (error) {
          console.error('Error adding book:', error);
          alert('Error adding book. Please try again later.');
      }
  });
}

function addBook(){
  const button=document.querySelector('.add-book-button');
  button.addEventListener('click', async () => {
    console.log('clicked');
      const bookName = document.querySelector('.js-book-name-add-book').value;
      const bookCategory = document.querySelector('.js-book-category-add-book').value;
      const inStock = document.querySelector('.js-in-stock-add-book').value;
      const bookPrice = document.querySelector('.js-price-add-book').value;
      const bookImage = document.querySelector('.js-image-path-add-book').value;
      const book_author_first_name = document.querySelector('.js-athor-first-add-book').value;
      const book_author_last_name = document.querySelector('.js-athor-last-add-book').value;
      const book_description = document.querySelector('.js-description-add-book').value;
      const book_publisher = document.querySelector('.js-publisher-add-book').value;
      try {
          const response = await fetch('http://localhost:3000/addBook', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({bookName, bookCategory,inStock, bookPrice, bookImage, book_author_first_name, book_author_last_name, book_description, book_publisher}),
          });
          const data = await response.json();
          console.log(data);
          alert('Book added successfully.');
      } catch (error) {
          console.error('Error adding book:', error);
          alert('Error adding book. Please try again later.');
      }
  }); 
}

function deleteBook(){
  const button=document.querySelector('.js-delete-book-button');
  button.addEventListener('click', async () => {
      const bookID = document.querySelector('.js-book-id-delete-book').value;
      try {
          const response = await fetch('http://localhost:3000/deleteBook', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ bookID }),
          });
          const data = await response.json();
          console.log(data);
          alert('Book deleted successfully.');
      } catch (error) {
          console.error('Error deleting book:', error);
          alert('Error deleting book. Please try again later.');
      }
  });
}

addBook();
reduceNumberofBooks();
addNumberofBooks();
updateOrderStatus();
deleteBook();
//const button=document.querySelector('.add-book-button');
//button.addEventListener('click',() => { console.log('clicked')})