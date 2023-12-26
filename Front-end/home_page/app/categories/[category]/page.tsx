'use client'
import CategoryHomeRow from "@/components/CategoryHomeRow";
import useStore, { fetchBooks, getBooksByCategory, getCategories } from "@/cartstore/cartstore";
import { Key, useEffect, useState } from "react";
import { useParams } from "next/navigation";

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


function Category() {

  const { category }: { category: string } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchAndSetBooks() {
      try {
        const fetchedBooks = await fetchBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
        // Handle error
      }
    }

    fetchAndSetBooks();

    const interval = setInterval(fetchAndSetBooks, 1000);
    return () => clearInterval(interval);
  }, []);



  const uniqueCategories = Array.from(new Set(books.map(book => book.categori)));
  const getBooksByCategory = (category: string) => {
    return uniqueCategories.filter(
      (book: string) => book === category
    );
  };
  const mysteryBooks = getBooksByCategory(category ?? '');
  return (
    <>
      <div className="flex">
        <div className=" left-0 border-x-0 border-r h-screen w-40 border-border-color " >

          <div>

          </div>

        </div>
        <div className="ml-10  ">
          {
            mysteryBooks.map((category: string, index: number) => (
              <CategoryHomeRow key={index} title={category} stylcat={""} width={0} height={0} stylall={""} stylcard={""} />
            ))


          }

        </div>
      </div>
    </>
  );
}
export default Category;