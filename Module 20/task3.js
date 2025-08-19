// Write a function to count the number of vowels in a string.

const countVowels = (str) => {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const result = countVowels('This is Kamrul')
console.log(result);