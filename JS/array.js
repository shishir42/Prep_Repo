// JavaScript provides a variety of built-in methods that can be used with arrays to manipulate, access, and modify their elements. Here is an overview of some of the most commonly used array methods:

// 1. concat() - This method joins two or more arrays and returns a new array that contains all the elements from the original arrays.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]


// 2.filter() - This method creates a new array with all elements that pass a test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers); // Output: [4, 5]

// 3. map() - This method creates a new array with the results of calling a provided function on every element in the original array.

const numbers1 = [1, 2, 3];
const doubledNumbers = numbers1.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

// 4. slice() - This method returns a shallow copy of a portion of an array into a new array.

const fruits = ['apple', 'banana', 'cherry', 'durian'];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']


// 5. splice() - This method changes the contents of an array by removing or replacing existing elements and/or adding new elements.

const fruits1 = ['apple', 'banana', 'cherry'];
fruits1.splice(1, 1, 'orange', 'pear');
console.log(fruits); // Output: ['apple', 'orange', 'pear', 'cherry']

// 6. find() - This method returns the value of the first element in an array that satisfies the provided testing function.

const numbers2 = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers2.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// 7. forEach() - This method executes a provided function once for each array element.

const numbers3 = [1, 2, 3];
numbers3.forEach(num => console.log(num));
// Output:
// 1
// 2
// 3

// 8. indexOf() - This method returns the first index at which a given element can be found in an array, or -1 if it is not present.

const fruits3 = ['apple', 'banana', 'cherry'];
const indexOfBanana = fruits3.indexOf('banana');
console.log(indexOfBanana); // Output: 1

//9. join() - This method creates and returns a new string by concatenating all elements in an array, separated by a specified separator string.

const fruits4 = ['apple', 'banana', 'cherry'];
const joinedFruits = fruits4.join(', ');
console.log(joinedFruits); // Output: 'apple, banana, cherry'


//10. reduce() - This method applies a function against an accumulator and each element in an array to reduce it to a single value.

let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers4.reduce(function(total, currentValue) {
  return total + currentValue;
}, 0);

console.log(sum); // Output: 15

// 11. findIndex() - This method returns the index of the first element in an array that pass the test in a testing function.

let numbers5 = [1, 3, 5, 4, 7, 9, 2, 8];
let evenIndex = numbers5.findIndex(function(number) {
  return number % 2 === 0;
});

console.log(evenIndex); // Output: 3

//findIndex, on the other hand, is a method introduced in ES6 that takes a function as an argument and returns the index of the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, it returns -1. Here's an example:

const arr11 = [{name: 'John', age: 25}, {name: 'Jane', age: 30}, {name: 'Bob', age: 35}];
const index = arr11.findIndex(item => item.name === 'Jane'); // returns 1

const nonExistentIndex = arr11.findIndex(item => item.name === 'Alice'); // returns -1



// 12.fill() - This method fills the elements in an array with a static value and returns the modified array.
const arr = new Array(3)
console.log(arr); //[empty, empty, empty]
console.log(arr.fill(10)); //[10, 10, 10]

// 13. shift() - This method removes the first element from an array and returns that element.
const f = ["Apple", "mango"];
f.shift();
console.log(f); //["mango"]

// 14. unshift() - This method adds one or more elements to the beginning of an array and returns the new length of the array.
const f1 = ["Apple", "mango"];
console.log(f1.unshift("Banana")); //3
console.log(f1) // ["Banana", "Apple", "mango"]

// 15. join() - This method returns a new string by concatenating all of the array’s elements separated by the specified separator
const arr5 = ['a', 'b', 'c'];
console.log(arr.join('')) //abc

// 16. every() - This method checks every element in the array that passes the condition, returning true or false as appropriate.

// The every() method in JavaScript is used to check whether all elements in an array satisfy a given condition. It takes a function as an argument, which is applied to each element in the array until the function returns false, indicating that an element does not satisfy the condition.

// Here's an example of how to use the every() method to check if all elements in an array are positive:

let numbers6 = [1, 3, 5, 7, 9];
let allPositive = numbers6.every(function(number) {
  return number > 0;
});

console.log(allPositive); // Output: true

// In the example above, the every() method is applied to the numbers array. The function passed to every() takes one parameter, number, which represents each element in the array. The function checks whether the number is greater than 0. If all elements satisfy this condition, the function returns true, and the every() method returns true as well. In this case, all elements in the array are positive, so the output is true. If at least one element does not satisfy the condition, the function returns false, and the every() method returns false as well.
let numbers7 = [2, 4, 6, 7, 8];
let allEven = numbers7.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: false

// In this example, the every() method returns false because not all elements in the array are even. The function passed to every() checks whether the number is even by checking if its remainder when divided by 2 is zero. When the first odd number is encountered, the function returns false, and the every() method returns false as well.

// 17. some() - This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

// The some() method in JavaScript is used to check whether at least one element in an array satisfies a given condition. It takes a function as an argument, which is applied to each element in the array until the function returns true, indicating that an element satisfies the condition.

let numbers8 = [1, 3, 5, 7, 8];
let hasEven = numbers8.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEven); // Output: true

let numbers9 = [1, 3, 5, 7, 9];
let hasNegative = numbers9.some(function(number) {
  return number < 0;
});

console.log(hasNegative); // Output: false


// https://www.javascripttutorial.net/javascript-string-methods/