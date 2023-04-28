// Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Topics: Array;Binary Search

//Input: nums = [1,3,5,6], target = 5
// Output: 2 - here target value is present at 2nd index

// Input: nums = [1,3,5,6], target = 2
// Output: 1 - here target valur is not present, so inserted the value such that nums[] should sort and return the index.

const searchInsert = (nums, target) => {
    if (nums.length === 0 || target < nums[0]) {
        return 0;
    }

    if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    // Use binary search to find the index of the target element
    // Use binary search to find the index of the target element
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // If the target is not found, return the index where it should be inserted
    return left;
}

console.log(searchInsert([1,3,5,6], 5));