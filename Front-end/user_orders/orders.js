/* import {saveOrdersToStorage, orders} from '../../Back-end/orders.js'
import { bookscard } from "../../Back-end/books.js";
console.log(orders)
let ordersHTML=``
orders.forEach(order => {
    ordersHTML+=`
    <div class="js-items-orders">${generateOrders(order.items)}</div>
    <div class="js-status">${order.status}</div>`
console.log(ordersHTML)
})
document.querySelector('.container').innerHTML=ordersHTML

function generateOrders(items){
    
    let itemHTML=``
    items.forEach(item => {
        let matching;
        bookscard.forEach(book => {
            if(item.id==book.id)
            {
                matching=book;

            }
        })
        console.log(matching)
        itemHTML+= `
        <div class"contant">
        <div class="js-book-name">${matching.BookName}</div>
        <div class="js-book-quantity">${item.quantity}</div>
        <image src='${matching.image}' class="js-book-image"></image>
        </div>`
    })
    return itemHTML
} */


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const orders_response = await fetch('http://localhost:3000/api/getUserorders');
        const orders = await orders_response.json();
        console.log(orders)
        let last_order_id=0;
        let ordersHTML=``
        orders.forEach(order => {
        if(order.order_status=='not paid'){
          if(order.order_id!=last_order_id){
            ordersHTML+=
            
            `<hr>
            <button class="js-pay-button" data-order-id=${order.order_id}>Pay</button>
            <div class="js-order--status">order status: ${order.order_status}</div>
            <div class="js-order">
            <div class="js-book-name">Book Name: ${order.book_name}</div>
            <div class="js-book-quantity">quantity: ${order.Book_count}</div>
            <image src='${order.book_image}' class="js-book-image"></image>`

            console.log(ordersHTML)
            last_order_id+=1}
            else{
              ordersHTML+=`
              <div class="js-book-name">Book Name: ${order.book_name}</div>
              <div class="js-book-quantity">quantity: ${order.Book_count}</div>
              <image src='${order.book_image}' class="js-book-image"></image>`
            }
            document.querySelector('.container').innerHTML=ordersHTML
        }

        else{
            if(order.order_id!=last_order_id){
                ordersHTML+=
                
                `<hr>
                <div class="js-order--status">order status: ${order.order_status}</div>
                <div class="js-order">
                <div class="js-book-name">Book Name: ${order.book_name}</div>
                <div class="js-book-quantity">quantity: ${order.Book_count}</div>
                <image src='${order.book_image}' class="js-book-image"></image>`
    
                console.log(ordersHTML)
                last_order_id+=1}
                else{
                  ordersHTML+=`
                  <div class="js-book-name">Book Name: ${order.book_name}</div>
                  <div class="js-book-quantity">quantity: ${order.Book_count}</div>
                  <image src='${order.book_image}' class="js-book-image"></image>`
                }
                document.querySelector('.container').innerHTML=ordersHTML
        }
  });
  const buttons=document.querySelectorAll('.js-pay-button')
  buttons.forEach((button) => {
      console.log('paying order');
      button.addEventListener('click', () => {
          console.log('paying order');
          const order_id=button.getAttribute('data-order-id');
          fetch('http://localhost:3000/checkoutgrouped', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({order_id}),
          })
          .catch((error) => {
              console.error('Error:', error);
              alert('Error paying order. Please try again later.');
          });

      });
  });

}
         catch (error) {
        console.error('Error fetching books data:', error);
        alert('Error fetching books data. Please try again later.');
    }
  });

