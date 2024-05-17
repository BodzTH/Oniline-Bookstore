document.addEventListener('DOMContentLoaded', async () => {
    const booksContainer = document.getElementById('books-container');

    try {
        const response = await fetch('http://localhost:3000/api/getAllBooks');
        const booksData = await response.json();
        

        booksData.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');

            const titleElement = document.createElement('h2');
            titleElement.textContent = book.book_name;

            const bookNameElement = document.createElement('p');
            bookNameElement.textContent = `book name: ${book.book_name}`;

            const authorElement = document.createElement('p');
            authorElement.textContent = `Author: ${book.author_first_name} ${book.author_last_name}`;

            const priceElement = document.createElement('p');
            priceElement.textContent = `Price: $${(book.book_price).toFixed(2)}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.setAttribute('data-book-id', book.book_ID);
            addToCartButton.setAttribute('data-book-stock', book.books_instock);
            addToCartButton.classList.add('js-add-to-cart');

            bookElement.appendChild(titleElement);
            bookElement.appendChild(bookNameElement);
            bookElement.appendChild(authorElement);
            bookElement.appendChild(priceElement);
            bookElement.appendChild(addToCartButton);

            booksContainer.appendChild(bookElement);
        });

        // Add event listener for Add to Cart buttons
        document.querySelectorAll('.js-add-to-cart').forEach(button => {
            button.addEventListener('click', async () => {
                const bookId = button.getAttribute('data-book-id');
                const bookStock = button.getAttribute('data-book-stock');
                console.log(bookStock);

                try {
                    const response = await fetch('http://localhost:3000/addToCart', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ bookId,bookStock}) // Replace 'user_id_placeholder' with the actual user ID
                    });

                    if (response.ok) {
                        alert('Book added to cart successfully!');
                    } else {
                        const errorMessage = await response.text();
                        alert(`Error adding book to cart: ${errorMessage}`);
                    }
                } catch (error) {
                    console.error('Error adding book to cart:', error);
                    alert('Error adding book to cart. Please try again later.');
                }
            });
        });
    } catch (error) {
        console.error('Error fetching books data:', error);
        alert('Error fetching books data. Please try again later.');
    }
});

document.addEventListener('DOMContentLoaded', async () => {
        const search = 'juj';

    fetch(`/api/getSearchedBooks?search=${search}`, {
    method: 'GET',
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    // Handle the fetched data here
    console.log(data);
    })
    .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    });

});

document.addEventListener('DOMContentLoaded', async () => {
    const category = 'Manga';

fetch(`/api/getBooksByCategory?category=${category}`, {
method: 'GET',
})
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the fetched data here
console.log(data);
})
.catch(error => {
console.error('There was a problem with your fetch operation:', error);
});

});

/* try {
    const response = await fetch('http://localhost:3000/addPublisher', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publisherName }),
    });
    const data = await response.json();
    console.log(data);
    alert('Publisher added successfully.');
} catch (error) {
    console.error('Error adding publisher:', error);
    alert('Error adding publisher. Please try again later.');
}
}); */