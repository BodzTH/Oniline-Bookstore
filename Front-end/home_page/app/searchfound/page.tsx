import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { SearchProbs } from "@/common.types";
import { getBooksBySearchQuery } from "@/constants/index";

function SearchFound({ book_name, book_description, image, price, books, book_type }: SearchProbs) {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const query = getBooksBySearchQuery(search ?? '3')
  console.log(search)
  console.log(query)
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