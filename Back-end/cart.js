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

console.log(cart)



