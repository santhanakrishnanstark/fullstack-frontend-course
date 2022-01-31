// Logical Operators

/**
 * 
 * 1. && (AND)   // it return true only both the conditions are true
 * 2. || (OR)   // it return true if atleast any one condition is true
 * 3. ! (NOT)   // if it return true then false, if it return false means true.
 * 
 * 4. ?? (Nullish Coalescing)
 */

// 1. && (AND)   eg: (a == b) && (b > c) 

console.log('******* Logical Operators *******')

console.log(true && true);

let mark = 50;

if((mark > 40) && (mark > 50)) {
    console.log('Average Pass above 50')
} 

// 2. || (OR)   eg: (a == b) || (b > c)

if ((mark > 40) || (mark > 50)) {
    console.log('Pass ')
}


// 3. ! (NOT)   eg: !(a == b)  =>  !true  => false

console.log('!true',!true)
console.log('!mark > 70', !(mark > 70))



// 4. Nullish Coalescing Operator ??

// it treats null and undefined similarly.

let message = null;

// message = "This is my message";

message = message ?? 'No new message, showing default message';

console.log('Message:', message);

