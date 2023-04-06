export default class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    add(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    poll() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }

        return max;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }

        return this.heap[0];
    }

    bubbleUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);

        if (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    bubbleDown(index) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let max = index;

        if (left < this.heap.length && this.heap[left] > this.heap[max]) {
            max = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[max]) {
            max = right;
        }

        if (max !== index) {
            this.swap(index, max);
            this.bubbleDown(max);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

const heap = new MaxHeap();
const input = [5, 2, 9, 1, 5, 6];

// add all the elements to the heap
for (let i = 0; i < input.length; i++) {
    heap.add(input[i]);
}

// remove elements from the heap in descending order
const output = [];
while (heap.peek() !== null) {
    output.push(heap.poll());
}

console.log(output); // [9, 6, 5, 5, 2, 1]


// In this example, we define a MaxHeap class with methods for adding elements to the heap (add()), removing the maximum element from the heap (poll()), and getting the maximum element without removing it (peek()). The bubbleUp() and bubbleDown() methods are used to maintain the heap property after adding or removing an element.

// To use the MaxHeap class, we create a new instance and add all the elements of the input array to the heap using the add() method. Then, we remove elements from the heap in descending order using the poll() method and add them to an output array. Finally, the output array is logged to the console, which should contain the input array sorted in descending order.

// Note that this implementation assumes that the input values are numbers. If you want to use the MaxHeap class with other types of values, you'll need to modify the comparison functions in the bubbleUp() and bubbleDown() methods accordingly.