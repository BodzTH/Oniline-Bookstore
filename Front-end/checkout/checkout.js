/* import { bookscard,saveBooksToStorage } from "../../Back-end/books.js";
import { orders,saveOrdersToStorage } from "../../Back-end/orders.js";
import {cart} from "../../Back-end/cart.js"

let items = document.querySelector('.list');
console.log(cart[0].quantity)
 let generatCheckout = () => {
    let matching;
    return (items.innerHTML = cart.map((x) => {
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
        <div class="item">
        <img src="${matching.image}">
        <div class="info">
            <div class="name">${matching.BookName}</div>
            <div class="price">${(matching.priceCents/100).toFixed(2)}EGP/1 product</div>
        </div>
        <div class="quantity">${x.quantity}</div>
        <div class="returnPrice">${((matching.priceCents*x.quantity)/100).toFixed(2)}EGP</div>
        </div>
    `;
    }).join(""));
};

console.log(generatCheckout());

const totalPrice=document.querySelector('.totalPrice')
totalPrice.innerHTML=getTotalPrice()+'EGP'
function getTotalPrice()
{
    let totaPrice=0;
    cart.map(item => {
        let matching;
        bookscard.map(book => {
            if(item.id==book.id)
            {
                matching=book;
            }
        })
        console.log(matching)
        console.log(item)
        totaPrice+=(matching.priceCents*item.quantity)/100
    })
    return totaPrice
}

let totalQuantity=0;
cart.map(item => {
    totalQuantity+=item.quantity
})
document.querySelector('.totalQuantity').innerHTML=totalQuantity;

const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };


// generate a unique id


// check if the id matches any other existing ids provided as an array
const checkId = function(id, existing = []) {
    let match = existing.find(function(item) {
      return item === id;
    });
    return match ? false : true;
  };

  
const getId = function( length, existing = [] ) {
    const limit = 100; // max tries to create unique id
    let attempts = 0; // how many attempts
    let id = false;
    while(!id && attempts < limit) {
      id = randomId(length); // create id
      if(!checkId(id, existing)) { // check unique
        id = false; // reset id
        attempts++; // record failed attempt
      }
    }
    return id; // the id or false if did not get unique after max attempts
  };


function setOrder()
{
    const newOrder={};
    const button=document.querySelector('.js-Checkout-button')
    button.addEventListener('click', () => {
        cart.forEach(item => {
            let matching;
            bookscard.forEach(book => {
                if(item.id==book.id)
                {
                    matching=book;
                }
            })
            matching.inStock-=item.quantity
            matching.sold+=item.quantity
            fetch("http://localhost:5030/api/sendDeletedBook", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify( {id : matching.id} ),
                
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
        })
        newOrder.fullName=document.querySelector('.js-full-name-set-order').value
        newOrder.phoneNumber=document.querySelector('.js-phone-number-set-order').value
        newOrder.address=document.querySelector('.js-address-set-order').value
        newOrder.countery=document.querySelector('.js-country-set-order').value
        newOrder.city=document.querySelector('.js-city-set-order').value
        newOrder.items=cart;
        newOrder.status='orderd'
        newOrder.id=getId(10,orders)
        orders.push(newOrder)        
        saveOrdersToStorage();
        saveBooksToStorage();
        console.log(orders)
        console.log(newOrder.items)
        localStorage.removeItem('cart')
    })

}
setOrder(); */
// Function to fetch cart data from the server
async function fetchCartData() {
  let cartItems;
  try {
      const response = await fetch('http://localhost:3000/api/getcart' );
      cartItems = await response.json();
      // Fetch additional book data for each cart item
  }
  catch (error) {
      console.error('Error fetching cart data:', error);
}
return cartItems;
};

let items = document.querySelector('.list');


let generatCheckout = async () => {
  try {
      const cart = await fetchCartData(); // Await the result of fetchCartData

      // Generate shop content
      items.innerHTML = cart.map(cartItem => {
          return  `
          <div class="item">
          <img src="${cartItem.book_image}">
          <div class="info">
              <div class="name">${cartItem.book_name}</div>
              <div class="price">${(cartItem.book_price).toFixed(2)}EGP/1 product</div>
          </div>
          <div class="quantity">${cartItem.Book_counts}</div>
          <div class="returnPrice">${(cartItem.book_price*cartItem.Book_counts).toFixed(2)}EGP</div>
          </div>
      `;
      }).join('');

      function getTotalPrice()
      {
          let totaPrice=0;
          cart.map(item => {
              totaPrice+=(item.book_price*item.Book_counts)
          })
          return totaPrice
      }
      
      function getTotalQuantity()
      {
          let totalQuantity=0;
          cart.map(item => {
              totalQuantity+=item.Book_counts
          })
          return totalQuantity
      }


      const totalQuantity=document.querySelector('.totalQuantity')
      totalQuantity.innerHTML= getTotalQuantity();



      const totalPrice=document.querySelector('.totalPrice')
      totalPrice.innerHTML= getTotalPrice()+'EGP'

      const checkButton = document.querySelector('.js-Check-button');
      const button=document.querySelector('.js-Checkout-button')
      button.addEventListener('click',async () => {
        if(checkButton.checked){
        try {
          const response = await fetch('http://localhost:3000/checkout', {
              method: 'POST',
          });
          if (response.ok) {
            alert('ordere placed success!');
        } else {
            const errorMessage = await response.text();
            alert(`Error adding book to cart: ${errorMessage}`);
        }
      } catch (error) {
        alert('Error updating the cart. Please try again later.');
          console.error('Error updating the cart:', error);
      }}
      else{
        const country= document.getElementById('country').value;
        const city = document.getElementById('city').value;
        const area = document.getElementById('area').value;
        const street = document.getElementById('street').value;
        const buildingNumber = document.getElementById('building_number').value;
        const floor = document.getElementById('floor').value;
        const flatNumber = document.getElementById('flat').value;
        const phoneNumber = document.getElementById('phone').value;
        console.log(country,city,area,street,buildingNumber,floor,flatNumber,phoneNumber)
            try {
                console.log('trying');
                const response = await fetch('http://localhost:3000/checkoutcustme', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        country,
                        city,
                        area,
                        street,
                        buildingNumber,
                        floor,
                        flatNumber,
                        phoneNumber
                    }),
                });

                if (response.ok) {
                    alert('Order placed successfully!');
                } else {
                    const errorMessage = await response.text();
                    alert(`Error adding book to cart: ${errorMessage}`);
                }
            } catch (error) {
                alert('Error updating the cart. Please try again later.');
                console.error('Error updating the cart:', error);
            }}});
      
  } catch (error) {
      console.error('Error fetching cart data:', error);
      alert('Error fetching cart data. Please try again later.');
  }
};

document.getElementById('same-address').addEventListener('change', function() {
  const specificInputs = [
      document.getElementById('phone'),
      document.getElementById('country'),
      document.getElementById('area'),
      document.getElementById('city'),
      document.getElementById('street'),
      document.getElementById('building_number'),
      document.getElementById('floor'),
      document.getElementById('flat'),
  ];
  specificInputs.forEach(input => {
      input.disabled = this.checked;
  });
});
generatCheckout();