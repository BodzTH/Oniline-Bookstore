import BookCardCat from "@/components/BookCatCard";

function Category() {
  return (
    <>     
      <div className=" flexBetween">
        <BookCardCat book_name={""} image={"/noun-side-bar-140257.svg"} alt_image={""} price={0}/>
      </div>
    </>
  );
}
export default Category;