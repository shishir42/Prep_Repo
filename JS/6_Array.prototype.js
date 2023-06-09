// Here are the implementations of the map, reduce, filter, and sort functions for the Array prototype in JavaScript:

// map(): The map() function applies a given function to each element of an array and returns a new array with the results.

Array.prototype.map = function(callback) {
    const newArray = [];
    for(let i=0; i<this.length; i++) {
      // (callbackfn: (value: any, index: number, array: any[])
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }

  const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


// reduce(): The reduce() function applies a given function to the elements of an array and reduces them to a single value. The function takes an accumulator and the current element as arguments.

Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    for(let i=0; i<this.length; i++) {
      if(accumulator !== undefined) {
        accumulator = callback(accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  }

  const numbers1 = [1, 2, 3, 4, 5];
const sum = numbers1.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


  
//   filter(): The filter() function creates a new array with all elements that pass the test implemented by the provided function.

Array.prototype.filter = function(callback) {
    const newArray = [];
    for(let i=0; i<this.length; i++) {
      if(callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }

  const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

  
//   sort(): The sort() function sorts the elements of an array in place and returns the sorted array.

Array.prototype.sort = function(callback) {
    const compare = callback !== undefined ? callback : (a, b) => String(a).localeCompare(b);
    for(let i=0; i<this.length-1; i++) {
      for(let j=i+1; j<this.length; j++) {
        if(compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }
    return this;
  }

  const strings = ['apple', 'banana', 'cherry', 'date'];
  const sortedStrings = strings.sort();
  console.log(sortedStrings); // ['apple', 'banana', 'cherry', 'date']
  
// map vs reduce:
  
// In JavaScript, map and reduce are two methods that can be used to manipulate arrays.
// map is a higher-order function that applies a provided function to each element of an array and returns a new array with the results. It doesn't modify the original array.

const words = ['hello', 'world', 'how', 'are', 'you'];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords); // Output: ['HELLO', 'WORLD', 'HOW', 'ARE', 'YOU']


// reduce is another higher-order function that allows you to "reduce" an array to a single value. It takes two arguments: a callback function and an initial value. The callback function takes two arguments, an accumulator and a current value, and returns a new accumulator value. The initial value is the starting value of the accumulator.

  // map vs foreach
  // forEach, on the other hand, is a method that executes a provided function once for each element in an array. It does not create a new array, but it allows you to perform some action for each element of the array.

const numbers_1 = [1, 2, 3, 4, 5];
numbers_1.forEach(num => console.log(num));
// Output: 1
// Output: 2
// Output: 3
// Output: 4
// Output: 5


  // map vs filter
  // filter, on the other hand, is a method that creates a new array with all elements that pass the test implemented by the provided function. The original array remains unchanged. The filter function returns a new array that contains only the elements that meet the condition specified in the callback function.

  const numbers_2 = [1, 2, 3, 4, 5];
  const evenNumbers_3 = numbers_2.filter(num => num % 2 === 0);
  console.log(evenNumbers_3); // Output: [2, 4]
  
