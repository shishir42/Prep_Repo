/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const result = [];
    
    // Check if the root node is null
    if (root === null) {
      return result;
    }
    
    const queue = [root];
    
    // Loop while the queue is not empty
    while (queue.length > 0) {
      const levelSize = queue.length;
      let levelSum = 0;
      
      // Loop through the nodes in the current level
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        levelSum += currentNode.val;
        
        // Add the child nodes to the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
      
      // Calculate the average of the current level and add it to the result array
      const levelAverage = levelSum / levelSize;
      result.push(levelAverage);
    }
    
    return result;
  };

  
// Example binary tree:
//        3
//       / \
//      9   20
//          / \
//         15  7

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(averageOfLevels(root)); // Output: [3, 14.5, 11]
