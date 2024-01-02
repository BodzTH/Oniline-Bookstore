'use client';
import BookCard from '@/components/BookCard';
import { getBooksByCategory } from '@/cartstore/cartstore';
import { Key, useRef } from 'react'; // Import useRef
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function CategoryHomeRow({ title, stylcat, width, height, stylall, stylcard }: { stylcard: string, stylall: string, width: number, height: number, stylcat: string, title: string }) {

  const scrollContainerRef = useRef<HTMLDivElement>(null); // Declare scrollContainerRef

  const categoryBooks = getBooksByCategory(title);

  const router = useRouter();

    function handleCategory() {
         // Get the search term
         
        // Update the URL to the search page with the query parameter
        router.push(`/categories/${title}`);
    }

  return (
    <>
      <div ref={scrollContainerRef} className=" mb-32 scroll-container">


        <div className="mb-10 ml-5 " >
          {/* {ml-20 flex-col items-center justify-center w-full h-full pb-28} */}
          <section >
            {/* category title */}
            <div className=' flexBetween'>
              <h1 className="text-3xl font-bold lobester mb-3 ">
                <button onClick={handleCategory}>
                  {title}
                </button>
                
              </h1>
              <button className='absolute right-16' onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: scrollContainerRef.current.scrollWidth,
                    behavior: 'smooth'
                  });
                }
              }}>
                <Image
                  src="/noun-much-greater-than.svg"
                  alt="Bookz"
                  width={32}
                  height={10}
                />
              </button>
            </div>

            <div className={stylcat}></div>


          </section>

          <div className={stylall}>
            {
              categoryBooks.slice(0,10).map((lol: { BookName: string; altImage: string; image: string; priceCents: number; id: number; }, index: Key | null | undefined) => (
                <BookCard key={index} book_name={lol.BookName} alt_image={lol.altImage} image={lol.image} price={lol.priceCents} id={lol.id} title={''} books={''} width={width} height={height} stylcat={""} stylcard={stylcard} />
              )
              )}
          </div>

        </div >
      </div >
    </>
  );
}
export default CategoryHomeRow;
