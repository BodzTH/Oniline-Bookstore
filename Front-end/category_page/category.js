document.addEventListener('DOMContentLoaded', async () => {
    try {
        const category = 'Manga';
        const booksData_response = await fetch(`http://localhost:3000/api/getBooksByCategory?category=${category}`);
        const booksData = await booksData_response.json();
        console.log(booksData)
        let booksHTML=``
        booksData.forEach(book => {
            booksHTML+=`
            <div id=product-id-${book.book_ID} class="item">
                <img width="220" src="${book.book_image}" height="331">
                <div class="details">
                    <h3>${book.book_name}</h3>
                    <div class="price-quantity">
                        <h2>$ ${book.book_price}</h2>
                        <div class="buttons">
                           <i onclick="decrement(${book.book_ID})" class="bi bi-dash-lg"></i>
                           <i onclick="increment(${book.book_ID})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
            
  })
  console.log(booksHTML);
  document.querySelector('.shop').innerHTML=booksHTML;
    }
         catch (error) {
        console.error('Error fetching books data:', error);
        alert('Error fetching books data. Please try again later.');
    }
  });