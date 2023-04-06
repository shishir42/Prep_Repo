// A priority queue is a data structure that allows you to insert elements with a priority and retrieve the element with the highest priority. In JavaScript, you can implement a priority queue using a min-heap.
// A min-heap is a binary tree where the root node is the smallest element in the tree, and each parent node is smaller than its children. By storing elements in a min-heap, we can retrieve the element with the highest priority by simply extracting the root node.
// To implement a priority queue in JavaScript, you can define a class with the following methods:
// constructor(): This method initializes an empty priority queue.
// insert(value, priority): This method inserts a new element into the priority queue with a specified priority. You can do this by adding an object with the value and priority properties to the heap.
// extract(): This method removes and returns the element with the highest priority from the priority queue. You can do this by extracting the root node from the heap and returning its value.
//Here is an implementation of a priority queue using a min-heap in JavaScript:

class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    insert(value, priority) {
      this.heap.push({ value, priority });
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    extract() {
      const min = this.heap[0].value;
      this.heap[0] = this.heap.pop();
      let index = 0;
      while (true) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let smallestIndex = index;
        if (leftIndex < this.heap.length && this.heap[leftIndex].priority < this.heap[smallestIndex].priority) {
          smallestIndex = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[smallestIndex].priority) {
          smallestIndex = rightIndex;
        }
        if (smallestIndex === index) break;
        [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
        index = smallestIndex;
      }
      return min;
    }
  }

  
  const pq = new PriorityQueue();
pq.insert('task1', 3);
pq.insert('task2', 1);
pq.insert('task3', 2);
console.log(pq.extract()); // output: 'task2'
console.log(pq.extract()); // output: 'task3'
console.log(pq.extract()); // output: 'task1'

// O(log n) 

// In this example, we insert three tasks into the priority queue with different priorities. When we call the extract method, it retrieves the tasks in order of their priority, with the highest priority task being returned first.


// Shorter version for limited usage
class PriorityQueueUsingBuiltIn {
    constructor() {
      this.heap = [];
    }
  
    insert(value, priority) {
      this.heap.push({ value, priority });
      this.heap.sort((a, b) => a.priority - b.priority);
    }
  
    extract() {
      return this.heap.shift().value;
    }
  }

  //O(n log n)
  