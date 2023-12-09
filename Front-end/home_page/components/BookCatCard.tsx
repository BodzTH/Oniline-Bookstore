import { BooksProbs } from '@/common.types';
import Image from 'next/image';
import Link from 'next/link';
function BookCardCat({ book_name, image, alt_image, price }: BooksProbs) {
    return (
        <div className="">
            <Link href={'/bookpage'} >
                <div>
                    <Image src={image} alt={alt_image} width={100} height={100} />
                    <div className="flex flex-col justify-between">
                        <h1 className="text-sm font-medium">{book_name}</h1>
                        <h1 className="text-sm font-medium">{price}</h1>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default BookCardCat