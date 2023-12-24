'use client';
import CategoryHomeRow from "@/components/CategoryHomeRow";
import useStore, { fetchBooks, getCategories } from "@/cartstore/cartstore";
import { Key, useEffect, useState } from "react";

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

function Home() {
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


  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      <div>
        <div>
          {
            uniqueCategories.map((category: string, index: number) => (
              <CategoryHomeRow key={index} title={category} styl={""} />
            ))


          }

        </div>
      </div>


    </main>
  )

}


export default Home;