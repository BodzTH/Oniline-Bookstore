import Image from "next/image"
import { priceFormating } from "@/cartstore/cartstore"
import Link from "next/link"
import { useState } from "react";

{/* Book found box */ }
type BookItemProbs = {
  book_name: string;
  book_description: string;
  image: string;
  price: number;
  book_type: string;
  alt_image: string;
  sku: string;
  idd: number; // Add the 'id' property
};

function BookItem({ book_name, book_description, image, price, book_type, alt_image , idd }: BookItemProbs) {

  return (
    <div  >
      {/* Book item section */}
      <div className="searchContainer">
        {/* Book image */}
        <div className="searchImage-container" >
          <Link href={'/bookpage/' + idd} key={idd}>
            <div>
              {/* Book image */}
              <div>
                <Image src={image} alt={alt_image} width={200} height={200} />
    
              </div>
            </div>

          </Link>

        </div>
        {/* Book content */}
        <div className="searchContent-container">
          {/* bookname */}
          <div>
            <h1>{book_name}</h1>
          </div>

          {/* description */}
          <div className="searchBook-description">
            {book_description}
          </div>
          <div className="quantity-container">

            <div>
              {priceFormating(price)}EGP
            </div>
            <div>
              {book_type}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default BookItem

