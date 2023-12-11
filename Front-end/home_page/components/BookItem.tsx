import Image from "next/image"
import { BookItemProbs, SearchProbs } from "@/common.types"
function BookItem({ book_name,book_description, image, price, book_type, alt_image, cart }: BookItemProbs) {
  return (
    <div>
      {/* Book found box */}
      <div>
        {/* Book found content */}
        <section className="">
          <h1>{book_name}</h1>
          <h2>{book_type}</h2>
          <h2>{price}</h2>
          <h4>{book_description}</h4>
          <div>
            <Image src={image} alt={alt_image} width={333} height={33} />
          </div>
          <div>
            <>{cart}</>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BookItem