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

            bookElement.appendChild(titleElement);
            bookElement.appendChild(bookNameElement);
            bookElement.appendChild(authorElement);
            bookElement.appendChild(priceElement);
            bookElement.appendChild(addToCartButton);

            booksContainer.appendChild(bookElement);
        });
    } catch (error) {
        console.error('Error fetching books data:', error);
    }
});
