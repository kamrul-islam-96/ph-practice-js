// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

const number = (num) => {
    if(num % 2 === 0) {
        const divide = num / 2;
        return divide;
    } else {
        const multiply = num * 2;
        return multiply;
    }
}

const result = number(100);
console.log(result);