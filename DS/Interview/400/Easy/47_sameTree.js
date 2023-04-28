// Topics: Tree;Depth-First Search;Breadth-First Search;Binary Tree

const isSameTree = (p,q) =>{
    // Base case: both trees are empty or both nodes are null
    if(!p && !q){
        return true;
    }

    // If only one tree is empty or one node is null
    if(!p || !q){
        return false;
    }

    // If the node values are not equal
    if(p.val !== q.val){
        return false;
    }

    // Recursively check left and right subtrees
    return isSameTree(p.left, p.left) && isSameTree(p.right, p.right);
}

const tree1 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  };
  
  const tree2 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  };
  
  const tree3 = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: { val: 4, left: null, right: null } }
  };
  
  console.log(isSameTree(tree1, tree2)); // true
  console.log(isSameTree(tree1, tree3)); // false
  