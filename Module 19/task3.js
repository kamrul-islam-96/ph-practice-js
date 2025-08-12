// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;

const make_avg = (arr, size) => {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum = sum + arr[i]
    }

    return sum / size;
}

const average = make_avg(numbers, size);
console.log(average);