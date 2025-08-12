// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:
// ['orange', 'yellow', 'green', 'blue', 'red']

const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reverseArr = []

for (let i = colors.length-1; i >= 0; i--) {
    reverseArr.push(colors[i])
}

console.log(reverseArr);




// using reverse method
const colors2 = ['red', 'blue', 'green', 'yellow', 'orange']
colors2.reverse()
console.log(colors2);