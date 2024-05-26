let order_id;
async function fetchCartData() {
    let cartItems;
    try {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams)
        order_id = urlParams.get('q');
        console.log(order_id)
        const response = await fetch(`http://localhost:3000/api/getspecficorder?q=${encodeURIComponent(order_id)}` );
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
            <div class="quantity">${cartItem.Book_count}</div>
            <div class="returnPrice">${(cartItem.book_price*cartItem.Book_count).toFixed(2)}EGP</div>
            </div>
        `;
        }).join('');
  
        function getTotalPrice()
        {
            let totaPrice=0;
            cart.map(item => {
                totaPrice+=(item.book_price*item.Book_count)
            })
            return totaPrice
        }
        
        function getTotalQuantity()
        {
            let totalQuantity=0;
            cart.map(item => {
                totalQuantity+=item.Book_count
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
            fetch('http://localhost:3000/checkoutgrouped', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({order_id}),
            })
        } catch (error) {
            console.error('Error:', error);
            alert('Error paying order. Please try again later.');
        }
        }
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
                    const response = await fetch('http://localhost:3000/checkoutorderdcustme', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            order_id,
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
                }
        }
    });
        
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