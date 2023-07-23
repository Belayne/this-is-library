

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

