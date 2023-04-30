// Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1, nums2) =>{
    let freq= {};
    for(let num of nums1){
        freq[num] =  (freq[num] || 0) + 1;
    }

    let result = [];
    for(let num of nums2){
        if(freq[num]){
            result.push(num);
            freq[num]--;
        }
    }

    return result;
}

console.log(intersect([1,2,2,1], [2,2]));