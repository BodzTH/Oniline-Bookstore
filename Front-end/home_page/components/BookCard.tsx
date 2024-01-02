import { priceFormating } from "@/cartstore/cartstore";
import { BookProbs } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
{/* Book Card  */ }
function BookCard({ book_name, image, price, alt_image, id, stylcat, stylcard, width, height }: BookProbs) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
        
            <div className={stylcard}>

                <Link href={'/bookpage/' + id} key={id}>
                    <div>
                        {/* Book image */}
                        <div>
                            <Image className="imageHome mb-5"
                                src={image}
                                alt={alt_image}
                                width={width}
                                height={height} />
                        </div>
                    </div>

                </Link>
                {/* Book content */}
                <div >
                    
                    <h1 className="cardText">{book_name}</h1>
                    
                    <h1 className="">{priceFormating(price)}EGP</h1>
                </div>
            </div>
        </>
    );
}
export default BookCard