'use client';
import CategoryHomeRow from "@/components/CategoryHomeRow";
import useStore, { getCategories } from "@/cartstore/cartstore";
import { useEffect, useState } from "react";


function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data as any);
    };

    fetchCategories();
  }, [categories]);

  return (
    <main>
      {/* CategoryRow -- put here iteration func */}
      <div>
        <div>
          {
            categories.map((category, index) => (
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