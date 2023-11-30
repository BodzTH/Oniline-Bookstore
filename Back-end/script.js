import { cart,removeBook, saveToStorage} from './cart.js';
import { bookscard } from './books.js';
localStorage.removeItem('cart')
let cartQuantity=0;
cart.forEach(book => {
    cartQuantity += book.quantity
});

cart.forEach(book => {
    cartQuantity += book.quantity
});
document.querySelector(".js-cart-qantity").innerHTML=cartQuantity

 let productsHTML=``
bookscard.forEach(book => {
    productsHTML+=`
    <div>${book.BookName}</div>
    <div>${book.rating.count}</div>
    <div>${book.priceCents/100}</div>
    <button class="js-add-to-cart" data-book-id="${book.id}" >add to cart</button>
    
`
});
document.querySelector(".js-products-grid").innerHTML=productsHTML;
document.querySelectorAll(".js-add-to-cart").forEach(button => {
    button.addEventListener('click',() =>{
        const bookid =Number(button.dataset.bookId)
        let matchingBook;
        cart.forEach(book => {
            if(bookid===book.id)
            {
                
                matchingBook=book
            }

        });
        if(matchingBook)
        {
            matchingBook.quantity+=1
        }
        else
        {
        cart.push({
            id:bookid,
            quantity:1
        })
        }
        saveToStorage();
        cartQuantity=0
        cart.forEach(book => {
            cartQuantity += book.quantity
        });
        document.querySelector(".js-cart-qantity").innerHTML=cartQuantity
        console.log(cart)
        
    })


    
});
