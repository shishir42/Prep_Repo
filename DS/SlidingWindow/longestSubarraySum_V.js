// Input: ‘N’ = 5,  ‘K’ = 4, ‘NUMS’ = [ 1, 2, 1, 0, 1 ]
// Output: 4
// There are two subarrays with sum = 4, [1, 2, 1] and [2, 1, 0, 1]. 
// Hence the length of the longest subarray with sum = 4 is 4.

// Input:
// arr = {7,1,6,0}, k = 7
// Output: Length of the longest subarray with sum K is 3
// Explanation:
//  1 + 6 + 0 = 7, it is the longest subarray with sum 7 and length 3.

// Input: 
// arr = {2,3,5,1,9}, k = 10
// Output: Length of the longest subarray with sum K is 3
// Explanation: 2 + 3 + 5 = 10, it is the longest subarray with sum 10 and length 3


//Sliding window variable size

const longestSubarraySum = (arr, k) => {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0, max = 0;
    let i = 0, j = 0;
    const size = arr.length;

    while (j < size) {
        sum += arr[j];
        if (sum < k) {
            j++;
        } else if (sum === k) {
            max = Math.max(max, j-i+1);
            j++;
        } else if (sum > k) {
            while (sum > k) {
                // sum -= arr[i];
                // for handling negative numbers
                if (arr[i] < 0) {
                    sum = sum + arr[i];
                } else {
                    sum = sum - arr[i];
                }
                i++;
            }
            j++;
        }
    }

    return max;
}

function subarraySum(nums, k) {
    let count = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return count;
}


console.log(longestSubarraySum([1, 1, 1], 2));
console.log(longestSubarraySum([7, 1, 6, 0], 7));
console.log(longestSubarraySum([1, 2, 3], 3));

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([7, 1, 6, 0], 7));
console.log(subarraySum([1, 2, 3], 3));