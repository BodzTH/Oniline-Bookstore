var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "omar",
  password: "Om@rEssam2003",
  database: "booksdb"
});

const data=[]
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM books", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].id)
  });
});
