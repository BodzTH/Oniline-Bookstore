import CategoryRow from "@/components/CategoryRow";
import { BookProbs } from "@/common.types";
import Image from "next/image";

function BookCard({ title, book_name, image, price, cart, books }: BookProbs) {
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
                    <>{cart}</>
                </div>
                <div>
                    <h1>{books}</h1>
                </div>
            </div>
        </>
    );
}
export default BookCard;