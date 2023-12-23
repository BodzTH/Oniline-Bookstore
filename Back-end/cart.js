import { bookscard } from "./books.js";
export let cart = JSON.parse(localStorage.getItem("cart"));;
if(!cart)
{
cart=[

];}

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
                item.quantity += data.quantity;
                document.getElementById(item.id + "-quantity").innerHTML =
                  item.quantity;
              }
            });
          } else {
            cart.push(data);
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

