const addBookBtn = document.querySelector('.add-btn');
const bookFormDiv = document.querySelector('.form-div');
const form = document.querySelector('form');
const bookElem = document.querySelector('.book');
const containerDiv = document.querySelector('.container');

const addBookFormBtn = document.querySelector('#add-book');
const cancelFormBtn = document.querySelector('#cancel-form');

const formBookTitle = document.querySelector('#title');
const formBookAuthor = document.querySelector('#author');
const formBookPages = document.querySelector('#pages');
const formBookSummary = document.querySelector('#summary');
const formBookRead = document.querySelector('#read-yes');


class Library {
    constructor(bookList = []){
        this.bookList = bookList;
    }

    addBookToLibrary(newBook) {
        this.bookList.push(newBook);
    }

    removeBookFromLibrary(bookID) {
       this.bookList = this.bookList.filter(book => book.dataID != bookID)
    }
}

const myLibrary = new Library();

class Book {
    constructor(title, author, pages, summary, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.summary = summary;
        this.read = read;
        this.dataID = this.title + this.author + this.pages;
    }

    readBook() {
        this.read = true;
    }
    
    unreadBook() {
        this.read = false;
    }
}

addBookBtn.addEventListener('click', showForm)
cancelFormBtn.addEventListener('click', hideForm)
form.addEventListener('submit', e => createBook(e))

function showForm() {
    bookFormDiv.classList.remove('hidden')
};

function hideForm() {
    bookFormDiv.classList.add('hidden')
};

function createBook(e) {
    e.preventDefault();
    let title = formBookTitle.value;
    let author = formBookAuthor.value;
    let pages = formBookPages.value;
    let summary = formBookSummary.value;
    let read = formBookRead.checked
    const newBook = new Book(title, author, pages, summary, read)
    myLibrary.addBookToLibrary(newBook);
    hideForm();
    form.reset();
    createBookElem(newBook);
}

function createBookElem(newBook) {
    let newBookElem = bookElem.cloneNode(true);
    newBookElem.querySelector('.author').textContent = newBook.author;
    newBookElem.querySelector('.book-title').textContent = newBook.title;
    newBookElem.querySelector('.read-state').textContent = (newBook.read)? "Yes": "No"
    newBookElem.querySelector('button').addEventListener("click", removeBook);
    newBookElem.classList.remove('hidden');
    newBookElem.setAttribute("data-id", newBook.dataID)
    newBookElem.querySelector('.read-state').addEventListener('click',toggleReadStatus)
    bookElem.insertAdjacentElement("beforebegin", newBookElem);
}

function removeBook() {
    myLibrary.removeBookFromLibrary(this.getAttribute('book-id'));
    containerDiv.removeChild(this.parentNode);
}

function toggleReadStatus() {
    let bookID = this.parentElement.getAttribute("data-id");
    let bookIndex = myLibrary.findIndex(book => book.dataID == bookID);
    myLibrary[bookIndex].readBook();
    this.textContent = "Read Status: read";
}
