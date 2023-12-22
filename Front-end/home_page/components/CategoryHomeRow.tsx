'use client';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from '@/components/BookCard';
import { getBooksByCategory } from '@/cartstore/cartstore';
import { Key, useState } from 'react';
import { useEffect } from 'react';
import useStore from '@/cartstore/cartstore';
function CategoryHomeRow({ title, styl }: { styl: string, title: string }) {

  const categoryBooks = getBooksByCategory(title);
  const {bookscard} = useStore();

  return (
    <>
      <div>
        {/* {ml-20 flex-col items-center justify-center w-full h-full pb-28} */}
        <section className={styl}>
          {/* category title */}
          <h1 className="text-3xl font-bold">{title}</h1>
          {/* book card -- put here the iteration func */}
          { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

        </section>

        <div className=' flex gap-8'>
          {
            categoryBooks.map((lol: { BookName: string; altImage: string; image: string; priceCents: number; id: number; }, index: Key | null | undefined) => (
              <BookCard key={index} book_name={lol.BookName} alt_image={lol.altImage} image={lol.image} price={lol.priceCents} id={lol.id} title={''} books={''} cart={<button>PRess</button>} />
            )
            )}
        </div>

      </div >
    </>
  );
}
export default CategoryHomeRow;
