import { bookscard } from './books.js';
export let cart=JSON.parse(localStorage.getItem('cart'))
if(!cart)
{
cart=[{
        id: 1,
        quantity:4,
        deliveryOptionId:'1'
    
    },{
        id: 2,
        quantity:2,
        deliveryOptionId:'2'
    }]
}



let checkoutHTML=``;
let totalPrice=0;
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
    <div id="bar" class="bar">
    <div class="col">
        <div class="row text-right">
            <div class="col-4">
                <h6 class="mt-2">${cartItem.quantity}</h6>
            </div>
            <div class="col-4">
                <h6 class="mt-2">${((matchingBook.priceCents*cartItem.quantity)/100).toFixed(2)}</h6>
            </div>
        </div>
    </div>
</div>
    <div class="cart-row">
    <h2 class="cart-row-title">${matchingBook.BookName}</h2>
    <div class="buttons">
        <i class="bi bi-dash-lg js-increment" onclick="function inc() {
            console.log("inc")
        } 
        inc();"  data-book-id="${matchingBook.id}"></i>
        <div class="quantity">${cartItem.quantity}</div>
        <i class="bi bi-plus-lg"   data-book-id="${matchingBook.id}"></i>
    </div>
</div>
    `
    totalPrice +=(matchingBook.priceCents*cartItem.quantity)/100;
});
document.querySelector('.cart-container').innerHTML=checkoutHTML


export function removeBook(bookid)
{
    let newCart=[];
    cart.forEach(book => {
        if(bookid !=book.id){
            newCart.push(book)
        }       
    });
    cart=newCart;
}

export function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart))
}

function inc() {
    console.log("inc")
}

