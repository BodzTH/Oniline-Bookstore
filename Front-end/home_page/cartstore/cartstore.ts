import { create } from "zustand";
import axios from "axios";
import { useEffect } from "react";

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
  incart: any;
  addToCart: (id: any) => void;
};

const useStore = create<Store>()((set) => ({
  count: 0,
  bookscard: data,
  incart: [],
  addToCart: (id) => set((state) => ({ count: state.count + 1, incart: [...state.incart, id] })),
}));

export const getBookByID = (id: number) => {
  return data.find((book: { id: any; }) => book.id === id);
};

export const getBooksByCategory = (category: string) => {
 return data.filter((book: { categori: string; }) => book.categori === category);
};

export const getCategories = () => {
 const categoriesSet = new Set();
 data.forEach((book: any) => categoriesSet.add(book.categori));
 return Array.from(categoriesSet);
};

export const getBooksBySearchQuery = (searchQuery: string) => {
 return data.filter((book: { BookName: string | string[]; categori: string | string[]; }) => {
   return (
     book.BookName.includes(searchQuery) || book.categori.includes(searchQuery)
   );
 });
};

export const getBooksTOCart = () => {
 const bookSet = new Set();
 data.forEach((id: { id: unknown; }) => bookSet.add(id.id));
 return Array.from(bookSet);
};


export default useStore;
