import MaxHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/maxHeap.js";

const maxHeap = new MaxHeap();

const findKthSmallest = (arr, k) => {

    for (let i = 0; i < arr.length; i++) {
        maxHeap.add(arr[i]);
        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }

    return maxHeap.peek();
}

console.log(findKthSmallest([7, 10, 4, 3, 20, 15], 3));
