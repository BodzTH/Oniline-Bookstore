import CategoryRow from "@/components/CategoryRow";
import Categories from "./categories/page";
import SearchFound from "./searchfound/page";
import Link from "next/link";
import { footerLinks } from "@/constants";


function Home() {
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      {
        footerLinks.map((title) => (
          <CategoryRow key={title.title} title={title.title} />
        ))
      }


      <br />
     

    </main>
  )

}


export default Home;