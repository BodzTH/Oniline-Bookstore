import Image from "next/image"
import { BookItemProbs } from "@/common.types"
import { priceFormating } from "@/cartstore/cartstore"

{/* Book found box */ }
function BookItem({ book_name,book_description, image, price, book_type, alt_image,sku }: BookItemProbs) {

  return (
    <div>
      {/* Book found box */}
      <div>
        {/* Book found content */}
        <section className="">
          <h1>{book_name}</h1>
          <h2>{book_type}</h2>
          <h2>{priceFormating(price)}EGP</h2>
          <h4>{book_description}</h4>
          <h3>{sku}</h3>
          <div>
            <Image src={image} alt={alt_image} width={333} height={33} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default BookItem

