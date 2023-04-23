// In JavaScript, map and filter are two built-in array methods that can be used to transform and filter arrays respectively.

// The map method creates a new array by calling a function on each element of the original array and returning a new value for each element. For example:

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// In the example above, we use the map method to create a new array doubledNumbers that contains each element of the numbers array multiplied by 2.

// The filter method creates a new array by filtering out elements of the original array that don't meet a certain condition. For example:

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]


// In the example above, we use the filter method to create a new array evenNumbers that contains only the even numbers from the numbers array.

// It's worth noting that both map and filter do not modify the original array, but instead return a new array. Also, both methods accept a function as an argument that can be used to transform or filter the elements of the array. The function can take up to three arguments: the current element of the array, its index, and the array itself. However, only the first argument (the current element) is required.

