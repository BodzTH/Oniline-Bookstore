import CategoryRow from "@/components/CategoryRow";
import Categories from "./categories/page";
import SearchFound from "./searchfound/page";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { link } from "fs";


function Home() {
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      {
        footerLinks.map((title, index) => (
          <CategoryRow key={index} title={title.title} books={title.links[index + 1]} />
        )
        )
      }


      <br />


    </main>
  )

}


export default Home;