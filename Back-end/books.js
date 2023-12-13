//import { bookid } from "../Front-end/admin/admin.js"
export let bookscard = [
  {
    id: 1,
    image:
      "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
    categori: "Study",
    BookName: "Mathmatics",
    desc: "description",
    rating: {
      stars: 4.5,
      count: 80,
    },
    priceCents: 1000,
    inStock: 10,
    sold: 2,
  },
  {
    id: 2,
    image:
      "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
    categori: "Study",
    BookName: "Physics",
    desc: "description",
    rating: {
      stars: 4.5,
      count: 80,
    },
    priceCents: 1000,
    instock: 5,
    sold: 1,
  },
  {
    id: 3,
    image:
      "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
    categori: "Science",
    BookName: "Chemistry",
    desc: "description",
    rating: {
      stars: 4.5,
      count: 80,
    },
    priceCents: 1000,
    instock: 5,
    sold: 1,
  },
  {
    id: 4,
    image:
      "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
    categori: "Study",
    BookName: "calculas",
    desc: "description",
    rating: {
      stars: 4.5,
      count: 80,
    },
    priceCents: 1000,
    instock: 5,
    sold: 1,
  },
];


export function deleteBookFromDatabase() {
  const button = document.querySelector(".js-delete-from-database-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-delete-from-database").value;
    console.log(bookid);
    const newBooksCard = [];
    bookscard.forEach((book) => {
      if (bookid != book.id) {
        newBooksCard.push(book);
      }
    });
    bookscard = newBooksCard;
    console.log(bookscard);
  });
}



export function addInStockQuantity() {
  const button = document.querySelector(".js-add-quantity-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-book-id-add-to-stock").value;
    console.log(bookid);
    const quantity=Number(document.querySelector(".js-add-quantity").value);
    bookscard.forEach((book) => {
      if (bookid == book.id) {
        book.inStock += quantity
        console.log(book.inStock)
      }
    });
  });
  
}


export function reduceInStockQuantity() {
  const button = document.querySelector(".js-take-from-stock-button");
  button.addEventListener("click", () => {
    const bookid = document.querySelector(".js-book-id-take-from-stock").value;
    console.log(bookid);
    const quantity=Number(document.querySelector(".js-reduce-quantity").value);
    bookscard.forEach((book) => {
      if (bookid == book.id) {
        book.inStock -= quantity
        console.log(book.inStock)
      }
    });
  });
  
}