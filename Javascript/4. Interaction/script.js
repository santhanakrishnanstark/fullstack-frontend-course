// Interaction - JS Functions

/**
 * 
 * 1. alert
 * 
 * 2. prompt
 * 
 * 3. confirm
 * 
 */


// 1. alert - it shows a message and waits for the user to press OK.

alert('Welcome');


// 2. prompt = it accept two arguments, (title, default value).

let user = prompt('Hi, What is your name ?', 'user');

console.log(' USER ',user);

let age = prompt('Hi, What is your age ?');

// 3. confirm, - it shows a modal window with question and two buttons, ok and cancel.

result = confirm('Are you sure your age is '+age+'?');

if(result) {
    console.log('Your age is verifed by you as ', age); 
}else {
    console.log('Age is not verfied!')
}
