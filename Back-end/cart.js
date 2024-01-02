
export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
}

(async () => {
  try {
    const response = await fetch("http://localhost:5030/api/getCartItems");
    const data = await response.json();

    if (Object.keys(data).length !== 0) {
      let matching = false;
      let matchingID;
      cart.forEach((item) => {
        if (item.id === data.id) {
          matching = true;
          matchingID = item.id;
        }
      });

      if (matching) {
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
      }
      saveToStorage();
    }
  } catch (error) {
    console.error("Error:", error);
  }
})();

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
        } else {
          const container = document.getElementById("product-id-" + item.id);
          container.remove();
        }
      });
      cart = newCart;
      localStorage.setItem("cart", JSON.stringify(cart));
      //add here (bookid) is the name of the variable that you want to pass to the home page
      
        fetch("http://localhost:5030/api/sendDeletedBook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( {id : bookid} ),
          
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("POST request successful:", data);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
    });
  });
}

export function totalCartQuantity() {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
}
