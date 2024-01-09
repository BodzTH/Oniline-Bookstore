'use client'
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { fetchBooks } from "@/cartstore/cartstore";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AllBooks from "@/components/AllBooks";
import { CatLinks } from "@/constants/test";
import Link from "next/link";

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
    if (category === 'default') {
      return uniqueCategories;
    } else {
      return uniqueCategories.filter((book: string) => book === category);
    }
  };

  const mysteryBooks = getBooksByCategory(category ?? '');
  return (
    <>
      <div className="flex">
        <div className="flex-col  lobester">
          {
            CatLinks.map((link) => (
                <Link  className=" catlinks" href={link.href} key={link.key} >
                  {link.text} 
                  
                </Link>
            ))}
        </div>


        <div className="verticalCategoryLine" >

          <div>

          </div>

        </div>
        <div className="ml-10 ">
          {
            category === 'default' ? (
              // Render the default component here
              mysteryBooks.map((category: string, index: number) => (
                <AllBooks key={index} title={category} stylcat={""} width={110} height={146} stylall={"products"} stylcard={""} />

              ))
            ) : (
              // Render the CategoryHomeRow component for each category
              mysteryBooks.map((category: string, index: number) => (
                <CategoryHomeRow key={index} title={category} stylcat={""} width={110} height={146} stylall={"products"} stylcard={""} />
              ))
            )
          }

        </div>
      </div>
    </>
  );
}
export default Category;