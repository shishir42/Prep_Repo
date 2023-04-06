import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

// arr[] : [1, 1, 1, 3, 2, 2, 4]
// k=2

// explanation 
// 1 - 3 (f)
// 3 - 1 (f)
// 2 - 2 (f)
// 4 - 1 (f)

//O/p: 
//1, 2

const topKFrequentNumbers = (arr, k) => {
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let i = 0; i < map.size; i++) {
        // minHeap.add(arr[i]);
        // minHeap.add({frequency: arr[i]})
        if (minHeap.size() > k) {
          minHeap.poll();
        }
      }
    
      while (minHeap.size() > 0) {
        console.log(minHeap.peek() + "\n");
        //print the value with associated key
        minHeap.poll();
      }

    console.log(map);
}

topKFrequentNumbers([1, 1, 1, 3, 2, 2, 4], 2);