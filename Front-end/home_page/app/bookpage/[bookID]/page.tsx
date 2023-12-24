'use client'
import { getBookByID } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import useStore from '@/cartstore/cartstore';
import Link from "next/link";
import React, { use, useEffect, useState } from 'react';
import axios from "axios"
function BookPage() {

  const { bookID } = useParams();
  const bookDetails = getBookByID(+bookID);

   const no = 1;
  function sendDataToServer(idd: number, quantity: number) {
    axios.post('http://localhost:5030/api/sendCartItems', { id: idd, quantity: quantity })
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
                <button onClick={() => { sendDataToServer(+bookID, no); }}>Send Message to Iframe</button>
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
