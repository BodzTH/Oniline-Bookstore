import { cart, removeBook, saveToStorage } from './cart.js';
import { bookscard } from './books.js';
import {deliveryoptions} from './deliverOptions.js'
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
const today=dayjs();
const deliveryDate=today.add(7,'days')
console.log(deliveryDate.format('dddd, MMMM D'))
console.log(cart)
let totalPrice=0;
let checkoutHTML=''
cart.forEach(cartItem => {
    const bookid=cartItem.id
    let matchingBook;

    bookscard.forEach(book  => {
        if(bookid==book.id)
        {
            matchingBook=book
        }
    })
        
    console.log(matchingBook)
    checkoutHTML+=`<div class="js-cart-item-${matchingBook.id}">
    <div>${matchingBook.BookName}</div>
    <div>${((matchingBook.priceCents*cartItem.quantity)/100).toFixed(2)}</div>
    <div>${cartItem.quantity}</div>
    <button class="js-delete" data-book-id="${matchingBook.id}">delete</button>
    ${generatingDeliveryOptions(cartItem,matchingBook)};
    </div>
    `
    totalPrice +=(matchingBook.priceCents*cartItem.quantity)/100;
});

document.querySelector(".js-checkout-grid").innerHTML=checkoutHTML;
document.querySelector(".total-price").innerHTML=totalPrice;
document.querySelectorAll('.js-delete').forEach(button => {
    button.addEventListener('click',() =>{
        const bookid=button.dataset.bookId
        removeBook(bookid)
        console.log(cart)
        saveToStorage();
        const item=document.querySelector(`.js-cart-item-${bookid}`)
        item.remove();
    })
    
    
})

function generatingDeliveryOptions(cartItem,matchingBook)
{
    
    let deliveryOptionsHTML=``;
    deliveryoptions.forEach(option => {    
    const isChecked=option.id===cartItem.deliveryOptionId;   
    console.log(isChecked)
    console.log(cartItem)
    console.log(option.id)
    console.log(cartItem.deliveryOptionId)
    const today=dayjs();
    const deliveryDate=today.add(option.deliveryDays,'days')
    const deliveryDateFormated=deliveryDate.format('dddd, MMMM D') 
    deliveryOptionsHTML+=`
    <input type="radio"  ${isChecked? 'checked' : ''}   name="${matchingBook.id}" >
    <label >${deliveryDateFormated} , $${(option.priceCents/100).toFixed(2)}</label><br></br>`
    })
    return deliveryOptionsHTML;
}
