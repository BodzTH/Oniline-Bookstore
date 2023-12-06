import { RowProps } from '@/common.types';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from './BookCard';


function CategoryRow({ title, book_name, image, price, cart, books }: RowProps) {
  return (
    <section className=" ml-20 flex-col items-center justify-center w-full h-full py-5">




      {/* book card -- put here the iteration func */}
      <BookCard title={''} book_name={''} image={''} price={0} cart={''} books={[]} />

    </section>
  );
}
export default CategoryRow;
export type { RowProps };