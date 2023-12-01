con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO books (bookName, bookAuther,bookCategori, bookDescribtion, ratingCount, ratingStars, priceCents, booksInStock, booksSold ) VALUES ('journey to the center of the earth', 'Jules Verne', 'action','An adventurous geology professor', 50 , 4, 1000, 10 , 5)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  