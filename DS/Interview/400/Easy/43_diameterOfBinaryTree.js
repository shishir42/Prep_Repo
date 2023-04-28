// Diameter of Binary Tree

// Topics: Tree;Depth-First Search;Binary Tree
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

function diameterOfBinaryTree(root) {
    let diameter = 0;
    
    function depth(node) {
      if (node === null) {
        return 0;
      }
      
      const leftDepth = depth(node.left);
      const rightDepth = depth(node.right);
      
      diameter = Math.max(diameter, leftDepth + rightDepth);
      
      return 1 + Math.max(leftDepth, rightDepth);
    }
    
    depth(root);
    
    return diameter;
  }

  
  class TreeNode {
    constructor(val, left=null, right=null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(diameterOfBinaryTree(root)); // Output: 3
  