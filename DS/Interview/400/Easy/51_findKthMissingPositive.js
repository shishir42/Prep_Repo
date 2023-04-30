// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

const findKthMissingPositive = (nums, k) => {
    let i = 0;
    let j = 1;
    let missingCount = 0;
    while (missingCount < k) {
        if (i < nums.length && nums[i] === j) {
            i++;
        } else {
            missingCount++;
        }

        if (missingCount === k) {
            return j;
        }

        j++;
    }
    return nums[nums.length - 1] + k - missingCount;
}

const nums = [2, 3, 4, 7, 11];
const k = 5;
console.log(findKthMissingPositive(nums, k)); // Output: 9