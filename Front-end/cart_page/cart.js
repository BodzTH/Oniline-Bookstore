import { bookscard } from "../../Back-end/books.js";
import { cart } from "../../Back-end/cart.js";

let shop = document.getElementById('cart-container');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generatshop = () => {
    return (shop.innerHTML = bookscard.map((x) => {
        let { id, BookName, priceCents,desc, categori, image } = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
    <div id=product-id-${id} class="item">
        <div class="details">
        <img src=${image} alt="Product Image" class="cart-row-img" width="220" height="331" >
        <div class="name_desc">
        <h2>${BookName}</h2>
        <h3>${categori}</h3>
        <p>${desc}</p>
        </div>
        <div class="price-quantity">
            <div class="buttons">
               <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
               <div id=${id} class="quantity">
               ${search.item === undefined? 1 : search.item}
               </div>
               <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
            <div class="prices">
            <h2>$ ${priceCents}</h2>
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