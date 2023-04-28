// Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

const uniqueOccurrences =(arr) =>{
    const countMap = {};

    for(let i=0; i<arr.length; i++){
        if(countMap[arr[i]]){
            countMap[arr[i]]++;
        }else{
            countMap[arr[i]] = 1;
        }
    }

    // Build a set of the frequency counts
    const countSet = new Set(Object.values(countMap));
    
    // If the size of the count set is the same as the size of the count map, then each count is unique
    return countSet.size === Object.keys(countMap).length;
}

const arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr)); // Output: true