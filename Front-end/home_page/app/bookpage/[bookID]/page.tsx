'use client'
import { fetchDeletedBooks, getBookByID, getInStockById } from "@/cartstore/cartstore"
import { useParams } from "next/navigation"
import useStore from '@/cartstore/cartstore';
import Link from "next/link";
import React, { use, useEffect, useState } from 'react';
import axios from "axios"
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

  const handleClick = () => {
    setIsAdded(true);
  };


  function sendDataToServer(idd: number, quantity: number) {
    axios.post('http://localhost:5030/api/sendCartItems', { id: idd, quantity: quantity })
      .then(response => console.log('Response:', response))
      .catch(error => console.error('Error:', error));
  } 
  

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const quantity = getInStockById(+bookID);

  useEffect(() => {
    async function fetchAndSetBooks() {
      try {
        const fetchedBooks = await fetchDeletedBooks();
        setSelectedQuantity(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
        // Handle error
      }
    }

    fetchAndSetBooks();

    const interval = setInterval(fetchAndSetBooks, 1000);
    return () => clearInterval(interval);
  }, []);



  

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
                <button className="addtocart" onClick={() => { handleClick(); sendDataToServer(+bookID, selectedQuantity); }} disabled={isAdded}>{isAdded ? 'Added to Shelf' : 'Add to BookShelf'}</button>
                <select onChange={(e) => setSelectedQuantity(Number(e.target.value))}>
                  {[...Array(quantity)].map((_, i) =>
                    <option key={i} value={i + 1}>{i + 1}</option>
                  )}
                </select>
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
