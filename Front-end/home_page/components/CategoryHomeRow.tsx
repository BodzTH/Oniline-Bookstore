import { categoryFilters } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import BookHomeCard from './BookHomeCard';

function CategoryHomeRow({ title }: { title: string }) {
  return (
    <>
      <div>

        <section className=" ml-20 flex-col items-center justify-center w-full h-full pb-28">
          {/* category title */}
          <h1 className="text-3xl font-bold">{title}</h1>
          {/* book card -- put here the iteration func */}
          { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

        </section>
        <div>
          {categoryFilters.map((lol, index) => (
            <BookHomeCard key={index} book_name={lol} alt_image={"dd"} image={"/book.svg"} price={2000} cart={<button>Hello</button>} />

          )
          )}
        </div>
      </div>
    </>
  );
}
export default CategoryHomeRow;
