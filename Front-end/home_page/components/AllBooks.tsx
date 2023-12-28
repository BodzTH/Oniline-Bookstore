'use client';
import BookCard from '@/components/BookCard';
import { Key, useState, useRef } from 'react'; // Import useRef
import { useEffect } from 'react';
import useStore, { getBooksByCategory } from '@/cartstore/cartstore';
import Image from 'next/image';
function AllBooks({ title,stylcat, width, height, stylall, stylcard }: { stylcard: string, stylall: string, width: number, height: number, stylcat: string, title: string }) {

    const scrollContainerRef = useRef<HTMLDivElement>(null); // Declare scrollContainerRef

    const categoryBooks = getBooksByCategory(title);
    return (
        <>
            <div ref={scrollContainerRef} className=" mb-32 scroll-container">


                <div className="mb-10 ml-5 " >
                    {/* {ml-20 flex-col items-center justify-center w-full h-full pb-28} */}
                   

                    <div className=' flex gap-10 w-fit '>
                        {
                            categoryBooks.map((lol: { BookName: string; altImage: string; image: string; priceCents: number; id: number; }, index: Key | null | undefined) => (
                                <BookCard key={index} book_name={lol.BookName} alt_image={lol.altImage} image={lol.image} price={lol.priceCents} id={lol.id} title={''} books={''} width={width} height={height} stylcat={""} stylcard={stylcard} />
                            )
                            )}
                    </div>

                </div >
            </div >
        </>
    );
}
export default AllBooks;
