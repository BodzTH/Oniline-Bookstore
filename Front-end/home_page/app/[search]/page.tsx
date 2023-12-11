'use client'
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { SearchProbs } from "@/common.types";
import { getBooksBySearchQuery, getCategories } from "@/constants/index";
import BookItem from "@/components/BookItem";

function SearchFound({ book_description, image, price, book_type, alt_image }: SearchProbs) {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const query = getBooksBySearchQuery(search ?? '')
  console.log(search)
  console.log(query)


  return (
    <div>

      {query.map((book, index) => (
        <BookItem key={index} book_description={""} image={book.url} price={book.price} book_type={book.category} alt_image={""} book_name={book.bookName} />
      ))}
    </div>
  );
}

export default SearchFound;
