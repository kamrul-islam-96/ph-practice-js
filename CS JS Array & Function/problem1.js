// input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে।
// Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে। 



const cubeNumber1 = (num) => {
    const number = num * num * num
    console.log(number);
}

cubeNumber1(2)


const cubeNumber2 = (num) => {
    if(typeof num !== "number") {
        return('please give us a valid input')
    }
    
    return num ** 3;
}

const result = cubeNumber2('d')
console.log(result);