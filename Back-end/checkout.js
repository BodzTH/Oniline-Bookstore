import { cart } from './cart.js';
import { bookscard } from './books.js';
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
    checkoutHTML+=`
    <div>${matchingBook.BookName}</div>
    <div>${(matchingBook.priceCents*cartItem.quantity)/100}</div>
    <div>${cartItem.quantity}</div>
    `
    totalPrice +=(matchingBook.priceCents*cartItem.quantity)/100;
});

document.querySelector(".js-checkout-grid").innerHTML=checkoutHTML;
document.querySelector(".total-price").innerHTML=totalPrice;