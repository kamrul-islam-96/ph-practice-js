// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5

// output: 2


// sample-input:
// numbers = [5,6,11,12,98, 5]
// find: 25

// output: 0

const numbers = [5,6,11,12,98, 5];
const targetNumber = 25;

const countOccurrences = (arr, target) => {
    let count = 0;

    for (let num of arr) {
        if (num === target) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences(numbers, targetNumber));




// using filter
const countOccurrences2 = (arr, target) => arr.filter(num => num === target).length;
console.log(countOccurrences2(numbers, targetNumber));