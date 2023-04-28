// Maximum Depth of Binary Tree

// Topics: Tree;Depth-First Search;Breadth-First Search;Binary Tree

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]
// Output: 2

const maxDepth = (root) =>{
    if(!root){
        return 0;
    }

    const leftDepth = maxDepth(root.left);  // calculate depth of left subtree
    const rightDept = maxDepth(root.right); // calculate depth of right subtree

    return Math.max(leftDepth, rightDept) + 1; //return the maximum depth of the two subtrees plus 1 for the current node
}

const root = {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null
      },
      right: {
        val: 7,
        left: null,
        right: null
      }
    }
  };
  
  const maxTreeDepth = maxDepth(root);
  console.log(maxTreeDepth); // outputs: 3
  