class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MinHeap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value) {
        const newNode = new Node(value);
        this.size++;

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                this.bubbleUp(newNode);
                return;
            }

            if (!current.right) {
                current.right = newNode;
                this.bubbleUp(newNode);
                return;
            }

            queue.push(current.left);
            queue.push(current.right);
        }
    }

    poll() {
        if (!this.root) {
            return null;
        }

        const min = this.root.value;

        if (this.size === 1) {
            this.root = null;
            this.size--;
            return min;
        }

        const lastNode = this.removeLast();
        this.root.value = lastNode.value;
        this.size--;
        this.bubbleDown(this.root);

        return min;
    }

    peek() {
        if (!this.root) {
            return null;
        }

        return this.root.value;
    }

    bubbleUp(node) {
        while (node !== this.root && node.value < node.parent.value) {
            this.swap(node, node.parent);
            node = node.parent;
        }
    }

    bubbleDown(node) {
        while (node.left) {
            let smallestChild = node.left;

            if (node.right && node.right.value < smallestChild.value) {
                smallestChild = node.right;
            }

            if (node.value > smallestChild.value) {
                this.swap(node, smallestChild);
                node = smallestChild;
            } else {
                break;
            }
        }
    }

    swap(node1, node2) {
        const temp = node1.value;
        node1.value = node2.value;
        node2.value = temp;
    }

    removeLast() {
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current.right && !current.right.right) {
                const lastNode = current.right;
                current.right = null;
                return lastNode;
            }

            if (current.right) {
                queue.push(current.right);
            }

            if (current.left && !current.left.right) {
                const lastNode = current.left;
                current.left = null;
                return lastNode;
            }

            if (current.left) {
                queue.push(current.left);
            }
        }
    }
}

const heap = new MinHeap();
const input = [5, 2, 9, 1, 5, 6];

// add all the elements to the heap
for (let i = 0; i < input.length; i++) {
    heap.add(input[i]);
}

// remove elements from the heap in ascending order
const output = [];
while (heap.peek() !== null) {
    output.push(heap.poll());
}

console.log(output); // [1, 2, 5, 5, 6, 9]
