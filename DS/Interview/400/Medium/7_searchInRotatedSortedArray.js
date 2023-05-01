// Search in Rotated Sorted Array

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Topics: Array;Binary Search

function search(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      }
      
      if (nums[left] <= nums[mid]) { // left side is sorted
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1; // search left side
        } else {
          left = mid + 1; // search right side
        }
      } else { // right side is sorted
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1; // search right side
        } else {
          right = mid - 1; // search left side
        }
      }
    }
    
    return -1; // target not found
  }
  
console.log(search([4,5,6,7,0,1,2], 0));