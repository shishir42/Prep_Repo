//  Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

function findShortestSubarray(nums) {
    const freq = {};
    let degree = 0;
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      freq[num] = freq[num] ? freq[num] + 1 : 1;
      degree = Math.max(degree, freq[num]);
    }
  
    let minLength = nums.length;
    let left = 0;
    const freq2 = {};
  
    for (let right = 0; right < nums.length; right++) {
      const num = nums[right];
      freq2[num] = freq2[num] ? freq2[num] + 1 : 1;
  
      while (freq2[num] === degree) {
        minLength = Math.min(minLength, right - left + 1);
        const leftNum = nums[left++];
        freq2[leftNum]--;
      }
    }
  
    return minLength;
  }
  


  console.log(findShortestSubarray([1, 2, 2, 3, 1])); // Output: 2
console.log(findShortestSubarray([1, 2, 2, 3, 1, 4, 2])); // Output: 6
console.log(findShortestSubarray([1, 2, 3, 4, 5])); // Output: 1