import { bookscard } from "../../Back-end/books.js";
import { cart,saveToStorage,deleteItem } from "../../Back-end/cart.js";
localStorage.clear();
let shop = document.getElementById('cart-container');
console.log(cart[0].quantity)
let generatshop = () => {
    let matching;
    return (shop.innerHTML = cart.map((x) => {
        bookscard.map((book) => {
            if(x.id != book.id)
            {
                return
            }
            else{
                matching=book;
            }
        })
        
     
        return `
    <div id=product-id-${matching.id} class="item">
        <div class="details">
        <img src=${matching.image} alt="Product Image" class="cart-row-img" >
        <div class="name_desc">
        <h2>${matching.BookName}</h2>
        <h3>${matching.categori}</h3>
        <p>${matching.desc}</p>
        </div>
        <div class="price-quantity">
            <div class="buttons">
               <i  class="bi bi-dash-lg js-decrement" data-book-id=${matching.id}></i>
               <div id=${matching.id} class="quantity">
               ${x.quantity}
               </div>
               <i class="bi bi-plus-lg js-increment" data-book-id=${matching.id}></i>
            </div>
            <div class="prices">
            <h2>$ ${((matching.priceCents*x.quantity)/100).toFixed(2)}</h2>
            <button class="js-delete-item"    data-book-id=${matching.id}>delete</button>
            </div>
        </div>
        </div>
    </div>
    `;
    }).join(""));
};

console.log(generatshop());

/*let increment = (id) => {
    let selectedItem = id;
    let search = cart.find((y) => y.id === selectedItem.id);
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
    let search = cart.find((y) => y.id === selectedItem.id);
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
    cartIcon.innerHTML = cart.map((y) => y.item).reduce((x, y) => x + y, 0);
}

calculation();*/
let decrement_buttons=document.querySelectorAll('.js-decrement')
decrement_buttons.forEach(button => {
    button.addEventListener('click',() => {
    let bookid=button.dataset.bookId
    cart.map(item => {
        if(bookid==item.id)
        {
        if(item.quantity>=2)
        {
        item.quantity-=1
        console.log(item.quantity)
        let newTotalPrice=updatePrice(item,bookid)/100
        console.log(newTotalPrice)
        saveToStorage();
        }
        }
    })
})
})

let increment_buttons=document.querySelectorAll('.js-increment')
increment_buttons.forEach(button => {
    button.addEventListener('click',() => {
    let bookid=button.dataset.bookId
    cart.map(item => {
        if(bookid==item.id)
        {
        item.quantity+=1
        console.log(item.quantity)
        let newTotalPrice=updatePrice(item,bookid)/100
        console.log(newTotalPrice)
        saveToStorage();
        }
    })
})
})


deleteItem()


function updatePrice(item,id)
{
let newTotalPrice;
bookscard.map(book => {
if(book.id==id){
newTotalPrice=item.quantity*book.priceCents
}
})
return newTotalPrice
}
