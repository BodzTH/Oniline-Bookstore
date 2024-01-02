'use client';
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { fetchBooks } from "@/cartstore/cartstore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

    const interval = setInterval(fetchAndSetBooks, 900);
    return () => clearInterval(interval);

  }, []);


  const uniqueCategories = Array.from(new Set(books.map(book => book.categori)));

  return (
    <main >
      <div className="welcome-image">
      </div>
      <div >
        <div >

          {
            uniqueCategories.map((category: string, index: number) => (
              <CategoryHomeRow key={index} title={category} stylcat={" horizontalline h-5 "} width={110} height={146} stylall={"flex gap-10 w-fit"} stylcard={"backgroundClass"} />
            ))


          }

        </div>
      </div>

      <div id="about-us" className="aboutus">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquam? Eaque deserunt quia sit quod. Nisi assumenda molestias consectetur atque.
        </p>
      </div>

      <div id="contact-us" className="contactus">
        <h1>Contact Us</h1>
        <p>Please reach out to us at contact@example.com.</p>
      </div>

    </main>
  )

}


export default Home;