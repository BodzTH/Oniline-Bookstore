import { BookProbs } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
{/* Book item section */ }
function BookCard({ book_name, image, price, alt_image, id, stylcat, stylcard, width, height }: BookProbs) {
    return (
        <>
            <div className={stylcard}>

                <Link href={'/bookpage/' + id} className="">
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
                <div className="py-3">
                    <h1 className="">{book_name}</h1>
                    <h1 className="">{price}</h1>
                </div>
            </div>
        </>
    );
}
export default BookCard