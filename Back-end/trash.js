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