// Topics: Tree;Depth-First Search;Breadth-First Search;Binary Tree

//  Invert Binary Tree

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

//check diagram for invert tree

const invertTree = (root) =>{
    if(root === null){
        return null;
    }

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}