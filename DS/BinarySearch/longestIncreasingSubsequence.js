//n Log(n)
// dp 
// 0 1 0 3 2 3 - length (0 1 2 3) - 4

//Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// [2, 5, 7, 101]

function binarySearch(tails, len, num) {
    let left = 0, right = len;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
  
  function findLIS(nums) {
    const n = nums.length;
    // const tails = new Array(n).fill(0);
    const tails = [];
    let len = 0;
  
    for (let num of nums) {
      const index = binarySearch(tails, len, num);
      tails[index] = num;
      if (index === len) {
        len++;
      }
    }
    
    console.log(tails);
    return tails.length;
  }
  
  console.log(findLIS([1, 7,8, 4, 5, 6, -1, 9]));
  console.log(findLIS([10,9,2,5,3,7,101,18]));
  console.log(findLIS([7,7,7,7,7,7,7]));