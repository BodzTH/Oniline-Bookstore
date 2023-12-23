import { bookscard } from "./books.js";
export let cart = JSON.parse(localStorage.getItem("cart"));;
if(!cart)
{
  cart=[
    {
      id: 1,
      quantity: 9,
      deliveryOptionId: "1",
    },
    {
      id: 2,
      quantity: 2,
      deliveryOptionId: "2",
    },
  ];
}

function fetchDataAndUpdateLocalStorage() {
  setInterval(() => {
    fetch("http://localhost:3004/api/getCartItems")
      .then((response) => response.json())
      .then((data) => {
    if (Object.keys(data).length !== 0) {
      let matching = false;
      let matchingID;
      cart.forEach((item) => {
        if (item.id === data.id) {
          matching = true;
          matchingID = item.id;
        }
      });
if (matching == true) {
        cart.forEach((item) => {
          if (item.id === matchingID) {
            item.quantity = data.quantity;
            document.getElementById(item.id + "-quantity").innerHTML =
              item.quantity;
          }
        });
      } else {
        cart.push(data);
        console.log(cart);
        let matching;
        bookscard.forEach(book => {
          if(data.id==book.id)
          {
            matching=book;
          }
        })
        document.getElementById('cart-container').innerHTML+=`
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
                   <div id=${matching.id+'-quantity'} class="quantity">
                   ${data.quantity}
                   </div>
                   <i class="bi bi-plus-lg js-increment" data-book-id=${matching.id}></i>
                </div>
                <div class="prices">
                <h2 class="m">$</h2>
                <h2 id=${matching.id+'-price'} > ${((matching.priceCents*data.quantity)/100).toFixed(2)}</h2>
                </div>
                <button class="js-delete-item"    data-book-id=${matching.id}>delete</button>
            </div>
            </div>
        </div>
        `
             }
        saveToStorage();
      }
    })
    .catch((error) => console.error("Error:", error));
}, 6000); // fetch every 6 seconds
}
export { fetchDataAndUpdateLocalStorage };


fetchDataAndUpdateLocalStorage();


export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}



export function deleteItem() {
  let delete_buttons = document.querySelectorAll(".js-delete-item");
  delete_buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const newCart = [];
      let bookid = button.dataset.bookId;
      console.log(bookid);
      cart.map((item) => {
        if (bookid != item.id) {
          newCart.push(item);
          console.log(item);
        }
        else {
        const container=document.getElementById( 'product-id-'+item.id)
        container.remove();
        }
      });
      cart = newCart;
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });
}

