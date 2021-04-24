// import {createBookList} from './components/createBookList.js';
// import deleteButton from './components/deleteButton.js';
import {books} from "./data/books.js";

function createBookList() {
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
                                <i class="far fa-trash-alt" data-book="${book}"></i>
                            </li>`;
    });

    const deleteButtons = document.querySelectorAll("li i");

    deleteButtons.forEach(function (deleteBtn) {
        deleteBtn.addEventListener("click", deleteBook);
    });

}
createBookList();

    function deleteBook(){

    const deleteThisBook = this.dataset.book;

    const newBookList = books.filter(function(bookToBeDeleted){
        if(deleteThisBook !== bookToBeDeleted){
            return true;
        }
    });

    books = newBookList;

    createBookList();

    }



