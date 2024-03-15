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
        <p className="about-us-text">
            Welcome to our online bookstore! This project is the brainchild of a group of dedicated Computer Engineering students who share a common passion for books and technology. Our mission is to create a user-friendly platform that makes discovering and purchasing books an enjoyable and seamless experience. We understand the importance of a good book and the role it plays in shaping minds. That&apos;s why we&apos;ve designed our bookstore to cater to all kinds of readers, offering a wide range of genres.
        </p>
      </div>

      <div id="contact-us" className="contactus">

        Contact us:
        <a href="mailto:BookStore@example.com">Abdelrahman.Khalil@gu.edu.eg</a>
        <a href="mailto:BookStore@example.com">Omar.Esam@gu.edu.eg</a>
        <a href="mailto:BookStore@example.com">Abdelrahman.Ayman@gu.edu.eg</a>
        <a href="mailto:BookStore@example.com">mohamed.tawfeek@gu.edu.eg</a>
      </div>

    </main> 
  )

}


export default Home;