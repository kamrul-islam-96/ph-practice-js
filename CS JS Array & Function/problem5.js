// তুমি দোকানে একটা চিপ্স কিনতে গেলা কিছু খুচরা টাকার নোট নিয়ে। একটা canPay() নামে function বানাও যেটা ২টা ইনপুট নেইঃ একটা array, এবং আরেকটা number।

// Array এর প্রত্যেক টা element তোমার খুচরা টাকা বুঝাই 
// 1 taka
// 2 taka
// 5 taka

// second input টা বুঝাই চিপ্স এর দাম।
// Task:
// যদি খুচরা টাকা গুলো যোগ করে চিপ্স এর দাম বা তার বেশি হয় তাহলে true রিটার্ন করবে 
// আর যদি নোটগুলোর যোগফল চিপ্স এর দামের চেয়ে কম হয় সেক্ষেত্রে  false রিটার্ন করবে।
// Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কিনা চেক করবে। empty  অ্যারে হলে মিনিংফুল মেসেজ রিটার্ন করে দিবে। 



function canPay(changeArray, totalDue) {
     if (coins.length === 0) {
        return "You have no money to pay!";
    }

    const total = changeArray.reduce((sum, coin) => sum + coin, 0)

    return total >= totalDue;

}



console.log(canPay([1,5,5],10));