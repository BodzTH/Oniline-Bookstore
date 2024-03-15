'use client'
import { fetchBooks, fetchDeletedBooks, getBookByID, getInStockById, priceFormating } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Image from "next/image"
function BookPage() {

  const { bookID } = useParams();
  const bookDetails = getBookByID(+bookID);
  const [isAdded, setIsAdded] = useState(() => {
    // Get the initial state from local storage
    const savedState = localStorage.getItem(`addedToShelf-${+bookID}`);
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    // Save the state to local storage whenever it changes
    localStorage.setItem(`addedToShelf-${+bookID}`, JSON.stringify(isAdded));
  }, [isAdded, bookID]);


  async function fetchDeletedBooks(): Promise<number> {
    try {
      const response = await axios.get<any>(
        "http://localhost:5030/api/getDeletedBook"
      );
      console.log(response.data);

      // Get the id from the response data and convert it to a number
      const id = Number(response.data.id);

      return id;
    } catch (error) {
      console.error("Error fetching quantity:", error);
      throw error;
    }
  }

  useEffect(() => {
    async function fetchAndSetId() {
      try {
        const fetchedId = await fetchDeletedBooks();
        console.log('fetchedId:', fetchedId);
        console.log('bookID:', bookID);
        if (fetchedId === +bookID) {
          console.log('Setting isAdded to false');
          setIsAdded(false);
        }
      } catch (error) {
        console.error('Error fetching deleted book id:', error);
        // Handle error
      }
    }

    fetchAndSetId();

    const interval = setInterval(fetchAndSetId, 5000);
    return () => clearInterval(interval);
  }, [bookID]);

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

          <Image  src={bookDetails?.image} alt={bookDetails?.altImage} width={200} height={200} />

        </div>
        {/* Book content */}
        <div className="content-container">
          {/* bookname */}
          <div>
            <h1>{bookDetails?.BookName}</h1>
          </div>
          {/* author publisher */}
          <div className="author-publisher-container">
            <div className="book-author">
              <span>By</span> {bookDetails?.author}
            </div>
            <div>
              {bookDetails?.publisher}

            </div>
          </div>
          {/* SKU */}
          <div>
            SKU: {bookDetails?.SKU}
          </div>

          {/* description */}
          <div className="book-description">
            {bookDetails?.desc}
          </div>

          {/* Price Dropdown */}
          <div className="quantity-container">

            <div>
              {priceFormating(bookDetails?.priceCents)}EGP
            </div>

            <div className="price-dropdown ">
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
