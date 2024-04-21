/* import { bookscard } from "../../Back-end/books.js";
import { cart,saveToStorage,deleteItem } from "../../Back-end/cart.js";
let shop = document.getElementById('cart-container');
 let generatshop = () => {
    let matching;
    return (shop.innerHTML = cart.map((x) => {
        let checked=false;
        bookscard.map((book) => {
            if(x.id != book.id )
            {
                console.log('not')
                return
            }
            else{
                matching=book;
                checked=true
            }
        })
        
     if(checked==true){
        checked=false
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
            <h2 id=${matching.id+'-price'} class="p"> ${((matching.priceCents*x.quantity)/100).toFixed(2)}</h2>
            </div>
            <h2 class="m">EGP</h2>
            <button class="js-delete-item"    data-book-id=${matching.id}>delete</button>
        </div>
        </div>
    </div>
    `;}
    }).join(""));
};

if(cart.length===0){
shop.innerHTML=`<div class="item-show">no items to be shown</div>`
}
else{
    console.log(generatshop());
}

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
        let newTotalPrice=updatePrice(item,bookid)
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
        let matching;
        if(bookid==item.id)
        {
        bookscard.forEach(book => {
            if(book.id==bookid)
            {
                matching=book
            }
        });
        if(item.quantity<matching.inStock)
        {
            item.quantity+=1
            document.getElementById(item.id+'-quantity').innerHTML=item.quantity
            console.log(item.quantity)
            let newTotalPrice=updatePrice(item,bookid)
            document.getElementById(item.id+'-price').innerHTML=newTotalPrice      
            console.log(newTotalPrice)
            saveToStorage();
        }

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
newTotalPrice=((item.quantity*book.priceCents)/100).toFixed(2)
}
})
return newTotalPrice
} */

let shop = document.getElementById('cart-container');

// Function to fetch cart data from the server
async function fetchCartData() {
    let cartItems;
    try {
        const response = await fetch('http://localhost:3000/api/getcart' );
        cartItems = await response.json();
        // Fetch additional book data for each cart item
    }
    catch (error) {
        console.error('Error fetching cart data:', error);
}
return cartItems;
};

let generatshop = async () => {
    try {
        const cart = await fetchCartData(); // Await the result of fetchCartData

        // Generate shop content
        shop.innerHTML = cart.map(cartItem => {
            return `
            <div id=product-id-${cartItem.books_book_ID} class="item">
                <div class="details">
                    <img src=${cartItem.book_image} alt="Product Image" class="cart-row-img" >
                    <div class="name_desc">
                        <h2>${cartItem.book_name}</h2>
                        <h3>${cartItem.book_desc}</h3>
                        <p>${cartItem.publisher_name}</p>
                    </div>
                    <div class="price-quantity">
                        <div class="buttons">
                            <i  class="bi bi-dash-lg js-decrement" data-book-id=${cartItem.book_ID}></i>
                            <div id=${cartItem.book_ID + '-quantity'} class="quantity">
                                ${cartItem.Book_counts}
                            </div>
                            <i class="bi bi-plus-lg js-increment" data-book-id=${cartItem.book_ID}></i>
                        </div>
                        <div class="prices">
                            <h2 id=${cartItem.book_ID + '-price'} class="p"> ${(cartItem.book_price * cartItem.Book_counts).toFixed(2)}</h2>
                        </div>
                        <h2 class="m">EGP</h2>
                        <button class="js-delete-item" data-book-id=${cartItem.book_ID}>delete</button>
                    </div>
                </div>
            </div>
            `;
        }).join('');
        // Add event listeners for decrement buttons
        document.querySelectorAll('.js-decrement').forEach(button => {
            button.addEventListener('click', async () => {
                console.log('Decrement button clicked');
                let bookid=button.dataset.bookId
                console.log(bookid)
                console.log(cart)
                cart.map(item => {
                    console.log(item.book_ID)
                    if(bookid==item.book_ID)
                    { 
                        if(item.Book_counts>=2)
                        {
                            item.Book_counts-=1
                            updatebookcounts(bookid,item.Book_counts)
                            document.getElementById(bookid+'-quantity').innerHTML=item.Book_counts
                            console.log(item.quantity)
                            let newTotalPrice=item.Book_counts*item.book_price
                            document.getElementById(bookid+'-price').innerHTML=newTotalPrice    
                            console.log(newTotalPrice)
                        }
                    }
                })                
            });
        });

        // Add event listeners for increment buttons
        document.querySelectorAll('.js-increment').forEach(button => {
            button.addEventListener('click', async () => {
                console.log('Increment button clicked');
                let bookid=button.dataset.bookId
                console.log(bookid)
                cart.map(item => {
                    if(bookid==item.book_ID)
                    { 
                        
                        if(item.Book_counts<item.books_instock)
                        {
                            item.Book_counts+=1
                            updatebookcounts(bookid,item.Book_counts)
                            document.getElementById(bookid+'-quantity').innerHTML=item.Book_counts
                            let newTotalPrice=item.Book_counts*item.book_price
                            document.getElementById(bookid+'-price').innerHTML=newTotalPrice    
                            console.log(newTotalPrice)
                        }
                    }
                })
            });
        });

        // Function to execute when the user navigates away from the page
        async function updatebookcounts(bookId,Book_counts) {
            try {
                const response = await fetch('http://localhost:3000/updatebookcounts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ bookId,Book_counts }) // Replace 'user_id_placeholder' with the actual user ID
                });
            } catch (error) {
                console.error('Error adding book to cart:', error);
                alert('Error adding book to cart. Please try again later.');
            }
        }

    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
};

// Call generatshop function to generate the cart items
generatshop();



/* let increment_buttons=document.querySelectorAll('.js-increment')
console.log(increment_buttons.length)
increment_buttons.forEach(button => {
    button.addEventListener('click',() => {
    /* let bookid=button.dataset.bookId
    cart.map(item => {
        let matching;
        if(bookid==item.id)
        {
        bookscard.forEach(book => {
            if(book.id==bookid)
            {
                matching=book
            }
        });
        if(item.quantity<matching.inStock)
        {
            item.quantity+=1
            document.getElementById(item.id+'-quantity').innerHTML=item.quantity
            console.log(item.quantity)
            let newTotalPrice=updatePrice(item,bookid)
            document.getElementById(item.id+'-price').innerHTML=newTotalPrice      
            console.log(newTotalPrice)
            saveToStorage();
        }

        }
    })*/
/*     alert('Increment button clicked')
}) 
})}); */ 





