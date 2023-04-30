// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input: nums = [3,4,5,2]
// Output: 12 
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

function maxProduct(nums) {
    let max1 = 0;
    let max2 = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= max1) {
        max2 = max1;
        max1 = nums[i];
      } else if (nums[i] > max2) {
        max2 = nums[i];
      }
    }
    
    return (max1 - 1) * (max2 - 1);
  }

  console.log(maxProduct([3,4,5,2]));