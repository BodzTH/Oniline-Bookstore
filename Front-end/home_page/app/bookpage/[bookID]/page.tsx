'use client'
import { cart } from "E:/Semester 5/vscode/web/project/Back-end/cart.js";
import { saveToStorage } from "E:/Semester 5/vscode/web/project/Back-end/cart.js";
import { getBookByID, getCategories, } from "@/constants/test"
import { useParams } from "next/navigation"
import { useEffect, useRef } from "react";
import { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem } from '@/utils/localStorage';
import Cart from "@/app/cart/page";

function BookPage() {

  const { bookID } = useParams()
  const bookDetails = getBookByID(+bookID)
  const iframeRef = useRef(null);

  const sendObjectToIframe = () => {
    const iframe = iframeRef.current;

    if (iframe) {
      const bookDetails = {
        BookName: 'Example Book',
        priceCents: 100,
        categori: 'Example Category',
        id: 123,
        image: 'example.jpg'
      };

      const objectToSend = {
        action: 'SEND_BOOK_DETAILS',
        data: bookDetails
      };

      iframe.contentWindow.postMessage(objectToSend, '*');
    } else {
      console.error('Iframe not found');
    }
  };




  return (
    <div>
      {/* Book item section */}
      <div>
        {/* Book image */}
        <div>
          {/* <Image src={} alt={alt_image} width={50} height={50} /> */}
        </div>
        {/* Book content */}
        <div>
          <div>
            <h1>{bookDetails?.BookName}</h1>
            <h1>{bookDetails?.priceCents}</h1>
            {/* <h1>{bookDetails.}</h1>
            <h1>{publisher}</h1>
            <h1>{book_description}</h1> */}
          </div>
          <div>
            {/* <>{cart}</> */}
            <div>
              <button onClick={sendObjectToIframe}>Send Message to Iframe</button>
              <iframe className="h-full w-full"
                ref={iframeRef}
                title="myIframe"
                src="http://127.0.0.1:5500/Front-end/cart_page/cart.html"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage