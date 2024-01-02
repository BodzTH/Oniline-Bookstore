'use client';
import BookCard from '@/components/BookCard';
import { Key } from 'react'; 
import  { getBooksByCategory } from '@/cartstore/cartstore';
function AllBooks({ title,stylcat, width, height, stylall, stylcard }: { stylcard: string, stylall: string, width: number, height: number, stylcat: string, title: string }) {

    const categoryBooks = getBooksByCategory(title);
    return (
        <>
            <div className=" mb-32">


                <div className="mb-10 ml-5 " >
                    {/* {ml-20 flex-col items-center justify-center w-full h-full pb-28} */}
                   

                    <div className={stylall}>
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
