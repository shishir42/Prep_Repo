// Sort a k sorted array or nearest sorted array 

import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

const sortedKArray = (arr, k) => {
    for(let i=0; i<arr.length; i++){
        minHeap.add(arr[i]);
        if (minHeap.size() > k) {
            console.log(minHeap.poll() + " ");
        }
    }

    while (minHeap.size() > 0) {
        console.log(minHeap.peek() + " ");
        minHeap.poll();
    }
}

sortedKArray([6, 5, 3, 2, 8, 10, 9], 3);