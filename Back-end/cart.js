import { bookscard } from "./books.js";
let cart = [];

function fetchDataAndUpdateLocalStorage() {
  fetch('http://localhost:3004/api/getData')
  .then(response => response.json())
  .then(data => {
      localStorage.setItem('myData', JSON.stringify(data));
      if (window.updateCart1) window.updateCart1();
  })
  .catch(error => console.error('Error:', error));
}
export { fetchDataAndUpdateLocalStorage };


const getCartFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    return storedCart || getDefaultCart(); // Use a function for default values
  } else {
    return getDefaultCart();
  }
};

const getDefaultCart = () => [
  {
    id: 1,
    quantity: 4,
    deliveryOptionId: "1",
  },
  {
    id: 2,
    quantity: 2,
    deliveryOptionId: "2",
  },
];

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
      saveToStorage();
      console.log(cart);
    });
  });
}

// Making a request to the server
fetch('/api/sendData')
  .then(response => response.json())
  .then(data => {
    // Storing received data in local storage
    localStorage.setItem('serverData', JSON.stringify(data));
    console.log('Data stored in local storage:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
