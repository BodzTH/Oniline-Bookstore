import { bookscard } from "../../Back-end/books.js";
import { cart} from "../../Back-end/cart.js";
import { orders } from "../../Back-end/orders.js";

/*
<div class="item">
<img src="images/1.webp">
<div class="info">
    <div class="name">PRODUCT 1</div>
    <div class="price">$22/1 product</div>
</div>
<div class="quantity">5</div>
<div class="returnPrice">$433.3</div>
</div>*/


let items = document.querySelector('.list');
console.log(cart[0].quantity)
 let generatCheckout = () => {
    let matching;
    return (items.innerHTML = cart.map((x) => {
        bookscard.map((book) => {
            if(x.id != book.id)
            {
                return
            }
            else{
                matching=book;
            }
        })
        
     
        return `
        <div class="item">
        <img src="${matching.image}">
        <div class="info">
            <div class="name">${matching.BookName}</div>
            <div class="price">$22/1 product</div>
        </div>
        <div class="quantity">${x.quantity}</div>
        <div class="returnPrice">${((matching.priceCents*x.quantity)/100).toFixed(2)}</div>
        </div>
    `;
    }).join(""));
};

console.log(generatCheckout());

const totalPrice=document.querySelector('.totalPrice')
totalPrice.innerHTML=getTotalPrice()
function getTotalPrice()
{
    let totaPrice=0;
    cart.map(item => {
        let matching;
        bookscard.map(book => {
            if(item.id==book.id)
            {
                matching=book;
            }
        })
        console.log(matching)
        console.log(item)
        totaPrice+=(matching.priceCents*item.quantity)/100
    })
    return totaPrice
}

let totalQuantity=0;
cart.map(item => {
    totalQuantity+=item.quantity
})
document.querySelector('.totalQuantity').innerHTML=totalQuantity;

function setOrder()
{
    const newOrder={};
    const button=document.querySelector('.js-Checkout-button')
    button.addEventListener('click', () => {
        newOrder.fullName=document.querySelector('.js-full-name-set-order').value
        newOrder.phoneNumber=document.querySelector('.js-phone-number-set-order').value
        newOrder.address=document.querySelector('.js-address-set-order').value
        newOrder.countery=document.querySelector('.js-country-set-order').value
        newOrder.city=document.querySelector('.js-city-set-order').value
        newOrder.items=cart;
        orders.push(newOrder)
        console.log(orders)
        console.log(newOrder.items)
        localStorage.removeItem('cart')
    })
}
setOrder();