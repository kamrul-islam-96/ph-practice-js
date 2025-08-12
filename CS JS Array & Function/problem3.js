// যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে।
// যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবেঃ “equal”
//  Bonus: যদি অ্যারের যেকোনো একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি  রিটার্ন  করবে “Invalid Input”
7

const sortMaker = (arr) => {
    if (arr.length !== 2) return "Please provide exactly two elements";

    const [a, b] = arr;

    if(a < 0 || b < 0) {
        return 'Invalid Input'
    }

    if(a === b) return 'equal'
    
    return arr.sort((a, b) => a -b)
}

console.log(sortMaker([5, 2]));