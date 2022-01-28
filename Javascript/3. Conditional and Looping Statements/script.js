/**
 * 
 * Conditional Statements: if  or  conditional Operator ( ? )
 * 
 * It is used for decision making in our program logic
 * 
 * 1. if Statement 
 * 
 *      if (condition) {
 * 
 *      }  
 * 
 * 2. if else Statement 
 * 
 *      if (condition) {
 * 
 *      } else {
 * 
 *      }    
 * 
 * 3. else if Statement 
 * 
 *      if (condition) {
 * 
 *      } else if (condition) {
 * 
 *      } else {
 * 
 *      }
 * 
 */


console.log('****** Conditional Statement *********')

let mark = 50;
let grade;

if (mark >= 70) {
    grade = 'OutStanding';
}else if(mark > 40) {
    grade = 'Average Pass';
}else {
    grade = 'Fail';
}

console.log('Your mark is', mark, 'and you are '+grade+' ! ');


