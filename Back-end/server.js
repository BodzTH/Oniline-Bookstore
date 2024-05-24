const express = require('express');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
// Using moment.js
const moment = require('moment');
const dotenv = require('dotenv');
const e = require('express');
dotenv.config(); 



  
const app = express();
const port = 3000;

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abdo2003',
    database: 'bookstore-final'
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'..', 'Front-end')));
  
// Route for sign-up page
app.get('/signup', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'sign_up.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/signin', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'sign_in.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});



app.get('/checkout', (req, res) => {
    if (req.session.user==undefined) {
        // User is not logged in, redirect to sign-in page
        res.redirect('/signin');;
        
    }
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'checkout', 'checkout.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/home', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'Home_page_final','home.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/home.css', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'Home_page_final','home.css');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/home.js', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'Home_page_final','home.js');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/home2', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'home.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/admin', (req, res) => {
    if (req.session.admin==undefined) {
        // User is not logged in, redirect to sign-in page
        res.redirect('/signinadmin');;
        
    }
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'admin', 'admin acc.html');
    
    // Send the file as the response
    res.sendFile(filePath);
}
);

app.get('/Back-end/orders.js', (req, res) => {
    // Send the file as the response
    res.sendFile("orders.js", { root: __dirname });
});
app.get('/sign_up.css', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'sign_up.css');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/signup.js', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'signup.js');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/signin.js', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'signin.js');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/Front-end/cart_page/src/books1.jpg', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'cart_page', './src/books1.jpg');
    
    // Send the file as the response
    res.sendFile(filePath);
});



app.get('/back-end/books.js', (req, res) => {
    // Send the file as the response
    res.sendFile("books.js", { root: __dirname });
});

app.get('/cart.css', (req, res) => {
    const filePath = path.join(__dirname, '..', 'Front-end', 'cart_page', 'cart.css');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/cart.js', (req, res) => {
    // Send the file as the response
    const filePath = path.join(__dirname, '..', 'Front-end', 'cart_page', 'cart.js');
    res.sendFile(filePath);
});

app.get('/Back-end/cart.js', (req, res) => {
    // Send the file as the response
    res.sendFile("cart.js", { root: __dirname });
});

// Route for profile page
app.get('/profile', (req, res) => {
    if (req.session.user==undefined) {
        // User is not logged in, redirect to sign-in page
        res.redirect('/signin');;
        
    }
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'profile.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/profile.css',(req,res) => {
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'profile.css');
    res.sendFile(filePath);
})

app.get('/profile.js',(req,res) => {
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'profile.js');
    res.sendFile(filePath);
})

app.get('/orders', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)(
    if (req.session.user==undefined){
        // User is not logged in, redirect to sign-in page
        res.redirect('/signin');;
    }
    else{
    const filePath = path.join(__dirname, '..', 'Front-end', 'user_orders', 'orders.html');
    
    // Send the file as the response
    res.sendFile(filePath);
    }
});

app.get('/orders.js', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'user_orders', 'orders.js');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/orders.css', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'user_orders', 'orders.css');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/signinadmin', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'admin', 'accounts','signin.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});  

// Route for cart page
app.get('/cart', (req, res) => {
    if (req.session.user==undefined) {
        // User is not logged in, redirect to sign-in page
        res.redirect('/signin');;
        
    }
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'cart_page', 'cart.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});
app.get(`/search`, (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'search_page', 'search.html');
    
    // Send the file as the response
    res.sendFile(filePath);

})

app.get('/search.js', (req, res) => {
        // Construct the file path relative to the current directory (__dirname)
        const filePath = path.join(__dirname, '..', 'Front-end', 'search_page', 'search.js');
    
        // Send the file as the response
        res.sendFile(filePath);
});

app.get('/category', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'category_page', 'category.html');
    
    // Send the file as the response
    res.sendFile(filePath);

})

app.get('/category.js', (req, res) => {
        // Construct the file path relative to the current directory (__dirname)
        const filePath = path.join(__dirname, '..', 'Front-end', 'category_page', 'category.js');
    
        // Send the file as the response
        res.sendFile(filePath);
});

app.get('/checout_grouped', (req, res) => {
    console.log(req.query.order_id);
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'checkout_grouped', 'checkout_grouped.html');
    
    // Send the file as the response
    res.sendFile(filePath);
})

app.get('/checkout_grouped.js', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'checkout_grouped', 'checkout_grouped.js');
    
    // Send the file as the response
    res.sendFile(filePath);
});

// Route for home page
app.get('/api/profile-data', (req, res) => {
    // Check if user session exists
    if (!req.session.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // User is signed in, fetch user's profile data from the database
    const userEmail = req.session.user;

    // Query the database to fetch user's profile data
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).json({ error: 'Error fetching user data' });
        }

        // If user data found, send user's profile data as JSON response
        if (results.length > 0) {
            const user = results[0]; // Assuming user data is in the first row
            res.json(user);
        } else {
            // User data not found
            res.status(404).json({ error: 'User data not found' });
        }
    });
});




// Route for logout
app.post('/logout', (req, res) => {
    // Destroy session
    req.session.destroy((error) => {
        if (error) {
            console.error('Error destroying session:', error);
        }
        // Clear user cookie
        res.clearCookie('user');
        // Redirect user to sign-in page after logout
        res.redirect('/signin');
    });
});

// Route for logout
app.get('/logoutadmin', (req, res) => {
    // Destroy session
    req.session.destroy((error) => {
        if (error) {
            console.error('Error destroying session:', error);
        }
        // Clear user cookie
        res.clearCookie('admin');
        // Redirect user to sign-in page after logout
        res.redirect('/signinadmin');
    });
});



app.get('/api/getAllBooks', (req, res) => {
    // Query to fetch books data from the database including author's name
    const query = `SELECT b.book_ID, b.book_name, b.book_desc, b.book_price, b.books_instock, 
                        b.books_sold, b.book_image, b.book_altImage, 
                        p.name AS publisher_name, 
                        a.first_name AS author_first_name, a.last_name AS author_last_name,
                        c.category_name
                   FROM books b
                   INNER JOIN publishers p ON b.publishers_publisher_ID = p.publisher_ID
                   INNER JOIN authors a ON b.authors_author_ID = a.author_ID
                   INNER JOIN categories c ON b.categories_category_ID = c.category_ID`;

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }

        // Send the fetched books data as JSON response
        res.json(results);
    });
});


// Route for adding a book to the cart
app.post('/addToCart', (req, res) => {
    // Check if user is logged in
    console.log(req.session.user);
    if (req.session.user === undefined) {
        // User is not logged in, send an error response
        return res.status(500).send('Error: You have to sign in first');
    }

    const userEmail = req.session.user;
    console.log(userEmail)
    const { bookId,bookStock} = req.body;
    console.log(bookStock)
    const bookCount = 1; // Initial count for the book in the cart
    console.log(bookId);
    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT user_id FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }
        console.log(results[0].user_id);
        let indecator=false;
        let existIndecator=false;
        const userId = results[0].user_id;
        const getinCartQuery = 'select * from cart_content where user_user_id = ?';
        connection.query(getinCartQuery, [userId], (error, results) => {
            if (error) {
                console.error('Error fetching user ID:', error);
                return res.status(500).send('Error adding book to cart');
            }
            console.log(results)
            if(bookStock>0)
            {
            console.log("the quantity is more that 0")
            if(results.length>0){
            console.log("the cart is not empty")
            for (let i = 0; i < results.length; i++) {
                console.log("searching")
                if(results[i].books_book_ID == bookId){
                console.log("the book is already in the cart")  
                existIndecator=true;    
                if (results[i].Book_counts<bookStock && existIndecator==true) {
                    console.log("the book is already in the cart and can be added ")
                    indecator = true;
                    const query = 'update cart_content set Book_counts = Book_counts + 1 where books_book_ID = ? and user_user_id = ?';
                    connection.query(query, [bookId, userId], (error, results) => {
                        if (error) {
                            console.error('Error adding book to cart:', error);
                            return res.status(500).send('Error adding book to cart');
                        }
                        return res.status(200).send('Book added to cart successfully');
                    });
                }
                else{
                    console.log("the book is already in the cart but the quantity is more than the stock")
                    return res.status(500).send('the quantity is more than the stock')
                }
            }
        
        }

        if(existIndecator==false){                
            console.log("the book is not in the cart")
            // Insert the book into the cart content table
            const query = 'INSERT INTO cart_content (Book_counts, books_book_ID, user_user_id) VALUES (?, ?, ?)';
            connection.query(query, [bookCount, bookId, userId], (error, results) => {
            if (error) {
                console.error('Error adding book to cart:', error);
                return res.status(500).send('Error adding book to cart');
            }
            console.log('Book added to cart successfully');
            // Send a success response
            res.status(200).send('Book added to cart successfully');                    
    });}
    }
    else{
        console.log("the cart is empty")
        const query = 'INSERT INTO cart_content (Book_counts, books_book_ID, user_user_id) VALUES (?, ?, ?)';
        connection.query(query, [bookCount, bookId, userId], (error, results) => {
            if (error) {
                console.error('Error adding book to cart:', error);
                return res.status(500).send('Error adding book to cart');
            }
            console.log('Book added to cart successfully');
            // Send a success response
            res.status(200).send('Book added to cart successfully');                    
    });
    }

     }
     else{
        res.status(500).send('there is no stock avabile for this book')
    }
     
        });

    });});




app.get('/api/getcart', (req, res) => {

    // Query to retrieve user ID based on email
    const userEmail = req.session.user;
    const getUserQuery = 'SELECT user_id FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }

        const userId = results[0].user_id;
    // Query to fetch books data from the database including author's name
    const query =`SELECT Book_counts, book_name, book_ID, book_desc, book_price, book_image,name AS publisher_name,books_instock 
    FROM books,cart_content,publishers   
    WHERE user_user_id = ? AND books_book_ID = book_ID AND publishers_publisher_ID = publisher_ID`;

    // Execute the query
    connection.query(query,[userId] ,(error, results) => {
        if (error) {
            console.error('Error fetching books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }

        // Send the fetched books data as JSON response
        res.json(results);
    });
});
});




app.post('/updatebookcounts', (req, res) => {
    // Check if user is logged in

    const userEmail = req.session.user;
    const { bookId,Book_counts } = req.body;
    console.log(bookId,Book_counts);
    // Initial count for the book in the cart
    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT user_id FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }

        const userId = results[0].user_id;

        // Insert the book into the cart content table
        const query = 'update cart_content set Book_counts = ? where books_book_ID = ? and user_user_id = ?';
        connection.query(query, [Book_counts, bookId, userId], (error, results) => {
            if (error) {
                console.error('Error adding book to cart:', error);
                return res.status(500).send('Error adding book to cart');
            }
            console.log('Book added to cart successfully');
            // Send a success response
            res.status(200).send('Book added to cart successfully');
        });
    });
});


app.post('/checkout', (req, res) => {
    // Check if user is logged in
    const userEmail = req.session.user;
    // Initial count for the book in the cart
    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }

        const userId = results[0].user_id;
        const phone_number = results[0].phone_number;
        const countery = results[0].country;
        const city = results[0].city;
        const area = results[0].area;
        const street = results[0].street;
        const building_no = results[0].bulding_no;
        const floor = results[0].floor;
        const flat_no = results[0].flat_no;
        const balance = results[0].balance;
        const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const totalQuery = 'SELECT SUM(Book_counts * book_price) as total FROM cart_content,books WHERE user_user_id = ? AND books_book_ID = book_ID';
        connection.query(totalQuery, [userId], (error, total) => {
            if (error) {
                console.error('Error fetching total:', error);
                return res.status(500).send('Error fetching total');
            }
            const totalCost = total[0].total;
            console.log(totalCost);
            if (totalCost > balance) 
                {
                    return res.status(500).send('Error: You dont have enough balance');
                }
        
            // Insert the order into the orders table
            const updateBalance = 'UPDATE user SET balance = balance - ? WHERE user_id = ?';
            connection.query(updateBalance, [totalCost, userId], (error, results) => {
                if (error) {
                    console.error('Error updating balance:', error);
                    return res.status(500).send('Error updating balance');
            }
            const orderQuery = 'INSERT INTO orders (date, order_status, phone_number, countery, city, area, street, building_no, floor, flat_no, user_user_id,paid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
            connection.query(orderQuery, [currentDateTime, 'ordered', phone_number, countery, city, area, street, building_no, floor, flat_no, userId,1], (error, results) => {
                if (error) {
                    console.error('Error adding order:', error);
                    return res.status(500).send('Error adding order');
                }
                console.log('Order added successfully');

                // Get the max order ID
                const max_IDquery = 'SELECT MAX(order_id) as max_order_id FROM orders WHERE user_user_id = ?';
                connection.query(max_IDquery, [userId], (error, maxID) => {
                    if (error) {
                        console.error('Error getting max order ID:', error);
                        return res.status(500).send('Error getting max order ID');
                    }
                    
                    const maxOrderId = maxID[0].max_order_id;

                    // Insert into order_details
                    const insertOrderDetailsQuery = 'INSERT INTO order_details (orders_order_id, books_book_ID, Book_count) SELECT ?, books_book_ID, Book_counts FROM cart_content WHERE user_user_id = ?';
                    connection.query(insertOrderDetailsQuery, [maxOrderId, userId], (error, results) => {
                        if (error) {
                            console.error('Error adding order details:', error);
                            return res.status(500).send('Error adding order details');
                        }
                        console.log('Order details added successfully');
                        const removebook=`UPDATE books AS b JOIN cart_content AS cc ON b.book_ID = cc.books_book_ID SET b.books_instock = b.books_instock - cc.Book_counts, b.books_sold = b.books_sold + cc.Book_counts WHERE cc.user_user_id = ?`;
                        connection.query(removebook,[userId], (error, results) => {
                            if(error){
                                console.error('Error adding removing books:', error);
                                return res.status(500).send('Error adding removing books');                        
                            }                          
                            // Delete cart items after adding the order
                            const deleteQuery = 'DELETE FROM cart_content WHERE user_user_id = ?';
                            connection.query(deleteQuery, [userId], (errojyr, results) => {
                                if (error) {
                                    console.error('Error deleting cart items:', error);
                                    return res.status(500).send('Error deleting cart items');
                                }
                                console.log('Cart items deleted successfully');
                                // Send a success response
                                res.status(200).send('Order placed successfully');
                        });
                    });                      
                    });
                });
            });
        });
    });
});
});





app.post('/deleteitem', (req, res) => {
    // Check if user is logged in

    const userEmail = req.session.user;
    const { bookId} = req.body;
    console.log(bookId);
    // Initial count for the book in the cart
    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT user_id FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }

        const userId = results[0].user_id;

        // Insert the book into the cart content table
        const query = 'DELETE FROM cart_content WHERE books_book_ID = ? AND user_user_id = ?';
        
        connection.query(query, [bookId, userId], (error, results) => {
            if (error) {
                console.error('Error adding book to cart:', error);
                return res.status(500).send('Error adding book to cart');
            }
            
            console.log('Book added to cart successfully');
            // Send a success response
            res.status(200).send('Book added to cart successfully');
        });
    });
});


app.get('/api/getAllorders', (req, res) => {
    // Query to fetch books data from the database including author's name
    const query = `SELECT order_id, order_status, first_name, last_name, orders.phone_number,orders.countery, orders.city, orders.area, orders.street, orders.building_no, orders.flat_no,orders.floor ,orders.date,book_ID,book_name,Book_count,book_image
                   FROM orders, user,order_details,books
                   WHERE user_user_id = user_id AND books_book_ID = book_ID AND orders_order_id = order_id`;

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error orders books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }
        // Send the fetched books data as JSON response
        res.json(results);
    });
});

app.post('/updateOrderStatus', (req, res) => {
    const { orderID, status } = req.body;

    // Update the order status in the database
    const query = 'UPDATE orders SET order_status = ? WHERE order_id = ?';
    connection.query(query, [status, orderID], (error, results) => {
        if (error) {
            console.error('Error updating order status:', error);
            return res.status(500).json({ error: 'Failed to update order status' });
        }

        res.json({ message: 'Order status updated successfully' });
    });

});

app.post('/addNumberofBooks', (req, res) => {
    const { bookID, quantity } = req.body;
    // Update the order status in the database
    const query = 'UPDATE books SET books_instock = books_instock+? WHERE book_ID = ?';
    connection.query(query, [quantity, bookID], (error, results) => {
        if (error) {
            console.error('Error updating number of books:', error);
            return res.status(500).json({ error: 'Failed to update number of books' });
        }

        res.json({ message: 'Number of books updated successfully' });
    });
});

app.post('/reduceNumberofBooks', (req, res) => {
    const { bookID, quantity } = req.body;
    // Update the order status in the database
    const query = 'UPDATE books SET books_instock = books_instock-? WHERE book_ID = ?';
    connection.query(query, [quantity, bookID], (error, results) => {
        if (error) {
            console.error('Error updating number of books:', error);
            return res.status(500).json({ error: 'Failed to update number of books' });
        }

        res.json({ message: 'Number of books updated successfully' });
    });
});

app.post('/addBook', (req, res) => {
    let book_author_id, book_publisher_id, book_category_id;
    const { bookName, bookCategory, inStock,  bookPrice, bookImage, book_author_first_name, book_author_last_name, book_description, book_publisher } = req.body;

    const get_author_ID = `SELECT author_ID FROM authors WHERE first_name = ? AND last_name = ?`;
    connection.query(get_author_ID, [book_author_first_name, book_author_last_name], (error, authorResults) => {
        if (error) {
            console.error('Error adding book:', error);
            return res.status(500).json({ error: 'Failed to add book' });
        }
        if (authorResults.length === 0) {
            console.error('Author not found');
            return res.status(404).json({ error: 'Author not found' });
        }
        book_author_id = authorResults[0].author_ID;
        console.log(book_author_id);

        const get_publisher_ID = `SELECT publisher_ID FROM publishers WHERE name = ?`;
        connection.query(get_publisher_ID, [book_publisher], (error, publisherResults) => {
            if (error) {
                console.error('Error adding book:', error);
                return res.status(500).json({ error: 'Failed to add book' });
            }
            if (publisherResults.length === 0) {
                console.error('Publisher not found');
                return res.status(404).json({ error: 'Publisher not found' });
            }
            book_publisher_id = publisherResults[0].publisher_ID;
            console.log(book_publisher_id);

            const get_category_ID = `SELECT category_ID FROM categories WHERE category_name = ?`;
            connection.query(get_category_ID, [bookCategory], (error, categoryResults) => {
                if (error) {
                    console.error('Error adding book:', error);
                    return res.status(500).json({ error: 'Failed to add book' });
                }
                if (categoryResults.length === 0) {
                    console.error('Category not found');
                    return res.status(404).json({ error: 'Category not found' });
                }
                book_category_id = categoryResults[0].category_ID;
                console.log(book_category_id);

                // Insert the book into the database
                const query = 'INSERT INTO books (book_name, book_desc, book_price, books_instock, books_sold, book_image, book_altImage, categories_category_ID ,publishers_publisher_ID, authors_author_ID) VALUES (?, ?, ?, ?, ?, ?, ?,?, ?, ?)';
                connection.query(query, [bookName, book_description, bookPrice, inStock,0 ,bookImage,bookName , book_category_id,book_publisher_id ,book_author_id], (error, insertResults) => {
                    if (error) {
                        console.error('Error adding book:', error);
                        return res.status(500).json({ error: 'Failed to add book' });
                    }

                    res.json({ message: 'Book added successfully' });
                });
            });
        });
    });
});

app.post('/deleteBook', (req, res) => {
    const { bookID } = req.body;

    // Delete the book from the database
    const query = 'DELETE FROM books WHERE book_ID = ?';
    connection.query(query, [bookID], (error, results) => {
        if (error) {
            console.error('Error deleting book:', error);
            return res.status(500).json({ error: 'Failed to delete book' });
        }

        res.json({ message: 'Book deleted successfully' });
    });
});

app.post('/addAuthor', (req, res) => {
    const { authorFirstName, authorLastName } = req.body;

    // Insert the author into the database
    const query = 'INSERT INTO authors (first_name, last_name) VALUES (?, ?)';
    connection.query(query, [authorFirstName, authorLastName], (error, results) => {
        if (error) {
            console.error('Error adding author:', error);
            return res.status(500).json({ error: 'Failed to add author' });
        }

        res.json({ message: 'Author added successfully' });
    });
});

app.post('/addPublisher', (req, res) => {
    const { publisherName } = req.body;
    // Insert the publisher into the database
    const query = 'INSERT INTO publishers (name) VALUES (?)';
    connection.query(query, [publisherName], (error, results) => {
        if (error) {
            console.error('Error adding publisher:', error);
            return res.status(500).json({ error: 'Failed to add publisher' });
        }

        res.json({ message: 'Publisher added successfully' });
    });
});

app.post('/addCategory', (req, res) => {
    const { categoryName } = req.body;
    // Insert the category into the database
    const query = 'INSERT INTO categories (category_name) VALUES (?)';
    connection.query(query, [categoryName], (error, results) => {
        if (error) {
            console.error('Error adding category:', error);
            return res.status(500).json({ error: 'Failed to add category' });
        }

        res.json({ message: 'Category added successfully' });
    });
});

app.get('/api/getAllUsers', (req, res) => {
    // Query to fetch all users from the database
    const query = 'SELECT * FROM user';

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching users from database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched users data as JSON response
        res.json(results);
    });
});

app.get('/api/getAuthors', (req, res) => {
    // Query to fetch all authors from the database
    const query = 'SELECT * FROM authors';

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching authors from database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched authors data as JSON response
        res.json(results);
    });
})

app.get('/api/getPublishers', (req, res) => {
    // Query to fetch all publishers from the database
    const query = 'SELECT * FROM publishers';

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching publishers from database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched publishers data as JSON response
        res.json(results);
    });    
})

app.get('/api/getCategories', (req, res) => {
    // Query to fetch all categories from the database
    const query = 'SELECT * FROM categories';

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching categories from database:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        // Send the fetched categories data as JSON response
        res.json(results);
    });
})

app.get('/api/getUserorders', (req, res) => {
    // Query to fetch books data from the database including author's name
    
    const userEmail = req.session.user;
    // Initial count for the book in the cart
    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }
        const userID=results[0].user_id;
    const query = `SELECT order_id, order_status ,orders.date,book_ID,book_name,Book_count,book_image
                   FROM orders, order_details,books,user
                   WHERE user_id=? AND user_user_id=? AND books_book_ID = book_ID AND orders_order_id = order_id`;

    // Execute the query
    connection.query(query,[userID,userID] ,(error, results) => {
        if (error) {
            console.error('Error orders books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }
        // Send the fetched books data as JSON response
        res.json(results);
    });
});
});

app.post('/updateImage', (req, res) => {
    const { bookID, bookImage } = req.body;
    console.log(bookID, bookImage);
    // Update the book image in the database
    const query = 'UPDATE books SET book_image = ? WHERE book_ID = ?';
    connection.query(query, [bookImage, bookID], (error, results) => {
        if (error) {
            console.error('Error updating book image:', error);
            return res.status(500).json({ error: 'Failed to update book image' });
        }

        res.json({ message: 'Book image updated successfully' });
    });
});


app.get('/api/getSearchedBooks', (req, res) => {
    const search = req.query.search;
    // Query to fetch books data from the database including author's name
    const query = `SELECT b.book_ID, b.book_name, b.book_desc, b.book_price, b.books_instock, 
    b.books_sold, b.book_image, b.book_altImage, 
    p.name AS publisher_name, 
    a.first_name AS author_first_name, a.last_name AS author_last_name
    FROM books b
    INNER JOIN publishers p ON b.publishers_publisher_ID = p.publisher_ID
    INNER JOIN authors a ON b.authors_author_ID = a.author_ID
    WHERE b.book_name LIKE '%${search}%';
`;

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }

        // Send the fetched books data as JSON response
        res.json(results);
    });
});

app.get('/api/getBooksByCategory', (req, res) => {
    const category = req.query.category;
    console.log(category);
    // Query to fetch books data from the database including author's name
    const query = `SELECT b.book_ID, b.book_name, b.book_desc, b.book_price, b.books_instock, 
                        b.books_sold, b.book_image, b.book_altImage, 
                        p.name AS publisher_name, 
                        a.first_name AS author_first_name, a.last_name AS author_last_name,
                        c.category_name
                   FROM books b
                   INNER JOIN publishers p ON b.publishers_publisher_ID = p.publisher_ID
                   INNER JOIN authors a ON b.authors_author_ID = a.author_ID
                   INNER JOIN categories c ON b.categories_category_ID = c.category_ID
                   Where c.category_name = '${category}'; 
`;

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }

        // Send the fetched books data as JSON response
        res.json(results);
    });
});

app.post('/addbalance', (req, res) => {
    const userEmail = req.session.user;
    const { balance } = req.body;
    const query = 'UPDATE user SET balance = balance+? WHERE email = ?';
    connection.query(query, [balance, userEmail], (error, results) => {
        if (error) {
            console.error('Error adding balance:', error);
            return res.status(500).json({ error: 'Failed to add balance' });
        }

        res.json({ message: 'Balance added successfully' });
    });
});

app.post('/grouporder', (req, res) => {
        // Check if user is logged in
        const userEmail = req.session.user;
        // Initial count for the book in the cart
        // Query to retrieve user ID based on email
        const getUserQuery = 'SELECT * FROM user WHERE email = ?';
        connection.query(getUserQuery, [userEmail], (error, results) => {
            if (error) {
                console.error('Error fetching user ID:', error);
                return res.status(500).send('Error adding book to cart');
            }
            
            if (results.length === 0) {
                console.error('User not found');
                return res.status(404).send('User not found');
            }
    
            const userId = results[0].user_id;
            const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
                const orderQuery = 'INSERT INTO orders (date, order_status, phone_number, countery, city, area, street, building_no, floor, flat_no, user_user_id,paid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
                connection.query(orderQuery, [currentDateTime, 'not paid',1,'NULL','NULL','NULL','NULL',0,'NULL',0, userId, 0], (error, results) => {
                    if (error) {
                        console.error('Error adding order:', error);
                        return res.status(500).send('Error adding order');
                    }
                    console.log('Order added successfully');
    
                    // Get the max order ID
                    const max_IDquery = 'SELECT MAX(order_id) as max_order_id FROM orders WHERE user_user_id = ?';
                    connection.query(max_IDquery, [userId], (error, maxID) => {
                        if (error) {
                            console.error('Error getting max order ID:', error);
                            return res.status(500).send('Error getting max order ID');
                        }
                        
                        const maxOrderId = maxID[0].max_order_id;
    
                        // Insert into order_details
                        const insertOrderDetailsQuery = 'INSERT INTO order_details (orders_order_id, books_book_ID, Book_count) SELECT ?, books_book_ID, Book_counts FROM cart_content WHERE user_user_id = ?';
                        connection.query(insertOrderDetailsQuery, [maxOrderId, userId], (error, results) => {
                            if (error) {
                                console.error('Error adding order details:', error);
                                return res.status(500).send('Error adding order details');
                            }
                            console.log('Order details added successfully');                       
                                // Delete cart items after adding the order
                                const deleteQuery = 'DELETE FROM cart_content WHERE user_user_id = ?';
                                connection.query(deleteQuery, [userId], (errojyr, results) => {
                                    if (error) {
                                        console.error('Error deleting cart items:', error);
                                        return res.status(500).send('Error deleting cart items');
                                    }
                                    console.log('Cart items deleted successfully');
                                    // Send a success response
                                    res.status(200).send('Order placed successfully');
                    });
                });                      
            });
        });
    });
});


app.post('/checkoutgrouped', (req, res) => {
    const userEmail = req.session.user;
    const { order_id} = req.body;
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            return res.status(404).send('User not found');
        }

        const userId = results[0].user_id;
        const phone_number = results[0].phone_number;
        const countery = results[0].country;
        const city = results[0].city;
        const area = results[0].area;
        const street = results[0].street;
        const building_no = results[0].bulding_no;
        const floor = results[0].floor;
        const flat_no = results[0].flat_no;
        const balance = results[0].balance;
        const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const totalQuery = 'SELECT SUM(Book_count * book_price) as total FROM order_details,books WHERE orders_order_id = ? AND books_book_ID = book_ID';
        connection.query(totalQuery, [order_id], (error, total) => {
            if (error) {
                console.error('Error fetching total:', error);
                return res.status(500).send('Error fetching total');
            }
            const totalCost = total[0].total;
            console.log(totalCost);
            if (totalCost > balance) 
                {
                    return res.status(500).send('Error: You dont have enough balance');
                }
        
            // Insert the order into the orders table
            const updateBalance = 'UPDATE user SET balance = balance - ? WHERE user_id = ?';
            connection.query(updateBalance, [totalCost, userId], (error, results) => {
                if (error) {
                    console.error('Error updating balance:', error);
                    return res.status(500).send('Error updating balance');
            }
            const orderQuery = 'UPDATE orders SET order_status = ?, phone_number = ?, countery = ?, city = ?, area = ?, street = ?, building_no = ?, floor = ?, flat_no = ?, paid = ? WHERE order_id = ?';
            connection.query(orderQuery, ['ordered', phone_number, countery, city, area, street, building_no, floor, flat_no, 1, order_id], (error, results) => {
                if (error) {
                    console.error('Error adding order:', error);
                    return res.status(500).send('Error adding order');
                }
                console.log('Order added successfully');

                // Get the max order ID
                const max_IDquery = 'SELECT MAX(order_id) as max_order_id FROM orders WHERE user_user_id = ?';
                connection.query(max_IDquery, [userId], (error, maxID) => {
                    if (error) {
                        console.error('Error getting max order ID:', error);
                        return res.status(500).send('Error getting max order ID');
                    }
                    
                    const updateStock = 'UPDATE books AS b JOIN order_details AS cc ON b.book_ID = cc.books_book_ID SET b.books_instock = b.books_instock - cc.Book_count, b.books_sold = b.books_sold + cc.Book_count WHERE cc.orders_order_id = ?';
                    connection.query(updateStock,[order_id], (error, results) => {
                        if(error){
                            console.error('Error adding removing books:', error);
                            return res.status(500).send('Error adding removing books');                        
                        }                          
                            res.status(200).send('Order placed successfully');
                    });
                });
            });
            });
        });
    });
}); 
// Route for sign-up form submission
app.post('/signup', (req, res) => {
    const { email, first_name, last_name, dob, country, city, area, street, building_no, flat_no, floor_no, phone_number, gender, encryptedPassword } = req.body;

    // Validate input
    if (!email || !first_name || !last_name || !dob || !encryptedPassword) {
        return res.status(400).send('Email, first name, last name, date of birth, and password are required');
    }

    // Generate encryption key from environment variable
    const encryptionKey = process.env.MASTER_KEY;
    if (!encryptionKey) {
        console.error('Encryption key is not set in environment variables');
        return res.status(500).send('Error signing up');
    }

    // Encrypt password with AES
    const iv = crypto.randomBytes(16); // Generate initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey, 'base64'), iv);
    let second_encryptedPassword = cipher.update(encryptedPassword, 'utf8', 'base64');
    second_encryptedPassword += cipher.final('base64');
    console.log(second_encryptedPassword)

    // Hash the encrypted password with bcrypt
    bcrypt.hash(second_encryptedPassword, 10, (error, hashedPassword) => {
        if (error) {
            console.error('Error hashing password with bcrypt:', error);
            return res.status(500).send('Error signing up');
        }

        // Check if email already exists in the database
        const checkEmailQuery = 'SELECT * FROM user WHERE email = ?';
        connection.query(checkEmailQuery, [email], (error, existingUsers) => {
            if (error) {
                console.error('Error querying database:', error);
                return res.status(500).send('Error signing up');
            }

            // If email already exists, send error response
            if (existingUsers.length > 0) {
                return res.status(409).send('Email already exists');
            }
            console.log(iv)
            // Insert new user into the database with hashed password and initialization vector (iv)
            const insertUserQuery = 'INSERT INTO user (email, first_name, last_name, dob, country, city, area, street, bulding_no, flat_no, floor, phone_number, gender, hashed_password, iv, balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(insertUserQuery, [email, first_name, last_name, dob, country, city, area, street, building_no, flat_no, floor_no, phone_number, gender, hashedPassword, iv, 0], (error) => {
                if (error) {
                    console.error('Error inserting user data:', error);
                    return res.status(500).send('Error signing up');
                }
                console.log('User signed up successfully');

                // Redirect user to sign-in page after successful sign-up
                res.status(200).send('User signed up successfully');
            });
        });
    });
});

// Route for sign-in form submission
app.post('/signin', (req, res) => {
    const { email, encryptedPassword } = req.body;
    console.log(email, encryptedPassword)
    // Validate input
    if (!email || !encryptedPassword) {
        return res.status(400).send('Email and password are required');
    }

    // Retrieve user from database based on email
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [email], (error, users) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).send('Error signing in');
        }

        // Check if user exists
        if (users.length === 0) {
            return res.status(404).send('User not found');
        }

        const user = users[0];

        // encrypt password using AES
        try {
            // Generate encryption key from environment variable
            const encryptionKey = process.env.MASTER_KEY;
            if (!encryptionKey) {
                console.error('Encryption key is not set in environment variables');
                return res.status(500).send('Error signing up');
            }

            // Encrypt password with AES
            const iv = user.iv // Generate initialization vector
            console.log(iv)
            console.log(Buffer.from(encryptionKey, 'base64'))
            const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey, 'base64'), iv);
            console.log(cipher)
            let srcond_encryptedPassword = cipher.update(encryptedPassword, 'utf8', 'base64');
            srcond_encryptedPassword += cipher.final('base64');
            console.log(srcond_encryptedPassword)
            // Compare decrypted password with input password using bcrypt
            bcrypt.compare(srcond_encryptedPassword,user.hashed_password,(error, result) => {
                if (error) {
                    console.error('Error comparing passwords:', error);
                    return res.status(500).send('Error signing in');
                }

                if (!result) {
                    return res.status(401).send('Incorrect password');
                }

                console.log('User signed in successfully');
                // User was found and password matches, create session
                req.session.user = email;
                res.cookie('user', email); // Set user cookie
                res.redirect('/home'); // Redirect to dashboard or send token for authentication
            });
        } catch (err) {
            console.error('Error decrypting password:', err);
            return res.status(500).send('Error signing in');
        }
    });
});


// Route for sign-in form submission
app.post('/signinadmin', (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    // Retrieve user from database based on email
    const getUserQuery = 'SELECT * FROM admin WHERE email = ?';
    connection.query(getUserQuery, [email], (error, users) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).send('Error signing in');
        }

        // Check if user exists
        if (users.length === 0) {
            return res.status(404).send('User not found');
        }

        const admin = users[0];

        // encrypt password using AES
        try {
            // Generate encryption key from environment variable
            const encryptionKey = process.env.MASTER_KEY;
            if (!encryptionKey) {
                console.error('Encryption key is not set in environment variables');
                return res.status(500).send('Error signing up');
            }

            // Encrypt password with AES
            const iv = admin.iv // Generate initialization vector
            console.log(iv)
            console.log(Buffer.from(encryptionKey, 'base64'))
            const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey, 'base64'), iv);
            console.log(cipher)
            let encryptedPassword = cipher.update(password, 'utf8', 'base64');
            encryptedPassword += cipher.final('base64');
            console.log(encryptedPassword)
            // Compare decrypted password with input password using bcrypt
            bcrypt.compare(encryptedPassword,admin.hashed_password,(error, result) => {
                if (error) {
                    console.error('Error comparing passwords:', error);
                    return res.status(500).send('Error signing in');
                }

                if (!result) {
                    return res.status(401).send('Incorrect password');
                }

                console.log('admin signed in successfully');
                // User was found and password matches, create session
                req.session.admin = email;
                res.cookie('admin', email);
                return res.redirect('/admin');
            });
        } catch (err) {
            console.error('Error decrypting password:', err);
            return res.status(500).send('Error signing in');
        }
    });
});

// Route for sign-up form submission
app.post('/addAdmin', (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).send('Email, first name, last name, date of birth, and password are required');
    }

    // Generate encryption key from environment variable
    const encryptionKey = process.env.MASTER_KEY;
    if (!encryptionKey) {
        console.error('Encryption key is not set in environment variables');
        return res.status(500).send('Error signing up');
    }

    // Encrypt password with AES
    const iv = crypto.randomBytes(16); // Generate initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey, 'base64'), iv);
    let encryptedPassword = cipher.update(password, 'utf8', 'base64');
    encryptedPassword += cipher.final('base64');
    console.log(encryptedPassword)

    // Hash the encrypted password with bcrypt
    bcrypt.hash(encryptedPassword, 10, (error, hashedPassword) => {
        if (error) {
            console.error('Error hashing password with bcrypt:', error);
            return res.status(500).send('Error signing up');
        }

        // Check if email already exists in the database
        const checkEmailQuery = 'SELECT * FROM admin WHERE email = ?';
        connection.query(checkEmailQuery, [email], (error, existingUsers) => {
            if (error) {
                console.error('Error querying database:', error);
                return res.status(500).send('Error signing up');
            }

            // If email already exists, send error response
            if (existingUsers.length > 0) {
                return res.status(409).send('Email already exists');
            }
            console.log(iv)
            // Insert new user into the database with hashed password and initialization vector (iv)
            // Insert new user into the database
            const insertUserQuery = 'INSERT INTO admin (email, hashed_password, admin_of_admins,iv) VALUES (?, ?,?,?)';
            connection.query(insertUserQuery, [email, hashedPassword,0,iv], (error) => {
                if (error) {
                    console.error('Error inserting user data:', error);
                    return res.status(500).send('Error signing up');
                }
                console.log('Admin signed up successfully');

                // Redirect user to sign-in page after successful sign-up
                res.status(200).send('Admin signed up successfully');
            });
        });
    });
});

app.get('/api/gettotaquatity', (req, res) => {
    userEmail = req.session.user;
    console.log(userEmail);
    const getUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, results) => {
        if (error) {
            conaole.log('Error fetching user ID:', error);
            console.error('Error fetching user ID:', error);
            return res.status(500).send('Error adding book to cart');
        }
        
        if (results.length === 0) {
            console.error('User not found');
            console.error('User not found');
            return res.status(404).send('User not found');
        }
        const userId = results[0].user_id;
    const query = 'SELECT SUM(Book_counts) as total FROM cart_content WHERE user_user_id = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error fetching total:', error);
            console.error('Error fetching total:', error);
            return res.status(500).send('Error fetching total');
        }
        console.log("success");
        console.log(results);
        res.json(results);
    });
});
})

app.get('/api/getspecficorder', (req, res) => {
    const orderID = req.query.q;
    console.log(orderID);
    // Query to fetch books data from the database including author's name
    const query = `SELECT Book_count, book_name, book_ID, book_desc, book_price, book_image,name AS publisher_name,books_instock 
    FROM books,order_details,publishers   
    WHERE orders_order_ID = ? AND books_book_ID = book_ID AND publishers_publisher_ID = publisher_ID`;

    // Execute the query
    connection.query(query, [orderID], (error, results) => {
        if (error) {
            console.error('Error orders books from database:', error);
            res.status(500).send('Error fetching books');
            return;
        }
        // Send the fetched books data as JSON response
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
