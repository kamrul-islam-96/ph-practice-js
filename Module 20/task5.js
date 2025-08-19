// Generate a random number between 10 to 20.

const GenerateRandomNumber = () => {
    const min = 10;
    const max = 20;
    
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

console.log(GenerateRandomNumber());