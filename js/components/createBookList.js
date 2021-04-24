// import {books} from "../data/books.js";
// import deleteButton from "./deleteButton.js";


// export function createBookList() {
//     const booksList = document.querySelector("ul")

//     booksList.innerHTML = "";

//     books.forEach(function (book) {

//     let bookTitle = "Unknown title";
//     let bookIsbn = "Unknown";

//     if(book.title){
//         bookTitle = book.title;
//     }
//     if (book.isbn){
//         bookIsbn = book.isbn;
//     }

//     booksList.innerHTML += `<li>
//                                 <div>Title: <span><h3> ${bookTitle}</h3></span></div>
//                                 <p>ISBN: <span>${bookIsbn}</span></p>
//                                 <i class="far fa-trash-alt" data-book="${book}"></i>
//                             </li>`;
//     });

//     const deleteBtn = document.querySelectorAll("li i");

//     deleteBtn.forEach(function(trashCan) {
//         trashCan.addEventListener("click", deleteBook);
//     });

// }