import { RowProps } from '@/common.types';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from './BookCard';


function CategoryRow({ title , books }: RowProps ) {
  return (
    <>
      <section className=" ml-20 flex-col items-center justify-center w-full h-full pb-28">
        {/* category title */}
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2>{books}</h2>
        {/* book card -- put here the iteration func */}
       { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

      </section>
    </>
  );
}
export default CategoryRow;
export type { RowProps };