import { BookCardProbs } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
{/* Book item section */ }
function BookHomeCard({ book_name, image, price, cart, alt_image, id }: BookCardProbs) {
    return (
        <>
            <div className="">

                <Link href={'/bookpage/' + id} className="">
                    <div>
                        {/* Book image */}
                        <div>
                            <Image src={image} alt={alt_image} width={50} height={50} />
                        </div>
                        {/* Book content */}
                        <div className="">
                            <h1 className="">{book_name}</h1>
                            <h1 className="">{price}</h1>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
}
export default BookHomeCard