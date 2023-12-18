import { create } from 'zustand'
import { bookscard } from "E:/Semester 5/vscode/web/project/Back-end/books.js";

type Store = {
  bookscard: any;
  count: number
  inc: () => void
  updateCart: () => void
}

const useStore = create<Store>()((set) => ({
  count: 0,
  bookscard: bookscard,
  inc: () => set((state) => ({ count: state.count + 1 })),
  updateCart: () => set((state) => ({ bookscard: state.bookscard + 1 }))
}))

export default useStore