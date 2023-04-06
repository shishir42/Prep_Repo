let arr = [1, 5, 3, 9, 2];
let max = arr[0]; // set the first element as the initial maximum value
for (let i = 1; i < arr.length; i++) { // loop through the rest of the array
  if (arr[i] > max) { // compare each element with the current maximum value
    max = arr[i]; // update the maximum value if a larger element is found
  }
}
console.log(max); // output: 9


let arr1 = [1, 5, 3, 9, 2];
let max1 = arr.reduce((a, b) => {
  return Math.max(a, b);
});
console.log(max1); // output: 9

let arr2 = [1, 5, 3, 9, 2];
let max2 = Math.max(...arr); // spread operator is used to pass each element of array as an argument to Math.max
console.log(max2); // output: 9

