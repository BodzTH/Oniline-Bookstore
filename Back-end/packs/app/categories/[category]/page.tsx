'use client'
import { bookscard } from "E:/Semester 5/vscode/web/project/Back-end/books.js"
import { cart } from "E:/Semester 5/vscode/web/project/Back-end/cart.js"
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { useParams } from "next/navigation";

function Category() {
  const { category } = useParams()
  return (
    <>
      <div className="flex">
        <div className=" left-0 border-x-0 border-r h-screen w-40 border-border-color " >

          <div>

          </div>

        </div>
        <div className="ml-10  ">
          <CategoryHomeRow styl="mb-5 " title={category as string} />
        </div>
      </div>
    </>
  );
}
export default Category;