'use client'
import BookHomeCard from "@/components/BookHomeCard";
import CategoryHomeRow from "@/components/CategoryHomeRow";
import { useParams } from "next/navigation";

function Category() {
  const { category } = useParams()
  return (
    <>
      <div className=" flexBetween">
        <CategoryHomeRow title={category as string} />
      </div>
    </>
  );
}
export default Category;