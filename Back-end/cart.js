import { bookscard } from "./books.js";
let cart = [];



fetch("http://localhost:3004/api/sendAllBooks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(bookscard),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return response.json();
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function fetchDataAndUpdateLocalStorage() {
  fetch("http://localhost:3004/api/getCartItems")
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data).length !== 0) {
        cart.push(data);
        saveToStorage();
      }
    })
    .catch((error) => console.error("Error:", error));
}
export { fetchDataAndUpdateLocalStorage };

const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || getDefaultCart(); // Use a function for default values
  } else {
    return getDefaultCart();
  }
};

const getDefaultCart = () => [
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

fetchDataAndUpdateLocalStorage();
cart = getCartFromLocalStorage();

export { cart, getCartFromLocalStorage };

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
      });
      cart = newCart;
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
    });
  });
}
