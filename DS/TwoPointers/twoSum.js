// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]


// Input: nums = [3,2,4], target = 6 //Need to check
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (arr, num) => {
    if (arr.length === 0) {
        return [];
    }

    let i = 0, j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] > num) {
            j--;
        } else if (arr[i] + arr[j] < num) {
            i++;
        } else {
            return [i, j];
        }
    }
}

const twoSum_1 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

const twoSum_hashmap = (nums, target) =>{
    const complementMap = new Map();
    for(let i=0; i< nums.length; i++){
        const complement = target - nums[i];
        if(complementMap.has(complement)){
            return[complementMap.get(complement), i];
        }else{
            complementMap.set(nums[i], i);
        }
    }

    return [-1,-1];
}

console.log(twoSum_hashmap([3, 2, 4], 6));
console.log(twoSum_hashmap([2,7,11,15], 9));

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum_1([3, 2, 4], 6));
console.log(twoSum([3,3],6));

//https://hellokoding.com/two-pointers-tutorial-and-example/
