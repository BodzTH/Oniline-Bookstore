import BookCardCat from "@/components/BookCatCard";

function Category() {
  return (
    <>     
      <div className=" flexBetween">
        <BookCardCat book_name={""} image={"/noun-side-bar-140257.svg"} alt_image={""} price={0} cart={<button>Hello</button>}/>
      </div>
    </>
  );
}
export default Category;