<<<<<<< HEAD
import { RowProps } from '@/common.types';
=======

>>>>>>> 924c180 (Update test)
import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD


function CategoryHomeRow({ title }: RowProps) {
=======
import BookHomeCard from './BookHomeCard';
import { getBooksByCategory } from '@/constants/index';

function CategoryHomeRow({ title }: { title: string }) {
  const categoryBooks = getBooksByCategory(title);
>>>>>>> 7cf3a31 (book card category)
  return (
    <>
      <div>

        <section className=" ml-20 flex-col items-center justify-center w-full h-full pb-28">
          {/* category title */}
          <h1 className="text-3xl font-bold">{title}</h1>
          {/* book card -- put here the iteration func */}
          { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

        </section>
<<<<<<< HEAD
=======
        <div className='flex-1 flex gap-3'>
          {
            categoryBooks.map((lol, index) => (
              <BookHomeCard key={index} book_name={lol.bookName} alt_image={"dd"} image={lol.url} price={lol.price} id={lol.id} cart={<button>Hello</button>} />

            )
            )}
        </div>
>>>>>>> 7cf3a31 (book card category)
      </div>
    </>
  );
}
export default CategoryHomeRow;
export type { RowProps };