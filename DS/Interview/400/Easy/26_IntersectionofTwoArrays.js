// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const intersection_set = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let result = [];
    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(intersection_set([1, 2, 2, 1], [2, 2]));
console.log(intersection_set([4, 9, 5], [9, 4, 9, 8, 4]));

const intersection_map = (nums1, nums2) => {
    const map = new Map();
    const result = [];

    // Store the frequency of each element in nums1
    for (const num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Check the frequency of each element in nums2
    for (const num of nums2) {
        const count = map.get(num);
        if (count > 0) {
            result.push(num);
            map.set(num, count - 1);
        }
    }

    return result;
}

console.log(intersection_map([1, 2, 2, 1], [2, 2]));
console.log(intersection_map([4, 9, 5], [9, 4, 9, 8, 4]));

const intersection_binarySearch = (nums1, nums2) => {
    const result = [];
    for (const num1 of nums1) {
        let left = 0, right = nums2.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums2[mid] === num1) {
                result.push(num1);
                break;
            } else if (nums2[mid] < num1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return result;
}

console.log(intersection_binarySearch([1, 2, 2, 1], [2, 2]));
console.log(intersection_binarySearch([4, 9, 5], [9, 4, 9, 8, 4]));
