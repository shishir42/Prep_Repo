// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

function createTargetArray(nums, index) {
    const target = [];
    
    for (let i = 0; i < nums.length; i++) {
      target.splice(index[i], 0, nums[i]);
    }
    
    return target;
  }

  const nums = [0,1,2,3,4];
const index = [0,1,2,2,1];

const target = createTargetArray(nums, index);

console.log(target);