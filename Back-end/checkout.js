import { cart, removeBook, saveToStorage } from './cart.js';
import { bookscard } from './books.js';
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
        saveToStorage();
        const item=document.querySelector(`.js-cart-item-${bookid}`)
        item.remove();
    })
    
    
})
