// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Input: nums = [3,2,3]
// Output: 3

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Topics: Array;Hash Table;Divide and Conquer;Sorting;Counting

const majorityElement = (nums) => {
    let count = 0;
    let candidate = null;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        count += (nums[i] === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log(majorityElement([3,2,3]));

const majorityElement_hashmap = (nums) =>{
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        if(map.get(nums[i])> nums.length/2){
            return nums[i];
        }
    }

    return null;
}

console.log(majorityElement_hashmap([3,2,3]));

function majorityElement_DivideAndConquer(nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
  }
  
  function majorityElementRec(nums, left, right) {
    // Base case: the subarray has only one element
    if (left === right) {
      return nums[left];
    }
    
    // Divide the array into two subarrays
    const mid = Math.floor((left + right) / 2);
    const leftMajority = majorityElementRec(nums, left, mid);
    const rightMajority = majorityElementRec(nums, mid + 1, right);
    
    // Combine the results from the two subarrays
    if (leftMajority === rightMajority) {
      // If the majority element is the same in both subarrays, then it is the overall majority element
      return leftMajority;
    } else {
      // Otherwise, we need to count the frequency of each candidate majority element
      const leftCount = countOccurrence(nums, left, right, leftMajority);
      const rightCount = countOccurrence(nums, left, right, rightMajority);
      
      // Return the candidate with the highest frequency
      if (leftCount > rightCount) {
        return leftMajority;
      } else {
        return rightMajority;
      }
    }
  }
  
  function countOccurrence(nums, left, right, target) {
    let count = 0;
    
    for (let i = left; i <= right; i++) {
      if (nums[i] === target) {
        count++;
      }
    }
    
    return count;
  }
  