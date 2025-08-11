// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

let i = 1;

while ( i <= 60) {
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    i++;
}

// Find all the odd numbers from 61 to 100.

let a = 61;

while (a <= 100) {
    if(a % 2 !== 0) {
        console.log(i);
    }
    
    a++;
}


// Find all the even numbers from 78 to 98.

let b = 78;

while ( b <= 98) {
    if(b % 2 === 0) {
        console.log(i);
    }

    b++;
}

// Display sum of all the odd numbers from 81 to 131.

let Sum = 0;
let c = 81;

while ( c <= 131) {
    if (c % 2 !== 0) {
        Sum += i;
    }

    c++;

    console.log(`The number is ${i} Sum is ${Sum}`);
}


// Display sum of all the even numbers from 206 to 311.

let sum = 0;
let d = 206;

while ( d <= 311) {
    if (d % 2 === 0) {
        sum += d;
    }

    d++;

    console.log(`The number is ${d} Sum is ${sum}`);
}

// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

let e = 1;

while(e <= 10) {
    console.log(`5 * ${e} = ${5 * e}`);

    e++;
}


// Implement a countdown timer that counts down from 21 to 15.

let f = 21;

while(f >= 15) {
    console.log(f);

    f--;
}

