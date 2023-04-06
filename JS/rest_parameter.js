// In JavaScript, the rest parameter syntax allows you to represent an indefinite number of arguments as an array. The rest parameter is denoted by three dots (...) followed by a parameter name. Here's an example:

function sum(...numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum()); // Output: 0

  
//   In this example, the sum function accepts an indefinite number of arguments using the rest parameter syntax (...numbers). The numbers parameter is an array that contains all the arguments passed to the function. The function uses a for loop to iterate over the array and sum up all the numbers.

// When you call the sum function with three numbers (sum(1, 2, 3)), the numbers parameter becomes [1, 2, 3], and the function returns the sum of those numbers (6). Similarly, when you call the sum function with five numbers (sum(1, 2, 3, 4, 5)), the numbers parameter becomes [1, 2, 3, 4, 5], and the function returns the sum of those numbers (15). If you call the sum function without any arguments (sum()), the numbers parameter becomes an empty array, and the function returns 0.

// The rest parameter syntax is useful when you want to accept an indefinite number of arguments and treat them as an array. You can use the array methods like map, filter, reduce, etc. to process the arguments in a more flexible way.

// Note: Rest parameter is added in ES2015 or ES6


// What happens if you do not use rest parameter as a last argument
// The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array. For example, if you define a function like below it doesn’t make any sense and will throw an error.

function someFunc(a,…b,c){
  //You code goes here
  return;
  }



