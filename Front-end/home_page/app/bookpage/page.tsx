import { BookProbs } from "@/common.types"
import Image from "next/image"
function BookPage({ book_name, image, price, cart, alt_image, author, publisher, book_description }: BookProbs) {
  return (
    <div>
      {/* Book item section */ }
      <div>
        {/* Book image */ }
        <div>
          <Image src={image} alt={alt_image} width={50} height={50} />
        </div>
        {/* Book content */ }
        <div>
          <div>
            <h1>{book_name}</h1>
            <h1>{price}</h1>
            <h1>{author}</h1>
            <h1>{publisher}</h1>
            <h1>{book_description}</h1>
          </div>
          <div>
            <>{cart}</>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPage