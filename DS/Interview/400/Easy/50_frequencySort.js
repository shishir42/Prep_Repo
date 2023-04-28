// Sort Array by Increasing Frequency

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Topics: Array;Hash Table;Sorting

const frequencySort = (nums) =>{
    const freqMap = {};
    for(let num of nums){
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    nums.sort((a,b)=>{
        if(freqMap[a] === freqMap[b]){
            // If two numbers have the same frequency, sort them in decreasing order
            return b-a;
        }else{
            // Otherwise, sort them by increasing frequency
            return freqMap[a]-freqMap[b];
        }
    });

    return nums;
}

console.log(frequencySort([1,1,2,2,2,3]));