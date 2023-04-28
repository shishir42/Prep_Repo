// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Topics: Array;Two Pointers
// Do not return anything, modify nums in-place instead.

const moveZeroes = (nums) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 13]));

const moveZeroUsingTwoPointers = (nums) => {
    let left = 0;
    let right = 0;

    // Move all the non-zero elements to the front
    while (right < nums.length) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }

    return nums;
}

console.log(moveZeroUsingTwoPointers([0, 1, 0, 3, 13]));

function moveZeroesUsingTemp(nums) {
    let left = 0;
    let right = 0;
    
    while (right < nums.length) {
      if (nums[right] !== 0) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
      }
      right++;
    }

    return nums;
  }
  
  console.log(moveZeroesUsingTemp([0, 1, 0, 3, 13]));