import Image from "next/image";
import { SearchProbs } from "@/common.types";

function SearchFound({ book_name, book_description, image, price, books, book_type }: SearchProbs) {
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

            <Image src={image} alt="" />

          </div>

        </section>




      </div>

    </div>
  );
}
export default SearchFound;