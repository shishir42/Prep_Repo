// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  var sumRootToLeaf = function(root) {
    // Define a helper function to traverse the binary tree and calculate the sum of root-to-leaf binary numbers
    var traverse = function(node, num) {
      if (!node) return 0;
  
      // Calculate the binary number by shifting the previous value to the left and adding the current node's value
      num = (num << 1) + node.val;
  
      // If it's a leaf node, return the binary number
      if (!node.left && !node.right) {
        return num;
      }
  
      // Otherwise, recursively traverse the left and right subtrees
      return traverse(node.left, num) + traverse(node.right, num);
    };
  
    // Start the traversal from the root with an initial binary number of 0
    return traverse(root, 0);
  };

  
// Create the nodes for the binary tree
const root = new TreeNode(1);
const node2 = new TreeNode(0);
const node3 = new TreeNode(1);
const node4 = new TreeNode(0);
const node5 = new TreeNode(1);

// Connect the nodes to form the binary tree
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(sumRootToLeaf(root)); // Output: 6 (binary numbers: 100, 101, 110)
