/*
Task 07: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  ];
  
  const extractTitles = (bookArray) => {
    const titlesArray = bookArray.map((book) => book.title);
    return titlesArray;
  };
  
  const titlesArray = extractTitles(books);
  console.log("Book Titles:", titlesArray);
  