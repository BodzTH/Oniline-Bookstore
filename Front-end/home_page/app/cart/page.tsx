'use client'
import React, { createContext, useContext, useRef } from 'react';
import useStore from '@/cartstore/cartstore';
import { bookscard } from "@/constants/books";

export const IframeContext = createContext(null);

function Cart() {


  const { count, updateCart } = useStore()

  

  const sendObjectToIframe = () => {



    const objectToSend = {
      action: 'SEND_BOOK_DETAILS',
      data: bookscard
    };

    var iframe = parent.window.document.getElementById('framme')  as HTMLIFrameElement;
    if (iframe) {
      iframe?.contentWindow?.postMessage(objectToSend, '*');
    }

  };

  return (
    <div>
      <div>

        <br />
        <button onClick={sendObjectToIframe}>Send Message to Iframe</button>
        <iframe className="h-full w-full"
         
          title="myIframe"
          
          id="framme"
          src="http://127.0.0.1:5500/Front-end/cart_page/cart.html"
        />
      </div>

    </div>
  );


}

export default Cart;
