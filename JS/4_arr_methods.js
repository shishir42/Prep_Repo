// slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end. 

// Slice method won't mutate the original array but it returns the subset as a new array.

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.Splice method modifies the original array and returns the deleted array.

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers4 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers5 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers6 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

// Slice	
// Doesn't modify the original array(immutable)	
// Returns the subset of original array	
// Used to pick the elements from array	

// Splice
// Modifies the original array(mutable)
// Returns the deleted elements as array
// Used to insert or delete elements to/from array

// How do you remove falsy values from an array
const myArray = [false, null, 1, 5, undefined];
myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);

// How do you get unique values of an array
console.log([...new Set([1, 2, 4, 4, 3])]); // [1, 2, 4, 3]

// What is the easiest way to convert an array to an object
var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}

// How do you create an array with some data
var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]

// How do you reverse an array without modifying original array?

// There are few solutions that won't mutate the original array. Let's take a look.

// Using slice and reverse methods: In this case, just invoke the slice() method on the array to create a shallow copy followed by reverse() method call on the copy.

const originalArray1 = [1, 2, 3, 4, 5];
const newArray = originalArray1.slice().reverse(); //Slice an array gives a new copy

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]
// Using spread and reverse methods: In this case, let's use the spread syntax (...) to create a copy of the array followed by reverse() method call on the copy.

const originalArray2 = [1, 2, 3, 4, 5];
const newArray = [...originalArray2].reverse();

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]
// Using reduce and spread methods: Here execute a reducer function on an array elements and append the accumulated array on right side using spread syntax

// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

//(previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// initialValue: number

const originalArray3 = [1, 2, 3, 4, 5];
const newArray = originalArray3.reduce((accumulator, value) => {
  return [value, ...accumulator];
}, []);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]
// Using reduceRight and spread methods: Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and append the accumulated array on left side using spread syntax

const originalArray4 = [1, 2, 3, 4, 5];
const newArray = originalArray4.reduceRight((accumulator, value) => {
  return [...accumulator, value];
}, []);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]
// Using reduceRight and push methods: Here execute a right reducer function(i.e. opposite direction of reduce method) on an array elements and push the iterated value to the accumulator

const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.reduceRight((accumulator, value) => {
  accumulator.push(value);
  return accumulator;
}, []);

console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(newArray); // [ 5, 4, 3, 2, 1]