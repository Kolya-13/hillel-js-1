

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

   
    printInfo() {
        console.log(`Name: ${this.title}, Author: ${this.author}, Year of publication: ${this.year}`);
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("The name must be a non-empty string");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must be a non-empty string");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("The year of publication must be a positive number");
        }
        this._year = value;
    }

  
    static findOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}


module.exports = Book;

