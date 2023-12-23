import { bookscard } from "../../Back-end/books.js";
import { cart,saveToStorage,deleteItem } from "../../Back-end/cart.js";
let shop = document.getElementById('cart-container');
console.log(cart[0].quantity)
export let generatshop = () => {
    let matching;
    return (shop.innerHTML = cart.map((x) => {
        bookscard.map((book) => {
            if(x.id != book.id)
            {
                return
            }
            else{
                matching=book;
            }
        })
        
     
        return`
    <div id=product-id-${matching.id} class="item">
        <div class="details">
        <img src=${matching.image} alt="Product Image" class="cart-row-img" >
        <div class="name_desc">
        <h2>${matching.BookName}</h2>
        <h3>${matching.categori}</h3>
        <p>${matching.desc}</p>
        </div>
        <div class="price-quantity">
            <div class="buttons">
               <i  class="bi bi-dash-lg js-decrement" data-book-id=${matching.id}></i>
               <div id=${matching.id+'-quantity'} class="quantity">
               ${x.quantity}
               </div>
               <i class="bi bi-plus-lg js-increment" data-book-id=${matching.id}></i>
            </div>
            <div class="prices">
            <h2 class="m">$</h2>
            <h2 id=${matching.id+'-price'} > ${((matching.priceCents*x.quantity)/100).toFixed(2)} </h2>
            </div>
            <button class="js-delete-item"    data-book-id=${matching.id}>delete</button>
        </div>
        </div>
    </div>
    `;
    }).join(""));
};


console.log(generatshop());

let decrement_buttons=document.querySelectorAll('.js-decrement')
decrement_buttons.forEach(button => {
    button.addEventListener('click',() => {
    let bookid=button.dataset.bookId
    cart.map(item => {
        if(bookid==item.id)
        {
        if(item.quantity>=2)
        {
        item.quantity-=1
        document.getElementById(item.id+'-quantity').innerHTML=item.quantity
        console.log(item.quantity)
        let newTotalPrice=updatePrice(item,bookid)/100
        document.getElementById(item.id+'-price').innerHTML=newTotalPrice    
        console.log(newTotalPrice)
        saveToStorage();
        }
        }
    })
})
})

let increment_buttons=document.querySelectorAll('.js-increment')
increment_buttons.forEach(button => {
    button.addEventListener('click',() => {
    let bookid=button.dataset.bookId
    cart.map(item => {
        if(bookid==item.id)
        {
        item.quantity+=1
        document.getElementById(item.id+'-quantity').innerHTML=item.quantity
        console.log(item.quantity)
        let newTotalPrice=updatePrice(item,bookid)/100
        document.getElementById(item.id+'-price').innerHTML=newTotalPrice      
        console.log(newTotalPrice)
        saveToStorage();
        }
    })
})
})


deleteItem()


function updatePrice(item,id)
{
let newTotalPrice;
bookscard.map(book => {
if(book.id==id){
newTotalPrice=item.quantity*book.priceCents
}
})
return newTotalPrice
}