// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

// Topics: Array;Hash Table;Sorting

const containsDuplicate = (nums) =>{
    if(!nums || nums.length === 0) return false;

    const map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i])){
            return true;
        }else{
            map.set(nums[i], 1);
        }
    }

    return false;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));