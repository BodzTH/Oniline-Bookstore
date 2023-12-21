import { create } from "zustand";
import axios from "axios";

let data: any = [];
axios
  .get("http://localhost:3004/api/getAllBooks")
  .then((response) => {
    data = response.data;
    
  })
  .catch((error) => console.error("Error:", error));

type Store = {
  bookscard: any;
  count: any;
};

const useStore = create<Store>()((set) => ({
  count: 0,
  bookscard: data,
}));


export default useStore;

export const getBookByID = (id) => {
   return data.find((book) => book.id === id);
};

export const getBooksByCategory = (category) => {
  return data.filter((book) => book.categori === category);
};

export const getCategories = () => {
  const categoriesSet = new Set();
  data.forEach((book) => categoriesSet.add(book.categori));
  return Array.from(categoriesSet);
};

export const getBooksBySearchQuery = (searchQuery) => {
  return data.filter((book) => {
    return (
      book.BookName.includes(searchQuery) || book.categori.includes(searchQuery)
    );
  });
};

export const getBooksTOCart = () => {
  const bookSet = new Set();
  data.forEach((id) => bookSet.add(id.id));
  return Array.from(bookSet);
};
