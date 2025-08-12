
// তোমাকে ১ম sample output এর format এ output return করতে হবে।
// Bonus: যদি object এর কোনো property missing থাকে সেক্ষেত্রে সেই অংশটুকু double underscore দিয়ে replace হবে। (২য় output এর format এ )


const object = {street: 10,society: "Earth Perfect"};

const findAddressArrow = (obj) => {
    const street = obj.street ?? "__";
    const house = obj.house ?? "__";
    const society = obj.society ?? "__";

    return `${street}, ${house}, ${society}`;
}

console.log(findAddressArrow(object));
