import Image from "next/image";
import { SearchProbs } from "@/common.types";

function SearchFound( {book_name, book_description, image, price, books, book_type}: SearchProbs) {
    return (
      <div>

        {/* Book found box */}
        <div>

            {/* Book found text content */}
            <section>
                    
                    <h1>{book_name}</h1>
    
                    <h2>{book_type}</h2>
    
                    <h2>{price}</h2>

                    <h4>{book_description}</h4>
                    
            </section>

            {/* Book found image content */}
            <div>
                
                <Image src={image} alt="" />

            </div>
        

        </div>
   
      </div>
    );
   }
   export default SearchFound;