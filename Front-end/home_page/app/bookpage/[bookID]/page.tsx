'use client'
import { getBookByID } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import useStore from '@/cartstore/cartstore';
import Link from "next/link";
import React, { useState } from 'react';
import axios from "axios"

function BookPage() {

  const { bookID } = useParams()
  const bookDetails = getBookByID(+bookID)
  const {count, addToCart,incart} = useStore();

  let quantityCounter = 0;
  function increaseQuantity(idd: number) {
    quantityCounter++;
  }
  function sendDataToServer(idd: number) {
    axios.post('http://localhost:3004/api/sendCartItems', { id: idd, quantity: quantityCounter })
      .then(response => console.log('Response:', response))
      .catch(error => console.error('Error:', error));
  }
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
                <button onClick={() => { increaseQuantity(+bookID); sendDataToServer(+bookID); addToCart(+bookID) }}>Send Message to Iframe</button>
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
