// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59


const marks =  101;

if (marks > 100 || marks < 0) {
    console.log('Invalid Marks');
} else if (marks <= 100 && marks >= 90) {
    console.log('Grade A');
} else if (marks >= 80) {
    console.log('Grade B');
} else if (marks >= 70) {
    console.log('Grade C');
} else if (marks >= 60) {
    console.log('Grade D');
} else {
    console.log('Grade F');
}


marks > 100 || marks < 0 
? console.log('Invalid Marks') 
: marks <= 100 && marks >= 90 
? console.log('Grade A') 
: marks >= 80 
? console.log('Grade B') 
: marks >= 70 
? console.log('Grade C') 
: marks >= 60 
? console.log('Grade D') 
: console.log('Grade F');