'use client'
import { getBookByID } from "@/constants/test"
import { useParams } from "next/navigation"
import useStore from '@/cartstore/cartstore';
import Link from "next/link";
import { bookscard } from "../../../../../Back-end/books";
import React, { useContext } from 'react';
import { IframeContext } from "@/app/cart/page";

function BookPage() {

  const { bookID } = useParams()
  const bookDetails = getBookByID(+bookID)

  const { inc, updateCart } = useStore()

  const iframeRef = useContext(IframeContext);

  const sendObjectToIframe = () => {



    const objectToSend = {
      action: 'SEND_BOOK_DETAILS',
      data: bookscard
    };


    var iframe = parent.window.document.getElementById('framme') as HTMLIFrameElement;
    if (iframe) {
      iframe?.contentWindow?.postMessage(objectToSend, '*');
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
              <div>
                <button onClick={sendObjectToIframe}>Send Message to Iframe</button>
                <br />

                <Link href={"/cart"}> press</Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage
