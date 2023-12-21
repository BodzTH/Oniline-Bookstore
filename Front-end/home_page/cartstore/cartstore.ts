import { create } from "zustand";
import { bookscard } from "E:/Semester 5/vscode/web/project/Back-end/books.js";
import axios from "axios";

let data: any = [];
axios
  .get("http://localhost:3004/api/getAllBooks")
  .then((response) => {
    data = response.data;
    // Use data here
  })
  .catch((error) => console.error("Error:", error));

type Store = {
  message: any;
  bookscard: any;
  count: number;
  inc: () => void;
  updateCart: () => void;
  showData: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 0,
  bookscard: bookscard,
  message: data,
  inc: () => set((state) => ({ count: state.count + 1 })),
  updateCart: () => set((state) => ({ bookscard: state.bookscard + 1 })),
  showData: () => set((state) => ({ message: state.message + "1" })),
}));

export default useStore;
