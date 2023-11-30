import { bookscard } from './books.js';
export let cart=JSON.parse(localStorage.getItem('cart'))
if(!cart)
{
cart=[{
        id: 1,
        quantity:4
    
    },{
        id: 2,
        quantity:2
    }]
}







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



