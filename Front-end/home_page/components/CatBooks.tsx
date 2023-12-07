import { BooksProbs } from '@/common.types';
import Image from 'next/image';
function CatBooks({ book_name, image, alt_image, price }: BooksProbs) {
    return (
        <div className=""> 
            <Image src={image} alt={alt_image}             
            />
            <div className="flex flex-col justify-between">
                <h1 className="text-sm font-medium">{book_name}</h1>
                <h1 className="text-sm font-medium">{price}</h1>
            </div>
        </div>
    )
}

export default CatBooks