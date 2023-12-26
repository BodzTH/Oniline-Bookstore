import { bookscard,saveBooksToStorage } from "../../Back-end/books.js";
import { orders,saveOrdersToStorage } from "../../Back-end/orders.js";
import {cart} from "../../Back-end/cart.js"

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
            <div class="price">$${matching.priceCents}/1 product</div>
        </div>
        <div class="quantity">${x.quantity}</div>
        <div class="returnPrice">$${((matching.priceCents*x.quantity)/100).toFixed(2)}</div>
        </div>
    `;
    }).join(""));
};

console.log(generatCheckout());

const totalPrice=document.querySelector('.totalPrice')
totalPrice.innerHTML='$'+getTotalPrice()
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

const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };


// generate a unique id


// check if the id matches any other existing ids provided as an array
const checkId = function(id, existing = []) {
    let match = existing.find(function(item) {
      return item === id;
    });
    return match ? false : true;
  };

  
const getId = function( length, existing = [] ) {
    const limit = 100; // max tries to create unique id
    let attempts = 0; // how many attempts
    let id = false;
    while(!id && attempts < limit) {
      id = randomId(length); // create id
      if(!checkId(id, existing)) { // check unique
        id = false; // reset id
        attempts++; // record failed attempt
      }
    }
    return id; // the id or false if did not get unique after max attempts
  };


function setOrder()
{
    const newOrder={};
    const button=document.querySelector('.js-Checkout-button')
    button.addEventListener('click', () => {
        cart.forEach(item => {
            let matching;
            bookscard.forEach(book => {
                if(item.id==book.id)
                {
                    matching=book;
                }
            })
            matching.inStock-=item.quantity
            matching.sold+=item.quantity
        })
        newOrder.fullName=document.querySelector('.js-full-name-set-order').value
        newOrder.phoneNumber=document.querySelector('.js-phone-number-set-order').value
        newOrder.address=document.querySelector('.js-address-set-order').value
        newOrder.countery=document.querySelector('.js-country-set-order').value
        newOrder.city=document.querySelector('.js-city-set-order').value
        newOrder.items=cart;
        newOrder.status='orderd'
        newOrder.id=getId(10,orders)
        orders.push(newOrder)
        localStorage.removeItem('orders')        
        saveOrdersToStorage();
        saveBooksToStorage();
        console.log(orders)
        console.log(newOrder.items)
        localStorage.removeItem('cart')
    })
}
setOrder();