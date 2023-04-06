// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

const nextGreaterElement = (nums1, nums2) => {
    let result = [];
    for (let num of nums1) {
        let flag = -1;
        for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                flag = nums2[i];
                break;
            }
        }
        result.push(flag);
    }
    return result;
}

const nextGreaterElement1 = (nums1, nums2) => {
    const map = new Map(); // A map to store the next greater element for each number in nums2
    const stack = []; // keeps track of elements in num2

    // Loop through nums2
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num); // Set the next greater element for each element in the stack
        }
        stack.push(num); // Push the current number onto the stack
    }

    // Loop through nums1 and build the result array
    const result = [];
    for (const num of nums1) {
        result.push(map.get(num) ?? -1); // Get the next greater element from the map or return -1
    }
    return result;
}
// console.log(nextGreaterElement1([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement1([2,4], [1, 2, 3, 4]));
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));