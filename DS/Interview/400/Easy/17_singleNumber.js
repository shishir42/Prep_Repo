// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Input: nums = [2,2,1]
// Output: 1

// Input: nums = [4,1,2,1,2]
// Output: 4

// Topics: Array;Bit Manipulation
const singleNumber = (nums) =>{
    let result = 0;
    for(let i=0; i<nums.length; i++){
        console.log(result + " ^ " + nums[i])
        result ^= nums[i]; //XOR operation
        console.log("results ***** ", result);
    }

    return result;
}

function singleNumberUsingBruteForce(nums) {
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          count++;
        }
      }
      
      if (count === 1) {
        return nums[i];
      }
    }
    
    return -1; // No single number found
  }
  
  console.log(singleNumber([4,1,2,1,2]));