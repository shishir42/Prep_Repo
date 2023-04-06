import MinHeap from "/Users/shishirroy/Downloads/A/Question/DS/Heap/minHeap.js";

const minHeap = new MinHeap();

// arr[] : [1, 1, 1, 3, 2, 2, 4]
// O/p: [1, 1, 1, 2, 2, 3, 4]


const frequencySort = (nums) => {
    let freq = {};

     // Count frequency of each number
     for(let i=0; i<nums.length; i++){
        freq[nums[i]] = (freq[[nums[i]]] || 0) + 1;
     }

     // Sort the array based on frequency
     nums.sort((a, b) => {
        if (freq[a] !== freq[b]) {
          return freq[b] - freq[a];
        } else {
          return a - b;
        }
      });

      return nums;
}

console.log(frequencySort([1, 1, 2, 2, 2, 3, 4, 4, 5]));

const frequencySortUsingHeap = (nums) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    for (let i = 0; i < map.size; i++) {
        // minHeap.add({frequency: arr[i]})
    }

    while(minHeap.size > 0){
        let freq = minHeap.top().first();
        let element = minHeap.top().second;

        for(let i=0; i<=freq; i++){
            console.log(element[i])
        }

        minHeap.poll();
    }
}