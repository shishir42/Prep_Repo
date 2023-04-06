// Return 3 Kth Largest element
import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

const find3LargestElement = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        minHeap.add(arr[i]);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }

    while (minHeap.size() > 0) {
        console.log(minHeap.peek() + "\n");
        minHeap.poll();
    }
}

find3LargestElement([7, 10, 4, 3, 20, 15], 3);