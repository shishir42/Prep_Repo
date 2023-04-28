// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Topics: Array;Hash Table;Sliding Window

function containsNearbyDuplicate(nums, k) {
    const set = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      // Check if the current element is already in the set
      if (set.has(nums[i])) {
        return true;
      }
  
      // Add the current element to the set
      set.add(nums[i]);
  
      // Remove the earliest element if the size of the set exceeds k
      if (set.size > k) {
        set.delete(nums[i - k]);
      }
    }
  
    return false;
  }

  
  console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // Output: true
  console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // Output: true
  console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // Output: false
  