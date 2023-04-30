// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max1 = Number.NEGATIVE_INFINITY;
    let max2 = Number.NEGATIVE_INFINITY;
    let max3 = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2 && nums[i] < max1) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] > max3 && nums[i] < max2) {
            max3 = nums[i];
        }
    }

    return max3 !== Number.NEGATIVE_INFINITY ? max3 : max1;
};

const nums = [3, 2, 1];
console.log(thirdMax(nums)); // Output: 1

