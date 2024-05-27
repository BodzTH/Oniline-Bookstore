/* let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "first",
    name: "Calculus",
    price: 45,
    desc: "Study Book",
    img: '/images/calc.jpeg'
}, {
    id: "second",
    name: "Math",
    price: 60,
    desc: "Study Book",
    img: '/images/math.jpeg'
}, {
    id: "third",
    name: "Physics",
    price: 20,
    desc: "Study Book",
    img: '/images/physics.jpeg'
}, {
    id: "fourth",
    name: "chemistry",
    price: 30,
    desc: "Study Book",
    img: '/images/chemistry.jpeg'
}];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generatshop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} height="331">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                   <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                   <div id=${id} class="quantity">
                   ${search.item === undefined? 0 : search.item}
                   </div>
                   <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
    }).join(""));
};

generatshop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((y) => y.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((y) => y.id === selectedItem.id);
    if(search === undefined) return
    else if (search.item === 0) {
        return;
    } else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    //console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount")
    cartIcon.innerHTML = basket.map((y) => y.item).reduce((x, y) => x + y, 0);
}

calculation();
*/
let booksData;
document.addEventListener('DOMContentLoaded', async () => {
    try {
        try{
            const totalQuantityResponse=await fetch('http://localhost:3000/api/gettotaquatity');
            const totalQuantityData = await totalQuantityResponse.json();
            if(totalQuantityData[0].total != null){
                console.log(totalQuantityData[0].total)
                document.getElementById('cartAmount').innerHTML=totalQuantityData[0].total;
            }
            else{
                document.getElementById('cartAmount').innerHTML=0;
            }
        }
        catch (error) {
        }
        const response = await fetch('http://localhost:3000/api/getAllBooks');
        booksData = await response.json();
        console.log(booksData)
        let booksHTML=``
        booksData.forEach(book => {
            booksHTML+=`
            <div id=product-id-${book.book_ID} class="item">
                <img width="220" src="${book.book_image}" height="331">
                <div class="details">
                    <h3>${book.book_name}</h3>
                    <div class="price-quantity">
                        <h2>EGP ${book.book_price}</h2>
                        <div class="stock-indicator">In Stock: ${book.books_instock}</div>
                    </div>
                    <button data-book-id=${book.book_ID} data-book-stock=${book.books_instock}  type="submit" class="btn js-add-to-cart">AddTOCart</button>
                    </div>
            </div>
            `
            
  })
  document.querySelector('.shop').innerHTML=booksHTML;
          // Add event listener for Add to Cart buttons
          document.querySelectorAll('.js-add-to-cart').forEach(button => {
            button.addEventListener('click', async () => {
                console.log('button')
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
                        try{
                            const totalQuantityResponse=await fetch('http://localhost:3000/api/gettotaquatity');
                            const totalQuantityData = await totalQuantityResponse.json();
                            if(totalQuantityData[0].total != null){
                                console.log(totalQuantityData[0].total)
                                document.getElementById('cartAmount').innerHTML=totalQuantityData[0].total;
                            }
                            else{
                                document.getElementById('cartAmount').innerHTML=0;
                            }
                        }
                        catch (error) {
                        }
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
    }
         catch (error) {
        console.error('Error fetching books data:', error);
        alert('Error fetching books data. Please try again later.');
    }
  });


  function search() {
    console.log('searching')
    const query=document.querySelector('.search').value
    filter_data= booksData.filter(item =>
        item.book_name.toLowerCase().includes(query.toLowerCase()) ||   item.category_name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(filter_data)
    let booksHTML=``
    filter_data.forEach(book => {
        booksHTML+=`
        <div id=product-id-${book.book_ID} class="item">
            <img width="220" src="${book.book_image}" height="331">
            <div class="details">
                <h3>${book.book_name}</h3>
                <div class="price-quantity">
                    <h2>ُEGB ${book.book_price}</h2>
                </div>
                <button data-book-id=${book.book_ID} data-book-stock=${book.books_instock}  type="submit" class="btn js-add-to-cart">AddTOCart</button>
            </div>
        </div>
        `})
        document.querySelector('.shop').innerHTML=booksHTML;
        try {
            // Add event listener for Add to Cart buttons
            document.querySelectorAll('.js-add-to-cart').forEach(button => {
                button.addEventListener('click', async () => {
                    console.log('button')
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
        }
        catch (error) {
            console.error('Error fetching books data:', error);
            alert('Error fetching books data. Please try again later.');
        }
}


function toggleNavbar() {
    var navbar = document.querySelector(".navbar2");
    navbar.classList.toggle("collapsed");
}

  document.querySelector('.js-search').addEventListener('click', search);

/*   document.querySelector('.shop').addEventListener('click', async (e) => {
    try{
        fetch('http://localhost:3000/addToCart', {
            method: 'GET',
        });
    }
    catch (error) {
        console.error('Error adding book to cart:', error);
        alert('Error adding book to cart. Please try again later.');
    }
  }); */