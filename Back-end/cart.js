import { bookscard } from './books.js';
export let cart=JSON.parse(localStorage.getItem('cart'))

if(!cart)
{
cart=[{
        id: 1,
        quantity:4,
        deliveryOptionId:'1'
    
    },{
        id: 2,
        quantity:2,
        deliveryOptionId:'2'
    }]
} 
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



let checkoutHTML=``;
let totalPrice=0;
cart.forEach(cartItem => {
    const bookid=cartItem.id
    let matchingBook;

    bookscard.forEach(book  => {
        if(bookid==book.id)
        {
            matchingBook=book
        }
    })
        
    console.log(matchingBook)
    checkoutHTML+=`
    <div id="bar" class="bar">
    <div class="col">
        <div class="row text-right">
            <div class="col-4">
                <h6 class="mt-2">${cartItem.quantity}</h6>
            </div>
            <div class="col-4">
                <h6 class="mt-2">${((matchingBook.priceCents*cartItem.quantity)/100).toFixed(2)}</h6>
            </div>
        </div>
    </div>
</div>
    <div class="cart-row">
    <h2 class="cart-row-title">${matchingBook.BookName}</h2>
    <div class="buttons">
        <i class="bi bi-dash-lg js-increment" onclick="increment()"  data-book-id="${matchingBook.id}"></i>
        <div class="quantity">${cartItem.quantity}</div>
        <i class="bi bi-plus-lg"   data-book-id="${matchingBook.id}"></i>
    </div>
</div>
    `
    totalPrice +=(matchingBook.priceCents*cartItem.quantity)/100;
});
document.querySelector('.cart-container').innerHTML=checkoutHTML


export function removeBook(bookid)
{
    let newCart=[];
    cart.forEach(book => {
        if(bookid !=book.id){
            newCart.push(book)
        }       
    });
    cart=newCart;
}

export function saveToStorage()
{
    localStorage.setItem('cart',JSON.stringify(cart))
}



