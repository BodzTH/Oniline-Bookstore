'use client'
import { fetchDeletedBooks, getBookByID, getInStockById } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import React, { use, useEffect, useState } from 'react';
import axios from "axios"
function BookPage() {

  const { bookID } = useParams();
  const bookDetails = getBookByID(+bookID);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    const savedState = localStorage.getItem(`addedToShelf-${+bookID}`);
    setIsAdded(savedState ? JSON.parse(savedState) : false);
  }, [bookID]);


  useEffect(() => {
    async function fetchAndSetCart() {
      try {

        localStorage.setItem(`addedToShelf-${+bookID}`, JSON.stringify(isAdded));
        await fetchDeletedBooks();

      } catch (error) {
        console.error('Error fetching books:', error);
        // Handle error
      }
    }

    fetchAndSetCart();
  }, [isAdded, bookID]);

  const handleClick = () => {
    setIsAdded(true);
  };


  async function sendDataToServer(idd: number, quantity: number) {
    try {
      const response = await axios.post('http://localhost:5030/api/sendCartItems', { id: idd, quantity: quantity });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const quantity = getInStockById(+bookID);

  useEffect(() => {
    setSelectedQuantity(quantity);
  }, [quantity]);






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

            {/* image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
      altImage:"alt",  
      id,
      categori: "Study",
      BookName: "Mathmatics",
      desc: "description",
      author:"name of the ather",
      publisher:"puplisher",
      priceCents: 1000,
      inStock: 10,
      sold: 2, */}
            <h1>{bookDetails?.BookName}</h1>
            <h1>{bookDetails?.priceCents}</h1>

          </div>
          <div>
            {/* <>{cart}</> */}
            <div>
              <div>
                <select onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                  {[...Array(quantity)].map((_, i) =>
                    <option key={i} value={i + 1}>{i + 1}</option>
                  )}
                </select>
                <button className="addtocart" onClick={() => { handleClick(); sendDataToServer(+bookID, selectedQuantity); }} disabled={isAdded}>{isAdded ? 'Added to Shelf' : 'Add to BookShelf'}</button>

                <br />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage
