// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

const findPivotIndex = (nums) =>{
    const sum = nums.reduce((acc, curr)=> acc+curr, 0);
    let leftSum = 0;
    for(let i=0; i<nums.length; i++){
        const rightSum = sum-nums[i]-leftSum;
        if(leftSum === rightSum){
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}

console.log(findPivotIndex([1,7,3,6,5,6]));

const findPivotIndexUsingPivot = (nums) =>{
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    for (let i = 0; i < n; i++) {
        const leftSum = prefixSum[i];
        const rightSum = prefixSum[n] - prefixSum[i + 1];
        if (leftSum === rightSum) {
          return i;
        }
      }
      return -1;
}

console.log(findPivotIndexUsingPivot([1,7,3,6,5,6]));


// 1. Initialize a prefix sum array prefixSum of size n + 1, where n is the length of the input array nums. The extra +1 element is to accommodate for the 0th index in the prefix sum array, which will always be 0.
// 2. Initialize the first element of the prefix sum array prefixSum[0] to 0.
// 3. Iterate over the input array nums and for each element at index i, calculate the prefix sum as prefixSum[i + 1] = prefixSum[i] + nums[i]. This means that prefixSum[i + 1] will store the sum of elements from index 0 to index i in the input array.
// 4. Iterate over the input array nums again and for each element at index i, calculate the sum of the elements to its left as leftSum = prefixSum[i] and the sum of the elements to its right as rightSum = prefixSum[n] - prefixSum[i + 1], where n is the length of the input array. This means that rightSum will store the sum of elements from index i + 1 to index n - 1 in the input array.
// 5. If leftSum is equal to rightSum, return the current index i as the pivot index.
// 6. If no pivot index is found after iterating over the entire array, return -1.