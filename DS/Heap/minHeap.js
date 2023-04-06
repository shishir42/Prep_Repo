export default class MinHeap {
    constructor() {
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    poll() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            const parentIndex = this.getParentIndex(index);
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
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

// Arr[(i -1) / 2] returns its parent node.
// Arr[(2 * i) + 1] returns its left child node.
// Arr[(2 * i) + 2] returns its right child node.


// This implementation uses an array to represent the binary tree structure of the heap. The MinHeap class has methods for adding and removing items from the heap, as well as for getting the minimum element (peek()).

// The heapifyUp() method is used to maintain the heap property after adding an item to the heap. This method starts at the last index of the heap and swaps the item with its parent if the parent is greater than the item, continuing up the tree until the item is in its proper place.

// The heapifyDown() method is used to maintain the heap property after removing an item from the heap. This method starts at the root of the heap and swaps the root with its smallest child if the child is smaller than the root, continuing down the tree until the root is in its proper place.

// The other methods in the MinHeap class are helper methods for accessing and manipulating items in the heap.

// To use this MinHeap class, you can create a new instance and add items to it using the add() method, remove items using the poll() method, and get the minimum element