'use client'
import { getBookByID } from "@/constants/test"
import { useParams } from "next/navigation"
import useStore from '@/cartstore/cartstore';
import Link from "next/link";
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"

function BookPage() {

  const { bookID } = useParams()
  const bookDetails = getBookByID(+bookID)
  const [users, setUsers] = useState([])
  const { inc, updateCart } = useStore()
  const sendOb = () => {
    axios.get('http://localhost:5500/Front-end/cart_page/cart.html')
      .then(res => {
        setUsers(res.data)
      }).catch(err => {
        console.log(err)
      })
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
                <button onClick={sendOb} >Send Message to Iframe</button>
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
