import { RowProps } from '@/common.types';
import Image from 'next/image';
import Link from 'next/link';
import {bookscard} from '../constants/index'

  
function CategoryRow({ title, book_name, image, price, cart, books }: RowProps) {
    return (
        <main>
      <div className=" ml-20 flex-col items-center justify-center w-full h-full py-5">

        {/* title box */}
        <div>

            <h1 className="text-2xl font-bold">{title}</h1>

            {/* scroll far right button */}
            <div>

                <button>

                </button>

            </div>

        </div>

        {/* book row box */}
        <div>

            {/* book card */}
                

            <div className="js-book-cart"            >
            {bookscard.map((book) => (
      <Link href='/' key={link}>{link}</Link>
    ))} 

                <div>

                    <Image src={image} alt="book cover" />

                </div>

                <div>

                    <h2>{book_name}</h2>

                    <h3>{price}</h3>

                    <button>{cart}</button>

                </div>

            </div>
            


        </div>

      </div>
      </main>
    );
   }
   export default CategoryRow;

function itearatebook()
{
    
}