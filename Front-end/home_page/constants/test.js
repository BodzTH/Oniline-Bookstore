import { bookscard } from "E:/Semester 5/vscode/web/project/Back-end/books.js";

export const NavLinks = [
  { href: "/categories/default", key: "Inspiration", text: "Categories" },
  { href: "/", key: "Find Projects", text: "Contact us" },
  { href: "/", key: "Learn Development", text: "About us" },
];
export const getBookByID = (id) => {
  return bookscard.find((book) => book.id === id);
};

export const getBooksByCategory = (category) => {
  return bookscard.filter((book) => book.categori === category);
};

export const getCategories = () => {
  const categoriesSet = new Set();
  bookscard.forEach((book) => categoriesSet.add(book.categori));
  return Array.from(categoriesSet);
};

export const getBooksBySearchQuery = (searchQuery) => {
  return bookscard.filter((book) => {
    return (
      book.BookName.includes(searchQuery) || book.categori.includes(searchQuery)
    );
  });
};

// export const getBooksTOCart = () => {
//   const bookSet = new Set();
//   bookscard.forEach((id) => bookSet.add(id.));
//   return Array.from(bookSet);
// };
