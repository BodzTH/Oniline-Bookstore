//import { bookid } from "../Front-end/admin/admin.js"

export let bookscard=JSON.parse(localStorage.getItem("books"));
if(!bookscard)
{
  bookscard = [
    {
      id: 1,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
      altImage:"alt",  
      categori: "Study",
      BookName: "Mathmatics",
      desc: "description",
      author:"name of the ather",
      publisher:"puplisher",
      priceCents: 1000,
      inStock: 10,
      sold: 2,
    },
    {
      id: 2,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
      altImage:"alt",
      categori: "Study",
      BookName: "Physics",
      desc: "description",
      author:"name of the ather",
      publisher:"puplisher",
      priceCents: 1000,
      inStock: 5,
      sold: 1,
    },
    {
      id: 3,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
      altImage:"alt",
      categori: "Science",
      BookName: "Chemistry",
      desc: "description",
      author:"name of the ather",
      publisher:"puplisher",
      priceCents: 1000,
      inStock: 5,
      sold: 1,
    },
    {
      id: 4,
      image:
        "https://diwanegypt.com/wp-content/uploads/2022/06/9781783350827.jpg",
      altImage:"alt",  
      categori: "Study",
      BookName: "calculas",
      desc: "description",
      author:"name of the ather",
      publisher:"puplisher",
      priceCents: 1000,
      inStock: 5,
      sold: 1,
    },
  ];
}


export function saveBooksToStorage() {
  localStorage.setItem("books", JSON.stringify(bookscard));
}

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
    saveBooksToStorage();
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
        saveBooksToStorage();
        console.log(bookscard)
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
        saveBooksToStorage();
        console.log(bookscard)
      }
    });
  });
  
}


export function addBook()
{
  const newBook={};
  const button=document.querySelector('.js-add-book-button')
  button.addEventListener('click',()=> {
    const bookid=Number(document.querySelector('.js-book-id-add-book').value)
    const bookImage=document.querySelector('.js-image-path-add-book').value
    const altImage=document.querySelector('.js-alt-image-add-book').value
    const bookCategory=document.querySelector('.js-book-category-add-book').value
    const bookName=document.querySelector('.js-book-name-add-book').value
    const bookDescribtion=document.querySelector('.js-book-describtion-add-book').value
    const bookAthor=document.querySelector('.js-athor-add-book').value
    const bookPublischer=document.querySelector('.js-publisher-add-book').value
    const bookPrice=Number(document.querySelector('.js-price-add-book').value)
    const inStock=Number(document.querySelector('.js-in-stock-add-book').value)
    newBook.id=bookid
    newBook.image=bookImage
    newBook.altImage=altImage
    newBook.categori=bookCategory
    newBook.BookName=bookName
    newBook.desc=bookDescribtion
    newBook.author=bookAthor
    newBook.publisher=bookPublischer
    newBook.priceCents=bookPrice
    newBook.inStock=inStock
    newBook.sold=0
    bookscard.push(newBook)
    saveBooksToStorage();
    console.log(bookscard)
  })
}