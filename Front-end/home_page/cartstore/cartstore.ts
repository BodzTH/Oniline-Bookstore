import { create } from "zustand";
import axios from "axios";
import { useEffect } from "react";

// Function to fetch data from the API using async/await
let fetchedData: any = [];

setInterval(async () => {
  try {
    const response = await axios.get("http://localhost:3004/api/getAllBooks");
    const data = response.data;
    console.log("Data updated:", data);
    fetchedData = data;
  } catch (error) {
    console.error("Error:", error);
  }
}, 7000);

type Store = {
  bookscard: any;
  count: number;
  incart: number;
  quantity: number;
};

const books: number = 5;
const useStore = create<Store>()((set) => ({
  quantity: books,
  count: 0,
  bookscard: fetchedData,
  incart: 0,
}));

export const getBookByID = (id: number) => {
  return fetchedData.find((book: { id: any }) => book.id === id);
};

export const getBooksByCategory = (category: string) => {
  return fetchedData.filter(
    (book: { categori: string }) => book.categori === category
  );
};

export const getCategories = () => {
  const categoriesSet = new Set();
  fetchedData.forEach((book: any) => categoriesSet.add(book.categori));
  return Array.from(categoriesSet);
};

export const getBooksBySearchQuery = (searchQuery: string) => {
  return fetchedData.filter(
    (book: { BookName: string | string[]; categori: string | string[] }) => {
      return (
        book.BookName.includes(searchQuery) ||
        book.categori.includes(searchQuery)
      );
    }
  );
};

export const getBooksTOCart = () => {
  const bookSet = new Set();
  fetchedData.forEach((id: { id: unknown }) => bookSet.add(id.id));
  return Array.from(bookSet);
};

export default useStore;
