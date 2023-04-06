class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    //Root --> LeftSubtree ---> Right Subtree (DFS)
    preorder(node = this.root) {
        if (!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    //LeftSubtree-->Root--> Right Subtree (DFS)
    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    //LeftSubtree-->Right Subtree --->Root  (DFS)
    postorder(node = this.root) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    levelOrderTraversal(node = this.root) {

    }

    deleteNode(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) return node;

        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (!node.left && !node.right) {
                node = null;
            } else if (!node.left) {
                node = node.right;
            } else if (!node.right) {
                node = node.left;
            } else {
                const minNode = this._findMinNode(node.right);
                node.value = minNode.value;
                node.right = this._deleteNode(node.right, minNode.value);
            }
        }

        return node;
    }

    _findMinNode(node) {
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class BinaryTree_1 {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const current = queue.dequeue();
            if (!current.left) {
                current.left = node;
                return;
            }
            if (!current.right) {
                current.right = node;
                return;
            }
            queue.enqueue(current.left);
            queue.enqueue(current.right);
        }
    }

    levelOrderTraversal() {
        if (!this.root) {
            return [];
        }
        const result = [];
        const queue = new Queue();
        queue.enqueue(this.root);
        while (!queue.isEmpty()) {
            const level = [];
            const levelSize = queue.size;
            for (let i = 0; i < levelSize; i++) {
                const current = queue.dequeue();
                level.push(current.value);
                if (current.left) {
                    queue.enqueue(current.left);
                }
                if (current.right) {
                    queue.enqueue(current.right);
                }
            }
            result.push(level);
        }
        return result;
    }

    search(root, target) {
        if (!root) {
            return null;
        }

        const queue = [];
        queue.push(root);

        while (queue.length > 0) {
            const current = queue.shift();
            if (current.value === target) {
                return current;
            }
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }

        return null;
    }

    deleteNode(root, key) {
        if (!root) {
            return null;
        }

        let nodeToDelete = null;
        let deepestNode = null;

        const queue = [root];

        while (queue.length) {
            const current = queue.shift();

            if (current.value === key) {
                nodeToDelete = current;
            }

            if (current.left) {
                queue.push(current.left);
                deepestNode = current.left;
            }

            if (current.right) {
                queue.push(current.right);
                deepestNode = current.right;
            }
        }

        if (!nodeToDelete) {
            return root;
        }

        nodeToDelete.value = deepestNode.value;

        queue.push(root);

        while (queue.length) {
            const current = queue.shift();

            if (current.left === deepestNode) {
                current.left = null;
                break;
            }

            if (current.right === deepestNode) {
                current.right = null;
                break;
            }

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }
        }

        return root;
    }


}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.front.value;
        if (this.front === this.rear) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        this.size--;
        return value;
    }
}

const binaryTree = new BinaryTree();

binaryTree.addNode(8);
binaryTree.addNode(3);
binaryTree.addNode(10);
binaryTree.addNode(1);
binaryTree.addNode(6);
binaryTree.addNode(14);
binaryTree.addNode(4);
binaryTree.addNode(7);
binaryTree.addNode(13);

console.log('Inorder Traversal:');
binaryTree.inorder();

console.log('Preorder Traversal:');
binaryTree.preorder();

console.log('Postorder Traversal:');
binaryTree.postorder();

console.log('Before Deletion:');
binaryTree.inorder();

binaryTree.deleteNode(6);

console.log('After Deletion:');
binaryTree.inorder();


// In this implementation, we have three classes: Node, Queue, and BinaryTree.

// Node represents a node in the binary tree, with a value and a next pointer to the next node in the linked list.

// Queue is a simple queue implementation using a linked list, with methods for enqueue, dequeue, and isEmpty.

// BinaryTree represents the binary tree itself, with methods for insert and levelOrderTraversal. The insert method inserts a new node into the binary tree using a level order traversal, and the levelOrderTraversal method returns an array of arrays, where each inner array represents a level of the binary tree.

// To use this implementation, you can create a new BinaryTree object, insert values into the binary tree using the insert method, and then call the levelOrderTraversal method to get the level order traversal of the binary tree. For example:

const binaryTree1 = new BinaryTree_1();
binaryTree1.insert(1);
binaryTree1.insert(2);
binaryTree1.insert(3);
binaryTree1.insert(4);
binaryTree1.insert(5);
binaryTree1.insert(6);
binaryTree1.insert(7);

const result = binaryTree1.levelOrderTraversal();
console.log(result.join('-->')); // [[1], [2, 3], [4, 5, 6, 7]]

class BinaryTreeUsingArray {
    constructor() {
        this.tree = [];
    }

    // Method to insert a new node into the tree
    insert(value) {
        // If the tree is empty, add the value to the root
        if (this.tree.length === 0) {
            this.tree[0] = value;
            return;
        }

        let i = 0;
        while (true) {
            // If the value is less than the current node, go left
            if (value < this.tree[i]) {
                // If there is no left child, insert the value
                if (!this.tree[2 * i + 1]) {
                    this.tree[2 * i + 1] = value;
                    return;
                }
                i = 2 * i + 1;
            }
            // If the value is greater than or equal to the current node, go right
            else {
                // If there is no right child, insert the value
                if (!this.tree[2 * i + 2]) {
                    this.tree[2 * i + 2] = value;
                    return;
                }
                i = 2 * i + 2;
            }
        }
    }

    // Method to perform an in-order traversal of the tree
    inOrderTraversal() {
        const traverse = (i) => {
            if (this.tree[i] !== undefined) {
                traverse(2 * i + 1);
                console.log(this.tree[i]);
                traverse(2 * i + 2);
            }
        };
        traverse(0);
    }

    // Method to perform a pre-order traversal of the tree
    preOrderTraversal() {
        const traverse = (i) => {
            if (this.tree[i] !== undefined) {
                console.log(this.tree[i]);
                traverse(2 * i + 1);
                traverse(2 * i + 2);
            }
        };
        traverse(0);
    }

    // Method to perform a post-order traversal of the tree
    postOrderTraversal() {
        const traverse = (i) => {
            if (this.tree[i] !== undefined) {
                traverse(2 * i + 1);
                traverse(2 * i + 2);
                console.log(this.tree[i]);
            }
        };
        traverse(0);
    }

    levelOrderTraversal() {
        if (this.tree.length === 0) {
          return;
        }
    
        const queue = [0];
        while (queue.length > 0) {
          const i = queue.shift();
          console.log(this.tree[i]);
          if (this.tree[2*i+1] !== undefined) {
            queue.push(2*i+1);
          }
          if (this.tree[2*i+2] !== undefined) {
            queue.push(2*i+2);
          }
        }
      }

    // Method to search for a value in the tree
    search(value) {
        let i = 0;
        while (i < this.tree.length) {
            if (value === this.tree[i]) {
                return true;
            }
            else if (value < this.tree[i]) {
                i = 2 * i + 1;
            }
            else {
                i = 2 * i + 2;
            }
        }
        return false;
    }

    // Method to remove a value from the tree
    remove(value) {
        let i = 0;
        while (i < this.tree.length) {
            if (value === this.tree[i]) {
                // If the node has no children, just remove it
                if (!this.tree[2 * i + 1] && !this.tree[2 * i + 2]) {
                    this.tree.splice(i, 1);
                    return;
                }
                // If the node has one child, replace it with the child
                else if (!this.tree[2 * i + 1] || !this.tree[2 * i + 2]) {
                    let child = this.tree[2 * i + 1] || this.tree[2 * i + 2];
                    this.tree[i] = child;
                    this.tree.splice(2 * i + 1, 1);
                    this.tree.splice(2 * i + 1, 0, undefined);
                    return;
                }
                // If the node has two children, find the smallest value in the right subtree
                else {
                    let j = 2 * i + 2;
                    while (this.tree[2 * j + 1]) {
                        j = 2 * j + 1;
                    }
                    this.tree[i] = this.tree[j];
                    this.tree.splice(j, 1);
                    this.tree.splice(j, 0, undefined);
                    return;
                }
            }
            else if (value < this.tree[i]) {
                i = 2 * i + 1;
            }
            else {
                i = 2 * i + 2;
            }
        }
    }
}

const tree = new BinaryTreeUsingArray();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.levelOrderTraversal();
