// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

const count_zero = (binaryStr) => {
    let count = 0;
    for (let char of binaryStr) {
        if (char === '0') {
            count++;
        }
    }
    return count;
}

const binaryString = "1010010100";
const zeroCount = count_zero(binaryString);
console.log(zeroCount);
