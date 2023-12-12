import Image from 'next/image';
import Link from 'next/link';
import BookCard from '@/components/BookCard';
import { getBooksByCategory } from '@/constants/index';
  function CategoryHomeRow({ title }: { title: string }) {
    const categoryBooks = getBooksByCategory(title);

    return (
      <>
        <div>

          <section className=" ml-20 flex-col items-center justify-center w-full h-full pb-28">
            {/* category title */}
            <h1 className="text-3xl font-bold">{title}</h1>
            {/* book card -- put here the iteration func */}
            { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

          </section>

          <div className='flex-1 flex gap-3'>
            {
              categoryBooks.map((lol: { bookName: string; url: string; price: number; id: number; }, index: number) => (
                <BookCard key={index} book_name={lol.bookName} alt_image={"dd"} image={lol.url} price={lol.price} id={lol.id} title={''} books={''} cart={<button>PRess</button>}  />

              )
              )}
          </div>

        </div >
      </>
    );
  }
  export default CategoryHomeRow;