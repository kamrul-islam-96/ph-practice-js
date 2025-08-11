// Loop through an object and print the key-value pairs with their types

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (key in myObject) {
    if(myObject.hasOwnProperty(key)) {
        console.log(`key: ${key} | Type: ${typeof myObject[key]}`);
    }
}