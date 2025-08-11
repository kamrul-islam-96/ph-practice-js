// 3. Checking Array Membership with ‘includes’
//     Instructions:
//     Create an array of books containing different book.
//     Use the includes method to check if the array contains a javascript book.
//     Print a message to the console indicating whether the element is present in the array or not.

const books = [
  "Python Programming",
  "Java Fundamentals",
  "JavaScript: The Definitive Guide",
  "C++ Primer",
  "Ruby on Rails Tutorial"
];

const hasJavaScriptBooks = books.includes("JavaScript: The Definitive Guide")

if(hasJavaScriptBooks) {
    console.log('The array contains the JavaScript Book');
} else {
    console.log('No JavaScript book found in the Array');
}