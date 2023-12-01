var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "omar",
  password: "Om@rEssam2003",
  database: "booksdb"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM books", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
