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
  
  
        const button=document.querySelector('.js-Checkout-button')
        button.addEventListener('click',async () => {
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
        });
        
    } catch (error) {
        console.error('Error fetching cart data:', error);
        alert('Error fetching cart data. Please try again later.');
    }
  };
  
  
  generatCheckout();