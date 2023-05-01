// How do you check whether a string contains a substring
// There are 3 possible ways to check whether a string contains a substring or not,

// Using includes: ES6 provided String.prototype.includes method to test a string contains a substring
var mainString = "hello",
  subString = "hell";
mainString.includes(subString);

// Using indexOf: In an ES5 or older environment, you can use String.prototype.indexOf which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.
var mainString = "hello",
  subString = "hell";
mainString.indexOf(subString) !== -1;

// Using RegEx: The advanced solution is using Regular expression's test method(RegExp.test), which allows for testing for against regular expressions
var mainString = "hello",
  regex = /hell/;
regex.test(mainString);

// What happens if we add two arrays
// If you add two arrays together, it will convert them both to strings and concatenate them. For example, the result of adding arrays would be as below,

console.log(["a"] + ["b"]); // "ab"
console.log([] + []); // ""
console.log(![] + []); // "false", because ![] returns false.
