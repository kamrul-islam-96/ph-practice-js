// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk


const age = 6;
const regularFare = 800;
const Students = false;

if (Students) {
    console.log(`after 50 % discount ticket price is ${regularFare - (regularFare * 50 / 100)}`);
} else if (age < 10) {
    console.log('Ticket Free');
} else if (age >= 60) {
    console.log(`after 15 % discount ticket price is ${regularFare - (regularFare * 15 / 100)}`);
} else {
    console.log(regularFare);
}


Students ? console.log(`after 50 % discount ticket price is ${regularFare - (regularFare * 50 / 100)}`) : age < 10 ? console.log('Ticket Free') : age >= 60 ? console.log(`after 15 % discount ticket price is ${regularFare - (regularFare * 15 / 100)}`) : console.log(regularFare);