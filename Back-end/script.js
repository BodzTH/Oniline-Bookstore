let bookscard=[{
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
`
});
document.querySelector(".js-products-grid").innerHTML=productsHTML;
console.log("omar")
console.log(productsHTML);
