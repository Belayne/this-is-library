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

    this.readBook = () => {
        this.read = true;
    }

    this.unreadBook = () => {
        this.read = false;
    }
}

addBookBtn.addEventListener('click', showForm)
cancelFormBtn.addEventListener('click', hideForm)
addBookFormBtn.addEventListener('click', createBook);

function showForm() {
    bookFormDiv.classList.remove('hidden')
};

function hideForm() {
    bookFormDiv.classList.add('hidden')
};

function createBook() {
    let title = formBookTitle.value;
    let author = formBookAuthor.value;
    let pages = formBookPages.value;
    let summary = formBookSummary.value;
    let read = formBookRead.checked
    const newBook = new Book(title, author, pages, summary, read)
    addBook(newBook)
}

function addBook(newBook) {
    console.log(newBook);
    myLibrary.push(newBook);
    hideForm();
    form.reset();
}
