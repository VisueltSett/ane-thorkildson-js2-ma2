import {books} from "../data/books.js";


export function createBookList() {
    const bookList = document.querySelector("ul")

    bookList.innerHTML = "";

    books.forEach(function (book) {

    let bookTitle = "Unknown title";
    let bookIsbn = "Unknown";

    if(book.title){
        bookTitle = book.title;
    }
    if (book.isbn){
        bookIsbn = book.isbn;
    }

    bookList.innerHTML += `<li>
                                <div>Title: <span><h3> ${bookTitle}</h3></span></div>
                                <p>ISBN: <span>${bookIsbn}</span></p>
                                <i class="far fa-trash-alt" data-item="${book}"></i>
                            </li>`;
    });

}