//  Number of Good Pairs
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j] && i < j){
                count++;
            }
        }
    }
    return count;
};

const nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));

function numIdenticalPairs_(nums) {
    let count = 0;
    const freqMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      if (freqMap.has(nums[i])) {
        count += freqMap.get(nums[i]);
        freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
      } else {
        freqMap.set(nums[i], 1);
      }
    }
    
    return count;
  }
  