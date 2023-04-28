// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Topics: Array;Hash Table

// Brute Force O(n^2)
const twoSum_bruteForce = (nums, target) =>{
    for(let i=0; i<nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] ===  target){
                return [i, j];
            }
        }
    }

    return null;
}

console.log(twoSum_bruteForce([2,7,11,15], 9));

// Sorting O(n log n)
const twoSum_Sorting = (nums, target) =>{
    const sorted = [...nums].sort((a,b)=>a-b);
    let left = 0;
    let right = sorted.length - 1;
    while(left < right){
        const sum = sorted[left] + sorted[right];
        if(sum === target){
            const indexLeft = nums.indexOf(sorted[left]);
            const indexRight = nums.indexOf(sorted[right]);
            return[indexLeft, indexRight];
        }else if(sum < target){
            left++
        }else{
            right--;
        }
    }

    return null;
}

console.log(twoSum_Sorting([2,7,11,15], 9));

//Using map O(n)
const twoSum_usingMap=(nums, target)=>{
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      
      map.set(nums[i], i);
    }
    
    return null;
}

console.log(twoSum_usingMap([2,7,11,15], 9));
