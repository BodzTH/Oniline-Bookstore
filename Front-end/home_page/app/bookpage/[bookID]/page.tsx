'use client'
import { BookProbs } from "@/common.types"
import { getBookByID } from "@/constants/books"
import Image from "next/image"
import { useParams } from "next/navigation"
function BookPage() {
  const { bookID } = useParams()
  const bookDetails = getBookByID(+bookID)
  return (
    <div>
      {/* Book item section */ }
      <div>
        {/* Book image */ }
        <div>
          {/* <Image src={} alt={alt_image} width={50} height={50} /> */}
        </div>
        {/* Book content */ }
        <div>
          <div>
            <h1>{bookDetails?.bookName}</h1>
            <h1>{bookDetails?.price}</h1>
            {/* <h1>{bookDetails.}</h1>
            <h1>{publisher}</h1>
            <h1>{book_description}</h1> */}
          </div>
          <div>
            {/* <>{cart}</> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage