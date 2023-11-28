let bookscard=[{
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
    categori:"action",
    BookName:"my journy" ,
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000
}]
console.log("omar")
 let productsHTML=``
bookscard.forEach(book => {
    productsHTML+=`
    <div>${book.BookName}</div>
    <div>${book.rating.count}</div>
    <div>${book.priceCents/100}</div>
    <button class="js-add-to-cart">add to cart</button>
    
`
});
document.querySelector(".js-products-grid").innerHTML=productsHTML;
console.log("omar")
console.log(productsHTML);
document.querySelector(".js-add-to-cart")
