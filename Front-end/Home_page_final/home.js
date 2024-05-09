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

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/getAllBooks');
        const booksData = await response.json();
        console.log(booksData)
        let booksHTML=``
        booksData.forEach(book => {
            booksHTML+=`
            <div id=product-id-${book.book_ID} class="item">
                <img width="220" src=${book.book_image} height="331">
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