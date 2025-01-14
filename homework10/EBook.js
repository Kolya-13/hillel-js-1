
const Book = require('./Book.js');




class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year); 
        this.format = format;
    }

 
    printInfo() {
        console.log(`Name: ${this.title}, Author: ${this.author}, Year of publication: ${this.year}, Format: ${this.format}`);
    }


    get format() {
        return this._format;
    }

    set format(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("The format must be a non-empty string");
        }
        this._format = value;
    }


    static printEBookInfo(book, format) {
        return `**** Name: ${book.title}, Format: ${format} ****`;
    }
}


module.exports = EBook;