// Task
// use for loop to iterate from 0 to 100 and print sum of all numbers.

// create for loop to iterate 0 to 100

let totalSum = 0;

for(let i=0; i<=100; i++) {
    // add the current i value to totalSum
    totalSum = totalSum + i;
    // totalSum += i; shorthand syntax

}

console.log('Sum of Numbers: ', totalSum);