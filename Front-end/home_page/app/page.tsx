import { bookscard } from "E:/Semester 5/vscode/web/project/Back-end/books.js"
import { cart } from "E:/Semester 5/vscode/web/project/Back-end/cart.js"
import Categories from "./categories/[category]/page";
import SearchFound from "./[search]/page";
import Link from "next/link";
import { link } from "fs";
import BookSection from "@/components/BookCard";
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { getCategories } from "@/constants/index";



function Home() {
  const categoires = getCategories()
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      <div>
        <div>
          {
            categoires.map((category, index) => (
              <CategoryHomeRow key={index} title={category as string} styl={""} />

            )
            )

          }

        </div>
      </div>


    </main>
  )

}


export default Home;