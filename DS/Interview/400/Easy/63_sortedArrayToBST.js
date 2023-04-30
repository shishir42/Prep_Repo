// Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

function TreeNode(val, left, right){
    this.val = val;
    this.left = left;
    this.right = right;
}

function sortedArrayToBST(nums){
    if(!nums.length){
        return null;
    }

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}

const nums = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(nums);

console.log(root);

// TreeNode {
//     val: 0,
//     left: TreeNode { val: -3, left: TreeNode { val: -10, left: null, right: null }, right: null },
//     right: TreeNode { val: 9, left: TreeNode { val: 5, left: null, right: null }, right: null }
//   }
  