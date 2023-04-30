// Binary Tree Paths
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
  
    function dfs(node, path) {
      if (!node) {
        return;
      }
      path += node.val;
      if (!node.left && !node.right) {
        paths.push(path);
      } else {
        path += '->';
        dfs(node.left, path);
        dfs(node.right, path);
      }
    }
  
    dfs(root, '');
  
    return paths;
  };
  
  function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  const root = new TreeNode(1,
    new TreeNode(2,
      null,
      new TreeNode(5)
    ),
    new TreeNode(3)
  );
  
  console.log(binaryTreePaths(root));
  // Output: ["1->2->5", "1->3"]
  