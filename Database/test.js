var connection = new ActiveXObject("ADODB.Connection") ;

var con = mysql.createConnection({
  host: "localhost",
  user: "omar",
  password: "Om@rEssam2003",
  database: "booksdb"
});


connection.Open(con);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM books", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close;