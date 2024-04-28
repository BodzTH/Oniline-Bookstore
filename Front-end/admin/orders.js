/* import {saveOrdersToStorage, orders} from '../../Back-end/orders.js'
import { bookscard } from "../../Back-end/books.js";
console.log(orders)
let ordersHTML=``
orders.forEach(order => {
    ordersHTML+=`
    <div class="js-order">
    <div class="js-name-order">order ID: ${order.id}</div>
    <div class="js-order--status">order status: ${order.status}</div>    
    <div class="js-name-order">name: ${order.fullName}</div>
    <div class="js-phone-number-orders">phone number: ${order.phoneNumber}</div>
    <div class="js-address-orders">adress: ${order.address}</div>
    <div class="js-countery-orders">countery: ${order.countery}</div>
    <div class="js-city-orders">city: ${order.city}</div>
    <div class="js-items-orders">${generateOrders(order.items)}</div>
</div><hr>`
console.log(ordersHTML)
})
document.querySelector('.js-orders-container').innerHTML=ordersHTML

function generateOrders(items){
    let itemHTML=``
    items.forEach(item => {
        let matching;
        bookscard.forEach(book => {
            console.log(book.id)
            console.log(item.id)  
            console.log(book.id==item.id)  
            if(item.id==book.id)
            {
                matching=book;
            }
        })
        console.log(matching)
        itemHTML+= `
        <div class="js-book-id">Book ID: ${matching.id}</div>
        <div class="js-book-name">Book Name: ${matching.BookName}</div>
        <div class="js-book-quantity">quantity: ${item.quantity}</div>
        <image src='${matching.image}' class="js-book-image"></image>`
    })
    return itemHTML
}



function editOrder_status(){
    const button=document.querySelector('.js-edit-order-status-button')
    button.addEventListener('click',() => {
        const orderID=document.querySelector('.js-order-id-edit-order-status').value
        const status=document.querySelector('.js-order-status-edit-order-status').value
        orders.forEach(order => {
            if(order.id==orderID)
            {
                order.status=status
                saveOrdersToStorage()
            }
        })
    })
}

document.querySelector('.js-edit-id-container').innerHTML=`
<h2>Update Order Status</h2>
<label for="orderStatusBookId">Order ID:</label>
<input type="text" id="orderStatusBookId">
<label for="orderStatus">Order Status:</label>
<select id="orderStatus">
    <option value="Orderd">Orderd</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Canceled">Canceled</option>
</select>
<button class="js-edit-order-status-button">Update Status</button>`

document.querySelector('.js-edit-order-status-button').addEventListener('click',() => {
    console.log('clicked')
    const orderID=document.querySelector('#orderStatusBookId').value
    const status=document.querySelector('#orderStatus').value
    orders.forEach(order => {
        if(order.id==orderID)
        {
            order.status=status
            saveOrdersToStorage()
        }
    })
}) */