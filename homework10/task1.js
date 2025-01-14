const Book = require('./Book.js');
const EBook = require('./EBook.js');


const book1 = new Book("Harry Potter", " J. K. Rowling", 1997);
const book2 = new Book("The Little Prince", "Antoine de Saint-Exupery", 1943);
const book3 = new Book("1984", "George Orwell", 1949);


book1.printInfo();
book2.printInfo();
book3.printInfo();


const ebook1 = new EBook("JavaScript for beginners", "John Doe", 2023, "PDF");
ebook1.printInfo();


const books = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();


const ebookInfo = EBook.printEBookInfo(ebook1, ebook1.format);
console.log(ebookInfo);