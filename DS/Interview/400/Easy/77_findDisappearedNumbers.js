// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function findDisappearedNumbers(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        result.push(i + 1);
      }
    }
  
    return result;
  }
  
  console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));