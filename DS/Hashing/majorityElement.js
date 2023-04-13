// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Input: nums = [3,2,3]
// Output: [3]

// Input: nums = [1,2]
// Output: [1,2]

// Follow up: Could you solve the problem in linear time and in O(1) space?

//nums = [1, 3, 2, 5, 1, 3, 1, 5, 1]
// frequency > n/3

const findElementsGreaterThanNOverThree = (arr) =>{
    const n = arr.length;
    const threshold = Math.floor(n/3);
    const map = {};
    const result = [];

    for(let i=0; i<n;i++){
        if(map[arr[i]] !== undefined){
            map[arr[i]]++;
        }else{
            map[arr[i]] = 1;
        }

        if(map[arr[i]] > threshold && result.indexOf(arr[i]) === -1){
            result.push(arr[i]);
        }
    }

    return result;
} 

console.log(findElementsGreaterThanNOverThree([1, 3, 2, 5, 1, 3, 1, 5, 1]));