'use client'
import { useSearchParams } from "next/navigation";
import { getBooksBySearchQuery } from "@/cartstore/cartstore";
import BookItem from "@/components/BookItem";

function SearchFound() {
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
    SKU: number;
  }

  return (
    <div>
      <span className=" text-5xl"><h1>Search Found: {query.length}</h1></span>
      <div >
        {query.map((book: Book, index: number) => (
        <BookItem key={index} book_description={book.desc} image={book.image} price={book.priceCents} book_type={book.categori} alt_image={book.altImage} book_name={book.BookName} author={book.author} publisher={book.publisher} sku={book.SKU} />
      ))}
      </div>
      

    </div>
  );
}

export default SearchFound;
