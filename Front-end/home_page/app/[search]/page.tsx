'use client'
import { useSearchParams } from "next/navigation";
import { SearchProbs } from "@/common.types";
import { getBooksBySearchQuery } from "@/cartstore/cartstore";
import BookItem from "@/components/BookItem";

function SearchFound({ book_description, image, price, book_type, alt_image }: SearchProbs) {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const query = getBooksBySearchQuery(search ?? '')
  console.log(search)
  console.log(query)

  interface Book {
    id: number;
    image: string;
    altImage: string;
    categori: string;
    BookName: string;
    desc: string;
    author: string;
    publisher: string;
    priceCents: number;
    inStock: number;
    sold: number;
  }

  return (
    <div>

      {query.map((book: Book, index: number) => (
        <BookItem key={index} book_description={""} image={book.image} price={book.priceCents} book_type={book.categori} alt_image={""} book_name={book.BookName} cart={<button></button>} author={""} publisher={""} sku={""} />
      ))}

      
    </div>
  );
}

export default SearchFound;
