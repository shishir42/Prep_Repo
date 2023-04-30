class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
    }
  
    pop() {
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        const min = this.heap[0];
        this.heap[0] = last;
        this.bubbleDown(0);
        return min;
      }
      return last;
    }
  
    peek() {
      return this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown(index) {
      while (index < this.heap.length) {
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let smallestIndex = index;
        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallestIndex]) {
          smallestIndex = leftIndex;
        }
        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallestIndex]) {
          smallestIndex = rightIndex;
        }
        if (smallestIndex !== index) {
          this.swap(smallestIndex, index);
          index = smallestIndex;
        } else {
          break;
        }
      }
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  }
  
  class KthLargest {
    constructor(k, nums) {
      this.minHeap = new MinHeap();
      this.k = k;
      for (let num of nums) {
        this.add(num);
      }
    }
  
    add(val) {
      this.minHeap.push(val);
      if (this.minHeap.size() > this.k) {
        this.minHeap.pop();
      }
      return this.minHeap.peek();
    }
  }
  
  // Example usage
  const k = 3;
  const nums = [4, 5, 8, 2];
  const kthLargest = new KthLargest(k, nums);
  console.log(kthLargest.add(3)); // Output: 4
  console.log(kthLargest.add(1)); // Output: 4
  console.log(kthLargest.add(6)); // Output: 5
  console.log(kthLargest.add(7)); // Output: 6
  console.log(kthLargest.add(0)); // Output: 6
  