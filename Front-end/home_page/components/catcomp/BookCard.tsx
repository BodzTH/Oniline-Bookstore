import CategoryRow,{ RowProps } from "@/components/CategoryRow";
import Image from "next/image";

function BookCard({ title, book_name, image, price, cart, books }: RowProps ) {
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
                <h1>{cart}</h1>
            </div>
            <div>
                <h1>{books}</h1>
            </div>
        </div>
        </>
    );
   }
   export default BookCard;