//import { bookid } from "../Front-end/admin/admin.js"
export let bookscard=[{
    id:1,
    image:'src/math.jpeg',
    categori:"Study",
    BookName:"Mathmatics",
    desc:"description",
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000,
    instock:10,
    sold:2,
},{
    id:2,
    image:"src/physics.jpeg",
    categori:"Study",
    BookName:"Physics",
    desc:"description",
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000,
    instock:5,
    sold:1,
},{
    id:3,
    image:"src/chemistry.jpeg",
    categori:"Study",
    BookName:"Chemistry",
    desc:"description",
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000,
    instock:5,
    sold:1,
},{
    id:4,
    image:"src/calc.jpeg",
    categori:"Study",
    BookName:"calculas",
    desc:"description",
    rating:
    {
        stars:4.5,
        count:80
    },
    priceCents:1000,
    instock:5,
    sold:1,
}]


/*export function deleteBookFromDatabase(){
const button =document.querySelector('.js-delete-from-database-button')
button.addEventListener('click',() => {
console.log(bookid)   
const newBooksCard=[]      
bookscard.forEach(book => {
    if(bookid != book.id)
    {
        
        newBooksCard.push(book)
    }
})
bookscard=newBooksCard;
console.log(bookscard)
})

}*/
export function deleteBookFromDatabase(){
const button =document.querySelector('.js-delete-from-database-button')
button.addEventListener('click', () => {
    const bookid =document.querySelector('.js-delete-from-database').value
    console.log(bookid)
    const newBooksCard=[];
    bookscard.forEach(book => {
        if(bookid!=book.id)
        {
            newBooksCard.push(book)
        }
    })
    bookscard=newBooksCard
    console.log(bookscard)
})
}