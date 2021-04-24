import {createBookList} from './components/createBookList.js';
import {books} from "./data/books.js";


createBookList();

const deleteButtons = document.querySelectorAll("li i");

deleteButtons.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", bookToDelete);
});


    function bookToDelete(){

    const deleteThisBook = event.target.dataset.book;

    const newBookList = books.filter(function (bookToBeDeleted){
        if(deleteThisBook !== bookToBeDeleted){
            return true;
        }
    });

    books = newBookList;

    createBookList();

    if (!newBookList.length) {
        booklist.innerHTML = "There are no more books in the list"
    }

}




