'use client';
import CategoryHomeRow from "@/components/CategoryHomeRow";
import useStore, { getCategories } from "@/cartstore/cartstore";
import { useEffect, useState } from "react";



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