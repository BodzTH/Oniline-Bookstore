import {saveOrdersToStorage, orders} from '../../Back-end/orders.js'
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
        <div class="js-book-name">${matching.BookName}</div>
        <div class="js-book-quantity">${item.quantity}</div>
        <image src='${matching.image}' class="js-book-image"></image>`
    })
    return itemHTML
}