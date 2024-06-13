// Lesson 4: Assignments | JavaScript Objects

// 1. Exploring JavaScript Objects

// Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program 
// should allow users to add new books, search for books by title or author, and display information about the library's collection.

// Task 1: Create a class for the Book object with properties for title, author, and pages.
// Task 2: Implement a method within the Book object to display book information.


class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    } // Also added year to the Book object
    
    displayBook = () => {
        return `\n- ${this.title} by ${this.author}, ${this.pages} pages, ${this.year}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook = (book) => {
        this.books.push(book);
    }

    searchByTitle = (title) => {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    searchByAuthor = (author) => {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    displayAllBooks = () => {
        return this.books.map(book => book.displayBook()).join('');
    }
}

let library = new Library();

let book1 = new Book('Origin', 'Dan Brown', 461, 2017);
let book2 = new Book('Inferno', 'Dan Brown', 463, 2013);
let book3 = new Book('The Lost Symbol', 'Dan Brown', 509, 2009);
let book4 = new Book('The Da Vinci Code', 'Dan Brown', 489, 2003);
let book5 = new Book('Deception Point', 'Dan Brown', 556, 2001);
let book6 = new Book('Angels & Demons', 'Dan Brown', 736, 2000);
let book7 = new Book('Digital Fortress', 'Dan Brown', 510, 1998);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

console.log("Search by Title 'Inferno':", library.searchByTitle('Inferno'));
console.log("Search by Author 'Dan Brown':", library.searchByAuthor('Dan Brown'));
console.log("Books in the library:", library.displayAllBooks());


// Class Library using regular functions (remove /**/):

/*class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    } // Also added year to the Book object

    displayBook() {
        return `\n- ${this.title}" by ${this.author}, ${this.pages} pages, ${this.year}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    displayAllBooks() {
        return this.books.map(book => book.displayBook()).join('');
    }
}

let library = new Library();

let book1 = new Book('Origin', 'Dan Brown', 461, 2017);
let book2 = new Book('Inferno', 'Dan Brown', 463, 2013);
let book3 = new Book('The Lost Symbol', 'Dan Brown', 509, 2009);
let book4 = new Book('The Da Vinci Code', 'Dan Brown', 489, 2003);
let book5 = new Book('Deception Point', 'Dan Brown', 556, 2001);
let book6 = new Book('Angels & Demons', 'Dan Brown', 736, 2000);
let book7 = new Book('Digital Fortress', 'Dan Brown', 510, 1998);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);

console.log("Search by Title 'Inferno':", library.searchByTitle('Inferno'));
console.log("Search by Author 'Dan Brown':", library.searchByAuthor('Dan Brown'));
console.log("Books in the library:", library.displayAllBooks());*/


// 2. Exploring Objects and Math in JavaScript

// Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application. The program should 
// allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

// Task 1: Create a class for the Account object with properties for accountNumber, balance, and owner.

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. Allow users to pass a year 
// parameter to your method that represents the # of years the money has been invested. The output should be rounded up to the nearest 
// whole number (perhaps using the Math.ceil()). The formula for compound interest is...

// A=P(1+nr​)^nt

// Where:

// 𝐴 is the amount of money accumulated after n years, including interest.
// 𝑃 is the principal amount (the initial sum of money).
// 𝑟 is the annual interest rate (in decimal form).
// 𝑛 is the number of times interest is compounded per year (you can use 1 for this example).
// 𝑡 is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).
// Expected Outcomes:

// After completing this assignment, students should be able to create objects using classes and manipulate their properties and methods in JavaScript.
// Students should understand how to perform basic mathematical operations and calculations using the Math class.
// Students should be able to apply object-oriented principles and mathematical concepts to solve real-world problems, such as financial 
// calculations in a banking application.

class Account {
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    bankDeposits(deposit) {
        this.balance += deposit;
        console.log(`Your balance is $${this.balance}`);
        return this.balance;
    }

    bankWithdrawal(withdrawal) {
        if (this.balance >= withdrawal) {
            this.balance -= withdrawal;
            console.log(`Your balance after withdrawal is $${this.balance}`);
            return this.balance;
        } else {
            console.log('Error: insufficient funds');
            console.log(`Your current balance is $${this.balance}`);
            return this.balance; // Returning the unchanged balance
        }
    }

    calculateCompoundInterest(rate, years) {
        const P = this.balance;
        const r = rate / 100;
        const n = 1; // Interest compounded once per year
        const t = years;

        const A = P * Math.pow((1 + r / n), n * t);
        return Math.ceil(A);
    }
}

let account = new Account('857439781', 'Victor Bondaruk', 1000);

account.bankDeposits(800); // Deposited $800. New balance: $1800

account.bankWithdrawal(300); // Withdrew $300. New balance: $1500

// Calculating compound interest:
const interestRate = 5; // 5% annual interest rate
const years = 10; // Invested for 10 years
const amountWithCompoundInterest = account.calculateCompoundInterest(interestRate, years);
console.log(`Amount after ${years} years: $${amountWithCompoundInterest}`); // Amount after 10 years: $2444 (rounded up)