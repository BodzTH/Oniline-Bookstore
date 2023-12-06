import CategoryRow from "@/components/CategoryRow";
import Categories from "./categories/page";
import SearchFound from "./[searchfound]/page";
import Link from "next/link";
import { footerLinks } from "@/constants";

{/* ignore */ }
<SearchFound book_name={"The idiot brain"} book_description={"The idiot brain"} image={""} price={500} books={['/', '/', '/']} book_type={"English"} />

function Home() {
  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      {
        footerLinks.map((title) => (
          <CategoryRow key={title.title} title={title.title}/>
        ))
      }


      <br />
      <Link href={'/searchfound'}>

        Search
      </Link>


    </main>
  )

}


export default Home;