'use client'
import { fetchDeletedBooks, getBookByID, getInStockById } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Image from "next/image"
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


  return (
    <div className="pageContainer">
      {/* Book item section */}
      <div className="container">
        {/* Book image */}
        <div className="image-container" >

          <Image className="" src={bookDetails?.image} alt={bookDetails?.altImage} width={200} height={200} />

        </div>
        {/* Book content */}
        <div className="content-container">
          {/* bookname */}
          <div>
            <h1>{bookDetails?.BookName}</h1>
          </div>
          {/* author publisher */}
          <div>

          </div>
          {/* SKU */}
          <div>

          </div>

          {/* description */}
          <div>

          </div>

          {/* Price Dropdown */}
          <div>

            <div>
              Price
            </div>

            <div>
              <select className="quantity" onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                {[...Array(quantity)].map((_, i) =>
                  <option key={i} value={i + 1}>{i + 1}</option>
                )}
              </select>
            </div>

          </div>

          <div>
            {/* <>{cart}</> */}
            <div>
                <button className="addtocart" onClick={() => { handleClick(); sendDataToServer(+bookID, selectedQuantity); }} disabled={isAdded}>{isAdded ? 'Added to Shelf' : 'Add to BookShelf'}</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage
