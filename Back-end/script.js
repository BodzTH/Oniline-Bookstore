let bookscard=[{
    id:1,
    categori:"action",
    BookName:"my journy" ,
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000,
    instock:10,
    sold:2,
},{
    id:2,
    categori:"action",
    BookName:"journey to the center of the earth" ,
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000
}]
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
        const bookid =button.dataset.bookId
        let matchingBook;
        cart.forEach(book => {
            if(bookid==book.ID)
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
            ID:bookid,
            quantity:1
        })
        }
        let cartQuantity=0;
        cart.forEach(book => {
            cartQuantity += book.quantity
        });
        document.querySelector(".js-cart-qantity").innerHTML=cartQuantity
        console.log(cartQuantity)

        console.log(cart)
        
    })


    
});
