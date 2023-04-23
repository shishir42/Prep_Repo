// In JavaScript, both map() and forEach() are methods used to iterate over arrays. However, they differ in how they handle and return the results of the iteration.

// forEach() is a method that allows you to iterate over the elements of an array and execute a callback function on each element. The forEach() method does not create a new array, but it simply executes a function on each element of the array. The forEach() method returns undefined, and it is commonly used when you want to perform a side effect for each element in an array, such as updating a DOM element or logging something to the console.

const arr = [1, 2, 3, 4];
arr.forEach(element => console.log(element));

// On the other hand, the map() method allows you to create a new array by transforming each element of the original array based on a function that you provide. The map() method returns a new array with the same length as the original array, where each element has been transformed based on the function provided. The map() method does not modify the original array.

const arr = [1, 2, 3, 4];
const mappedArr = arr.map(element => element * 2);
console.log(mappedArr); // Output: [2, 4, 6, 8]

// To summarize, the main differences between map() and forEach() in JavaScript are:

// forEach() executes a callback function on each element of an array, while map() transforms each element of an array based on a function and returns a new array.
// forEach() does not modify the original array, while map() returns a new array with the transformed elements.
// forEach() returns undefined, while map() returns a new array.

// The map() method in JavaScript does not modify the original array, but it returns a new array with the transformed elements based on the function provided. The original array remains unchanged.

// This behavior of map() is by design, as one of the main advantages of map() is that it creates a new array with the same number of elements as the original array, but with each element transformed based on the function provided. This is useful for creating a new array that has been modified in a specific way without changing the original array.

// If you want to modify the original array itself, you can use other array methods like forEach(), filter(), reduce(), and sort(). These methods do not return a new array but modify the original array directly. For example, the forEach() method allows you to iterate over each element of an array and modify it directly:

const arr = [1, 2, 3, 4];
arr.forEach((element, index, array) => {
  array[index] = element * 2;
});
console.log(arr); // Output: [2, 4, 6, 8]

// In this example, the forEach() method modifies the original array directly by multiplying each element by 2.

