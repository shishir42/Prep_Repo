// Symmetric Tree
// Topics: Tree;Depth-First Search;Breadth-First Search;Binary Tree

class TreeNode{
    constructor(val=null, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isMirror(node1, node2){
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;

    return(node1.val === node2.val && 
        isMirror(node1.left, node2.right) && 
        isMirror(node1.right, node2.left));
}

function isSymmetric(root){
    if(!root) return false;

    return isMirror(root.left, root.right);
}

const tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
console.log(isSymmetric(tree1)); // true

const tree2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
console.log(isSymmetric(tree2)); // false
