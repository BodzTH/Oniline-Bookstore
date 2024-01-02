import { BookProbs } from "@/common.types";
import Image from "next/image";
{/* Book item section */ }
function BookSection({ title, book_name, image, price, books }: BookProbs) {
    return (
        <>
            <div>
                <div>
                    <h1>{title}</h1>
                </div>
                <div>
                    <h1>{book_name}</h1>
                </div>
                <div>
                    <Image src={image} alt="" />
                </div>
                <div>
                    <h1>{price}</h1>
                </div>
                <div>
                    <h1>{books}</h1>
                </div>
            </div>
        </>
    );
}
export default BookSection