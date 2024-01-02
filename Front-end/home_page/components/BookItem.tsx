import Image from "next/image"
import { BookItemProbs } from "@/common.types"
import { priceFormating } from "@/cartstore/cartstore"

{/* Book found box */ }
function BookItem({ book_name, book_description, image, price, book_type, alt_image, sku }: BookItemProbs) {

  return (
    <div  >
      {/* Book item section */}
      <div className="searchContainer">
        {/* Book image */}
        <div className="searchImage-container" >

          <Image src={image} alt={alt_image} width={200} height={200} />

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

