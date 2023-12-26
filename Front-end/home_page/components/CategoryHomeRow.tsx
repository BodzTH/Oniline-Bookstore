'use client';
import BookCard from '@/components/BookCard';
import { getBooksByCategory } from '@/cartstore/cartstore';
import { Key, useState } from 'react';
import { useEffect } from 'react';
import useStore from '@/cartstore/cartstore';
function CategoryHomeRow({ title, stylcat, width, height, stylall, stylcard }: { stylcard: string, stylall: string, width: number, height: number, stylcat: string, title: string }) {

  const categoryBooks = getBooksByCategory(title);

  return (
    <>
      <div className="mb-20 ml-5" >
        {/* {ml-20 flex-col items-center justify-center w-full h-full pb-28} */}
        <section >
          {/* category title */}
          <h1 className="text-3xl font-bold lobester mb-3 ">{title}</h1>
          <div className={stylcat}></div>
          {/* book card -- put here the iteration func */}
          { /* <BookCard title={''} book_name={''} image={''} price={} cart={''} books={[]} /> */}

        </section>

        <div className=' flex gap-10 w-fit '>
          {
            categoryBooks.map((lol: { BookName: string; altImage: string; image: string; priceCents: number; id: number; }, index: Key | null | undefined) => (
              <BookCard key={index} book_name={lol.BookName} alt_image={lol.altImage} image={lol.image} price={lol.priceCents} id={lol.id} title={''} books={''} width={width} height={height} stylcat={""} stylcard={stylcard} />
            )
            )}
        </div>

      </div >
    </>
  );
}
export default CategoryHomeRow;
