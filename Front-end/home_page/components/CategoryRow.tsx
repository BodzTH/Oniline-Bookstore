import { RowProps } from '@/common.types';
import Image from 'next/image';
import Link from 'next/link';

  
function CategoryRow({ title, book_name, image, price, cart, books }: RowProps) {
    return (
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
            <div>

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
    );
   }
   export default CategoryRow;