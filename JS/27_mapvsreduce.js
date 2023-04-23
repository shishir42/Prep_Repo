// map() and reduce() are two commonly used methods in JavaScript that operate on arrays. While both methods can be used to transform data in an array, they have different purposes and usage.

// map():

// The map() method creates a new array by executing a callback function on each element of the original array. It takes a callback function as its argument, which is executed once for each element in the array. The callback function returns a new value, which is added to the new array.

// Here's an example of using map() to create a new array of squared values from an array of numbers:

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function(number) {
  return number * number;
});

console.log(squared); // Output: [1, 4, 9, 16, 25]

// In the above example, the map() method creates a new array (squared) by executing the callback function on each element of the numbers array. The callback function multiplies each number by itself and returns the squared value, which is added to the squared array.

reduce():

// The reduce() method reduces an array to a single value by executing a callback function on each element of the array. It takes a callback function as its argument, which is executed once for each element in the array. The callback function returns a single value, which is used as the accumulator for the next iteration. The final value of the accumulator is returned as the result.

// Here's an example of using reduce() to calculate the sum of an array of numbers:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);

console.log(sum); // Output: 15

// In the above example, the reduce() method reduces the numbers array to a single value (sum) by executing the callback function on each element of the array. The callback function adds each number to the accumulator (0 in this case) and returns the new accumulator value, which is used in the next iteration. The final value of the accumulator is returned as the result.

// In summary, map() is used to transform an array into a new array by executing a callback function on each element, while reduce() is used to reduce an array to a single value by executing a callback function on each element and accumulating the result.