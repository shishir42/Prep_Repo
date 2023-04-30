// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  /**
   * @param {TreeNode} root
   * @param {number} low
   * @param {number} high
   * @return {number}
   */
  var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
  
    // If the current node is within the range, add its value to the sum
    const sum = (root.val >= low && root.val <= high) ? root.val : 0;
  
    // Recursively compute the sum of the values in the left and right subtrees
    return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  };

// Create the nodes for the binary search tree
const root = new TreeNode(10);
const node2 = new TreeNode(5);
const node3 = new TreeNode(15);
const node4 = new TreeNode(3);
const node5 = new TreeNode(7);
const node6 = new TreeNode(18);

// Connect the nodes to form the binary search tree
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

// Compute the sum of the values between 7 and 15 in the binary search tree
console.log(rangeSumBST(root, 7, 15)); // Output: 32 (values: 7 + 10 + 15)
  