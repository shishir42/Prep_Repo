class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // method to create a new node in the tree
    createNode(value) {
        return new Node(value);
    }

    // method to insert a new node in the tree
    insert(value) {
        let newNode = this.createNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // method to search for a value in the tree
    search(value) {
        return this.searchNode(this.root, value);
    }

    searchNode(node, value) {
        if (node === null) {
            return false;
        } else if (value < node.value) {
            return this.searchNode(node.left, value);
        } else if (value > node.value) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    // method to traverse the tree in order
    inOrder() {
        let result = [];

        const traverse = node => {
            if (node === null) {
                return;
            }

            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    levelOrderTraversal() {
        const result = [];
        const queue = [];
    
        if (!this.root) {
          return result;
        }
    
        queue.push(this.root);
    
        while (queue.length > 0) {
          const nodeCount = queue.length;
          const currentLevel = [];
    
          for (let i = 0; i < nodeCount; i++) {
            const currentNode = queue.shift();
            currentLevel.push(currentNode.value);
    
            if (currentNode.left) {
              queue.push(currentNode.left);
            }
    
            if (currentNode.right) {
              queue.push(currentNode.right);
            }
          }
    
          result.push(currentLevel);
        }
    
        return result;
      }

    // method to delete a node from the tree
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) {
            return null;
        } else if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            // case 1: leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // case 2: node with one child
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // case 3: node with two children
            let minRight = this.findMinNode(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
            return node;
        }
    }

    // method to find the minimum node in a subtree
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log(bst.search(4)); // Node { data: 4, left: Node { data: 1, left: null, right: null }, right: Node { data: 5, left: Node { data: 3, left: null, right: [Node] }, right: Node { data: 7, left: Node { data: 6, left: null, right: null }, right: [Node] } } }
console.log(bst.levelOrderTraversal().join("--->"));

bst.delete(4);

console.log(bst.search(4)); // null
