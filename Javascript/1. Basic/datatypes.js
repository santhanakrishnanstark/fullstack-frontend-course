console.log('*********************** Data Types ************************');

/**
 * 
 * To findout the type of data in js by using 'typeof' keyword
 * 
 * 1. Number
 * 2. String
 * 3. boolean
 * 4. null (object)
 * 5. undefined
 * 6. object
 * 7. function
 * 
 * 
 * practice Link => https://www.w3schools.com/js/js_datatypes.asp
 * 
 */


// 1. Number

let x = 10;
console.log('Type of x value', x, 'is', typeof x);

// 2. String

let name = 'John';
console.log('Type of name value', name, 'is', typeof name);

// 3. boolean

let isEligible = true;
console.log('Type of eligibility value', isEligible, 'is', typeof isEligible);


// 4. null - it is not equal to 0, it is like empty or nothing

let age = null;

console.log('Type of Null value', typeof age)

// 5. undefined

let city;

console.log('Type of message value', typeof city)


// 6. Object / array

// 6.1 Array
let colors = ['red', 'blue', 25, true, 0, 'test'];

console.log('Type of colors Array[] => ',typeof colors)

// 6.2 Object eg: { key: value }

let John = {
    name: 'John',
    age: 25,
    city: 'New York'
};

console.log(colors)
console.log(John)

console.log('Type of John Object => ',typeof John)

console.log('Type of alert in js => ', typeof alert)