function sumOddLengthSubarrays(arr) {
    let sum = 0;
    for (let i = 1; i <= arr.length; i += 2) {
      for (let j = 0; j <= arr.length - i; j++) {
        for (let k = j; k < j + i; k++) {
          sum += arr[k];
        }
      }
    }
    return sum;
  }

  
  function sumOddLengthSubarrays_O(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let leftCount = i + 1;
      let rightCount = arr.length - i;
      let leftOdd = Math.floor((leftCount + 1) / 2);
      let rightOdd = Math.floor((rightCount + 1) / 2);
      let leftEven = Math.floor(leftCount / 2);
      let rightEven = Math.floor(rightCount / 2);
      sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
    }
    return sum;
  }

console.log(sumOddLengthSubarrays_O([1,4,2,5,3]));


//   Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
  