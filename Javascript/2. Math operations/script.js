/**
 * 
 * Basic Math operations
 * 
 * Addition =>  +
 * Subtraction => -
 * Multiplication => *
 * Division => /
 * Remainder => %
 * Exponentiation => **
 * 
 */

let a = 5, b=5;

console.log('a = 5, b = 5')
console.log('Addition: ', a+b)
console.log('Subtraction: ', a-b)
console.log('Multiplication: ', a*b)
console.log('Division: ', a/b)
console.log('Remainder: ', a%b)
console.log('Exponentiation: ', a**b)

// String Concatenation with + operator

let myString = "My" + "String";
console.log(myString)

console.log('1'+ 2) // 12
console.log(2 + '1') // 21
console.log(2 + 2 + '1') // 41

console.log(6 - '2'); // 4
console.log('6' - 2); // 4

console.log(+true) // 1
console.log(+false) // 0

console.log(+'5'); //5


//  Modify in place
console.log('update variable values ')

let n = 2;

// n = n + 5;  // 2+5 = 7
n += 5;  // shorthand for the above one   eg: n += 5  ==> n = n+5;

console.log(n) // 7


// Increment/ Decrement Operator (++) (--)

/**
 * ++pre Increment / post increment++
 * --pre decrement / post decrement--
 */

console.log('************ Increment / Decrement Operator ***********')

let counter = 2;
console.log('counter initial value: ', counter);

counter++;

console.log('counter value: ', counter);
console.log('counter value: ', ++counter);

// inc/dec with specified value eg: n+2;

console.log('counter value: ', counter+5);