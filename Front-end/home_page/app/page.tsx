import CategoryRow from "@/components/CategoryHomeRow";
import Categories from "./categories/[category]/page";
import SearchFound from "./searchfound/page";
import Link from "next/link";
<<<<<<< HEAD
import { categoryFilters, footerLinks } from "@/constants";
import { link } from "fs";
import BookSection from "@/components/BookHomeCard";
import CategoryHomeRow from "@/components/CategoryHomeRow";
=======
import { link } from "fs"
import BookSection from "@/components/BookHomeCard";
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { getCategories } from "@/constants/index";
>>>>>>> 924c180 (Update test)


function Home() {
  const categoires = getCategories()
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      <div>
        <div>
          {
<<<<<<< HEAD
            footerLinks.map((title, index) => (
              <CategoryHomeRow key={index} title={title.title} />
=======
            categoires.map((category, index) => (
              <CategoryHomeRow key={index} title={category as string} />
>>>>>>> 924c180 (Update test)

            )
            )

          }


      <br />


    </main>
  )

}


export default Home;