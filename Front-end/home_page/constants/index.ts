const bookscard = [
  {
    id: 1,
    bookName: "Book 1",
    category: "Fiction",
    price: 10.99,
    url: "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
  },
  {
    id: 2,
    bookName: "Book 2",
    category: "Non-Fiction",
    price: 12.99,
    url: "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
  },
  {
    id: 3,
    bookName: "Book 3",
    category: "Sci-Fi",
    price: 15.99,
    url: "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
  },
  {
    id: 4,
    bookName: "Book 4",
    category: "Fiction",
    price: 15.99,
    url: "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
  },
  {
    id: 5,
    bookName: "Book 5",
    category: "History",
    price: 45.99,
    url: "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
  },
];

export const getBookByID = (id) => {
  return bookscard.find((book) => book.id === id);
};

export const getBooksByCategory = (category) => {
  return bookscard.filter((book) => book.category === category);
};

export const getCategories = ()=> {
  const categoriesSet = new Set();
  bookscard.forEach((book) => categoriesSet.add(book.category));
  return Array.from(categoriesSet) ;
};

export const getBooksBySearchQuery = (searchQuery ) => {
  return bookscard.filter((book) => {
    return (
      book.bookName.includes(searchQuery) || book.category.includes(searchQuery)
    );
  });
};
