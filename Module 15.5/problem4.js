// 4. Checking if it's an Array
//     Instructions:
//     Create different variables, each containing either an array or a non-array value.
//     Now use isArray to check if each variable is an array.
//     Print a message to the console indicating whether each variable is an array or not.


const books = ["Python Programming", "JavaScript: The Definitive Guide", "C++ Primer"];
const number = 42;
const text = "Hello, World!";
const object = { title: "JavaScript Guide", pages: 300 };
const emptyArray = [];


console.log(`books is an array: ${Array.isArray(books)}`);
console.log(`number is an array: ${Array.isArray(number)}`);
console.log(`text is an array: ${Array.isArray(text)}`);
console.log(`object is an array: ${Array.isArray(object)}`);
console.log(`emptyArray is an array: ${Array.isArray(emptyArray)}`);