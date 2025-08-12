// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
// Input: [1, 2, 3]

// Expected Output:
// Original: [1, 2, 3] Copy: [99, 2, 3]

const Original = [1, 2, 3];
const Copy = []

for (let i = 0; i < Original.length; i++) {
    Copy[i] = Original[i];
}

Copy[0] = 99;

console.log(`Original : ${Original}`);
console.log(`Copy : ${Copy}`);





// using spred oparator
const Original2 = [1, 2, 3];

const Copy2 = [...Original];
Copy[0] = 99;

console.log(`Original : ${Original2}`);
console.log(`Copy : ${Copy2}`);