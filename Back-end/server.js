const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Om@rEssam2003',
    database: 'bookstore-final'
});

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
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
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'checkout', 'checkout.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/home', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'home.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

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
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'accounts', 'profile.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

app.get('/orders', (req, res) => {
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'user_orders', 'orders.html');
    
    // Send the file as the response
    res.sendFile(filePath);
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

// Route for cart page
app.get('/cart', (req, res) => {
    if (req.session.user==undefined) {
        // User is not logged in, redirect to sign-in page
        res.redirect('/signin');
        
    }
    // Construct the file path relative to the current directory (__dirname)
    const filePath = path.join(__dirname, '..', 'Front-end', 'cart_page', 'cart.html');
    
    // Send the file as the response
    res.sendFile(filePath);
});

// Route for sign-up form submission
app.post('/signup', (req, res) => {
    const { email, first_name, last_name, dob, country, city, area, street, buildingNumber, flatNumber, phoneNumber, gender, password } = req.body;

    // Validate input
    if (!email || !first_name || !last_name || !dob || !password) {
        return res.status(400).send('Email, first name, last name, date of birth, and password are required');
    }

    // Encrypt password
    bcrypt.hash(password, 10, (error, hashedPassword) => {
        if (error) {
            console.error('Error hashing password:', error);
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

            // Insert new user into the database with hashed password
            const address = `${country},${city},${area},${street},${buildingNumber},${flatNumber}`;
            const insertUserQuery = 'INSERT INTO user (email, first_name, last_name, dob, country, city, area, street, bulding_no, flat_no, phone_number, Gender, hashed_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(insertUserQuery, [email, first_name, last_name, dob, country, city, area, street, buildingNumber, flatNumber, phoneNumber, gender, hashedPassword], (error) => {
                if (error) {
                    console.error('Error inserting user data:', error);
                    return res.status(500).send('Error signing up');
                }
                console.log('User signed up successfully');

                // Redirect user to sign-in page after successful sign-up
                res.redirect('/signin');
            });
        });
    });
});



// Route for sign-in form submission
app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    // Check if user exists in the database
    const checkUserQuery = 'SELECT * FROM user WHERE email = ?';
    connection.query(checkUserQuery, [email], (error, results) => {
        if (error) {
            console.error('Error querying database:', error);
            return res.status(500).send('Error signing in');
        }

        // Check if user was found
        if (results.length === 0) {
            // User not found, redirect to sign-in page with error message
            return res.redirect('/signin?error=Invalid email or password');
        }

        // Compare hashed password with input password
        bcrypt.compare(password, results[0].hashed_password, (error, isMatch) => {
            if (error) {
                console.error('Error comparing passwords:', error);
                return res.status(500).send('Error signing in');
            }

            if (!isMatch) {
                // Password doesn't match, redirect to sign-in page with error message
                return res.redirect('/signin?error=Invalid email or password');
            }

            // User was found and password matches, create session
            req.session.user = email;
            res.cookie('user', email); // Set user cookie

            // Redirect user to profile page after successful sign-in
            res.redirect("/profile");
        });
    });
});


// Route for home page
app.get('/profile-data', (req, res) => {
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

// Route to fetch books data from the database
/* app.get('/api/getAllBooks', (req, res) => {
    // Query to select all books from the database
    const query = 'SELECT * FROM books';

    // Execute the query
    connection.query(query, (error, results) => {
        if (error) {
            console.error("Error fetching books from database:", error);
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        // Send the fetched books data as JSON response
        res.json(results);
    });
}); */

app.get('/api/getAllBooks', (req, res) => {
    // Query to fetch books data from the database including author's name
    const query = `SELECT b.book_ID, b.book_name, b.book_desc, b.book_price, b.books_instock, 
                        b.books_sold, b.book_image, b.book_altImage, 
                        p.name AS publisher_name, 
                        a.first_name AS author_first_name, a.last_name AS author_last_name
                   FROM books b
                   INNER JOIN publishers p ON b.publishers_publisher_ID = p.publisher_ID
                   INNER JOIN authors a ON b.authors_author_ID = a.author_ID`;

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
    if (req.session.user==undefined) {
        // User is not logged in, redirect to sign-in page
        return res.status(500).send('Error you have to sign in first');
        
    }

    const userEmail = req.session.user;
    const { bookId } = req.body;
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

        const userId = results[0].user_id;

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
        });
    });
});

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

// Route to fetch cart data for the signed-in user
/* app.get('/api/getCartData', (req, res) => {
    const userEmail = req.session.user;

    // Check if user is logged in
    if (!userEmail) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Query to retrieve user ID based on email
    const getUserQuery = 'SELECT user_id FROM user WHERE email = ?';
    connection.query(getUserQuery, [userEmail], (error, userResults) => {
        if (error) {
            console.error('Error fetching user ID:', error);
            return res.status(500).json({ error: 'Failed to fetch user data' });
        }

        if (userResults.length === 0) {
            console.error('User not found');
            return res.status(404).json({ error: 'User not found' });
        }

        const userId = userResults[0].user_id;

        // Query to fetch cart data for the user
        const getCartDataQuery = `SELECT Book_counts, book_name, book_ID, book_desc, book_price, book_image 
                                  FROM books,cart_content   
                                  WHERE user_user_id = ? AND books_book_ID = book_ID`;

        connection.query(getCartDataQuery, [userId], (error, cartResults) => {
            if (error) {
                console.error('Error fetching cart data:', error);
                return res.status(500).json({ error: 'Failed to fetch cart data' });
            }

            res.json(cartResults);
        });
    });
});
 */


/* app.get('/getAllBooks', (req, res) => {
    // Get a connection from the pool
    connection.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting MySQL connection:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
  
      // Query to select all books from the database
      const query = 'SELECT * FROM books';
  
      // Execute the query
      connection.query(query, (error, results) => {
        connection.release(); // Release the connection back to the pool
  
        if (error) {
          console.error("Error fetching books from database:", error);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
  
        // Send the fetched books data as JSON response
        res.json(results);
      });
    });
  });
 */

/*   app.post("/api/sendAllBooks", async (req, res) => {
    try {
      if (
        !Array.isArray(req.body) ||
        req.body.some((book) => typeof book !== "object")
      ) {
        res.status(400).json({ message: "Invalid data format" });
        return;
      }
      AllBooks = req.body;
      res.json({ message: "Books received" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }); */

// Start server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
