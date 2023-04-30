// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Topics: Array;Hash Table;Math;Binary Search;Bit Manipulation;Sorting

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums) =>{
    const n = nums.length; 
    let sum = (n * (n+1))/2;

    // subtract each number in the array from the expected sum
    for(let i=0; i<nums.length; i++){
        sum -= nums[i];
    }

    return sum;
}

console.log(missingNumber([0,1]));

const missingNumber_bitmanipulation = (nums) =>{
    let missing = nums.length;

    for(let i=0; i< nums.length; i++){
        missing ^= i ^ nums[i];
    }

    return missing;
}

console.log(missingNumber_bitmanipulation([0,1]));