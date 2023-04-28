// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Topics: Array;Two Pointers;Sorting

//Using two pointers
const merge = (nums1, m, nums2, n) =>{
    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));

