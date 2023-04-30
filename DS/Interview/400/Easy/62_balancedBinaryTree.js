function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  var isBalanced = function(root) {
    if (!root) {
      return true;
    }
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
  };
  
  /**
   * @param {TreeNode} node
   * @return {number}
   */
  function getHeight(node) {
    if (!node) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
  
  const root = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
      new TreeNode(15),
      new TreeNode(7)
    )
  );
  
  console.log(isBalanced(root)); // Output: true
  