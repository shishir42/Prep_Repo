function inorderTraversal(root) {
    const result = [];
  
    const traverse = (node) => {
      if (node !== null) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
      }
    };
  
    traverse(root);
  
    return result;
  }

  function levelOrderTraversal(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const level = [];
      const size = queue.length;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.val);
  
        if (node.left !== null) {
          queue.push(node.left);
        }
  
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
  
      result.push(level);
    }
  
    return result;
  }
  

  class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left || null;
      this.right = right || null;
    }
  }
  
  // create a binary tree with values [1, null, 2, 3]
  const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
  
  // perform an inorder traversal on the binary tree
  const result1 = inorderTraversal(root);
  const result2 = levelOrderTraversal(root);
  
  // print the resulting array
  console.log(result1);
  console.log(result2);
  

  