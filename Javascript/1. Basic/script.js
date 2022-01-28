console.log('script.js file loaded')

/**
 * 
 * 1. Variables 
 * 2. Data Types
 *  
 * 
 *  Variable - it is a named storage for data.
 * 
 *  Data types - each data stored in a variable have certain type.
 * 
 */


// Variable declaration by using the following keyword => (var, let, const)
// eg: var message = 'this is a message';  
// eg: var name;

let message = "This is my Variable Message!";

console.log(message);

let user = 'John';
const AGE = 25;
let userMessage = "Hello";

console.log(user +', '+ AGE, userMessage, 'all variables are printed!');

// Changing variable Values (possible only on var, let)

userMessage = "new User Message";

console.log(user +', '+ AGE, userMessage, 'all variables are printed!');


// Naming Convention rules

/**
 * 
 * for variable name
 * 
 * 1. The name must contain only letters, digits or the symbols $ and _
 * 
 * 2. The first character must not be in digits.
 * 
 * 3. variable name should be written as camelcase.
 * 
 * 4. for const variable all character should be in uppercase.
 * 
 */