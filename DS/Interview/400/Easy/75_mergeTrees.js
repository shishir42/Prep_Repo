// Merge Two Binary Trees

// You are given two binary trees root1 and root2.
// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
// Return the merged tree.
// Note: The merging process must start from the root nodes of both trees.

// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var mergeTrees = function(t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;
    
    const val = t1.val + t2.val;
    const left = mergeTrees(t1.left, t2.left);
    const right = mergeTrees(t1.right, t2.right);
    
    return new TreeNode(val, left, right);
};

const t1 = new TreeNode(1, new TreeNode(3, new TreeNode(5), null), new TreeNode(2));
const t2 = new TreeNode(2, new TreeNode(1, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(7)));
const mergedTree = mergeTrees(t1, t2);

// Output the merged tree
console.log(mergedTree);