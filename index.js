const addBookBtn = document.querySelector('.add-btn');
const bookFormDiv = document.querySelector('.form-div');
const form = document.querySelector('form');

const addBookFormBtn = document.querySelector('#add-book');
const cancelFormBtn = document.querySelector('#cancel-form');

const formBookTitle = document.querySelector('#title');
const formBookAuthor = document.querySelector('#author');
const formBookPages = document.querySelector('#pages');
const formBookSummary = document.querySelector('#summary');
const formBookRead = document.querySelector('#read-yes');

let myLibrary = [];

function Book(title, author, pages, summary, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.summary = summary;
    this.read = read;
}

Book.prototype.readBook = () => this.read = true;
Book.prototype.unreadBook = () => this.read = false;

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
    addBookToLibrary(newBook);
    hideForm();
    form.reset();
    createBookElem(newBook);
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function createBookElem(newBook) {
    let newBookElem = document.createElement("article");
    let titleElem = document.createElement("h2");
    titleElem.textContent = newBook.title;
    newBookElem.appendChild()
}
