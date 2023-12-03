import CategoryRow from "@/components/CategoryRow";
import Categories from "./categories/page";
import SearchFound from "./[searchfound]/page";
import Link from "next/link";

<SearchFound book_name={"The idiot brain"} book_description={"The idiot brain"} image={""} price={"500"} books={['/','/','/']} book_type={"English"} />

function Home() {
  return (
    <main>

<section>

<CategoryRow title={"English Books"} books={['/','/','/']} book_name={"The idiot brain"} image={""} price={"500"} cart={'/'}/>


<br />
    <Link href={'/searchfound'}>
    
    Search
    </Link>
    
  

</section>  
      
    </main>
  )

}


export default Home;