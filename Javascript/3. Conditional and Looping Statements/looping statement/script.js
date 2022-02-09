/**
 * 
 * Looping statements
 * 
 * >> it used to repeat some actions again and again.
 * >> for eg: printing numbers just running the same code again and again from 1 to 10.
 * 
 * 1. while
 * 2. do... while
 * 3. for (most common usable)
 * 
 * keywords
 * 
 * 1. break;
 * 2. continue;
 * 
 */

// 1. while loop

/**
 * syntax:
 * 
 * while(condition) {
 *   // code
 * 
 *   // inc/dec operation
 * }
 * 
 */

let i = 0;  // initilization

while(i <= 10) {   // condition
    console.log(i);
    i++;  // inc/dec part
}

// 2. do while

/**
 * syntax:
 * 
 * do {
 *  // code
 * // inc/dec code
 * } while(condition);
 * 
 */

let a = 11;

do {
    console.log('do while', a);
    a++;

} while(a <= 10);


// 3. for loop

for (let i = 10; i >= 0; i--) {
    console.log('For ', i)
}

// break;

for (let i = 10; i >= 0; i--) {
    if (i < 5) {
        break;
    }
    console.log('break using for loop: ', i)
}

console.log('break loop exited')

// continue;

for (let i = 10; i >= 0; i--) {
    if (i == 5) {
        continue;
    }
    console.log('continue using for loop: ', i)
}

console.log('continue loop exited');


// Task

/**
 * 0. get user input for to print the loop from prompt and print the number upto user specified/given.
 * 1. use for loop to iterate from 0 to 100 and print only even numbers.
 * 2. use for loop to iterate from 0 to 100 and print only odd numbers.
 * 3. use for loop to iterate from 0 to 100 and print sum of all numbers.
 * 
 */