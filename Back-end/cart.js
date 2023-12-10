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

export function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function deleteItem(){
let delete_buttons=document.querySelectorAll('.js-delete-item')
delete_buttons.forEach(button => {
    button.addEventListener('click',() => {
        const newCart=[];
        let bookid=button.dataset.bookId
        console.log(bookid)
        cart.map(item => {
            if(bookid != item.id)
            {
                newCart.push(item)
                console.log(item)
            }
        })
        cart=newCart
        saveToStorage();
        console.log(cart)
    })

})
}
