// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  /**
   * @param {TreeNode} root
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  var isCousins = function(root, x, y) {
    // Define a helper function to traverse the binary tree and collect the parent and depth information of each node
    var traverse = function(node, parent, depth, target) {
      if (!node) return;
  
      // If the current node is one of the targets, record its parent and depth
      if (node.val === target) {
        return {
          parent: parent,
          depth: depth
        };
      }
  
      // Otherwise, recursively traverse the left and right subtrees
      return traverse(node.left, node, depth + 1, target) || traverse(node.right, node, depth + 1, target);
    };
  
    // Traverse the binary tree to obtain the parent and depth information of each target node
    const infoX = traverse(root, null, 0, x);
    const infoY = traverse(root, null, 0, y);
  
    // Return true if the nodes have different parents and the same depth
    return infoX.parent !== infoY.parent && infoX.depth === infoY.depth;
  };

// Create the nodes for the binary tree
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

// Connect the nodes to form the binary tree
root.left = node2;
root.right = node3;
node2.right = node4;
node3.right = node5;

// Check if nodes 4 and 5 are cousins
console.log(isCousins(root, 4, 5)); // Output: true
  