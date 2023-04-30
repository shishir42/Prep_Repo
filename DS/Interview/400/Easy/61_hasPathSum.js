function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  /**
   * @param {TreeNode} root
   * @param {number} targetSum
   * @return {boolean}
   */
  var hasPathSum = function(root, targetSum) {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right) {
      return targetSum === root.val;
    }
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
  };
  

  const root = new TreeNode(5,
    new TreeNode(4,
      new TreeNode(11,
        new TreeNode(7),
        new TreeNode(2)
      ),
      null
    ),
    new TreeNode(8,
      new TreeNode(13),
      new TreeNode(4,
        null,
        new TreeNode(1)
      )
    )
  );
  
  console.log(hasPathSum(root, 22)); // Output: true
  