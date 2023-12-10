con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO books (bookName, bookAuther,bookCategori, bookDescribtion, ratingCount, ratingStars, priceCents, booksInStock, booksSold ) VALUES ('my joureny', 'Jules Verne', 'action','An adventurous geology professor', 60 , 3, 15000, 20 , 10)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM books", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });


  document.querySelector('.js-increment').forEach(incrementButton => {
    incrementButton.addEventListener('click',() =>{
        const bookid=button.dataset.bookId
        cart.forEach(item => {
            if(bookid=== item.bookid)
            {
                item.quantity =+ 1;
            }
        })
    })
})







let checkoutHTML=``;
let totalPrice=0;
cart.forEach(cartItem => {
    const bookid=cartItem.id
    let matchingBook;

    bookscard.forEach(book  => {
        if(bookid==book.id)
        {
            matchingBook=book
        }
    })
        
    console.log(matchingBook)
    checkoutHTML+=`
    <div id="bar" class="bar">
    <div class="col">
        <div class="row text-right">
            <div class="col-4">
                <h6 class="mt-2">${cartItem.quantity}</h6>
            </div>
            <div class="col-4">
                <h6 class="mt-2">${((matchingBook.priceCents*cartItem.quantity)/100).toFixed(2)}</h6>
            </div>
        </div>
    </div>
</div>
    <div class="cart-row">
    <h2 class="cart-row-title">${matchingBook.BookName}</h2>
    <div class="buttons">
        <i class="bi bi-dash-lg js-increment" onclick="function inc() {
            console.log("inc")
        } 
        inc();"  data-book-id="${matchingBook.id}"></i>
        <div class="quantity">${cartItem.quantity}</div>
        <i class="bi bi-plus-lg"   data-book-id="${matchingBook.id}"></i>
    </div>
</div>
    `
    totalPrice +=(matchingBook.priceCents*cartItem.quantity)/100;
});
document.querySelector('.cart-container').innerHTML=checkoutHTML


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

function inc() {
    console.log("inc")
}