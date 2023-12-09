import CategoryRow from "@/components/CategoryHomeRow";
import Categories from "./categories/page";
import SearchFound from "./searchfound/page";
import Link from "next/link";
import { categoryFilters, footerLinks } from "@/constants";
import { link } from "fs";
import BookSection from "@/components/BookHomeCard";
import CategoryHomeRow from "@/components/CategoryHomeRow";


function Home() {
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      <div>
        <div>
          {
            footerLinks.map((title, index) => (
              <CategoryHomeRow key={index} title={title.title} />

            )
            )

          }



        </div>

      </div>

    </main>
  )

}


export default Home;