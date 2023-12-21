
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { getCategories } from "@/cartstore/cartstore";



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