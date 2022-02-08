/**
 * Switch statement 
 * 
 * - it can replace multiple if statements.
 * - it gives a more descriptive way to compare a value with multiple variants.
 * 
 * syntax
 * 
 *  switch(x) {
 *      case 'value1':
 *          // statement of case 1
 *      break;
 *      case 'value2':
 *          // statement of case 2
 *      break;
 * 
 *      default:
 *          // it is like else block
 *      break;
 *  }
 */

let month = prompt('Enter Month: ');

// if(month == 'September' || month == 'October' || month == 'November') {
//     alert('the season is Autumn.')
// }
// if(month == 'December' || month == 'January' || month == 'February') {
//     alert('the season is Winter.')
// }
// if(month == 'March' || month == 'April' || month == 'May') {
//     alert('the season is Spring.')
// }
// if(month == 'June' || month == 'July' || month == 'August') {
//     alert('the season is Summer.')
// }


// alternate of if

switch (month) {
    case 'September':
    case 'October':
    case 'November':
        alert('the season is Autumn.');
    break;
    case 'December':
    case 'January':
    case 'February':
        alert('the season is Winter.');
    break;
    case 'March':
    case 'April':
    case 'May':
        alert('the season is Spring.');
    break;
    case 'June':
    case 'July':
    case 'August':
        alert('the season is Summer.');
    break;
    default:
        alert('the is no season like that!');
    break;
}


// Task

/**
 * 
 * 1. Get weather input from user prompt
 * 2. 
 *  > if the weather is 
 *  > rainy => print 'You need a rain coat.'
 *  > cloudy => print 'It might be cold, you need a jacket.'
 *  > sunny => print 'Go out freely.'
 *  > any other values => print 'No need for rain coat.'
 * 
 * 
 */ 