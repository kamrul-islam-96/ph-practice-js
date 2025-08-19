// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


const findLongestWord = (sentence) => {
    const words = sentence.split(" "); 
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


const str = "I am learning Programming todddddddddd become a programmer";
console.log(findLongestWord(str)); 
