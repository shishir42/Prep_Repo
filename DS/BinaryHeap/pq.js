class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value, priority) {
        this.heap.push({ value, priority }); // Add a new object to the heap with value and priority properties.
        let index = this.heap.length - 1; // Set the index to the last element of the heap.
        while (index > 0) { // While the index is greater than zero (i.e., we haven't reached the root node).
            let parentIndex = Math.floor((index - 1) / 2); // Calculate the index of the parent node.
            if (this.heap[parentIndex].priority <= this.heap[index].priority) break; // If the parent node has a lower priority than the current node, break out of the loop.
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]; // Otherwise, swap the current node with its parent node.
            index = parentIndex; // Set the index to the new parent node index.
        }
    }

    extract() {
        const min = this.heap[0].value; // Store the value of the root node (which has the highest priority).
        this.heap[0] = this.heap.pop(); // Replace the root node with the last element of the heap, and remove the last element from the heap.
        let index = 0; // Set the index to the root node.
        while (true) { // While there are child nodes to compare with.
            let leftIndex = 2 * index + 1; // Calculate the index of the left child node.
            let rightIndex = 2 * index + 2; // Calculate the index of the right child node.
            let smallestIndex = index; // Assume that the current node is the smallest.
            if (leftIndex < this.heap.length && this.heap[leftIndex].priority < this.heap[smallestIndex].priority) { // If the left child node exists and has a lower priority than the current node.
                smallestIndex = leftIndex; // Set the smallest index to the left child node index.
            }
            if (rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[smallestIndex].priority) { // If the right child node exists and has a lower priority than the current node or left child.
                smallestIndex = rightIndex; // Set the smallest index to the right child node index.
            }
            if (smallestIndex === index) break; // If the current node is the smallest, break out of the loop.
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]]; // Otherwise, swap the current node with the smallest child node.
            index = smallestIndex; // Set the index to the new smallest child node index.
        }
        return min; // Return the value of the root node.
    }
}
  
//In the insert method, we add a new object to the heap array with the specified value and priority properties.We then use a while loop to maintain the min - heap property by swapping the new element with its parent element if its priority is lower than the parent's priority. We continue to swap the element with its parent until its priority is no longer lower than its parent's priority, or we reach the root node.
//In the extract method, we store the value of the root node(which has the highest priority) in a variable.We then replace the root node with the last element of the heap and remove the last element from the heap